import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    ARCJET_KEY: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_PRIVY_APP_ID: z.string().min(1),
    NEXT_PUBLIC_ENVIRONMENT: z.enum(["development", "staging", "production"]),
    NEXT_PUBLIC_API_URL: z.string().min(1),
    NEXT_PUBLIC_DEGEN_PASS_ADDRESS: z.string().min(1),
    NEXT_PUBLIC_TOURNAMENT_ADDRESS: z.string().min(1),
    NEXT_PUBLIC_BTA_ADDRESS: z.string().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_PRIVY_APP_ID: process.env.NEXT_PUBLIC_PRIVY_APP_ID,
    NEXT_PUBLIC_ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_DEGEN_PASS_ADDRESS: process.env.NEXT_PUBLIC_DEGEN_PASS_ADDRESS,
    NEXT_PUBLIC_TOURNAMENT_ADDRESS: process.env.NEXT_PUBLIC_TOURNAMENT_ADDRESS,
    NEXT_PUBLIC_BTA_ADDRESS: process.env.NEXT_PUBLIC_BTA_ADDRESS,
  },
});
