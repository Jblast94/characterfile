## 2024-05-23 - Interactive CLI Prompts
**Learning:** Generic text inputs for choices or secrets degrade CLI UX and security. Users may mistype options or expose sensitive keys.
**Action:** Use `inquirer` specific types: `list` for selections (prevents typos), `password` for secrets (masks input), and `confirm` for booleans (clear Y/n).

## 2024-05-24 - Helper Abstraction for CLI Consistency
**Learning:** Inconsistent implementation of CLI prompts across scripts leads to security gaps (e.g., exposed API keys).
**Action:** Replicate helper functions for prompts (`promptSecret`, `promptSelect`) to enforce security and UX standards across all CLI tools.
