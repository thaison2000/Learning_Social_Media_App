import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

    async getUserProfile(user_id: string){
        let user = await this.userModel.findOne({_id: user_id})
        return {
            _id: user._id,
            email: user.email,
            username: user.username,
            fullname: user.fullname,
            age: user.age,
            orgnization: user.orgnization,
            avatar: user.avatar
        }
    }
}
