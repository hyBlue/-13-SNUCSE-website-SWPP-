from django.contrib.auth.models import User
from api.models import *
import requests
from bs4 import BeautifulSoup

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
