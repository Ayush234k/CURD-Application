import express, { Request, Response } from 'express';
import User from '../models/userModel';

export const Signup = async (req: Request, res: Response) => {
    try{
        const {email, password} = req.body;
        const user = await User.create({email, password});
        // const user = new User({email, password})
        // await user.save();
        res.status(201).json({msg : "New user created"});
        return;
    }
    catch(err){
        res.status(500).json({error : err});
    }
}

export const Login = async (req: Request, res: Response) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email, password});
        if(!user){
            res.status(404).json({msg : "Invalid Credentials"});
            return;
        }
        res.status(200).json({msg : "Login Successful"});
    }
    catch(err){
        res.status(500).json({error : err});
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try{
        const {email} = req.body;
        // const { email } = req.params;
        const user = await User.findOne({email});
        if(!user){
            res.status(404).json({msg : "User Not Found"});
            return;
        }
        await User.findByIdAndDelete(user._id);
        res.status(200).json({msg : "User Deleted"});
    }
    catch(err){
        res.status(500).json({err : err});
    }
}

export const updatePassword = async (req: Request, res: Response) => {
    try{
        // const {email, new_password} = req.body;
        const {email, password} = req.body;
        const user = await User.findOne({email})
        if(!user){
            res.status(404).json({msg : "User Not Found"});
            return;
        }
        const oldPassword = user.password;
        // await User.findByIdAndUpdate(user._id, {password : new_password}, {new : true});
        await User.findByIdAndUpdate(user._id, {password}, {new : true});
        res.status(200).json({msg : "Password Update"});
    }
    catch(err){
        res.status(500).json({err : err});
    }
}