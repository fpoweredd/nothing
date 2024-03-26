# import re
# def check_web_address(text):
#   pattern = r"\w[.com|.org|.us]$"
#   result = re.search(pattern, text, flags=re.IGNORECASE)
#   return result != None

# print(check_web_address("gmail.com")) # True
# print(check_web_address("www@google")) # False
# print(check_web_address("www.Coursera.org")) # True
# print(check_web_address("web-address.com/homepage")) # False
# print(check_web_address("My_Favorite-Blog.US")) # True


# import re
# def contains_acronym(text):
#   pattern = r"\(\w{2,}\)" 
#   result = re.search(pattern, text)
#   return result != None

# print(contains_acronym("Instant messaging (IM) is a set of communication technologies used for text-based communication")) # True
# print(contains_acronym("American Standard Code for Information Interchange (ASCII) is a character encoding standard for electronic communication")) # True
# print(contains_acronym("Please do NOT enter without permission!")) # False
# print(contains_acronym("PostScript is a fourth-generation programming language (4GL)")) # True
# print(contains_acronym("Have fun using a self-contained underwater breathing apparatus (Scuba)!")) # True


# import re

# def correct_function(text):
#   result = re.search(r" \d{5}", text)  # Corrected regex pattern with space
#   return result is not None

# def check_zip_code(text):
#   return correct_function(text)  # Call the correct_function

# # Call the check_zip_code function with test cases
# print(check_zip_code("The zip codes for New York are 10001 thru 11104."))  # True
# print(check_zip_code("90210 is a TV show"))  # False (no space before 90210)
# print(check_zip_code("Their address is: 123 Main Street, Anytown, AZ 85258-0001."))  # True
# print(check_zip_code("The Parliament of Canada is at 111 Wellington St, Ottawa, ON K1A0A9."))  # False