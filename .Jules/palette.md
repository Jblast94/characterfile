## 2024-05-22 - CLI Interaction Patterns
**Learning:** CLI scripts were relying on generic text inputs for complex interactions like selecting options or entering secrets.
**Action:** Establish a pattern of using `inquirer`'s specialized prompt types (`list`, `confirm`, `password`) via helper functions (`promptConfirm`, `promptSelect`, `promptSecret`) to improve usability and security.
