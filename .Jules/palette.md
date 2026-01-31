## 2024-05-22 - [CLI Input Security and Usability]
**Learning:** CLI tools handling sensitive data (API keys) via standard text input expose credentials on screen.
**Action:** Use `inquirer`'s `password` type for secrets and `list`/`confirm` types to reduce user error.
