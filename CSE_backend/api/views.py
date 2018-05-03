from api.models import Notice
from api.serializers import NoticeSerializer
from rest_framework import generics


class NoticeList(generics.ListCreateAPIView):
    queryset = Notice.objects.all()
    serializer_class = NoticeSerializer

    def perform_create(self, serializer) :
        serializer.save(author = self.content)
