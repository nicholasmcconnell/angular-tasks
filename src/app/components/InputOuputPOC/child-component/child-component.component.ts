import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input() public helloState!: string;
  @Output() public sendGoodbye: EventEmitter<string> = new EventEmitter();

  public goodbye: any = 'goodbye!'

  constructor() { }

  ngOnInit(): void {
  }

  sendToParent() {
    this.sendGoodbye.emit(this.goodbye);
  }

}
