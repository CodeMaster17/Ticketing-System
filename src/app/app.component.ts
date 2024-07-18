import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LowercasePipe } from './pipes/lowercase.pipe';

@Component({
  selector: 'app-root',

  standalone: true,
  imports: [RouterOutlet, LowercasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ANgular-ticketing-system';
}
