import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, Typography, LinearProgress } from '@mui/material';
import AnswerButton from './AnswerButton';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers = [],
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  const [timer, setTimer] = useState(15);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTimer(15);
    intervalRef.current = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [questionNr]);

  useEffect(() => {
    if (timer === 0) {
      // Handle timer expiration
      window.location.href = '/times-up';
    }
  }, [timer]);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
          Question: {questionNr} / {totalQuestions}
        </Typography>
        <Typography dangerouslySetInnerHTML={{ __html: question }} />
        <audio controls>
          <source src="your-audio-url.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <div>
          {answers.map((answer) => (
            <AnswerButton
              key={answer}
              answer={answer}
              userAnswer={userAnswer?.answer}
              correctAnswer={userAnswer?.correctAnswer || ''}
              callback={callback}
            />
          ))}
        </div>
        <Typography variant="body2" color="textSecondary" style={{ marginTop: '1rem' }}>
          Time Remaining: {timer} seconds
        </Typography>
        <LinearProgress variant="determinate" value={(timer / 15) * 100} />
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
