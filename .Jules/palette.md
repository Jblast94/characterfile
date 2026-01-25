## 2024-05-22 - Missing Dependencies in CLI Tools
**Learning:** The CLI scripts (`tweets2character.js`, `chats2character.js`) were missing `commander` and `chalk` in `package.json`, causing them to fail immediately. They also lacked user-friendly welcome messages and robust prompts.
**Action:** When working with CLI tools in this repo, always verify dependencies are listed in `package.json` and prefer interactive prompts (`inquirer` lists) over free-text input for predefined options.
