import requests
import io
from bs4 import BeautifulSoup

url = "https://cse.snu.ac.kr/news"
for i in range(10):
    html = requests.get(url, params={'page': i}).text
    soup = BeautifulSoup(html, 'html.parser')
    news = soup.select('div.clearfix2 h2.node-title')
    for j in news:
        node = j.find('a')['href']
        html_ = requests.get('https://cse.snu.ac.kr' + node).text
        soup_ = BeautifulSoup(html_, 'html.parser')
        title = soup_.find('h1', class_='title').text
        content = soup_.find('div', class_='field field-name-body field-type-text-with-summary field-label-hidden').text
        image_url = soup_.find('div', class_='field field-name-field-main-image '
                                             'field-type-image field-label-hidden').find('img')['src']
        image = requests.get(image_url).content
        print(requests.post('http://localhost:8000/api/news/',
                            data={'title': title, 'content': content},
                            files={'image': (image_url.split('/')[-1], io.BytesIO(image).getvalue())}))
