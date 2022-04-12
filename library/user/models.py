from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractUser
from django.contrib.auth.hashers import make_password
# Create your models here.

class AdminUserManager(BaseUserManager):
    def create_user(self,email, password=None,**extra_fields):
        if not email:
            raise ValueError('Users must have an email address')
        user = self.model(
            email=self.normalize_email(email),
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, password,**other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)
        other_fields.setdefault('is_admin', True)
        user = self.create_user(
            email,
            password,
            **other_fields
        )
        return user


class AdminUser(AbstractUser):
    username = None
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['password']

    objects = AdminUserManager()

    class Meta:
        verbose_name = 'Admin'
        verbose_name_plural = 'Admins'

    def __str__(self) -> str:
        return super().__str__()

    def create_admin(self,data):
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        email = data.get('email')
        password = data.get('password')
        AdminUser.objects.create_user(email = email,password=password,first_name= first_name,last_name=last_name,is_staff=True,is_active=True)
