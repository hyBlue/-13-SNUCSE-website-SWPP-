from django.conf.urls import url
from api import views

urlpatterns = [
    url(r'^api/notice$', views.NoticeList.as_view()),
]
