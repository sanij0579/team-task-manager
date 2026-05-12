from django.urls import path
from .views import register_view, profile_view
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

urlpatterns = [
    path('register/', register_view),

    path('login/', TokenObtainPairView.as_view()),

    path('refresh/', TokenRefreshView.as_view()),

    path('profile/', profile_view),
]