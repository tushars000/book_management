# Generated by Django 3.2.13 on 2022-04-11 17:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bookManagement', '0004_auto_20220411_1746'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='id',
        ),
        migrations.AddField(
            model_name='book',
            name='book_id',
            field=models.AutoField(default=0, primary_key=True, serialize=False),
            preserve_default=False,
        ),
    ]
