## 2024-05-19 - Avoid derived state from large static data inside render functions
**Learning:** The application relies on large static data objects (e.g., `SUBSTANCES` in `src/data/`). Computing derived state from these imports (like `Object.values(SUBSTANCES).reduce(...)`) inside React components causes unnecessary O(N) recalculations on every render.
**Action:** When a calculation is based solely on static data imports and does not depend on component props or state, extract the computation completely outside the React component so it is evaluated exactly once when the module loads.
