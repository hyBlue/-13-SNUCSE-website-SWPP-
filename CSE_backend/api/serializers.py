from rest_framework import serializers
from api.models import *
from django.contrib.auth.models import User
class NoticeSerializer(serializers.ModelSerializer) :
    tag_set =  serializers.StringRelatedField(many = True)
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
         'tag_set',
         )
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
    education =  serializers.StringRelatedField(many = True)
    research =  serializers.StringRelatedField(many = True)
    biography =  serializers.StringRelatedField(many = True)
    lab = serializers.StringRelatedField(many = True)

    class Meta :
        model = Professor
        fields = ('id',
        'name' ,
        'position',
        'lab',
        'fax' ,
        'email' ,
        'website',
        'education' ,
        'research' ,
        'biography' ,
        'image',
        )

class LabSerializer(serializers.ModelSerializer) :
    professors =  serializers.StringRelatedField(many = True)

    class Meta :
        model = Lab
        fields =('id',
        'name',
        'professors',
        'location',
        'phone',
        'abbreviation')

    depth = 1
class EmeritusSerializer(serializers.ModelSerializer) :
    education =  serializers.StringRelatedField(many = True)
    class Meta :
        model = Emeritus
        fields = ('id',
        'name' ,
        'role',
        'education',
        'term_of_service' ,
        'image')

class StaffSerializer(serializers.ModelSerializer) :
    jobs =  serializers.StringRelatedField(many = True)
    class Meta :
        model = Staff
        fields = ('id',
         'name',
         'role',
         'office',
         'phone',
         'email',
         'jobs',
         'image'
        )

class TagSerializer(serializers.ModelSerializer) :
    notices = serializers.StringRelatedField(many = True)
    # notices = serializers.PrimaryKeyRelatedField(many = True, queryset = Notice.objects.all())
    class Meta :
        model = Tag
        fields = ('id', 'name', 'notices', )
