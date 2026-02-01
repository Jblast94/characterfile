## 2024-05-23 - Interactive CLI Prompts
**Learning:** Generic text inputs for choices or secrets degrade CLI UX and security. Users may mistype options or expose sensitive keys.
**Action:** Use `inquirer` specific types: `list` for selections (prevents typos), `password` for secrets (masks input), and `confirm` for booleans (clear Y/n).
