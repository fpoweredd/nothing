#This code will provide a timestamp for the file
import datetime
import os

print(os.getcwd())

#This code will provide the file size
os.path.getsize("spider.txt")

#This code will provide the date and time for the file in an easy too understand format
os.path.getmtime("spider.txt")
timestamp = os.path.getmtime("spider.txt")
datetime.datetime.fromtimestamp(timestamp)

#This code takes the file name and turns it into an absolute path
os.path.abspath("spider.txt")