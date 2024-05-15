from django.urls import path
from apps.users.views import AuthView, LogoutView, SignupView
urlpatterns = [
    path('api/auth', AuthView.as_view()),
    path('api/logout', LogoutView.as_view()),
    path('api/signup', SignupView.as_view())

]
