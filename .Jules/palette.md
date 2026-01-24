## 2024-05-22 - CLI Security and Usability
**Learning:** CLI tools often neglect standard security practices like masking API keys, and rely on error-prone text inputs for selection.
**Action:** Use `inquirer`'s `password` type for secrets and `list` type for closed-set options to improve security and reduce user error.
