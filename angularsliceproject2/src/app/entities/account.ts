export class Account{

    aid: number;
    username: string;
    password: string;
    email: string;
    fname: string;
    lname: string;
    isManager: number;

    constructor (id:number, username:string, password:string, email:string, f_name:string, 
        l_name:string, isManager:number){
            this.aid = id;
            this.username = username;
            this.password = password;
            this.email = email;
            this.fname = f_name;
            this.lname = l_name;
            this.isManager = isManager;
        }
}