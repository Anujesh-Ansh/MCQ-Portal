// App.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CssBaseline, Button, Typography, ThemeProvider } from '@mui/material'; // import ThemeProvider
import Header from './components/Header';
import Footer from './components/Footer';
import AddQuestionForm from './components/AddQuestionForm';
import QuizCompleted from './components/QuizCompleted';
import LoadingScreen from './components/LoadingScreen';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QuestionState, Difficulty, fetchQuizQuestions, Type } from './API';
import QuestionCard, { AnswerObject } from './components/QuestionCard';
import theme from './theme'; // import the custom theme

const TOTAL_QUESTIONS = 2;

interface FormData {
  question: string;
  audioUrl: string;
  options: string[];
  correctAnswer: string;
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [quizStatus, setQuizStatus] = useState<'not_started' | 'completed' | 'times_up'>('not_started');
  const [showAddQuestionForm, setShowAddQuestionForm] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  useEffect(() => {
    if (userAnswers.length === TOTAL_QUESTIONS) {
      setGameOver(true);
      setQuizStatus('completed');
      navigate('/quiz-completed');
    }
  }, [userAnswers, navigate]);

  const handleAddQuestion = () => {
    setShowAddQuestionForm(true);
    navigate('/add-question');
  };

  const handleSubmitQuestion = (formData: FormData) => {
    toast.success('Question added successfully!', {
      position: 'top-center',
      autoClose: 1000,
    });
    console.log('New question:', formData);
    setShowAddQuestionForm(false);
    navigate('/');
  };

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    setQuizStatus('not_started');
    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY, Type.MULTIPLE);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore(prev => prev + 1);
      const answerObject: AnswerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers(prev => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQ = number + 1;
    if (nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
      setQuizStatus('completed');
      navigate('/quiz-completed');
    } else {
      setNumber(nextQ);
    }
    console.log('gameOver:', gameOver);
  };

  const getTitle = () => {
    return userAnswers.length === TOTAL_QUESTIONS ? 'Quiz Completed' : 'Quiz App';
  };

  const getButtonText = () => {
    if (quizStatus === 'completed') return 'Restart';
    if (quizStatus === 'times_up') return 'Retry';
    return 'Start';
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header onAddQuestion={handleAddQuestion} />
      <div style={{ paddingTop: '20px', flexGrow: 1 }}>
        <Typography variant="h2" align="center" gutterBottom fontFamily={'Shadows Into Light'}>
          {getTitle()}
        </Typography>
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
            {gameOver ? (
              <>
                <Button
                  variant="contained"
                  size="large"
                  onClick={startTrivia}
                  style={{ margin: '20px auto', display: 'block', backgroundColor: '#F37A24', color: '#282c34' }}
                >
                  {getButtonText()}
                </Button>
                {gameOver && userAnswers.length === TOTAL_QUESTIONS && (
                  <QuizCompleted score={score} />
                )}
              </>
            ) : null}
            {!gameOver ? (
              <Typography variant="h5" align="center" style={{ margin: '20px 0' }}>
                Score: {score}
              </Typography>
            ) : null}
            {!loading && !gameOver && (
              <QuestionCard
                questionNr={number + 1}
                totalQuestions={TOTAL_QUESTIONS}
                question={questions[number].question}
                answers={questions[number].answers}
                userAnswer={userAnswers ? userAnswers[number] : undefined}
                callback={checkAnswer}
              />
            )}
            {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
              <Button
                variant="contained"
                color="secondary"
                onClick={nextQuestion}
                style={{ margin: '20px auto', display: 'block' }}
              >
                Next Question
              </Button>
            ) : null}
          </>
        )}
      </div>
      {showAddQuestionForm && <AddQuestionForm onSubmit={handleSubmitQuestion} />}
      <Footer />
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
