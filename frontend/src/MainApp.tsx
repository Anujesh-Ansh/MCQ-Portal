import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import AddQuestionForm from './components/AddQuestionForm';
import QuizCompleted from './components/QuizCompleted';

const MainApp = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/quiz-completed" element={<QuizCompleted score={0} />} />
      <Route path="/add-question" element={<AddQuestionForm onSubmit={(formData) => {}} />} />
      <Route path="*" element={<App />} />
    </Routes>
  </Router>
);

export default MainApp;
