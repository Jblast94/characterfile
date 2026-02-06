## 2024-05-23 - Interactive CLI Prompts
**Learning:** Generic text inputs for choices or secrets degrade CLI UX and security. Users may mistype options or expose sensitive keys.
**Action:** Use `inquirer` specific types: `list` for selections (prevents typos), `password` for secrets (masks input), and `confirm` for booleans (clear Y/n).

## 2024-05-24 - Immediate CLI Input Validation
**Learning:** Asking for file paths without immediate validation leads to frustration when the script crashes later due to "File not found".
**Action:** Use `inquirer`'s `validate` function with `fs.existsSync` to ensure valid file paths are provided before proceeding.

## 2024-05-25 - Consistent CLI Styling
**Learning:** Inconsistent console output styling across different scripts in the same toolkit confuses users and degrades perceived quality.
**Action:** Adopt a shared `Logger` pattern (using `chalk`) across all scripts to ensure consistent visual hierarchy (info, success, error) and output streams (stdout vs stderr).
