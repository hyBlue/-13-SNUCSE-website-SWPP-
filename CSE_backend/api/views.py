
from api.models import *
from api.serializers import *
from rest_framework import generics
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.files import File
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import MultiPartParser
from rest_framework.parsers import JSONParser

from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

class NoticeList(generics.ListCreateAPIView):
    queryset = Notice.objects.all()
    serializer_class = NoticeSerializer
    # parser_classes = (JSONParser,)

    @csrf_exempt
    def perform_create(self, serializer) :
        serializer.save(author = self.request.user.username)

    # @csrf_exempt
    # def post(self, request, format = None) :
    #     print(request.data)
    #     print()
    #     serializer = NoticeSerializer(data = request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CustomAuthToken( ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
        })


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

class LabList(generics.ListCreateAPIView):
    queryset = Lab.objects.all()
    serializer_class = LabSerializer

    def perform_create(self, serializer) :
        serializer.save()

class EmeritusList(generics.ListCreateAPIView):
    queryset = Emeritus.objects.all()
    serializer_class = EmeritusSerializer
    def perform_create(self, serializer) :
        serializer.save()
class EmeritusDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Emeritus.objects.all()
    serializer_class = EmeritusSerializer

class StaffList(generics.ListCreateAPIView):
    queryset = Staff.objects.all()
    serializer_class = StaffSerializer

    def perform_create(self, serializer) :
        serializer.save()

class StaffDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Staff.objects.all()
    serializer_class = StaffSerializer

class TagList(generics.ListCreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

    def perform_create(self, serializer) :
        serializer.save()

class TagDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class UnderCourseList(generics.ListAPIView):
    queryset = UnderCourse.objects.all()
    serializer_class = UnderCourseListSerializer
class UnderCourseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = UnderCourse.objects.all()
    serializer_class = UnderCourseDetailSerializer
