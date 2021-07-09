import { Component } from '@angular/core';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'easy-bank-landing';
  links: string[] = [
    "Home",
    "About",
    "Contact",
    "Blog",
    "Careers"
  ]
}
