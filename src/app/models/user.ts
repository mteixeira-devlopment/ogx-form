export interface IUser {
  username: string;
  password: string;
  keepMeConnect: boolean;
}

export class User implements IUser {
  public username: string;
  public password: string;
  public keepMeConnect: boolean;

  public alert(): void {
    alert('User working!');
  }
}
