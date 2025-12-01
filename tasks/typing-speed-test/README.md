# Task: Typing Speed Test (Mini-Game)

**Difficulty:** Medium  
**Points:** 150  
**Category:** Experimental Fun Project / Interactive UI  

### 🎯 Goal
Create a typing-speed mini-game where users type a given sentence and the component measures:
- Words per minute (WPM)
- Accuracy percentage
- Time taken

This is a self-contained frontend-only task using mock data.

### ✔ Requirements
- Display a target sentence (from mock data)
- Show a text input where the user types
- Measure:
  - WPM
  - Accuracy
  - Time taken
- Show a "Start" and "Restart" button
- Highlight:
  - correct characters (green)
  - incorrect characters (red)
- Responsive design

### 🧪 How to Test Locally
This repo includes a sandbox that lets you preview your work.
1. Open the repo in VS Code (or any editor)
2. Install dependencies:
npm install

3. Start the sandbox:
npm run dev

4. Open this task in your browser:
http://localhost:5173/tasks/<this-task-folder>

(Example for this task:
 http://localhost:5173/tasks/create-css-art-gallery)
5. Edit the index.tsx file in this folder
Inside index.tsx, import your component and return it:
import MyComponent from "./MyComponent";

export default function TaskPreview() {
  return <MyComponent />;
}

Your component will now appear live in the browser.



This loads the test environment defined in `mock-app.tsx`.

### 📁 Files You Should Modify
- `TypingTest.tsx`

### 🚫 Files You Should NOT Modify
- `mock-test-data.ts`
- `mock-app.tsx`

### 📝 Submission
Submit a PR including:
- Completed typing test component
- Working WPM & accuracy logic
- Clean visual feedback (colors, highlights)
- Restart functionality

Have fun — this task helps build real UI + logic skills!
