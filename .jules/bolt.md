## 2024-05-18 - [Preventing Unnecessary Computations with useMemo]
**Learning:** Static configuration objects (like `SUBSTANCES` in this codebase) shouldn't be parsed or grouped inside component render cycles unless their structure is dynamic. Recomputing groupings on every render (e.g., when switching languages) is an easy performance trap.
**Action:** Always memoize computations derived from static objects or configuration using `useMemo` with an empty dependency array to compute them only once per component lifecycle.
