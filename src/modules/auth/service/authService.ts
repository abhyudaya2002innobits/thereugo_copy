import { User } from "../model/user";

class AuthService{
    constructor() {
        this.loginService = this.loginService.bind(this);
        this.createUser = this.createUser.bind(this);
    }

    async loginService(object:any) {
        try{
            let userExist = await User.findOne({'id':object?.id})
            if(userExist){
                return Promise.resolve(userExist);
            }else if(object?.username && object?.password){
            let userExistWithCred = await User.findOne( {$and: [{'username':object?.username}, {'password':object?.password} ]})
               return Promise.resolve(userExistWithCred);
            }else {
              let newUser = await User.create(object);
              return Promise.resolve(newUser);
            }
        }catch(e){
            return Promise.reject(e);
        }
    }

    async createUser(object:any) {
        try{
            console.log(">>>>>>2")
          let userExist = await User.findOne({'username':object?.username});
          if(userExist){
            throw new Error("User with username exist");
          }else {
            let newUser = await User.create(object);
            return Promise.resolve(newUser);
          }
        }catch(e){
            console.log(e,">>>>>>1")
            return Promise.reject(e);
        }
    }
}

export default AuthService;