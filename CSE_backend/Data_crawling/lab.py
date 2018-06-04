import requests
from bs4 import BeautifulSoup
from api.models import *

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
