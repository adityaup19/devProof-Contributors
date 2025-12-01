# DevProof Contributors

Welcome to the **DevProof Contributor Tasks** repository!

This public repo contains isolated tasks that allow developers and students to contribute real components, UI features, and logic to help grow DevProof.

## 🚀 How It Works

1. Explore available tasks in the `/tasks` folder  
2. Read the task’s README  
3. Fork this repository  
4. Complete the task in your fork  
5. Submit a Pull Request  
6. Earn DevProof points, LinkedIn certificates, and leaderboard ranking  


**🧪 How to Run the Sandbox (Test Your Work Locally)**

All tasks can be previewed using the built-in sandbox environment.

1. Open the repo in VS Code (or any editor)
2. Install dependencies:
npm install

3. Start the sandbox:
npm run dev

4. Open the preview in your browser:
http://localhost:5173/

5. Preview a specific task

Each task can be previewed at:

http://localhost:5173/tasks/<task-folder-name>

Example:

http://localhost:5173/tasks/implement-dark-mode

6. Edit the task’s index.tsx

To preview your component, import it inside the task’s index.tsx file:

import MyComponent from "./MyComponent";

export default function TaskPreview() {
  return <MyComponent />;
}

Your component will now load in the browser.

## 🧩 Current Task
- **Implement Dark Mode Toggle**  
Located at: `/tasks/implement-dark-mode`

More tasks coming soon!

## 💬 Community
This repo supports open collaboration and learning. Every PR gets reviewed, and contributors earn points and recognition inside DevProof.

Happy coding!
