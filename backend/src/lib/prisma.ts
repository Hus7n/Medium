import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export const createPrismaClient = (databaseUrl: string) => {
  const client = new PrismaClient({
    datasourceUrl: databaseUrl,
  });

  // Accelerate URLs require the extension; direct Postgres URLs do not.
  if (databaseUrl.startsWith("prisma://")) {
    return client.$extends(withAccelerate());
  }

  return client;
};
