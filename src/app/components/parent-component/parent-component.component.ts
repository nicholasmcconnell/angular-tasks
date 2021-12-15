import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  public hello = 'hello';
  public goodbye!: any;

  constructor() { }

  ngOnInit(): void {
  }

  public childGoodbye(data: string) {
    this.goodbye = data
    // console.log(data)

  }
}
