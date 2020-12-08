import { Component, Input, OnInit } from '@angular/core';
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Todo } from '../todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() todos: Todo[];
  faTimes = faTimes;
  faPencilAlt = faPencilAlt;
  constructor() {
    this.todos = [];
  }
  ngOnInit(): void {}
}
