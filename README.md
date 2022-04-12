
# Setup Guidelines - Steps to run the project

### Backend

  1. pip install virtualenv   
  2. virtualenv -p /usr/bin/python3.8 venv 
  3. source venv/bin/activate
  4. pip install -r requirements.txt  
  5. python manage.py makemigrations
  6. python manage.py migrate
  7. python manage.py runserver 8000    

Note - Please use port 8000 only for backend as the frontend is listening the backend on this port only
---
### Front End Setup

  1. npm install
  2. npm start
