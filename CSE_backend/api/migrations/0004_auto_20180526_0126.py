# Generated by Django 2.0.5 on 2018-05-25 16:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20180526_0111'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='notice',
            name='attached',
        ),
        migrations.AddField(
            model_name='notice',
            name='attached',
            field=models.FileField(blank=True, upload_to=''),
        ),
    ]