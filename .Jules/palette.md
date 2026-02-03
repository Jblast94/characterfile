## 2024-05-23 - Interactive CLI Prompts
**Learning:** Generic text inputs for choices or secrets degrade CLI UX and security. Users may mistype options or expose sensitive keys.
**Action:** Use `inquirer` specific types: `list` for selections (prevents typos), `password` for secrets (masks input), and `confirm` for booleans (clear Y/n).

## 2024-05-24 - Inline Validation for Secrets
**Learning:** Prompting for secrets without inline validation leads to frustrating retry loops and vague error handling. Providing immediate feedback (e.g., "Must start with sk-") prevents errors before they propagate.
**Action:** Use `inquirer`'s `validate` function to provide real-time feedback on input format, especially for structured secrets like API keys.
