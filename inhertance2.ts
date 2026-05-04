abstract class User {
  constructor(
    public id: string,
    public email: string,
    protected role: string
  ) {}

  login() {
    console.log(`${this.email} logged in`);
  }

  abstract getPermissions(): string[];
}