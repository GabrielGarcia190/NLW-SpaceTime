import fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import { memoriesRoutes } from "./routes/memories";
import cors from "@fastify/cors";


const app = fastify(/*{ logger: true }*/);


app.register(cors, {
    origin: true
})
app.register(memoriesRoutes)



app.listen({
    port: 3333,
}).then(
    () => {
        console.log("Server is running at port 3333");
    }
)