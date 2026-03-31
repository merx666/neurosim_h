
## 2025-03-01 - Avoid derived state recalculations from large static data
**Learning:** React components that map over or reduce large static data imports (like `SUBSTANCES`) will recalculate these O(N) operations on every render if not memoized. Even if the data is static, React doesn't know this without `useMemo`.
**Action:** When working with large static data objects imported globally, wrap any derived array/object creation (like grouping or filtering) in `useMemo(() => ..., [])` with an empty dependency array to compute it only once.
