from django.contrib.auth.models import User
from api.models import *
import requests
from bs4 import BeautifulSoup

url = "https://cse.snu.ac.kr/department-notices/"
notice_url = "https://cse.snu.ac.kr"
for i in range(15, -1, -1):
    html = requests.get(url, params={'page': i}).text
    soup = BeautifulSoup(html, 'html.parser')
    temp = soup.select('td.views-field-title a')
    temp.reverse()
    for j in temp:
        node_number = j['href']
        html_ = requests.get(notice_url + node_number).text
        soup_ = BeautifulSoup(html_, 'html.parser')
        if soup_.find('div', class_='breadcrumb').find_all('a')[2].text == "공지사항":
            title = soup_.find('h1', class_="title").text
            content = str(soup_.find('div',
                                     class_="field field-name-body field-type-text-with-summary field-label-hidden").find(
                'div', class_='field-item even'))
            author = soup_.find('span', class_="username").text
            tag = soup_.find('span', class_="field-item even").text
            notice = Notice(title=title, content=content, author=author)
            notice.save()
            notice.tags.set([Tag.objects.get(name=tag)])
            notice.save()
