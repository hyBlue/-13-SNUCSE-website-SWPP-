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
    # notice = models.ForeignKey(Notice, related_name='images')
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
    location = models.CharField(max_length = 20, blank = True)
    phone = models.CharField(max_length = 20, blank = True)
    fax = models.CharField(max_length = 20, blank = True)
    email = models.EmailField(blank = True)
    website = models.CharField(max_length = 20, blank = True)
    education = models.ManyToManyField('StringModel',related_name = 'edu_prof', blank = True)
    research = models.ManyToManyField('StringModel', related_name = 'research_prof', blank = True)
    biography = models.ManyToManyField('StringModel', related_name = 'bio_prof', blank = True)
    image = models.ImageField(blank = True,upload_to = 'professor/', null = True)

    def __str__(self) :
        return self.name
class Lab(Post) :
    name = models.CharField(max_length = 20)
    location = models.CharField(max_length = 20, blank = True)
    phone = models.CharField(max_length = 20, blank = True)
    professors = models.ManyToManyField('Professor', related_name = 'lab', blank = True)
    abbreviation = models.CharField(max_length = 20, blank = True)

    def __str__(self) :
        return self.name

class Emeritus(Post) :
    name = models.CharField(max_length = 20)
    role = models.CharField(max_length = 20)
    term_of_service = models.CharField(max_length = 20)
    education = models.ManyToManyField('StringModel', related_name = 'edu_emeritus', blank = True)
    image = models.ImageField(blank = True,upload_to = 'emeritus/', null = True)

class Staff(Post) :
    name = models.CharField(max_length = 20)
    role = models.CharField(max_length = 20)
    office = models.CharField(max_length = 20)
    phone = models.CharField(max_length = 20)
    email = models.CharField(max_length =  20)
    jobs = models.ManyToManyField('StringModel', related_name = 'job_staff', blank = True)
    image = models.ImageField(blank= True, upload_to = 'staff/', null = True)

# class Job(models.Model) :
#     job = models.CharField(max_length = 20)
#     def __str__(self) :
#         return self.job
#
# class Education(models.Model) :
#     education = models.CharField(max_length = 20, blank = True)
#     def __str__(self) :
#         return self.education
#
# class Research(models.Model) :
#     research = models.CharField(max_length = 20, blank = True)
#     def __str__(self) :
#         return self.research
#
# class Biography(models.Model) :
#     biography =  models.CharField(max_length = 20, blank = True)
#     def __str__(self) :
#         return self.biography

class StringModel(models.Model) :
    content = models.CharField(max_length = 20)
    def __str__(self) :
        return self.content

class Tag(models.Model) :
    name = models.CharField(max_length = 50, unique = True)
    def __str__(self) :
        return self.name
