import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import axios from 'axios';
import { endPoint } from '../utils/api';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule, CommonModule, MatButtonToggleModule],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css'
})
export class ExamComponent {
  questionsData: any
  answer: any;

  async ngOnInit() {
    const examId = localStorage.getItem("examId")
    const response = await axios.get(`${endPoint.getQuestionsByExamId(examId)}`)
    this.questionsData = response.data
    console.log(this.questionsData)
  }

  onButtonClick(answer: string, question: any) {
    console.log(answer, question.correctAnswer)

  }
}
