import fastify  from "fastify";
import { PrismaClient } from "@prisma/client";


const app = fastify(/*{ logger: true }*/);
const prisma = new PrismaClient();


app.get("/", async () => {
    const user = await prisma.user.findMany();
    return { user }
})



app.listen({
    port: 3333,
}).then(
    ()=>{
        console.log("Server is running at port 3333");
    }
)