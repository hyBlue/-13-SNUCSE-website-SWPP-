from rest_framework import serializers
from api.models import Notice

class NoticeSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Notice
        fields = ('id', 'title', 'content', 'created_at', 'author', 'image', 'attached')
