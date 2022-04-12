"""library URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from bookManagement.views import BookView, StudentBookView
from user.views import AdminView
from rest_framework.authtoken import views
from rest_framework import routers as merouters

router = merouters.SimpleRouter(trailing_slash=True)

router.register('user', AdminView, 'admin_login')
router.register('books', BookView, 'books')
router.register('student_books', StudentBookView, 'books')
urlpatterns = [
    path('admin/', admin.site.urls),
]

urlpatterns.extend(router.urls)