## 2026-04-19 - Pre-computing Derived State for Static Imports
**Learning:** In applications with large static objects (like `SUBSTANCES` here), using `.reduce()` or other O(N) operations inside a component's render body (e.g., `SubstanceGrid`) causes unnecessary computation on every render. Because the static objects never change, their derived structures won't change either.
**Action:** Always extract derived state calculations of static constants outside of the component body (or use `useMemo`) to prevent expensive re-evaluations during unrelated re-renders.
