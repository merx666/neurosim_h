## 2024-03-16 - Memoizing Static Data Grouping in React Components
**Learning:** Even when reading from static data objects (like `SUBSTANCES` dict), transforming that data into a new format (e.g., grouping into arrays) inside the component body causes the transformation to run on every render.
**Action:** Always wrap data transformations inside components with `useMemo`, even if the source data is static, to prevent unnecessary object/array allocations and work during re-renders.
