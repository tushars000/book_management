# Generated by Django 3.2.13 on 2022-04-11 17:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bookManagement', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
