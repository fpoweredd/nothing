# def create_python_script(filename):
#   comments = "# Start of a new Python program"
#   with open(filename, 'w') as f:
#     f.write(comments)
#     filesize = f.tell()
#   return(filesize)

# print(create_python_script("program.py"))





# import os

# def new_directory(directory, filename):
#   # Before creating a new directory, check to see if it already exists
#   if os.path.isdir(directory) == False: os.mkdir(directory)

#   # Create the new file inside of the new directory
#   os.chdir(directory)
#   with open (filename, 'w') as file:
#     pass

#   # Return the list of files in the new directory
#   return os.listdir()

# print(new_directory("PythonPrograms", "script.py"))






# import os
# import datetime

# def file_date(filename):
#   # Create the file in the current directory
#   with open(filename, 'w', encoding='utf-8') as f:
#     timestamp = os.path.getmtime(filename)
#   # Convert the timestamp into a readable format, then into a string
#   mod_time = datetime.datetime.fromtimestamp(timestamp)
#   # Return just the date portion 
#   # Hint: how many characters are in “yyyy-mm-dd”? 
#   return "{:%Y-%m-%d}".format(mod_time)

# print(file_date("newfile.txt")) 
# # Should be today's date in the format of yyyy-mm-dd





import os
def parent_directory():
  # Create a relative path to the parent 
  # of the current working directory 
  relative_parent = os.path.join(os.getcwd(), '..')
  absolute_path = os.path.abspath(relative_parent)
  # Return the absolute path of the parent directory
  return absolute_path

print(parent_directory())