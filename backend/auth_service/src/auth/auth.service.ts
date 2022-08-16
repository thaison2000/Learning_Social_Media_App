import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>, private JWTService: JwtService){}

    generateJWT(user: User){

       const payload = {
        user_id: user._id,
       }
       let accessToken = this.JWTService.sign(payload)
       return accessToken
    }

    async register(body: RegisterDto){

        let user: User = await this.userModel.findOne({
            email: body.email
        })
        if(user){
            return 'Email đã tồn tại, yêu cầu nhập Email mới'
        }
        else{
            //hash password
            const saltOrRounds = 10;
            const password: string = body.password;
            const hash: string = await bcrypt.hash(password, saltOrRounds);
            body.password = hash

            //create account
            let newUser = new this.userModel(body)
            return await newUser.save()
        }
    }

    async login(body: LoginDto){

        let user: User = await this.userModel.findOne({
            email: body.email
        })
        if(!user){
            return 'Email không tồn tại, yêu cầu nhập lại'
        }
        else{
            //compare password
            let isMatch = await bcrypt.compare(body.password, user.password);
            if(isMatch){
                let jwt = this.generateJWT(user)
                let data = {
                    user: user,
                    jwt: jwt
                }
                return data
            }
            else{
                return 'Mật khẩu sai, yêu cầu nhập lại'
            }
        }
    }
}
