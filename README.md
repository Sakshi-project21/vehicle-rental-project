# 🚗 Vehicle Rental Project

This is a React + Vite frontend for our University Vehicle Rental System, styled with Tailwind CSS.

## 👥 Setup Instructions for Team Members

Follow these steps exactly to get the project running on your computer:

### 1. Clone the Repository
Open your terminal and run:
```bash
git clone [https://github.com/Sakshi-project21/vehicle-rental-project.git](https://github.com/Sakshi-project21/vehicle-rental-project.git)
cd vehicle-rental-project
2. Install Dependencies (Mandatory)
The project will not work without this. This command downloads React, Tailwind, and other libraries to your machine:

Bash
cd frontend
npm install
3. Run the Development Server
Bash
npm run dev
Once it starts, open http://localhost:5173 in your browser.

🛠 Troubleshooting (If things break)
"Scripts are disabled" Error
If you see a red error when running npm, open PowerShell as Administrator and run:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

"Module Not Found" Error
If the app doesn't start, try running:
npm install --force