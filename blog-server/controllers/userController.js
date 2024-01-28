import { User } from "../models/userModel.js";
import HttpError  from "../models/errorModel.js";
import bcrypt  from 'bcryptjs';
import jwt from 'jsonwebtoken';




// ============== Register User ===============

// Path = /api/users/register

export const registerUser = async(req , res , next) => {
   try {
      const {name , email , password , confirmPassword } = req.body;
      
      if(!name || !email || !password || !confirmPassword){
         return next(new HttpError(`Please Fill all the fileds` , 422)); 
      }
      
      const newEmail = email.toLowerCase();
      
      const emailExist = await User.findOne({email : newEmail});
      
      if(emailExist){
         return next( new HttpError(`User already exist` , 422 ));
      }
      
      const trimedPassword = password.trim();
      
      if(trimedPassword.length < 6){
         return next( new HttpError(`Password must be at least 6 characters `, 422 ));
      }
      
      if(password != confirmPassword){
         return next( new HttpError(`password and confirm password are not same` , 422 ));
      }
      
      const salt = await bcrypt.genSalt(10);
      
      const hashedPassword = await bcrypt.hash(trimedPassword , salt);
      
      const newUser = await User.create({name , email: newEmail , password : hashedPassword });
      
      res.status(201).json(`New user ${newUser.email} registered`);
      
   } catch (error) {
      return next( new HttpError(`Error while registering User` , 500));
   }
}


// ============== Login User ===============

// Path = /api/users/login

export const loginUser = async(req , res , next) => {
    try{
    
       const {email , password} =  await req.body;
       
       if(!email || !password){
          return next(new HttpError(`Please fill all the fields ` , 422));
       }
       
       const existingUser = await User.findOne({email});
       
       if(existingUser == null){
          return next(new HttpError(`User does not exist` , 422));
       }
       
       const comparePassword  = await bcrypt.compare(password , existingUser.password);
       
       if(!comparePassword) {
          return next(new HttpError(`email or password is incorrect` , 422));
       }
       
       
       const token = jwt.sign({id : existingUser.id , name : existingUser.name}, process.env.JWT_KEY , {expiresIn: '5d'});
       
       res.status(200).json(token);
       
    }catch(error){
       return next(new HttpError(`Failed to Login`) , 500);
    }
};


// ============== get User ===============

// Path = /api/users/:id

export const getUser = async(req , res , next) => {
   try {
   
     const {id} =  req.params;
     
     const user = await User.findById(id).select('-password');
     
     if(!user){
        return next(new HttpError(`User not found` , 404));
     }
     
     res.status(200).json({success: true , user: user });
   
   } catch (error) {
     return next(new HttpError(`Failed to get user` , 500));
   }
}



// ============== Change Avatar User ===============

// Path = /api/users/change-avatar

export const changeAvatar = (req , res) => {
   
}




// ============== Edit User details ===============

// Path = /api/users/edit-user


export const editUser = (req , res) => {
    res.send("Edit user");
}


// ============== Get User/ Authours ===============

// Path = /api/users/authors

export const getAuthors  = async (req , res , next) => {
   try {
      const authors = await User.find({}).select("-password");
      
      if(!authors){
         return next(new HttpError(`author not present` , 422));
      }
      
      res.status(200).json(authors);
      
   } catch (error) {
      return next(new HttpError(`Failed to get Authors` , 500))
   }
}




