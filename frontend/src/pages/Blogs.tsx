import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import BlogSkeleton from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const {loading , blogs} = useBlogs();

    if(loading){
        return <div>
                 <BlogSkeleton />
                 <BlogSkeleton />
                 <BlogSkeleton />
                 <BlogSkeleton />
        </div>
    }
    return <div> 
        <Appbar/>
    <div className="flex justify-center">
        <div>
               
               {blogs.map(blog => <BlogCard
               id={blog.id}
               authorName= {blog.author.name || "Unknown"}
               title = {blog.title}
               content={blog.content}
               publishedDate={"1st feb 2025"}    
               />
               )}
               
    </div>
    </div>
    </div>
}