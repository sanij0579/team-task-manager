from django.urls import path

from .views import (
    create_task,
    my_tasks,
    update_status
)

urlpatterns = [

    path(
        'create/',
        create_task
    ),

    path(
        'my-tasks/',
        my_tasks
    ),

    path(
        'update-status/<int:pk>/',
        update_status
    ),
]