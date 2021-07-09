import { Component } from '@angular/core';
import Feature from './data/Feature';
import features from "./data/feature-data";
import Article from './data/Article';
import articles from "./data/article-data";

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
  footerLinks: string[] = [
    "About Us",
    "Contact",
    "Blog",
    "Careers",
    "Support",
    "Privacy Policy"
  ]
  images: string[] = [
    "assets/icon-facebook.svg",
    "assets/icon-youtube.svg",
    "assets/icon-twitter.svg",
    "assets/icon-pinterest.svg",
    "assets/icon-instagram.svg",
  ]
  features: Feature[] = features;
  articles: Article[] = articles;
}
