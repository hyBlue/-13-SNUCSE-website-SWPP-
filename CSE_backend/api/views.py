
from api.models import *
from api.serializers import *
from rest_framework import generics
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response

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
@api_view(['GET', 'POST'])
def NoticeSearch(request, word):
    """
    코드 조각을 모두 보여주거나 새 코드 조각을 만듭니다.
    """
    if request.method == 'GET':
        notices = Notice.objects.all()
        word = word
        result = []
        for i in notices:
            if word in i.title or word in i.content :
                result.append(i)
        serializer = NoticeSerializer(result, many=True)
        return Response(serializer.data)



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

class NewsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

class ProfessorList(generics.ListCreateAPIView):
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer

    def perform_create(self, serializer) :
        serializer.save()

class ProfessorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer

class TagList(generics.ListCreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

    def perform_create(self, serializer) :
        serializer.save()
