interface BlogCardProps {
authorName : string;
title : string;
content : string;
publishedDate : string;
}

export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate
} : BlogCardProps) =>{
    return <div>
<div>
    {authorName} . {publishedDate}
</div>
<div>
    {title}
</div>
<div>
    {content.slice(0,100) + "..."}
</div>
<div>
{/* if content less than 100 word = 1 minutes*/}
    {`${Math.ceil(content.length / 100)} minutes`}
</div>
{/* line between blogs*/}
<div className="bg-slate-200 h-1 w-full">

</div>

    </div>
}