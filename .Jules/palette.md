## 2026-01-30 - CLI Input Types
**Learning:** CLI tools often default to generic text inputs for all prompts, leading to typos and visible secrets.
**Action:** Always check `inquirer` (or similar libs) for specialized prompt types like `password`, `list`, and `confirm` before using generic `input`.
