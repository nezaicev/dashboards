import json
from django.contrib.auth import authenticate, login, logout
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication

from apps.users.models import CustomUser


# Create your views here.

# permission_classes = [IsAuthenticated]  Для Аутинтифицированных пользователей

class LogoutView(APIView):
    authentication_classes = [SessionAuthentication]

    def get(self, request, format=None):
        logout(request)
        content = {
            'id': request.user.id,
            'user': str(request.user),
            'auth': request.user.is_authenticated,
            'superuser': request.user.is_superuser
        }
        return Response(content)


class SignupView(APIView):
    authentication_classes = [SessionAuthentication]

    def post(self, request):
        data = json.loads(request.data['body'])
        if CustomUser.objects.filter(email=data['username']).exists():
            content = {
                'user': str(request.user),
                'auth': request.user.is_authenticated,
                'message': 'Пользователь c адресом {} уже существует'.format(data['username'])
            }
            return Response(content)
        else:
            user = CustomUser.objects.create_user(email=data['username'], password=data['password'],
                                                  last_name=data['lastName'], first_name=data['firstName'])
            if user:
                content = {
                    'user': str(request.user),
                    'auth': request.user.is_authenticated,
                    'message': 'ok'
                }
                return Response(content)
            else:
                content = {
                    'user': '',
                    'auth': request.user.is_authenticated,
                    'message': 'Пользователь не может быть создан'
                }
                return Response(content)


class AuthView(APIView):
    authentication_classes = [SessionAuthentication]

    def get(self, request):
        content = {
            'id': request.user.id,
            'name': '{} {}'.format(request.user.first_name, request.user.last_name) if request.user.is_authenticated else None,
            'user': str(request.user),
            'auth': request.user.is_authenticated,
            'superuser': request.user.is_superuser
        }
        return Response(content)

    def post(self, request):
        data = json.loads(request.data['body'])
        user = authenticate(request, username=data['username'], password=data['password'])
        if user is not None:
            login(request, user)
            content = {
                'user': str(request.user),
                'auth': request.user.is_authenticated,
                'userExistence': True
            }
            return Response(content)

        else:
            content = {
                'user': str(request.user),
                'auth': request.user.is_authenticated,
                'userExistence': CustomUser.objects.filter(email=data['username']).exists()
            }
            return Response(content)
