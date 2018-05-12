# Generated by Django 2.0.5 on 2018-05-11 17:55

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20180511_1920'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='professor',
            name='email',
        ),
        migrations.RemoveField(
            model_name='professor',
            name='fax',
        ),
        migrations.RemoveField(
            model_name='professor',
            name='location',
        ),
        migrations.RemoveField(
            model_name='professor',
            name='phone',
        ),
        migrations.RemoveField(
            model_name='professor',
            name='url',
        ),
        migrations.AddField(
            model_name='professor',
            name='biography',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='professor',
            name='contact',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='professor',
            name='photo',
            field=models.ImageField(null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='news',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='news', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='professor',
            name='education',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='professor',
            name='research',
            field=models.TextField(blank=True),
        ),
    ]
