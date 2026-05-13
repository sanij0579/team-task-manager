from django.urls import path
from .views import register_view, profile_view, MyTokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/', register_view),
    path('login/', MyTokenObtainPairView.as_view()),  # ✅ custom view
    path('refresh/', TokenRefreshView.as_view()),
    path('profile/', profile_view),
]