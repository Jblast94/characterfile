## 2024-05-22 - CLI Interaction Improvements
**Learning:** CLI tools often rely on text input where list selection would prevent errors and reduce cognitive load. Also, providing links to external resources (like API keys) directly in the prompt significantly improves the "time to hello world".
**Action:** When auditing CLI tools, look for any `input` prompt that has a finite set of valid options and convert it to a `list` or `select` prompt. Always include "Get it here: URL" for API keys.
