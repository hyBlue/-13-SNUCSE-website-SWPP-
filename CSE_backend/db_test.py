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

# Lab created
import requests
from bs4 import BeautifulSoup

lab_url = "https://cse.snu.ac.kr/research/labs"

html = requests.get(lab_url).text

soup = BeautifulSoup(html, 'html.parser')
section = soup.find('tbody')
table = section.select('tr')
# print(table)

for i in table :
    name = i.select('.views-field-title a')[0].text
    professors = []
    for j in i.select('.views-field-field-faculty a') :
        professors.append(Professor.objects.get(name = j.text.replace(' ', '-')))
    abbre = i.select('.views-field-field-abbreviation')[0].text.strip()
    temp = i.select('.views-field-field-office')[0].text.strip().split("(")
    location = temp[0]
    data = {'name' : name,  'abbreviation' : abbre, 'location' : location}
    if len(temp) > 1 :
        phone = temp[1]
        data['phone'] = phone
    lab = Lab(**data)
    lab.save()
    lab.professors.set(professors)
    lab.save()


# professor create
import requests
import os
from bs4 import BeautifulSoup
from api.models import *
from django.core.files import File

def field_return(list_) :
    result = []
    for i in list_ :
        result.append(i.text)
    if len(result) == 0 :
        return ""
    else :
        return result

def text_return(list_) :
    result = []
    for i in list_ :
        result.append(i.text)
    if len(result) == 0 :
        return ""
    if len(result) == 1 :
        return result[0]
    else :
        return result


prof_url = 'http://cse.snu.ac.kr/professor/'
html = requests.get("http://cse.snu.ac.kr/people/faculty").text
soup = BeautifulSoup(html, 'html.parser')
prof_list = []
image = 1234

k = soup.find_all('div', class_="views-field views-field-title")
for i in k :
    name = i.find('a')
    if name :
        prof_list.append ({'name' : name.text.replace(" ", "-")})



for i, j in enumerate(prof_list) :
    url = prof_url + j['name']
    html = requests.get(url).text
    soup = BeautifulSoup(html, 'html.parser')
    section = soup.find('div', class_="section clearfix2")
    position = text_return(section.select(".field-name-field-title .field-item"))
    lab = text_return(section.select(".field-name-field-lab .field-item"))
    location = text_return(section.select(".field-name-field-office .field-item" ))
    phone = text_return(section.select(".field-name-field-phone .field-item" ))
    fax = text_return(section.select(".field-name-field-fax .field-item" ))
    email =text_return(section.select(".field-name-field-email .field-item" ))
    email = email.replace(' [at] ', '@')
    email = email.replace(' [dot] ', '.')
    website = text_return(section.select(".field-name-field-website .field-item" ))
    education = field_return(section.select("div.field-name-field-education .field-item"))
    research = field_return(section.select("div.field-name-field-research-area .field-item"))
    biography =  field_return(section.select("div.field-name-field-biography .field-item li"))
    image_url = section.select(".field-name-field-profile-picture img")[0]['src']
    image = requests.get(image_url).content
    filetype = os.path.basename(image_url)[-4:]
    filename = j['name'] + filetype
    image = File(open('./media/professor/' + filename, 'rb'))
    educations = []
    for i in education :
        edu = StringModel(content = i)
        edu.save()
        educations.append(edu)
    researches = []
    for i in research :
        res = StringModel(content = i)
        res.save()
        researches.append(res)
    biographies = []
    for i in biography :
        bio = StringModel(content = i)
        bio.save()
        biographies.append(bio)
    data = {'name' : j['name'], 'position' : position,  'location' :location, 'phone' : phone,'fax' : fax, 'email' : email, 'website' : website,'image' : image}
    prof = Professor(**data)
    prof.save()
    prof.education.set(educations)
    prof.biography.set(biographies)
    prof.research.set(researches)
    prof.save()

## Staff create
import requests
import os
from bs4 import BeautifulSoup
from api.models import *
from django.core.files import File

# import .models
prof_url = 'https://cse.snu.ac.kr/staff-member/'
staff_list =['김미경', '김병란', '박서현' ,'오희정' ,'이정은','이종일' ,'임정현', '지은상']
html = requests.get("http://cse.snu.ac.kr/people/faculty").text
soup = BeautifulSoup(html, 'html.parser')
prof_list = []


for i in staff_list :
    url = prof_url + i
    html = requests.get(url).text
    soup = BeautifulSoup(html, 'html.parser')
    section = soup.find('div', class_ = 'region-content')
    role = section.find('div', class_ = 'field-name-field-role').text
    office  = section.select('div.field-name-field-office .even')[0].text
    phone = section.select('div.field-name-field-phone .even')[0].text
    email = section.select('div.field-name-field-email .even')[0].text
    email = email.replace(' [at] ', '@')
    email = email.replace(' [dot] ', '.')
    job_temp = section.select('div.field-name-field-responsibility .field-item')
    job = [i.text for i in job_temp]
    image_url = section.select(".field-name-field-profile-picture img")[0]['src']
    image = requests.get(image_url).content
    filetype = os.path.basename(image_url)[-4:]
    filename = i + filetype
    image = File(open('./media/staff/' + filename, 'rb'))
    data = {'name' : i, 'role' : role, 'office' : office, 'phone' : phone,  'email' : email,
    'image' : image}
    staff = Staff(**data)
    staff.save()
    jobs = []
    for i in job :
        job_ = StringModel(content = i)
        job_.save()
        jobs.append(job_)
        staff.jobs.set(jobs)
        staff.save()

## EMERITUS CREATE
import requests
import os
from bs4 import BeautifulSoup
from api.models import *
from django.core.files import File

prof_url = 'https://cse.snu.ac.kr/professor/'
emeritus_list = ['고건', '김영택', '김종상', '신현식', '우치수', '유석인', '이석호',
                 '조유근', '한상영', '황희융']

prof_list = []


for i in emeritus_list :
    url = prof_url + i
    html = requests.get(url).text
    soup = BeautifulSoup(html, 'html.parser')
    section = soup.find('div', class_ = 'clearfix2')
    role = section.find('div', class_ = 'field-name-field-title').text
    education = section.select('.field-name-field-education li.field-item')
    educations = []
    for j in education :
        edu = StringModel(content = j.text)
        edu.save()
        educations.append(edu)
    term_of_service = section.select('.field-name-field-term-of-service .field-item')[0].text
    image_url = section.select(".field-name-field-profile-picture img")[0]['src']
    image = requests.get(image_url).content
    filetype = os.path.basename(image_url)[-4:]
    filename = i + filetype
    image = File(open('./media/emeritus/' + filename, 'rb'))
    data = {'name' : i, 'role' : role, 'term_of_service' : term_of_service, 'image' : image}
    em = Emeritus(**data)
    em.save()
    em.education.set(educations)
    em.save()
