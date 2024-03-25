# import os
# import csv

# # Create a file with data in it
# def create_file(filename):
#     if not os.path.exists(filename):
#         with open(filename, "w") as file:
#             file.write("name,color,type\n")
#             file.write("carnation,pink,annual\n")
#             file.write("daffodil,yellow,perennial\n")
#             file.write("iris,blue,perennial\n")
#             file.write("poinsettia,red,perennial\n")
#             file.write("sunflower,yellow,annual\n")

# # Read the file contents and format the information about each row
# def contents_of_file(filename):
#     return_string = ""

#     # Call the function to create the file if it doesn't exist
#     create_file(filename)

#     # Open the file
#     with open(filename, "r+") as f: # yes, r+
#         # Read the rows of the file into a dictionary
#         content_reader = csv.DictReader(f)

#         # Process each item of the dictionary
#         for row in content_reader:
#             return_string += "a {} {} is {}\n".format(row["color"], row["name"], row["type"])
    
#     return return_string

# # Call the function
# print(contents_of_file("flowers.csv"))



# import os
# import csv

# Create a file with data in it
def create_file(filename):
  with open(filename, "w") as file:
    file.write("name,color,type\n")
    file.write("carnation,pink,annual\n")
    file.write("daffodil,yellow,perennial\n")
    file.write("iris,blue,perennial\n")
    file.write("poinsettia,red,perennial\n")
    file.write("sunflower,yellow,annual\n")

# Read the file contents and format the information about each row
def contents_of_file(filename):
  return_string = ""

  # Call the function to create the file 
  create_file(filename)

  # Open the file
  with open(filename, "r") as f:

    # Read the rows of the file
    rows = csv.reader(f)
    # Process each row
    for row in rows:
      name, color, typeflower = row
      # Format the return string for data rows only

      return_string += "a {} {} is {}\n".format(color, name, typeflower)
  return return_string

#Call the function
print(contents_of_file("flowers.csv"))