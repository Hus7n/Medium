import { Prisma, PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from "hono";
import { verify } from 'hono/jwt';
import { createBlogInput, updateBlogInput } from '@hus7n/medium-common';

export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL : string;
        JWT_SECRET : string;
      },
      Variables :{
        userId : string;
      }
}>();
//(middleware)authentication for all points
blogRouter.use("/*", async (c,next) =>{
    // || def empty string for authHeader
    const authHeader = c.req.header("authorization") || "";
    try{
    const user =  await verify(authHeader, c.env.JWT_SECRET);
    if(user){
        c.set("userId" , String(user.id));
         await next();
    }
}catch(e){
        c.status(403);
        return c.json({
            message : "You are not logged in"
        })
}
})
//create new blog
blogRouter.post('/', async (c) => {
    const body = await c .req.json();
    const {success} = createBlogInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            message : "input not correct"
        })
    }
    const authorId = c.get("userId");
    const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate());

   const blog = await prisma.blog.create({
        data:{
            title:body.title,
            content : body.content,
            //take token from user extract the id and pass frome middleware to router 
            authorId : Number (authorId)
        }
    })
    return c.json({
        id : blog.id
    })
})
  //update
  blogRouter.put('/', async (c) => {
    const body = await c .req.json();
    const {success} = updateBlogInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            message : "input not correct"
        })
    }
    const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate());

   const blog = await prisma.blog.update({
        where:{
            id : body.id
        },data:{
            title:body.title,
            content : body.content
        }
    })
    return c.json({
        id : blog.id
    })
  })
  
   //all blog title
  //need to end pagination
  blogRouter.get('/bulk',  async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.blog.findMany({
        select : {
            content : true ,
            title :true,
            id : true ,
            author :{
                select:{
                    name : true
                }
            }
        }
    });
    return c.json({
        blog
    })
  })

  //ret complete blog
  blogRouter.get('/:id',  async (c) => {
    const id =  c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try{
        const blog = await prisma.blog.findFirst({
            where :{
                id : Number(id)
            },
        })
        return c.json({
            blog
        });
    }catch(e){
       // console.log(e)
        c.status(411)
        return c.json({
            message : "error while fetching blog post"
        })
    }
  })
 