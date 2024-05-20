import React, { useState } from 'react';
import { Button, TextField, Typography, Grid, Paper } from '@mui/material';

interface AddQuestionFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  question: string;
  audioUrl: string;
  options: string[];
  correctAnswer: string;
}

const AddQuestionForm: React.FC<AddQuestionFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    question: '',
    audioUrl: '',
    options: ['', '', '', ''],
    correctAnswer: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOptionChange = (value: string, index: number) => {
    setFormData(prev => ({
      ...prev,
      options: prev.options.map((option, i) => (i === index ? value : option)),
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5" gutterBottom>
            Add New Question
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Question"
              name="question"
              value={formData.question}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Audio URL"
              name="audioUrl"
              value={formData.audioUrl}
              onChange={handleChange}
            />
            {formData.options.map((option, index) => (
              <TextField
                key={index}
                fullWidth
                margin="normal"
                label={`Option ${index + 1}`}
                value={option}
                onChange={(e) => handleOptionChange(e.target.value, index)}
              />
            ))}
            <TextField
              fullWidth
              margin="normal"
              label="Correct Answer"
              name="correctAnswer"
              value={formData.correctAnswer}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
              Done
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AddQuestionForm;
