# Generated by Django 3.2.13 on 2022-04-11 17:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bookManagement', '0002_alter_book_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='book',
            old_name='id',
            new_name='book_id',
        ),
    ]
