import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import axios from 'axios';
import { endPoint } from '../utils/api';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  dataSource: any
  displayedColumns: string[] = []

  constructor() { }

  async ngOnInit() {
    const response = await axios.get(`${endPoint.getAllExams}`)
    this.dataSource = response.data
    let firstResult = this.dataSource[0]
    const keyArr = Object.keys(firstResult)
    this.displayedColumns = keyArr
    console.log(this.dataSource)
  }

  async onClickRow(row: any) {
    const examId = row.examId
    const response = await axios.get(`${endPoint.getQuestionsByExamId(examId)}`)
    console.log(response)
  }

}
