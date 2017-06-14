import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<input type='text'
                    placeholder="Enter first name"
                    [(ngModel)] = "firstName">
            <input type='text'
                    placeholder = "Enter last name"
                    [(ngModel)] = "lastName">
                    <br>Hello {{firstName}} {{lastName}}`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName : string;
  lastName  : string;
}
