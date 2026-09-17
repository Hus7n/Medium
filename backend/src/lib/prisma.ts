import { neon } from "@neondatabase/serverless";
import { PrismaNeonHTTP } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";

export const createPrismaClient = (databaseUrl: string) => {
  // HTTP driver works on Cloudflare Workers (no TCP / WebSocket polyfills needed).
  const sql = neon(databaseUrl);
  const adapter = new PrismaNeonHTTP(sql);
  return new PrismaClient({ adapter });
};
