# Generated by Django 2.0.5 on 2018-05-28 08:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_job_staff'),
    ]

    operations = [
        migrations.AddField(
            model_name='staff',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='staff/'),
        ),
    ]