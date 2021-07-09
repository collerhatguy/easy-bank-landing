import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pill-button',
  templateUrl: './pill-button.component.html',
  styleUrls: ['./pill-button.component.scss']
})
export class PillButtonComponent implements OnInit {
  @Input() text!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
