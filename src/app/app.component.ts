import { Component } from '@angular/core';
import { FormComponent } from './core/form-component';
import { requiredValidator } from './validators/required-validator';
import { minLenghtValidator } from './validators/length-validator';
import { IUser, User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends FormComponent {

  public user: IUser = {username: 'Pedro', password: 'Maria', sexo: 'Masculino'};

  protected afterFormInit() {
    this.inputValidation('username', [requiredValidator(), minLenghtValidator(1)]);
    this.inputValidation('password', [requiredValidator(), minLenghtValidator(1)]);

    this.fill(this.user);

    console.log('form -> ', this.form);
  }

  public submitForm(): void {
    this.submit();
    if (this.isValid()) {
      const a = this.map<User>(User);
      a.alert();
    }
  }
}
