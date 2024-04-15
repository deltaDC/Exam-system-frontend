import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { endPoint } from '../utils/api';
import axios from 'axios';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatCardModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username: string = ''
  password: string = ''

  async onSubmit() {
    const data = {
      username: this.username,
      password: this.password
    }
    console.log(data)

    try {
      const response = await axios.post(`${endPoint.signup}`, data)
      console.log(response.data)

    } catch (error) {
      console.log(error)
    }
  }
}
