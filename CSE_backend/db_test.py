from django.contrib.auth.models import User
from api.models import *
import requests
from bs4 import BeautifulSoup
# user create
for i in range(10) :
    username = "user{0}".format(i+1)
    password = i+1
    user = User.objects.create_user(username, password = password)
    user.save()

# tag create
tag_list = ['수업', '입학', '등록/복학/휴학/재입학', '졸업', '학사 (학부)', '학사 (대학원)', '제2전공/전과', '교환학생/유학',
'장학', '학부 지도교수', '박사학위예비심사', '자료실', '외부 행사/프로그램', '인턴/취업 (공식 게시)', '기업게시판', '전문연구요원', '미분류']

for i in tag_list :
    tag = Tag(name = i)
    tag.save()

# notice create
# for i in range(50) :
#     title = "Notice{0}".format(i+1)
#     content = "Content{0}".format(i+1)
#     author = "user{0}".format(i+1)
#     user = User.objects.get(id = i % 10 + 1)
#     notice = Notice(title = title, content = content, author = author, user = user)
#     notice.save()
notice_url = "http://cse.snu.ac.kr/node/"
notice_list = [31861, 31860, 31854, 31853, 31852, 31851, 31848, 31842,31773, 31772, 31770]
for i in notice_list :
    idx = str(i)
    html = requests.get(notice_url+idx).text
    soup = BeautifulSoup(html, 'html.parser')
    title = soup.find('h1', class_ = "title").text
    content = soup.find('div', class_ ="field field-name-body field-type-text-with-summary field-label-hidden").text
    author = soup.find('span', class_ = "username").text
    tag = soup.find('span', class_ = "field-item even").text
    notice = Notice(title = title, content = content, author = author)
    notice.save()
    notice.tag_set.set([Tag.objects.get(name = tag)])
    notice.save()

# professor create
import requests
from bs4 import BeautifulSoup
from api.models import Professor
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
    prof_list[i]['contact'] = str(contact[0]) if contact else ""
    prof_list[i]['education'] = str(education[0]) if education else ""
    prof_list[i]['research'] = str(research[0]) if research else ""
    prof_list[i]['biography'] = str(biography[0]) if biography else ""

for i in prof_list :
    professor = Professor(**i)
    professor.save()
