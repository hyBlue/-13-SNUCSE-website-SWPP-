
from api.models import *
from api.serializers import *
from rest_framework import generics
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination

class NoticePagination(PageNumberPagination):
    page_size_query_param = 'page_size'

class NoticeList(generics.ListCreateAPIView):
    queryset = Notice.objects.all().order_by('-created_at')
    serializer_class = NoticeSerializer
    pagination_class = NoticePagination

    @csrf_exempt
    def perform_create(self, serializer):
        serializer.save(author=self.request.user.username)

    @csrf_exempt
    def post(self, request, format = None):
        data = request.data
        attached_list = []
        i = 0
        while True:
            if "attached" + str(i) in data:
                attached = Attached(attached=data["attached" + str(i)])
                attached.save()
                attached_list.append(attached)
                i+=1
            else:
                break
        tag_set = []
        if 'tag_set' in data:
            for i in data['tag_set'].split(','):
                tag = Tag.objects.get(name=i)
                tag_set.append(tag)

        serializer = NoticeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(attached=attached_list, tags=tag_set)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CustomAuthToken(ObtainAuthToken):
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
            if word in i.title or word in i.content:
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
    pagination_class = NoticePagination

    def create(self, request, *args, **kwargs):
        data = request.data
        print(data)
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class NewsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer


class ProfessorList(generics.ListCreateAPIView):
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer

    def perform_create(self, serializer):
        serializer.save()


class ProfessorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer


class LabList(generics.ListCreateAPIView):
    queryset = Lab.objects.all()
    serializer_class = LabSerializer

    def perform_create(self, serializer):
        serializer.save()


class EmeritusList(generics.ListCreateAPIView):
    queryset = Emeritus.objects.all()
    serializer_class = EmeritusSerializer

    def perform_create(self, serializer):
        serializer.save()


class EmeritusDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Emeritus.objects.all()
    serializer_class = EmeritusSerializer


class StaffList(generics.ListCreateAPIView):
    queryset = Staff.objects.all()
    serializer_class = StaffSerializer

    def perform_create(self, serializer):
        serializer.save()


class StaffDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Staff.objects.all()
    serializer_class = StaffSerializer


class TagList(generics.ListCreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

    def perform_create(self, serializer):
        serializer.save()


class TagDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class UnderCourseList(generics.ListCreateAPIView):
    queryset = UnderCourse.objects.all()
    serializer_class = UnderCourseListSerializer


class UnderCourseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = UnderCourse.objects.all()
    serializer_class = UnderCourseDetailSerializer


class ReservationList(generics.ListCreateAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

    def get_queryset(self):
        queryset = Reservation.objects.all()
        category = self.request.query_params.get('category', None)
        roomkey = self.request.query_params.get('roomkey', None)
        if category and roomkey:
            queryset = queryset.filter(category=category).filter(roomkey=roomkey)
        elif category:
            queryset = queryset.filter(category=category)
        elif roomkey:
            queryset = queryset.filter(roomkey=roomkey)
        return queryset

    def perform_create(self, serializer):
        # if self.request.user:
        #     serializer.save(user = self.request.user)
        # else:
        serializer.save()


class ReservationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
