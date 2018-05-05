from api.models import *
from api.serializers import *
from rest_framework import generics
from django.contrib.auth.models import User


class NoticeList(generics.ListCreateAPIView):
    queryset = Notice.objects.all()
    serializer_class = NoticeSerializer

    def perform_create(self, serializer) :
        serializer.save(author = self.request.user.username)

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class NewsList(generics.ListCreateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

    def perform_create(self, serializer) :
        serializer.save()

class ProfessorList(generics.ListCreateAPIView):
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer

    def perform_create(self, serializer) :
        serializer.save()
