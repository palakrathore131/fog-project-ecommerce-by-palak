# Interior UI Kit Clone - Backend Integrated

This project has been modified to include a simple Node/Express backend for products,
and the React frontend now uses server-side APIs for products including sorting,
filtering, pagination and CRUD.

## Run (local)

1. Backend:
   ```
   cd backend
   npm install
   node server.js
   ```
   Backend runs on port 4000 by default.

2. Frontend:
   ```
   cd frontend
   npm install
   npm run dev
   ```
   Make sure the frontend dev server is proxying `/api` to `http://localhost:4000`.
   - If using Create React App, add `"proxy": "http://localhost:4000"` to `frontend/package.json`.
   - If using Vite, configure proxy in `vite.config.js`.

## API Examples (curl)

- List products (page 1, 6 per page):
  ```
  curl "http://localhost:4000/api/products?page=1&limit=6"
  ```

- Sort by price descending:
  ```
  curl "http://localhost:4000/api/products?sortBy=price&sortOrder=desc"
  ```

- Filter by brand:
  ```
  curl "http://localhost:4000/api/products?brand=Generic"
  ```

- Create product:
  ```
  curl -X POST http://localhost:4000/api/products -H "Content-Type: application/json" -d '{"name":"New","desc":"Desc","price":"Rp 1000","brand":"MyBrand","category":"furniture"}'
  ```

- Update product:
  ```
  curl -X PUT http://localhost:4000/api/products/1 -H "Content-Type: application/json" -d '{"name":"Updated"}'
  ```

- Delete product:
  ```
  curl -X DELETE http://localhost:4000/api/products/1
  ```

