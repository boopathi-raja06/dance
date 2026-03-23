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
CLIENT_URLS=http://localhost:5173,http://127.0.0.1:5173
```

Frontend `frontend/.env`

```env
VITE_API_URL=http://localhost:5000/api
```

## Deployment

For a Vercel frontend and Render backend:

- Vercel project env:
  - `VITE_API_URL=https://your-render-service.onrender.com/api`
- Render backend env:
  - `MONGODB_URI=...`
  - `CLIENT_URLS=https://your-vercel-site.vercel.app,http://localhost:5173,http://127.0.0.1:5173`

Important:

- The frontend must not use `localhost` in production.
- After changing `VITE_API_URL` in Vercel, redeploy the frontend so the new API URL is baked into the build.
