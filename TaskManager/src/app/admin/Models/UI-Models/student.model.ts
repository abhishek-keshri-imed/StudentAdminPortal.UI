import { Address } from "../UI-Models/address.models"
import {Gender} from "../UI-Models/gender.model"
export default interface Student{
    id:string,
    firstName:string,
    lastName:string,
    dateOfBirth:string,
    email:string,
    mobile:number,
    profileImageUrl:string,
    genderId:string,
    gender:Gender,
    address:Address
}