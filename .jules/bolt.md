## 2026-04-24 - Prevent O(N) recalculations of static data
**Learning:** This codebase relies heavily on large static data objects like `SUBSTANCES`. Deriving state from these static objects inside React components (e.g. using `.reduce` or `.filter` on `Object.values(SUBSTANCES)`) causes an expensive O(N) recalculation on every component render.
**Action:** When working with large static objects, always compute derived state outside of the React component whenever possible. If it depends on props/state, use `useMemo`.
