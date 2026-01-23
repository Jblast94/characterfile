## 2026-01-23 - CLI Input Validation
**Learning:** CLI tools often neglect input validation for file paths, causing immediate crashes and user frustration. Using `inquirer`'s `validate` function transforms a "crash and burn" experience into a helpful, guided recovery.
**Action:** Always wrap file path inputs in CLI tools with a validation function that checks `fs.existsSync` before accepting the input.
