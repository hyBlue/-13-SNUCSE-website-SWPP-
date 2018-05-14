
import requests
from time import sleep



def get_json_or_error_new(link):
    sleep(0.05)
    try:
        res = requests.get(link)
        if res.status_code != 200:
            print("ERROR: Cannot get {0} : {1}".format(link, res.status_code))
            exit(1)
        resjson = res.json()
        return resjson
    except Exception:
        print("ERROR: Cannot get {0}".format(link))
        exit(1)

def delete_or_error(link):
    sleep(0.05)
    try:
        res = requests.delete(link)
        if res.status_code != 204:
            print("ERROR: Cannot delete {0} : {1}".format(link, res.status_code))
            exit(1)
    except Exception:
        print("ERROR: Cannot delete {0}".format(link))
        exit(1)

def put_or_error(link, data):
    sleep(0.05)
    try:
        print("put")
        res = requests.put(link, data=data)
        if res.status_code != 200:
            print("ERROR: Cannot PUT {0} : {1} payload = {4}".format(link, res.status_code, data))
            exit(1)
    except Exception:
        print("ERROR: Cannot PUT {0}".format(link))
        exit(1)


def post_or_error(link, data):
    sleep(0.05)
    try:
        res = requests.post(link, data=data, auth = ("user1", "1"))
        if res.status_code != 201:
            print("ERROR: Cannot post {0} : {1}, id = {2}, pwd = {3}".format(link, res.status_code))
            exit(1)
    except Exception:
        print("ERROR: Cannot post {0}".format(link))
        exit(1)


def get_json_or_error(link):
    sleep(0.05)
    try:
        res = requests.get(link).json()
        return res
    except Exception:
        print("ERROR: Cannot get {0}".format(link))
        exit(1)

def forbidden_or_error(method, link):
    sleep(0.05)
    try:
        if method == "GET":
            res = requests.get(link)
        elif method == "DELETE":
            res = requests.delete(link)
        elif method == "POST":
            res = requests.post(link)
        elif method == "PUT":
            res = requests.put(link)
        if res.status_code != 403:
            print("ERROR: Should not be allowed to {0} {1} : code {2}".format(method, link, res.status_code))
            exit(1)
    except Exception:
        print("ERROR: Cannot {0} {1}".format(method, link))
        exit(1)

def forbidden_or_error_anon(method, link):
    sleep(0.05)
    try:
        if method == "GET":
            res = requests.get(link)
        elif method == "DELETE":
            res = requests.delete(link, auth = ("user1", "1"))
        elif method == "POST":
            res = requests.post(link)
        elif method == "PUT":
            res = requests.put(link)

        if res.status_code != 403:
            print("ERROR: Should not be allowed to {0} {1} with no auth : code {2}".format(method, link, res.status_code))
            exit(1)
    except Exception:
        print("ERROR: Cannot get {0}".format(link))
        exit(1)

def check_key(json, key):
    if key not in json:
        print("{0} not in {1}.".format((key, json)))
        exit(1)



print("******************************************************************************************************************")
# create promises
link = "http://localhost:8000/api/notice/"
noticeN = 10
print("1. Checking POST Notice http://localhost:8000/api/notice by creating {0} Notice.".format(noticeN))
notices = []
for i in range(0, noticeN):
    title = "Notice{0}".format(i+1)
    content = "Content{0}".format(i+1)
    author = "user1"

    notice = {'title':title, 'content':content, 'author':author, }
    notices.append(notice)
    post_or_error(link, notice)

print("2. Checking GET http://localhost:8000/api/notice/")

notices_json = get_json_or_error("http://localhost:8000/api/notice/")
print(notices_json)
print(notices)
if len(notices_json) != len(notices):
    print("ERROR: GET http://localhost:8000/api/notice/ has more or less items than notices")
    exit(1)

for notice in notices:
    found = False
    for notice_json in notices_json:
        check_key(notice_json, "title")
        check_key(notice_json, "content")
        check_key(notice_json, "author")

        if notice_json["title"] == notice["title"] and notice_json["content"] == notice["content"] and notice_json["author"] == notice["author"]:
            found = True
            notice["id"] = notice_json["id"]
            notice["created_at"] = notice_json["created_at"]
            break
    if not found:
        print("ERROR: Not found : {0}".format(notice))
        exit(1)

print("POST AND GET SUCCESS")
print("******************************************************************************************************************")
link = "http://localhost:8000/api/notice/"

test_cnt = 0
print("3. Checking PUT http://localhost:8000/api/notice/id")
for notice in notices:
    print(notice)
    link2 = link + str(notice["id"]) + "/"
    print("\tModify notice {0}".format(link2))


    payload = {'title': notice['title']+"_modified", 'content':notice['content']+"_modified"}
    put_or_error(link2, payload)

print("******************************************************************************************************************")
link = "http://localhost:8000/api/notice/"
print("4. Checking DELETE http://localhost:8000/api/notice/")
for notice in notices:
    print(notice)
    link2 = link + str(notice['id']) + "/"
    print("\tDeleting Notice {0}".format(link))
    delete_or_error(link2)
print("===================================================")
print("TEST SUCCESSFUL (further tests will be added)")
