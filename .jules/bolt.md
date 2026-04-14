## 2024-04-14 - React Re-renders and Static Data Bottleneck
**Learning:** Found a specific performance bottleneck where large static objects like `SUBSTANCES` are processed inside React component render functions (e.g. `O(N)` grouping in `SubstanceGrid`), causing unnecessary recalculation on every state change (e.g. language toggle).
**Action:** Always inspect functional components processing large static data imports to ensure they compute derived state once outside the component body.
