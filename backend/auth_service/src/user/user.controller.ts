import { Controller, Get, HttpStatus, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private UserService: UserService){}

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getStudent(@Req() req, @Res() res){
        let user = await this.UserService.getUserProfile(req.user.user_id)
        res.status(HttpStatus.OK).json(user)
    }
}
