import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-todo';
  todos: Todo[] = [];
  text: string = '';

  onSubmit() {
    event?.preventDefault();
    this.todos.push({
      Text: this.text,
    });
  }
  setText(event: Event) {
    this.text = (<HTMLInputElement>event.target).value;
  }
}
