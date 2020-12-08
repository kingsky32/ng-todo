import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-todo';
  todos: Todo[] = [];
  text: String = '';
  faPlus = faPlus;

  onSubmit() {
    event?.preventDefault();
    if (this.text !== '') {
      this.todos.unshift({
        Text: this.text,
      });
      this.text = '';
    } else {
      alert('Please check your Todo');
    }
  }
  setText(event: Event) {
    this.text = (<HTMLInputElement>event.target).value;
  }
}
