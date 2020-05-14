import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  templateUrl: './my-lib.component.html',
  styles: [
    `
      :host {
        text-align: center;
        background: white;
        display: block;
        padding: 0.45rem 0.65rem;
        border-radius: 3px;
        max-width: 325px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      }
      h2 {
        color: #c85f7f;
      }

      p {
        text-align: center;
      }
    `,
  ],
})
export class MyLibComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  subtitle: string;
  @Input()
  content = '😄';
  @Output() btnClicked = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}

  handleBtnClick() {
    console.log('Clicked');
  }
}
