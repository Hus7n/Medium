import { SignupInput } from "@hus7n/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({type} : {type :"signup" |"signin"}) =>{
    const navigate = useNavigate();
    const [postInputs , setPostInputs] = useState<SignupInput>({
        name : "",
        username :"",
        password : ""
    })

    async function sendRequest (){
       try{
        const response = await axios.post( `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
        const jwt = response.data;
        localStorage.setItem("token" , jwt);
        navigate ("/blogs");
       // eslint-disable-next-line @typescript-eslint/no-unused-vars
       }catch(e){
        alert("Invalid")
       }
    }

    return <div className=" h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
            <div className="px-10">
                <div className="text-3xl font-extrabold">
                        Create an account
                </div>
                <div className="text-slate-500">
                    {type === "signin" ? "Dont have an account ?" : "Already have an account ?"}
                    <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                    {type === "signin" ? "Sign Up " : "Sign In"}
                    </Link>
                </div>
            </div>
            <div className="pt-4">
            { type === "signup" ?<LabelledInput label="Name" placeholder="Name..." onChange={(e) =>{
                setPostInputs({
                    //intead of putting 3 field this will get all 
                    ...postInputs,
                    name: e.target.value
                })
            }}/> : null }
            <LabelledInput label="Username" placeholder="...@gamail.com" onChange={(e) =>{
                setPostInputs({
                    //intead of putting 3 field this will get all 
                    ...postInputs,
                    username : e.target.value
                })
            }}/>
            <LabelledInput label="Password" type={"password"} placeholder="Password" onChange={(e) =>{
                setPostInputs({
                    //intead of putting 3 field this will get all prevent overriding
                    ...postInputs,
                    password : e.target.value
                })
            }}/>
            <button type="button" onClick={sendRequest} className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign Up" : "Sign In"}</button>
            </div> 
            </div>
        </div>
    </div>
}

interface LabelledInput{
    label : string;
    onChange : (e : ChangeEvent<HTMLInputElement>) => void;
    placeholder : string;
    type ? : string
}

function LabelledInput({label , placeholder , onChange} : LabelledInput){
    return <div>
        <div>
            <label  className="block mb-2 text-sm pt-4 text-black font-semibold">{label}</label>
            <input onChange={onChange} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>
    </div>
}