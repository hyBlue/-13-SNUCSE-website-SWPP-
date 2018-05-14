from rest_framework import serializers
from api.models import *
from django.contrib.auth.models import User
class NoticeSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Notice
        fields = ('id',
         'user',
         'title',
         'content',
         'created_at',
         'author',
         'image',
         'attached',
         'view',
         'tag_set')
class UserSerializer(serializers.ModelSerializer):
    notices = serializers.PrimaryKeyRelatedField(many = True, queryset = Notice.objects.all())

    class Meta:
        model = User
        fields = ('id', 'username', 'notices')
class NewsSerializer(serializers.ModelSerializer) :
    class Meta :
        model = News
        fields = ('id', 'title',
         'content',
         'created_at',
         'image', )
class ProfessorSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Professor
        fields = ('id', 'name',
         'contact',
         'education' ,
         'research' ,
         'biography',
         'photo',)
class TagSerializer(serializers.ModelSerializer) :
    notices = serializers.PrimaryKeyRelatedField(many = True, queryset = Notice.objects.all())
    class Meta :
        model = Tag
        fields = ('id', 'name', 'notices')
