# Team Task Manager

Full Stack Team Task Management Web Application

## Tech Stack

Frontend:
- React.js
- Vite
- Tailwind CSS

Backend:
- Django
- Django REST Framework
- JWT Authentication

Database:
- SQLite

## Features

- User Authentication (JWT)
- Role Based Access
- Create Projects
- Create Tasks
- Assign Tasks
- Dashboard Stats
- Task Status Update

## API Endpoints

### Accounts
- POST /api/accounts/register/
- POST /api/accounts/login/
- POST /api/accounts/refresh/
- GET /api/accounts/profile/

### Projects
- GET /api/projects/
- POST /api/projects/create/
- GET /api/projects/:id/
- POST /api/projects/:id/add-member/

### Tasks
- POST /api/tasks/create/
- GET /api/tasks/my-tasks/
- PATCH /api/tasks/update-status/:id/

### Dashboard
- GET /api/dashboard/stats/

## Run Backend

```bash
pip install -r requirements.txt
python manage.py runserver

Run Frontend
npm install
npm run dev


Then:

```bash id="g10"
git add .
git commit -m "Added README"
git push
