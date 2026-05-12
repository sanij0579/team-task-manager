from django.contrib.auth import get_user_model

from rest_framework.decorators import (
    api_view,
    permission_classes
)

from rest_framework.permissions import (
    IsAuthenticated
)

from rest_framework.response import (
    Response
)

from .models import Project

from .serializers import (
    ProjectSerializer
)

from .permissions import (
    IsAdminUserRole
)

from tasks.models import Task

from tasks.serializers import (
    TaskSerializer
)


User = get_user_model()


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_projects(request):

    projects = Project.objects.all().order_by(
        '-id'
    )

    serializer = ProjectSerializer(
        projects,
        many=True
    )

    return Response(
        serializer.data
    )


@api_view(['POST'])
@permission_classes([
    IsAuthenticated,
    IsAdminUserRole
])
def create_project(request):

    serializer = ProjectSerializer(
        data=request.data
    )

    if serializer.is_valid():

        project = serializer.save(
            created_by=request.user
        )

        project.members.add(
            request.user
        )

        return Response(
            ProjectSerializer(
                project
            ).data,
            status=201
        )

    return Response(
        serializer.errors,
        status=400
    )


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def project_details(
    request,
    pk
):

    try:

        project = Project.objects.get(
            id=pk
        )

    except Project.DoesNotExist:

        return Response({
            "error":
            "Project not found"
        })

    tasks = Task.objects.filter(
        project_id=pk
    ).order_by('-id')

    return Response({

        "project":
        ProjectSerializer(
            project
        ).data,

        "tasks":
        TaskSerializer(
            tasks,
            many=True
        ).data
    })


@api_view(['POST'])
@permission_classes([
    IsAuthenticated,
    IsAdminUserRole
])
def add_member(
    request,
    pk
):

    try:

        project = Project.objects.get(
            id=pk
        )

    except Project.DoesNotExist:

        return Response({
            "error":
            "Project not found"
        })

    user_id = request.data.get(
        "user_id"
    )

    try:

        user = User.objects.get(
            id=user_id
        )

    except User.DoesNotExist:

        return Response({
            "error":
            "User not found"
        })

    project.members.add(user)

    return Response({
        "message":
        "Member added successfully"
    })