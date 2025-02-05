import { FullBlog } from "../components/FullBlog";
import Skeleton from "../components/Skeleton";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";

export const Blog = () => {
    const {id} = useParams();
    const {loading , blog} = useBlog({
        id: id || ""   
    });
    //add skeleton
    if(loading || !blog){
        return <div className="mt-35 ">
            <Skeleton/>
        </div>
    }else{
    
    return <div>
        <FullBlog blog={blog}/>
    </div>
    }
}