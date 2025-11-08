import { config } from "dotenv";
import { resolve } from "path";
import { defineConfig, env } from "prisma/config";

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
    url: env("DATABASE_URL"),
  },
});
