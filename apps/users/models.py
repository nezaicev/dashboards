from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from .manager import CustomAccountManager
from django.db import models


class CustomUser(AbstractBaseUser, PermissionsMixin):
    objects = CustomAccountManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['password']
    is_staff = models.BooleanField(default=True)
    is_active = models.BooleanField(default=True)
    email = models.EmailField('email', unique=True)
    first_name = models.CharField(verbose_name='Имя', max_length=100)
    last_name = models.CharField(verbose_name='Фамилия', max_length=100)

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
        permissions = ()

    def get_short_name(self):
        return self.email

    def natural_key(self):
        return self.email

    def __str__(self):
        return self.email