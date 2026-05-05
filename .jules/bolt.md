## 2025-01-08 - Extracted large static calculation outside React Component
**Learning:** `Object.values(SUBSTANCES).reduce()` was calculating the grouped categories for hundreds of entries during every render of the `SubstanceGrid` component. In React, any computation in the body of a functional component runs on *every* render unless memoized, which for large static datasets represents a major performance bottleneck. Since the data never changes dynamically, placing the static data's derived state outside of the functional component avoids unnecessary `O(N)` calculations without even needing `useMemo`.
**Action:** Always inspect large dictionary/array static imports that are processed inside a component body. If the derived state doesn't depend on props or state, hoist it outside the component altogether. Use `useMemo` only when the computation depends on reactive variables.

## 2025-01-08 - Extracted `.toLowerCase()` out of inner `.filter()` loop in React `useMemo`
**Learning:** `searchA.toLowerCase()` inside a `substances.filter()` callback creates redundant string allocations on every iteration for hundreds of substances during every render.
**Action:** When filtering based on search inputs, always hoist string operations outside the inner array iteration callbacks and wrap the result in `useMemo` to prevent high GC pressure and unnecessary re-renders.
