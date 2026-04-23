## 2024-04-06 - Static Data Recalculation
**Learning:** The application relies heavily on large static data objects (e.g., `SUBSTANCES` in `src/data/`). Computing derived state like grouping inside React components runs an expensive O(N) calculation on every render (e.g., on language change).
**Action:** Always compute derived state from static imports outside React components or memoize them using `useMemo` to prevent unnecessary performance bottlenecks on re-renders.
