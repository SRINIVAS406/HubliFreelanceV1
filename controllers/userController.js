import UserModel from '../models/User.js'
import bcrypt from 'bcrypt'



class UserController {
    static validUser = false;
    static home = (req, res) => {
        if(this.validUser)
        res.render("index")
        else
        res.render("login")
    }
    static registration = (req, res) => {
        res.render("registration")
    }
    static logout = (req, res) => {
        this.validUser = false;
        res.redirect("/login");
    }

    //withoudh has store password
    /* static createUserDoc = async (req, res) => {

        try {
            //creating new document using new model
            const doc = new UserModel({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })

            console.log(req.body);

            //Saving document
            await doc.save()
            res.redirect('/login')
        } catch (err) {
            console.log("ERROR FROM UserControler: " + err);
        }
    } */

    static createUserDoc = async (req, res) => {
    const hasPassword = await bcrypt.hash(req.body.password,10);
        try {
            //creating new document using new model
            const doc = new UserModel({
                name: req.body.name,
                email: req.body.email,
                password: hasPassword,
                decryptPassword:req.body.password
            })

            console.log(req.body);

            //Saving document
            await doc.save()
            res.redirect('/login')
        } catch (err) {
            console.log("ERROR FROM UserControler: " + err);
        }
    }

    static login = (req, res) => {
        res.render("login")
    }

    //without has password verify
    /* static verifyLogin = async (req, res) => {
        try {
            const { email, password } = req.body;
            const result = await UserModel.findOne({ email: email })
            if (result) {
                if (result.email == email && result.password == password) {
                    res.send("<h1>Login Successfull..</h1>");
                } else {
                    res.send("<h1>Invalid Credentials..</h1>");
                }
            } else {
                res.send("<h1>Email Not found..</h1>");
            }
            console.log(result);
        } catch (err) {
            console.log(err);
        }
    } */

    static verifyLogin = async (req, res) => {
        try {
            const { email, password } = req.body;
            const result = await UserModel.findOne({ email: email })
            if (result) {
                var passwordcheck = await bcrypt.compare(password, result.password);
                if (result.email == email && passwordcheck) {
                    res.redirect("/");
                    this.validUser = true;
                } else {
                    res.redirect('/login?msg=login_failed');
                }
            } else {
                //res.send("<h1>Email Not found..</h1>");
                res.redirect('/login?msg=email_not_found');
            }
            
        } catch (err) {
            console.log(err);
        }
    }

}

export default UserController