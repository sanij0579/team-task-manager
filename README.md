# 🗂️ Team Task Manager

A full-stack collaborative task management web application — inspired by tools like Trello and Asana — where users can create projects, assign tasks, and track progress with role-based access control.

🌐 **Live Demo:** [team-task-manager-eight-rho.vercel.app](https://team-task-manager-eight-rho.vercel.app)

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React, React Router, Tailwind CSS, Axios |
| Backend | Django, Django REST Framework |
| Auth | JWT (SimpleJWT) |
| Database | PostgreSQL (Production), SQLite (Local) |
| Deployment | Vercel (Frontend), Render (Backend) |

---

## ✨ Features

- 🔐 **JWT Authentication** — Signup, Login with role selection (Admin/Member)
- 📁 **Project Management** — Create projects, add/remove members
- ✅ **Task Management** — Create tasks with title, description, due date, priority
- 📊 **Dashboard** — Tasks by status, overdue tasks, tasks per user
- 🛡️ **Role-Based Access** — Admin has full control, Member can only update assigned tasks

---

## 📸 Screenshots

> _Add screenshots here after recording demo_

---

## 🛠️ Local Setup

### Backend

```bash
# 1. Clone repo
git clone https://github.com/sanij0579/team-task-manager.git
cd team-task-manager/backend

# 2. Create virtual environment
python -m venv venv
source venv/bin/activate       # Mac/Linux
venv\Scripts\activate          # Windows

# 3. Install dependencies
pip install -r requirements.txt

# 4. Run migrations
python manage.py migrate

# 5. Start server
python manage.py runserver
```

Backend runs at: `http://localhost:8000`

---

### Frontend

```bash
# 1. Go to frontend folder
cd team-task-manager/frontend

# 2. Install dependencies
npm install

# 3. Update baseURL in src/api/axios.js
# baseURL: "http://localhost:8000/api/"

# 4. Start dev server
npm run dev
```

Frontend runs at: `http://localhost:5173`

---

## 🔑 Environment Variables

### Backend
Create a `.env` file in the `backend/` folder:

```env
SECRET_KEY=your-django-secret-key
DEBUG=False
DATABASE_URL=postgresql://user:pass@host/dbname
```

---

## 📡 API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/accounts/register/` | Signup |
| POST | `/api/accounts/login/` | Login (returns JWT) |
| POST | `/api/accounts/refresh/` | Refresh token |
| GET | `/api/accounts/profile/` | Get logged in user |

### Projects
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects/` | List all projects |
| POST | `/api/projects/` | Create project |
| GET | `/api/projects/:id/` | Project detail |
| PUT | `/api/projects/:id/` | Update project |
| DELETE | `/api/projects/:id/` | Delete project |

### Tasks
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks/` | List all tasks |
| POST | `/api/tasks/` | Create task |
| GET | `/api/tasks/:id/` | Task detail |
| PUT | `/api/tasks/:id/` | Update task |
| DELETE | `/api/tasks/:id/` | Delete task |

### Dashboard
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/dashboard/` | Get dashboard stats |

---

## 📁 Folder Structure

```
team-task-manager/
├── backend/
│   ├── accounts/          # User model, auth views, serializers
│   ├── projects/          # Project model, views
│   ├── tasks/             # Task model, views
│   ├── dashboard/         # Dashboard stats
│   ├── config/            # Django settings, urls, wsgi
│   ├── requirements.txt
│   └── Procfile
│
└── frontend/
    ├── src/
    │   ├── api/           # Axios instance
    │   ├── components/    # Reusable components
    │   ├── pages/         # Login, Signup, Dashboard, Tasks
    │   └── main.jsx
    ├── vercel.json
    └── package.json
```

---

## ☁️ Deployment

### Backend — Render
- **Root Directory:** `backend`
- **Build Command:** `pip install -r requirements.txt && python manage.py migrate`
- **Start Command:** `gunicorn config.wsgi:application`
- **Environment Variables:** `SECRET_KEY`, `DATABASE_URL`, `DEBUG=False`

### Frontend — Vercel
- **Root Directory:** `frontend`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **`vercel.json`** added for React Router support

---

## 👨‍💻 Author

**Sani Jain**
GitHub: [@sanij0579](https://github.com/sanij0579)

---

## 📄 License

This project is for educational/assignment purposes.
