from django.contrib.auth.models import User
from api.models import *

# user create
for i in range(10) :
    username = "user{0}".format(i+1)
    password = i+1
    user = User.objects.create_user(username, password = password)
    user.save()

# tag create
tag_list = ['수업', '입학', '등록/복학/휴학/재입학', '졸업', '학사(학부)', '학사(대학원)', '제2전공/전과 교환학생/유학',
'장학', '학부 지도교수', '박사학위예비심사', '자료실', '외부 행사/프로그램', '인턴/취업', '기업게시판', '전문연구요원', '미분류']

for i in tag_list :
    tag = Tag(name = i)
    tag.save()

# notice create
for i in range(50) :
    title = "Notice{0}".format(i+1)
    content = "Content{0}".format(i+1)
    author = "user{0}".format(i+1)
    user = User.objects.get(id = i % 10 + 1)
    notice = Notice(title = title, content = content, author = author, user = user)
    notice.save()

# tag create
