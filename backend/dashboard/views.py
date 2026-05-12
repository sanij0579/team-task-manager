from datetime import date

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes

from tasks.models import Task


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def dashboard_stats(request):

    user = request.user

    # Admin → all tasks
    if user.role == 'admin':
        tasks = Task.objects.all()

    # Member → assigned tasks only
    else:
        tasks = Task.objects.filter(
            assigned_to=user
        )

    total_tasks = tasks.count()

    todo_tasks = tasks.filter(
        status='todo'
    ).count()

    in_progress_tasks = tasks.filter(
        status='in_progress'
    ).count()

    done_tasks = tasks.filter(
        status='done'
    ).count()

    overdue_tasks = tasks.filter(
        due_date__lt=date.today()
    ).exclude(
        status='done'
    ).count()

    return Response({
        "total_tasks": total_tasks,

        "todo_tasks": todo_tasks,

        "in_progress_tasks": in_progress_tasks,

        "done_tasks": done_tasks,

        "overdue_tasks": overdue_tasks
    })