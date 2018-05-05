from django.conf.urls import url
from api import views

urlpatterns = [
    url(r'^api/notice$', views.NoticeList.as_view()),
    url(r'^api/users$', views.UserList.as_view()),
    url(r'^api/professor$', views.ProfessorList.as_view()),
    url(r'^api/news$', views.NewsList.as_view()),
]
