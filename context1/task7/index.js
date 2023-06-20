export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    const [arg1, arg2] = fullName.split(' ');
    this.firstName = arg1;
    this.lastName = arg2;
  },
};