import { createClient } from "redis";

let redis;
connectRedis();
async function connectRedis() {
  try {
    redis = createClient({
      url: process.env.REDIS_URL ? process.env.REDIS_URL : "",
    });
    await redis.connect();
  } catch (error) {
    console.log(error);
  }
}

export { redis };
