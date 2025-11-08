import { config } from "dotenv";
import { resolve } from "path";
import { defineConfig} from "prisma/config";
import { env } from "@saas/env";

const cwd = process.cwd();
config({ path: resolve(cwd, ".env") });
config({ path: resolve(cwd, "../..", ".env") });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env.DATABASE_URL,
  },
});
