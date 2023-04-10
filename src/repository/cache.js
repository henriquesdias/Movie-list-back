import { redis } from "../config/redis.js";

async function getData(key) {
  return redis.get(key);
}

async function insertData(key, data) {
  return redis.setEx(key, 60 * 60 * 24, data);
}

const cache = {
  getData,
  insertData,
};

export default cache;
