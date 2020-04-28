from django.db import models
from django.contrib.auth.models import User
from categories.models import Category
from ingridients.models import Ingridient
from django.core.validators import MaxValueValidator
from utils import get_unique_slug


class Recipe(models.Model):
    owner = models.ForeignKey(User, on_delete=models.PROTECT)
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True,
                            blank=True, editable=False)
    categories = models.ManyToManyField(Category)
    description = models.TextField()
    ingridients = models.ManyToManyField(Ingridient)
    poster = models.ImageField(
        upload_to='recipes/static/img/posters', blank=True, null=True)
    prep_time = models.PositiveSmallIntegerField()
    cook_time = models.PositiveSmallIntegerField()
    views = models.PositiveIntegerField(default=0)
    dtcreate = models.DateTimeField(auto_now_add=True)
    dtupdate = models.DateTimeField(auto_now=True)
    published = models.BooleanField(default=True)

    class Meta:
        ordering = ['-dtcreate']
        get_latest_by = 'dtcreate'

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = get_unique_slug(self, 'title', 'slug')
        super(Recipe, self).save(*args, **kwargs)

    def __str__(self):
        return self.title


class Step(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='recipes/static/img/steps')
    description = models.TextField(blank=True)
    recipe = models.ForeignKey(
        Recipe, on_delete=models.CASCADE, related_name='steps')


class Grade(models.Model):
    owner = models.ForeignKey(
        User, on_delete=models.PROTECT, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(
        upload_to='recipes/static/img/grades', blank=True, null=True)
    value = models.PositiveSmallIntegerField(
        validators=[MaxValueValidator(10)])
    recipe = models.ForeignKey(
        Recipe, on_delete=models.CASCADE, related_name='grades')
    dtcreate = models.DateTimeField(auto_now_add=True)
