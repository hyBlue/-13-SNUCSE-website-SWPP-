from django.db import models
# Create your models here.
class Post(models.Model) :
    user = models.ForeignKey('auth.User', on_delete = models.CASCADE, null = True)

    # define Post as a virtual class
    class Meta :
        abstract = True

class Notice(Post) :
    user = models.ForeignKey('auth.User', related_name = 'notices', on_delete = models.CASCADE, null = True)
    title = models.CharField(max_length = 100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add = True)
    author = models.CharField(max_length = 30, default = 'anonymous')
    view = models.IntegerField(default = 0)
    tag_set = models.ManyToManyField('Tag', related_name = 'notices', blank = True)
    image = models.ManyToManyField('Image', related_name = 'notice', null = True, blank = True)
    # attached = models.ManyToManyField('Attached', related_name = 'notice', null = True, blank = True)
    attached=  models.FileField(blank = True)
    def __str__(self) :
        return str(self.id) + " " + self.title

class Image(models.Model) :
    image = models.ImageField(null = True, upload_to = 'notice/')

class Attached(models.Model) :
    attached = models.FileField(null = True, upload_to = 'notice/')

class News(Post) :
    user = models.ForeignKey('auth.User', related_name = 'news', on_delete = models.CASCADE, null = True)
    title = models.CharField(max_length = 100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add = True)
    image = models.ImageField(null = True, upload_to = 'news/' )

    def __str__(self) :
        return self.title

class Professor(Post) :

    name = models.CharField(max_length = 20)
    # location = models.CharField(max_length = 20)
    # url = models.URLField()
    # email = models.EmailField()
    # phone = models.CharField(max_length = 20)
    # fax = models.CharField(max_length = 20)
    contact = models.TextField(blank = True)
    education = models.TextField(blank = True)
    research = models.TextField(blank = True)
    biography = models.TextField(blank = True)
    photo = models.ImageField(null = True,upload_to = 'professor/')


class Tag(models.Model) :
    name = models.CharField(max_length = 50, unique = True)
    def __str__(self) :
        return self.name
