## 2024-05-14 - Optimize Derived State of Static Data
**Learning:** Derived state calculated from large static data structures (like `SUBSTANCES` in `src/data/`) inside a React component will trigger O(N) operations on every single render.
**Action:** When working with imported static data, compute the derived state OUTSIDE the component. Since the data never changes at runtime, computing it once on module load is significantly faster and prevents wasteful re-evaluations.
