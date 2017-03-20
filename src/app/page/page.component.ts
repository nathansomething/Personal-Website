import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PageComponent implements OnInit {

  @Input() title:string;

  constructor() { }

  ngOnInit() {

  }

}
