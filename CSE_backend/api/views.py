
from api.models import *
from api.serializers import *
from rest_framework import generics
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404

class NoticeList(generics.ListCreateAPIView):
    queryset = Notice.objects.all()
    serializer_class = NoticeSerializer

    def perform_create(self, serializer) :
        serializer.save(author = self.request.user.username)

class NoticeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Notice.objects.all()
    serializer_class = NoticeSerializer

    def get_object(self):
        queryset = self.get_queryset()
        filter = {}

        filter[self.lookup_field] = self.kwargs[self.lookup_field]

        obj = get_object_or_404(queryset, **filter)
        self.check_object_permissions(self.request, obj)

        obj.view += 1
        obj.save()

        return obj

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
class UserDetail(generics.RetrieveUpdateDestroyAPIView):
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
