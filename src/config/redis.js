import { createClient } from "redis";

let redis;
connectRedis();
async function connectRedis() {
  try {
    redis = createClient();
    await redis.connect();
  } catch (error) {
    console.log(error);
  }
}

export { redis };
