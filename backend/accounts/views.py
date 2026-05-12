from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .serializers import RegisterSerializer

@api_view(['POST'])
def register_view(request):

    serializer = RegisterSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response({
            "message": "User created successfully"
        })

    return Response(serializer.errors)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def profile_view(request):

    return Response({
        "id": request.user.id,
        "email": request.user.email,
        "username": request.user.username,
        "role": request.user.role
    })