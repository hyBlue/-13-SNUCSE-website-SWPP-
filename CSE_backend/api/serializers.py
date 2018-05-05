from rest_framework import serializers
from api.models import *
from django.contrib.auth.models import User
class NoticeSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Notice
        fields = ('id', 'user', 'title', 'content', 'created_at', 'author', 'image', 'attached')
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')
class NewsSerializer(serializers.ModelSerializer) :
    class Meta :
        model = News
        fields = ('title',
        'content',
        'created_at', 
        'image' )
class ProfessorSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Professor
        fields = ('name',
        'location' ,
        'url' ,
        'email',
        'phone',
        'fax' ,
        'research' ,
        'education' )
