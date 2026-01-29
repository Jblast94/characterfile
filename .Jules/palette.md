## 2026-01-29 - CLI Interaction Improvements
**Learning:** Generic text inputs for critical configuration (API keys, choices) lead to user errors and security risks (exposed keys). Users expect interactive CLIs to behave like modern tools (masking secrets, arrow-key selection).
**Action:** Always favor `inquirer` specific types (list, password, confirm) over generic input when appropriate to reduce cognitive load and error rates.
