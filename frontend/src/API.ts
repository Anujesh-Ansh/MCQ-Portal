import axios from "axios";
import { shuffleAnswers } from "./utils";

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & {answers: string[]}

export enum Difficulty{
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}
export enum Type{
    MULTIPLE = "multiple",
    BOOLEAN = "boolean"

}

export const fetchQuizQuestions = async (amount:number, difficulty: Difficulty, type: Type) => {
    const endpoint = `https://mcq-portal.onrender.com/${amount}/${difficulty}/${type}`
    const response = await axios.get(endpoint)


    return response.data.map((question:Question) => ({
        ...question,
        answers: shuffleAnswers([...question.incorrect_answers, question.correct_answer])
    }))
}