import express from "express";
 import apiController from "../controller/apiController.js";
import multer from "multer";
import path from 'path';
import appRoot from 'app-root-path';
let router =express.Router();// khai báo  giúp express hiểu khai báo đươcngf link trên web 

// bước đầu
// const initWebRoute=(app)=>{
//     router.get('/', (req, res) => {
       
//     })
// bước sau

const initAPIRoute=(app)=>{
     router.post('/login',apiController.login)
     router.post('/sigin',apiController.Sigin)
    return app.use('/',router)
    //('/', cái này có thể thêm /abc ... để thêm tiền tố cho wed api( '/api/vesion',routet)
    
}
export default initAPIRoute;