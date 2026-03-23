# Dance School Website

Full-stack dance school website with a React frontend and an Express + MongoDB backend.

## Structure

- `frontend` - React app built with Vite
- `backend` - Express API with Mongoose

## Run

1. Install dependencies:
   - `npm run install:all`
2. Add environment files:
   - `backend/.env`
   - `frontend/.env`
3. Start backend:
   - `npm run dev:backend`
4. Start frontend:
   - `npm run dev:frontend`

## Environment Variables

Backend `backend/.env`

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/dance-school
CLIENT_URL=http://localhost:5173
```

Frontend `frontend/.env`

```env
VITE_API_URL=http://localhost:5000/api
```
