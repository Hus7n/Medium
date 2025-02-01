import { Avatar } from "./BlogCard"

export const Appbar = () => {
return <div className=" border-slate-200 border-b flex justify-between px-10 py-4">
    <div className="flex flex-col justify-center">
        Medium
    </div>

    <div>
        <Avatar size={"big"} name={"name"}/>
    </div>
</div>
}