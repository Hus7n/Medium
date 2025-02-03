import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = () => {
return <div className=" border-slate-200 border-b flex justify-between px-10 py-4">
    <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer">
    Medium
    </Link>
    <div>
        <Avatar size={"big"} name={"name"}/>
    </div>
</div>
}