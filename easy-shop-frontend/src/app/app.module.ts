import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.module.html',
  styleUrl: './app.module.scss'
})
export class AppModule {
  protected title = 'easy-shop-frontend';
}
