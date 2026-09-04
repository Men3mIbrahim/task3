# NovaStore — Mini Product Store Task 3

This is the **Task 2 project upgraded for Task 3**. It keeps the original store style/components and adds the required routing, hooks, localStorage, product management, and one-time welcome message.

## Task 3 requirements implemented

- Same project extended; no separate app conceptually.
- Home and Products are separate pages.
- `react-router-dom` is used for navigation.
- Shared `Layout` uses `Outlet`.
- `Navbar` uses `NavLink`.
- Existing `Navbar`, `Hero`, `ProductsSection` responsibilities/style are preserved and extended.
- `ProductCard` remains reusable and is rendered with `map`.
- Product data is held in React state.
- Product form adds products without page reload.
- Delete removes products without page reload.
- Every product has a unique `id` used as the React `key`.
- Products are loaded from `localStorage` on first load; Task 2 products are used when nothing is saved.
- Product changes are saved automatically to `localStorage`.
- Products remain after browser refresh.
- Navbar and Footer live inside the shared `Layout`.
- A welcome message appears once per browser session/visit and disappears automatically after 3.5 seconds.
- The welcome timer is cleaned up.
- No backend or external API is used for product data.

## Run

```bash
npm install
npm start
```

## Main structure

```text
src/
├── components/
│   ├── Button.jsx
│   ├── Hero.jsx
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── ProductForm.jsx
│   └── SectionTitle.jsx
├── pages/
│   ├── Home.jsx
│   ├── NotFound.jsx
│   └── Products.jsx
├── App.jsx
├── index.js
└── index.css
```
