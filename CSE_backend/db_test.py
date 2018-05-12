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

# professor create
import requests
from bs4 import BeautifulSoup
prof_url = 'http://cse.snu.ac.kr/professor/'
html = requests.get("http://cse.snu.ac.kr/people/faculty").text
soup = BeautifulSoup(html, 'html.parser')
prof_list = []

k = soup.find_all('div', class_="views-field views-field-title")

for i in k :
    name = i.find('a')
    if name :
        prof_list.append ({'name' : name.text})

for i, j in enumerate(prof_list) :
    url = prof_url + j['name']
    html = requests.get(url).text
    soup = BeautifulSoup(html, 'html.parser')
    section = soup.find('div', class_="section clearfix2")
    contact = section.select("div.group_contact_info")
    education = section.select("div.field-name-field-education")
    research = section.select("div.field-name-field-research-area")
    biography = section.select("div.field-name-field-biography")
    prof_list[i]['contact'] = contact
    prof_list[i]['education'] = education
    prof_list[i]['research'] = research
    prof_list[i]['biography'] = biography
