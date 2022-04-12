from django.db import models

# Create your models here.

class Book(models.Model):
    book_id = models.AutoField(primary_key=True)
    name=models.CharField(max_length=30)
    isbn=models.PositiveIntegerField()
    author=models.CharField(max_length=40)
    category=models.CharField(max_length=100,)

    class Meta:
        verbose_name = 'Book'
        verbose_name_plural = 'Books'

    def __str__(self):
        return str(self.name)
