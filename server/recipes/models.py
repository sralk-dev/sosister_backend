from django.db import models
from django.contrib.auth.models import User
from categories.models import Category
from ingridients.models import Ingridient
from pytils.translit import slugify


class Grade(models.Model):
    owner = models.ForeignKey(User, on_delete=models.PROTECT, blank=True)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='recipes_grades')
    value = models.PositiveSmallIntegerField()

class Step(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='recipes_steps')
    description = models.TextField(blank=True)

class Recipe(models.Model):
    owner = models.ForeignKey(User, on_delete=models.PROTECT)
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True)
    categories = models.ManyToManyField(Category)
    description = models.TextField()
    ingridients = models.ManyToManyField(Ingridient)
    poster = models.ImageField(upload_to='recipes_posters')    
    steps = models.ForeignKey(Step, on_delete=models.PROTECT)
    prep_time = models.PositiveSmallIntegerField()
    cook_time = models.PositiveSmallIntegerField()
    grades = models.ForeignKey(Grade, on_delete=models.PROTECT, blank=True)
    views = models.PositiveIntegerField(default=0)
    dtcreate = models.DateTimeField(auto_now_add=True)
    dtupdate = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(Recipe, self).save(*args, **kwargs)

    def __str__(self):
        return self.title
