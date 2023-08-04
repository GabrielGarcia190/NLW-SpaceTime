import { FastifyInstance } from "fastify";
import { prisma } from "../prisma";
import { z } from 'zod'

export async function memoriesRoutes(app: FastifyInstance) {
    app.get("/memories", async () => {
        const memorias = await prisma.memory.findMany({
            orderBy: {
                createdAt: 'asc'
            }
        })
        return memorias.map(memory => {
            return {
                id: memory.id,
                coverUrl: memory.converURL,
                execrpt: memory.contetn.substring(0, 115).concat('...'),

            }
        })
    })

    app.get("/memories/:id", async (request) => {
        const paramsSchema = z.object({
            id: z.string().uuid(),
        })

        const { id } = paramsSchema.parse(request.params)

        const memory = await prisma.memory.findFirstOrThrow({
            where: {
                id,
            },
        })

        return memory
    })


    app.post("/memories", async (request) => {

        const bodyShema = z.object({
            contetn: z.string(),
            converURL: z.string(),
            isPublic: z.coerce.boolean().default(false),
        })

        const { contetn, converURL, isPublic } = bodyShema.parse(request.body)

        const memory = await prisma.memory.create({
            data: {
                contetn,
                converURL,
                isPublic,
                userId: 'e6a8e977-31a6-4ea6-a20f-050ea9b5e14e'
            }
        })

        return memory
    })

    app.put("/memories/:id", async (request) => {
        const paramSchema = z.object({
            id: z.string().uuid(),
        })

        const { id } = paramSchema.parse(request.params)

        const bodyShema = z.object({
            contetn: z.string(),
            converURL: z.string(),
            isPublic: z.coerce.boolean().default(false),
        })

        const { contetn, converURL, isPublic } = bodyShema.parse(request.body)

        const memmory = await prisma.memory.update({
            where: {
                id,
            },
            data: {
                contetn,
                converURL,
                isPublic
            }
        })

        return memmory
    })

    app.delete("/memories/:id", async (request) => {
        const paramsSchema = z.object({
            id: z.string().uuid(),
        })

        const { id } = paramsSchema.parse(request.params)

        await prisma.memory.delete({
            where: {
                id,
            },
        })
    })
}