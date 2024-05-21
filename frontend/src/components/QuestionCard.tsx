import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, Typography, LinearProgress } from '@mui/material';
import AnswerButton from './AnswerButton';
import AudioPlayer from './AudioPlayer';

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
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(intervalRef.current!);
          window.location.href = '/times-up';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [questionNr]);

  return (
    <Card
      style={{
        background: 'rgba( 255, 193, 113, 1)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(7px)',
        WebkitBackdropFilter: 'blur(7px)',
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        width: '90vw',
        marginLeft:'5vw',
        marginBottom:'0px',
      }}
    >
      <CardContent>
        <Typography variant="h5"  style={{fontWeight:'bolder', color: 'black'}}>
          Question: {questionNr} / {totalQuestions}
        </Typography>
        <Typography dangerouslySetInnerHTML={{ __html: question }} style={{color: 'black'}}/>
        <AudioPlayer audioUrl="your-audio-url.mp3" />
        <div>
          {answers.map((answer) => (
            <AnswerButton
              key={answer}
              answer={answer}
              userAnswer={userAnswer?.answer}
              correctAnswer={userAnswer?.correctAnswer || ''}
              callback={(e) => {
                clearInterval(intervalRef.current!);
                callback(e);
              }}
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
