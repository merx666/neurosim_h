## 2024-06-25 - Extracting Static Derived State outside React Components
**Learning:** In codebases that heavily rely on large static data objects (like `SUBSTANCES`), computing derived state (e.g. grouping) inside functional components triggers an O(N) recalculation on every render.
**Action:** Always inspect functional components for loops, maps, or reduces on static imports. If the data is truly static and doesn't depend on component props or state, extract the computation to the module level (outside the component function) so it runs exactly once at initialization.
