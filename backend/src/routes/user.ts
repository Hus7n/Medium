import { Hono } from "hono";
import { sign } from 'hono/jwt';
import { signupInput,signinInput } from "@hus7n/medium-common";
import { createPrismaClient } from "../lib/prisma";

export const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL : string;
        JWT_SECRET : string;
      }
}>();
userRouter.post('/signup', async (c) => {
  
    const body = await c.req.json();
    //zod validation
    const {success} = signupInput.safeParse(body)
    if(!success){
      c.status(400)
      return c.json({
        message : "Enter a valid email and a password of at least 6 characters"
      })
    } 
    const prisma = createPrismaClient(c.env.DATABASE_URL);
  
    try{ 
      
    const user = await prisma.user.create({
      data:{
        username : body.username,
        password : body.password, 
        name : body.name
      }
    })
    const jwt = await sign({
      id : user.id
    },c.env.JWT_SECRET)
    return c.text(jwt)
   // return c.text('Signed Up')
  }catch(e){
    console.log(e)
    // P2002 = Prisma unique violation, 23505 = Postgres unique violation (driver adapter)
    const code = (e as {code?: string})?.code;
    if (code === "P2002" || code === "23505") {
      c.status(409);
      return c.json({ message : "An account with this email already exists. Try signing in instead." })
    }
    c.status(500);
    return c.json({ message : "Could not create the account. Please try again." })
  }
  })
  
  userRouter.post('/signin', async (c) => {
    const body = await c.req.json();
    const {success} = signinInput.safeParse(body);
    if(!success){
      c.status(400)
      return c.json({
        message : "Enter a valid email and a password of at least 6 characters"
      })
    }
    const prisma = createPrismaClient(c.env.DATABASE_URL);
  
    try{ 
      
    const user = await prisma.user.findFirst({
      where:{
        username : body.username,
        password : body.password, 
      }
    })
    if(!user){
      c.status(401);
    return c.json({message :"Incorrect email or password"})
    }
    const jwt = await sign({
      id : user.id
    },c.env.JWT_SECRET)
    return c.text(jwt)
    //return c.text('SignedIn')
  }catch(e){
    console.log(e)
    c.status(500);
    return c.json({ message : "Could not sign you in. Please try again." })
  }
  })