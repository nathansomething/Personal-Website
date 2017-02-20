import { Component, OnInit } from '@angular/core';
// import { Location } from '@angular/common';

@Component({
  selector: 'title-block',
  templateUrl: './title-block.component.html',
  styleUrls: ['./title-block.component.scss']
})
export class TitleBlockComponent implements OnInit {

  private background_image : string;

  constructor() {
    this.background_image = "background-image: url('./assets/background_title.jpg')";
  }

  ngOnInit() {
    // console.log(this.location);
    console.log('title block loaded');
  }

}
