## 2024-05-18 - [Initial Setup]
**Learning:** Initializing the Bolt journal.
**Action:** Use this to document performance specific constraints and observations.

## 2024-05-18 - [Static Data Memoization]
**Learning:** In applications relying heavily on large static data objects (like `SUBSTANCES`), computing derived state (like grouped lists) inside the render body results in expensive, unnecessary O(N) recalculations on every render.
**Action:** Always extract computations that depend purely on static imports and place them outside the React component (at the module level) to ensure they are evaluated exactly once.
