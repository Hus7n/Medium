import { Link } from "react-router-dom";

interface BlogCardProps {
authorName : string;
title : string;
content : string;
publishedDate : string;
id : number;
}

export const BlogCard = ({
    authorName,
    title,
    id,
    content,
    publishedDate
} : BlogCardProps) =>{

    return <Link to={`/blog/${id}`}>
    <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
<div className="flex">
    
    <Avatar name = {authorName}/>
    
   <div className="font-extralight pl-2 text-sm flex flex-col justify-center">
    {authorName}
    </div>

   <div className="pl-2 font-thin text-slate-500 text-sm flex flex-col justify-center">
 .  {publishedDate}
   </div>
 </div>

 <div className=" text-xl font-semibold pt-2">
    {title}
 </div>

 <div className="text-md font-thin pt-4">
    {content.slice(0,100) + "..."}
 </div>

 <div className="text-slate-500 text-sm font-thin">
 {/* if content less than 100 word = 1 minutes*/}
    {`${Math.ceil(content.length / 100)} minute(s)`}
 </div>
    </div>
</Link>
}

 export function Avatar ({ name , size ="small"}: {name : string , size? : "small" | "big"}){
    return (
<div className={`relative inline-flex items-center justify-center ${size === "small" ? "w-6 h-6" : "w-10 h-10"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
    <span className={`${size === "small" ? "text-xs" : "text-md"}font-extralight text-gray-600 dark:text-gray-300`}>{name[0]}</span>
</div>
    );
}