import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.scss']
})
export class CardBlockComponent implements OnInit {

  @Input('image-url') image_url:string;
  @Input('title') title:string;
  @Input('date') date:string;

  constructor() { }

  ngOnInit() {
  }

}
