// AddQuestionForm.tsx
import React, { useState } from 'react';
import { Button, TextField, Typography, Grid, Paper, ThemeProvider } from '@mui/material';
import theme from '../theme'; // import the custom theme

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
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center" style={{ marginTop: '20px', backgroundColor: '#282c34', minHeight: '100vh' }}>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#282c34' }}>
            <Typography variant="h5" gutterBottom style={{ color: '#f27b24' }}>
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
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="Audio URL"
                name="audioUrl"
                value={formData.audioUrl}
                onChange={handleChange}
                required
              />
              {formData.options.map((option, index) => (
                <TextField
                  key={index}
                  fullWidth
                  margin="normal"
                  label={`Option ${index + 1}`}
                  value={option}
                  onChange={(e) => handleOptionChange(e.target.value, index)}
                  required
                />
              ))}
              <TextField
                fullWidth
                margin="normal"
                label="Correct Answer"
                name="correctAnswer"
                value={formData.correctAnswer}
                onChange={handleChange}
                required
              />
              <Button type="submit" variant="contained" color="secondary" style={{ marginTop: '20px', backgroundColor: '#f27b24', color: '#282c34' }}>
                Done
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default AddQuestionForm;
