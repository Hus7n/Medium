/* eslint-disable @typescript-eslint/no-unused-vars */
import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const {loading , blogs} = useBlogs();

    if(loading){
        //can add skeleton
        return <div>
            ...loading
        </div>
    }
    return <div> 
        <Appbar/>
    <div className="flex justify-center">
        <div className="max-w-xl" >
            {blogs.map((blog ) =>
                <BlogCard
                authorName= {"Author"}
                title = {"title"}
                content={"Content"}
                publishedDate={"1st feb 2025"}    
                
                />)}
        
    </div>
    </div>
    </div>
}