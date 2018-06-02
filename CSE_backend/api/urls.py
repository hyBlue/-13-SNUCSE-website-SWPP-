from django.conf.urls import url
from api import views
from django.conf.urls import include

urlpatterns = [
    url(r'^api/notice/$', views.NoticeList.as_view()),
    url(r'^api/notice/(?P<pk>[0-9]+)/$', views.NoticeDetail.as_view()),
    url(r'^api/notice/search/(?P<word>[0-9a-zA-Zㄱ-힣]+)/$',views.NoticeSearch),
    url(r'^api/users/$', views.UserList.as_view()),
    url(r'^api/users/(?P<pk>[0-9]+)/$', views.UserDetail.as_view()),
    url(r'^api/professor/$', views.ProfessorList.as_view()),
    url(r'^api/professor/(?P<pk>[0-9]+)/$', views.ProfessorDetail.as_view()),
    url(r'^api/staff/$', views.StaffList.as_view()),
    url(r'^api/staff/(?P<pk>[0-9]+)/$', views.StaffDetail.as_view()),
    url(r'^api/emeritus/$', views.EmeritusList.as_view()),
    url(r'^api/emeritus/(?P<pk>[0-9]+)/$', views.EmeritusDetail.as_view()),
    url(r'^api/news/$', views.NewsList.as_view()),
    url(r'^api/news/(?P<pk>[0-9]+)/$', views.NewsDetail.as_view()),
    url(r'^api/tags/$', views.TagList.as_view()),
    url(r'^api/tags/(?P<pk>[0-9]+)/$', views.TagDetail.as_view()),
    url(r'^api/lab/', views.LabList.as_view()),

]


urlpatterns += [
    url(r'^api/login/', include('rest_framework.urls')),
]
