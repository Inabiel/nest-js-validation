import { IsNotEmpty } from 'class-validator';

export class createUserDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  age: string;
}
