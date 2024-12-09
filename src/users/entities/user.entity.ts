import { randomUUID } from 'crypto';

export class User {
  readonly id: string;
  name: string;
  email: string;
  cpf: number;
  password: string;

  constructor(props: {
    name: string;
    email: string;
    cpf: number;
    password: string;
  }) {
    this.id = randomUUID();
    Object.assign(this, props);
  }
}
