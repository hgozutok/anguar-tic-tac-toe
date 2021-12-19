import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {


  @Input()
  value!: 'X' | 'O';



  getBGColor(val: string) {
    if (val === 'X') {
      return '#0f0';
    }
    if (val === 'O') {
      return '#f00';
    } else
      return '##4caf50';
  }


}
