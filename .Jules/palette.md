## 2024-05-23 - Interactive CLI Prompts
**Learning:** Generic text inputs for choices or secrets degrade CLI UX and security. Users may mistype options or expose sensitive keys.
**Action:** Use `inquirer` specific types: `list` for selections (prevents typos), `password` for secrets (masks input), and `confirm` for booleans (clear Y/n).

## 2024-05-24 - Consistent CLI Feedback
**Learning:** Inconsistent success states across CLI tools (silent vs verbose) confuse users about completion.
**Action:** Standardize "Success" output with `chalk.green`, explicit file paths, and "Next Steps" guidance.
