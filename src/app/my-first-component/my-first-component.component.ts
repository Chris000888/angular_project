import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.scss']
})
export class MyFirstComponentComponent implements OnInit {
  isAuth = false;
  appareilOne = 'Machine à laver';
  appareilTwo = 'Télévision';
  appareilThree = 'Ordinateur';

  constructor() { 

    setTimeout(
        () => {
          this.isAuth = true;
        }, 4000
    )

  }

  onAllumer(){
    console.log("On allume tout!!!");
  }

  ngOnInit(): void {
  }

}


