import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: String;
  @Input() appareilStatus: String;

  constructor() { }

  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatus
  }

}
