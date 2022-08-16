import { Body, Controller, HttpStatus, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
    constructor(private AuthService: AuthService){}

    @Post('register')
    @UsePipes(ValidationPipe)
    async register(@Body() body: RegisterDto, @Res() res ){
        let newUser = await this.AuthService.register(body)
        res.status(HttpStatus.CREATED).json(newUser)
    }

    @Post('login')
    @UsePipes(ValidationPipe)
    async login(@Body() body: LoginDto, @Res() res){
        let user = await this.AuthService.login(body)
        res.status(HttpStatus.OK).json(user)
    }
}
