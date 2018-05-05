from django.contrib.auth.models import User
for i in range(10) :
    username = "user{0}".format(i+1)
    password = i
    user = User.objects.create_user(username, password = password)
    user.save()

from django.contrib.auth.models import User
from api.models import Notice
for i in range(50) :
    title = "Notice{0}".format(i+1)
    content = "Content{0}".format(i+1)
    author = "Author{0}".format(i+1)
    user = User.objects.get(id = i % 10 + 1)
    notice = Notice(title = title, content = content, author = author, user = user)
    notice.save()
