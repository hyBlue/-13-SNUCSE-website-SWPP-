import requests
from bs4 import BeautifulSoup
from api.models import *

u_course = "https://cse.snu.ac.kr/undergraduate/courses"

html = requests.get(u_course).text
course_list = []
soup = BeautifulSoup(html, 'html.parser')
table = soup.find('tbody').select('tr')
for i in table:
    classification = i.find('td', class_="views-field views-field-field-course-classification").text.strip()
    number = i.find('td', class_="views-field views-field-field-course-number").text.strip()
    name = i.find('td', class_="views-field views-field-title").find('a').text.strip()
    credit = i.find('td', class_="views-field views-field-field-course-credit").text.strip()
    year = i.find('td', class_="views-field views-field-field-tag-academic-year").text.strip()
    data = {'classification': classification,
            'number': number,
            'name': name,
            'credit': credit,
            'year': year, }
    link_list = []
    link = i.find("td", class_="views-field-field-course-links").select('a')
    for i in link:
        link_name = i.text
        link_url = i['href']
        course_link = CourseLink(name=link_name, url=link_url)
        course_link.save()
        link_list.append(course_link)
    detail_url = "https://cse.snu.ac.kr/course/" + name.replace(" ", "-")
    if name == "컴퓨터의 개념 및 실습":
        detail_url += "-0"
    html = requests.get(detail_url).text
    soup = BeautifulSoup(html, 'html.parser')
    content = soup.find('div',
                        class_="field field-name-body field-type-text-with-summary field-label-hidden").text.strip()
    data['content'] = content
    course_list.append(data)
    course = UnderCourse(**data)
    course.save()
    course.link.set(link_list)
    course.save()
