Realest Estate
-----------------------------
This is a large project that shows how to implement a real estate application with a variety of different features.
for the backend i have used :
Django, Django rest framework , PostgreSQL, Simple JWT package for authentication

for the frontent i have used :
React, Redux, Sass , create pagination using both django reat and react and many more ... 

-----

The application has many many features and i will add more ISA 

here are the main repos for both backend and front :

backend : https://github.com/khaled-hamada/realest_state_backend

frontend : https://github.com/khaled-hamada/realest_state_frontend
------

In order to test out this project, follow these steps:

clone the repository
  run: npm install, this will install the required frontend packages
  

  
  run: python3 -m venv venv
  
  then activate the virtual environment
  
  run: pip install -r requirements.txt
  
  in realest_estate/settings.py, under DATABASES, set the PASSWORD field to your database password
  
  in realest_estate/settings.py, under EMAIL_HOST_USER, set your email that you are using
  
  in realest_estate/settings.py, under EMAIL_HOST_PASSWORD, set your app password you are using
  
  in contacts/views.py, under the send_mail function, input the email you are using
