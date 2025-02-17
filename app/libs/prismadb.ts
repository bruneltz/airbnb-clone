import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()

// Necessary to avoid overwrites of instances by Next.js hot reloading
if (process.env.NODE_ENV != 'production') globalThis.prisma = client

export default client;