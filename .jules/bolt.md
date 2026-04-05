## 2024-04-05 - Avoid O(N) calculations in render cycle for large static data
**Learning:** Computing grouped structures using `.reduce()` over large static data (like `SUBSTANCES`) inside a component runs O(N) synchronously on every re-render. Since `SUBSTANCES` does not change dynamically, this recalculation is completely redundant.
**Action:** Always extract O(N) transformations of large static imports (or use `useMemo()`) to the module scope so they are executed only once at module load time.
