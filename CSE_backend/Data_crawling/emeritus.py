import requests
import os
from bs4 import BeautifulSoup
from api.models import *
from django.core.files import File

prof_url = 'https://cse.snu.ac.kr/professor/'
emeritus_list = ['고건', '김영택', '김종상', '신현식', '우치수', '유석인', '이석호',
                 '조유근', '한상영', '황희융']

prof_list = []

for i in emeritus_list:
    url = prof_url + i
    html = requests.get(url).text
    soup = BeautifulSoup(html, 'html.parser')
    section = soup.find('div', class_='clearfix2')
    role = section.find('div', class_='field-name-field-title').text
    education = section.select('.field-name-field-education li.field-item')
    educations = []
    for j in education:
        edu = StringModel(content=j.text)
        edu.save()
        educations.append(edu)
    term_of_service = section.select('.field-name-field-term-of-service .field-item')[0].text
    image_url = section.select(".field-name-field-profile-picture img")[0]['src']
    image = requests.get(image_url).content
    filetype = os.path.basename(image_url)[-4:]
    filename = i + filetype
    image = File(open('../media/emeritus/' + filename, 'rb'))
    data = {'name': i, 'role': role, 'term_of_service': term_of_service, 'image': image}
    em = Emeritus(**data)
    em.save()
    em.education.set(educations)
    em.save()
