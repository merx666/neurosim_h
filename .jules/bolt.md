## 2026-03-21 - [Memoize static derivations]
**Learning:** Found an O(N) array reduction running on every render in SubstanceGrid (triggered by useLanguage context updates).
**Action:** Use useMemo with an empty dependency array for deriving state from static imports, or move the derivation outside the component entirely.
