import { Component, Input } from '@angular/core';
import { Auth } from './auth';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import axios from 'axios';
import { endPoint } from '../utils/api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatCardModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  @Input() authInput!: Auth

  username: string = ''
  password: string = ''

  async onSubmit() {
    // const username = (document.getElementById("username") as HTMLInputElement).value
    // const password = (document.getElementById("password") as HTMLInputElement).value
    // const data = {
    //   username,
    //   password
    // }
    const data = {
      username: this.username,
      password: this.password
    }
    console.log(data)

    try {
      const response = await axios.post(`${endPoint.login}`, data)
      console.log(response.data)
      localStorage.setItem("token", response.data.token)

    } catch (error) {
      console.log(error)
    }
  }
}
