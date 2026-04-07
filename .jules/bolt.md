## 2023-10-24 - Precomputing Static Data Grouping
**Learning:** The application heavily relies on large static data objects (`SUBSTANCES`) that are grouped dynamically inside render methods, causing unnecessary O(N) recalculations on every render.
**Action:** Always extract derived state calculations from static imports outside React components or use `useMemo` to prevent expensive recalculations.
