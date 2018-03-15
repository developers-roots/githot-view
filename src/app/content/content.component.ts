import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hotv-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  @Input() usersList;
  
  constructor() { }

  ngOnInit() {
    console.log(this.usersList);
  }

}
