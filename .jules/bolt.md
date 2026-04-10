## 2026-04-10 - O(N) Render Recalculations for Static Data
**Learning:** The application heavily imports large static data structures (like `SUBSTANCES` with >500 items). Calculations derived from these (like grouping or filtering) are often incorrectly placed inside React components, causing O(N) work on every render cycle.
**Action:** Always scan React components that import large static files and ensure data processing on them is extracted outside the component function (or memoized if dependent on props).
