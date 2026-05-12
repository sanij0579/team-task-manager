from django.urls import path

from .views import (
    list_projects,
    create_project,
    project_details,
    add_member
)

urlpatterns = [

    path(
        '',
        list_projects
    ),

    path(
        'create/',
        create_project
    ),

    path(
        '<int:pk>/',
        project_details
    ),

    path(
        '<int:pk>/add-member/',
        add_member
    ),
]