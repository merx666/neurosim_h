## 2024-05-24 - Extracted static derived state to avoid O(N) recalculations on render
**Learning:** The application relies heavily on large static data objects (e.g., `SUBSTANCES` in `src/data/substances.ts`). Performing derived state calculations (like grouping categories) using `Object.values(SUBSTANCES).reduce(...)` inside functional components causes expensive O(N) recalculations on every render and mount.
**Action:** When working with large static imported data, always compute derived state outside the React component or memoize it using `useMemo` if it depends on dynamic inputs.
