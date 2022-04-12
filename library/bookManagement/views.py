from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet 
from .models import Book
from .serializer import BookSerializer
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.decorators import permission_classes

# Create your views here.

class BookView(ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    permission_classes = [IsAuthenticated]

    
class StudentBookView(ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    http_method_names = ['get']