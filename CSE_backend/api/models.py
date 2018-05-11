


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
    image = models.ImageField(null = True)
    attached = models.FileField(null = True)
    view = models.IntegerField(default = 0)
    tag_set = models.ManyToManyField('Tag', blank = True)
    def __str__(self) :
        return self.title

class News(Post) :

    title = models.CharField(max_length = 100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add = True)
    image = models.ImageField(null = True)

    def __str__(self) :
        return self.title

class Professor(Post) :

    name = models.CharField(max_length = 20)
    location = models.CharField(max_length = 20)
    url = models.URLField()
    email = models.EmailField()
    phone = models.CharField(max_length = 20)
    fax = models.CharField(max_length = 20)
    research = models.CharField(max_length = 100)
    education = models.CharField(max_length = 100)

class Tag(models.Model) :
    name = models.CharField(max_length = 50, unique = True)
    def __str__(self) :
        return self.name
