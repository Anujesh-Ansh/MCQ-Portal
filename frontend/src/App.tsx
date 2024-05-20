import React, { useState, useEffect } from 'react';
import { QuestionState, Difficulty, fetchQuizQuestions } from './API';
import QuestionCard, { AnswerObject } from './components/QuestionCard';
import { CssBaseline, Container, Button, Typography, CircularProgress } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import QuizCompleted from './components/QuizCompleted';

const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
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
    } else {
      setNumber(nextQ);
    }
  };

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <Typography variant="h2" gutterBottom>
          Quiz App
        </Typography>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <>
            <Button variant="contained" color="primary" onClick={startTrivia}>
              Start
            </Button>
            {gameOver && userAnswers.length === TOTAL_QUESTIONS && (
              <QuizCompleted score={score} />
            )}
          </>
        ) : null}
        {!gameOver ? <Typography variant="h5">Score: {score}</Typography> : null}
        {loading && <Typography>Loading Questions...</Typography>}
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
          <Button variant="contained" color="secondary" onClick={nextQuestion}>
            Next Question
          </Button>
        ) : null}
      </Container>
      <Footer />
    </>
  );
};

export default App;
