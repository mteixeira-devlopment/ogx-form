export interface IUser {
  username: string;
  password: string;
  sexo: string;
}

export class User implements IUser {
  public username: string;
  public password: string;
  public sexo: string;

  public keepMeConnect: boolean;

  public alert(): void {
    alert(`User working! ${this.username}, ${this.password}, ${this.sexo}`);
  }
}
