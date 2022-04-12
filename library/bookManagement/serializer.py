from rest_framework import serializers
from .models import Book

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ["book_id","name","isbn","author","category"]
    @property
    def data(self):
        data = super().data
        print(data)
        return data