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
    image = models.ManyToManyField('Image', related_name = 'notice', blank = True)
    attached=  models.FileField(blank = True)
    def __str__(self) :
        return str(self.id) + " " + self.title

class Image(models.Model) :
    image = models.ImageField(blank = True, upload_to = 'notice/',null = True)

class Attached(models.Model) :
    attached = models.FileField(blank = True, upload_to = 'notice/', null = True)

class News(Post) :
    user = models.ForeignKey('auth.User', related_name = 'news', on_delete = models.CASCADE, null = True)
    title = models.CharField(max_length = 100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add = True)
    image = models.ImageField(blank = True, upload_to = 'news/' )

    def __str__(self) :
        return self.title

class Professor(Post) :

    name = models.CharField(max_length = 20)
    position = models.CharField(max_length = 20, blank = True)
    lab = models.CharField(max_length = 20, blank = True)
    location = models.CharField(max_length = 20, blank = True)
    phone = models.CharField(max_length = 20, blank = True)
    fax = models.CharField(max_length = 20, blank = True)
    email = models.EmailField(blank = True)
    website = models.CharField(max_length = 20, blank = True)

    education = models.ManyToManyField('Education',related_name = 'professor', blank = True)
    research = models.ManyToManyField('Research',related_name = 'professor', blank = True)
    biography = models.ManyToManyField('Biography',related_name = 'professor', blank = True)

    image = models.ImageField(blank = True,upload_to = 'professor/', null = True)

class Staff(Post) :
    name = models.CharField(max_length = 20)
    position = models.CharField(max_length = 20, blank = True)
class Education(models.Model) :
    education = models.CharField(max_length = 20, blank = True)
    def __str__(self) :
        return self.education
class Research(models.Model) :
    research = models.CharField(max_length = 20, blank = True)
    def __str__(self) :
        return self.research
class Biography(models.Model) :
    biography =  models.CharField(max_length = 20, blank = True)
    def __str__(self) :
        return self.biography
class Tag(models.Model) :
    name = models.CharField(max_length = 50, unique = True)
    def __str__(self) :
        return self.name
