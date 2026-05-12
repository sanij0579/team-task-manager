from django.utils.timezone import now

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

from .models import Task

from .serializers import (
    TaskSerializer
)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_task(request):

    serializer = TaskSerializer(
        data=request.data
    )

    if serializer.is_valid():

        task = serializer.save()

        return Response(
            TaskSerializer(task).data,
            status=201
        )

    return Response(
        serializer.errors,
        status=400
    )


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def my_tasks(request):

    tasks = Task.objects.all().order_by(
        '-id'
    )

    serializer = TaskSerializer(
        tasks,
        many=True
    )

    return Response(
        serializer.data
    )


@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def update_status(
    request,
    pk
):

    try:

        task = Task.objects.get(
            id=pk
        )

    except Task.DoesNotExist:

        return Response({
            "error":
            "Task not found"
        })

    status = request.data.get(
        'status'
    )

    task.status = status

    task.save()

    return Response({
        "message":
        "Task updated"
    })