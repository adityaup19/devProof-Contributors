# Task: Profile Search Component

**Difficulty:** Medium  
**Points:** 200  
**Category:** UI / Search Logic

### 🎯 Goal
Build a search component where users can type in a search box and filter a list of user profiles (mock data).  
Search must match:
- Name
- Role
- Skills

Use a clean UI and responsive layout.

### ✔ Requirements
- Render a list of profiles from `mock-profiles.ts`
- Add a text input that filters the list in real time
- Search should match:
  - name
  - role
  - skills (array)
- Case-insensitive search
- Show “No results found” if empty
- Add small UI touches (highlight match, spacing, simple card UI)
- Responsive design

### 🧪 How to Test Locally
Run:
npm install
npm run dev

This loads the test environment defined in `mock-app.tsx`.

### 📁 Files You Should Modify
- `ProfileSearch.tsx`

### 🚫 Files You Should NOT Modify
- `mock-profiles.ts`
- `mock-app.tsx`

### 📝 Submission
Submit a PR including:
- Clean filtering logic
- UI card layout
- Search box with real-time updates

This is a practical, real-world feature - good luck!
