import { IsEmail, IsNotEmpty } from "class-validator"

export class RegisterDto {

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    username: string

    @IsNotEmpty()
    fullname: string

    @IsNotEmpty()
    password: string

    @IsNotEmpty()
    orgnization: string

    @IsNotEmpty()
    age: number
}