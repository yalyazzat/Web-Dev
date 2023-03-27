from django.db import models

# Create your models here.

from django.urls import reverse

class Discipline(models.Model):
    """Model representing a book (but not a specific copy of a book)."""
    title = models.CharField(max_length=200)

    description = models.TextField(max_length=1000, help_text='Enter a brief description of the discipline')

    prereq = models.TextField(max_length=1000, help_text='Enter a prerequisite of the discipline')

    def __str__(self):
        """String for representing the Model object."""
        return self.title

    def get_absolute_url(self):
        """Returns the URL to access a detail record for this book."""
        return reverse('discip-detail', args=[str(self.id)])
