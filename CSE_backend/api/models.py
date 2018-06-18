from django.db import models


# Create your models here.
class Post(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE, null=True)

    # define Post as a virtual class
    class Meta:
        abstract = True


class Notice(Post):
    user = models.ForeignKey('auth.User', related_name='notices', on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.CharField(max_length=30, default='anonymous')
    view = models.IntegerField(default=0)
    tags = models.ManyToManyField('Tag', related_name='notices', blank=True)
    attached = models.ManyToManyField('Attached', related_name='notice', blank=True)

    def __str__(self):
        return str(self.id) + " " + self.title


class Image(models.Model):
    # notice = models.ForeignKey(Notice, related_name='images')
    image = models.ImageField(blank=True, upload_to='notice/', null=True)


class Attached(models.Model):
    attached = models.FileField(blank=True, upload_to='notice/', null=True)
    name = models.CharField(blank=True, max_length=20)
    size = models.IntegerField(blank=True, default=0)


class News(Post):
    user = models.ForeignKey('auth.User', related_name='news', on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(blank=True, upload_to='news/')

    def __str__(self):
        return self.title


class Professor(Post):
    name = models.CharField(max_length=20)
    position = models.CharField(max_length=20, blank=True)
    location = models.CharField(max_length=20, blank=True)
    phone = models.CharField(max_length=20, blank=True)
    fax = models.CharField(max_length=20, blank=True)
    email = models.EmailField(blank=True)
    website = models.CharField(max_length=20, blank=True)
    education = models.ManyToManyField('StringModel', related_name='edu_prof', blank=True)
    research = models.ManyToManyField('StringModel', related_name='research_prof', blank=True)
    biography = models.ManyToManyField('StringModel', related_name='bio_prof', blank=True)
    image = models.ImageField(blank=True, upload_to='professor/', null=True)

    def __str__(self):
        return self.name


class Lab(Post):
    name = models.CharField(max_length=20)
    location = models.CharField(max_length=20, blank=True)
    phone = models.CharField(max_length=20, blank=True)
    professors = models.ManyToManyField('Professor', related_name='lab', blank=True)
    abbreviation = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return self.name


class Emeritus(Post):
    name = models.CharField(max_length=20)
    role = models.CharField(max_length=20)
    term_of_service = models.CharField(max_length=20)
    education = models.ManyToManyField('StringModel', related_name='edu_emeritus', blank=True)
    image = models.ImageField(blank=True, upload_to='emeritus/', null=True)


class Staff(Post):
    name = models.CharField(max_length=20)
    role = models.CharField(max_length=20)
    office = models.CharField(max_length=20)
    phone = models.CharField(max_length=20)
    email = models.CharField(max_length=20)
    jobs = models.ManyToManyField('StringModel', related_name='job_staff', blank=True)
    image = models.ImageField(blank=True, upload_to='staff/', null=True)


class StringModel(models.Model):
    content = models.CharField(max_length=20)

    def __str__(self):
        return self.content


class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


class UnderCourse(Post):
    name = models.CharField(max_length=20)
    number = models.CharField(max_length=20)
    credit = models.IntegerField()
    year = models.CharField(max_length=20)
    classification = models.CharField(max_length=20)
    link = models.ManyToManyField('CourseLink', related_name='under_course', blank=True)
    content = models.TextField()

    def __str__(self):
        return self.name


class CourseLink(models.Model):
    name = models.CharField(max_length=20)
    url = models.CharField(max_length=20)


class Reservation(models.Model):
    user = models.ForeignKey('auth.User', related_name='reservation', on_delete=models.CASCADE, null=True)
    uid = models.IntegerField(null=True)
    start = models.CharField(max_length=100, blank=True)
    end = models.CharField(max_length=100, blank=True)
    roomkey = models.CharField(max_length=20, blank=True)
    value = models.CharField(max_length=20, blank=True)
    category = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return self.value
