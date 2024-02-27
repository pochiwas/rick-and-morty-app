
import { Component, OnInit } from '@angular/core';
import * as shlaami from 'rickmortyapi'

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getApi()
  }

  getApi() {

    return shlaami.getCharacter(1).then((data) => {
      console.log("API data", data)
    })
   
  }

}
