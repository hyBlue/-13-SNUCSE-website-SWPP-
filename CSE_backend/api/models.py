from django.db import models
# Create your models here.
class Post(models.Model) :
    user = models.ForeignKey('auth.User', on_delete = models.CASCADE, null = True)

    # define Post as a virtual class
    class Meta :
        abstract = True

class Notice(Post) :

    title = models.CharField(max_length = 100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add = True)
    author = models.CharField(max_length = 30, default = 'anonymous')
    image = models.ImageField(null = True)
    attached = models.FileField(null = True)
    def __str__(self) :
        return self.title

    @classmethod
    def create(cls, title, content, user) :
        notice = cls(title = title, content = content, author = user.username)
        return notice
