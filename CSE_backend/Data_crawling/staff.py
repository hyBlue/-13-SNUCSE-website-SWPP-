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
    image = File(open('../media/staff/' + filename, 'rb'))
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
