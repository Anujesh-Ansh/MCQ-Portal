# 📝 MCQ Portal

Welcome to the MCQ Portal! This is a mobile-first and responsive MCQ (Multiple Choice Questions) app built using React, TypeScript, and Material UI. The app fetches questions from the Open Trivia DB API and allows users to take quizzes.

## 🚀 Demo
Check out the deployed app [here](https://mcq-portal-frontend.onrender.com).

## 🛠️ Technologies Used
- React
- TypeScript
- Material UI

## ✨ Features
- Clean and maintainable codebase
- Mobile-first and responsive design
- Integration with Open Trivia DB API for fetching questions
- Audio playback for questions
- Timer for each question
- Submit feedback functionality

## 🔧 Installation
To clone and run this application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Anujesh-Ansh/MCQ-Portal.git
   ```

2. Navigate to the project directory:
   ```bash
   cd MCQ-Portal/frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## 📋 Usage
1. **Mock Loading Screen:** Upon visiting the app, a simulated loading screen will be displayed for 2 seconds.
2. **Question Interface:** Users can listen to questions via audio and select answers from multiple choices. A timer of 15 seconds is provided for each question.
3. **Submit Feedback:** After completing the quiz, users can submit feedback along with their score.
4. **Configurable Questions:** The app allows for adding and removing questions.
5. **Code Modularity and API Integration:** Codebase is modularized, and APIs are integrated for fetching questions.
6. **Version Control:** The source code is hosted on [GitHub](https://github.com/Anujesh-Ansh/MCQ-Portal).
7. **Deployment:** The application is hosted and publicly accessible [here](https://mcq-portal-frontend.onrender.com).

## 🎨 Customization
- **Colors Used:** 
  - Background: #282c34
  - Text: #f27b24
  - Button Background (Primary): #F37A24
  - Button Text (Primary): #282c34

- **Font Family:** 
  - Heading: Shadows Into Light
  - App Title: Poetsen One

## 📦 Components
- `Header`: Displays the title and an option to add a new question.
- `Footer`: Displays the creator's information and a link to the GitHub repository.
- `LoadingScreen`: Simulated loading screen component.
- `QuestionCard`: Renders a single question with audio playback, answer choices, and timer.
- `QuizCompleted`: Displayed after completing the quiz, shows the user's score and a feedback form.
- `AddQuestionForm`: Form for adding new questions to the quiz.

## 🌟 Credits
This project was created by Anujesh. You can find more of his work on [GitHub](https://github.com/Anujesh-Ansh).

```

Feel free to tweak anything to your liking!