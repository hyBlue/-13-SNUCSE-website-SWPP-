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
    image = File(open('../media/professor/' + filename, 'rb'))
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
