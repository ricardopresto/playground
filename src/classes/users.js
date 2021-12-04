export class AbstractUser {
  constructor (data) {
    this.name = data.name;
    this.email = data.email;
  }
  goodbye() {
    console.log(`Goodbye from ${this.name}!`);
  }
}

export class PhoneUser extends AbstractUser {
  constructor (data) {
    super(data);
    this.phone = data.phone;
  }
  goodbye() {
    super.goodbye();
    console.log(`Call me on ${this.phone}!`);
  }
}