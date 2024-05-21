import React from 'react';
import { Button } from '@mui/material';

interface AnswerButtonProps {
  answer: string;
  userAnswer: string | undefined;
  correctAnswer: string;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const AnswerButton: React.FC<AnswerButtonProps> = ({
  answer,
  userAnswer,
  correctAnswer,
  callback,
}) => {
  const isCorrect = userAnswer && userAnswer === correctAnswer && answer === correctAnswer;
  const isIncorrect = userAnswer && userAnswer !== correctAnswer && userAnswer === answer;
  
  const getBackgroundColor = () => {
    if (isCorrect) return 'green';
    if (isIncorrect) return 'red';
    if (userAnswer) return 'grey';
    return '#202124';
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!userAnswer) {
      callback(e);
    }
  };

  return (
    <Button
      value={answer}
      onClick={handleClick}
      variant="contained"
      style={{
        color: 'white',
        textTransform: 'none',
        fontSize: '1rem',
        padding: '1rem',
      
      }}
      sx={{
        margin: '0.5rem 0',
        backgroundColor: getBackgroundColor(),
        '&:hover': {
          backgroundColor: getBackgroundColor(),
        },
        pointerEvents: userAnswer ? 'none' : 'auto',
      }}
      fullWidth
    >
      <span dangerouslySetInnerHTML={{ __html: answer }} />
    </Button>
  );
};

export default AnswerButton;
