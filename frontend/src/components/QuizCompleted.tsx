import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

interface QuizCompletedProps {
  score: number;
}

const QuizCompleted: React.FC<QuizCompletedProps> = ({ score }) => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    console.log(feedback); // Handle feedback submission
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Quiz Completed
      </Typography>
      <Typography variant="h6">Your Score: {score}</Typography>
      <TextField
        label="Feedback"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        style={{ margin: '1rem 0' }}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit Feedback
      </Button>
    </Container>
  );
};

export default QuizCompleted;
