// import prisma from "./db";
// const { prisma } = require("./db");

// const { PrismaClient } = require("@prisma/client");
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getUpdates() {
  try {
    const res = await prisma.updates.findMany();
    return res;
  } catch (error: any) {
    console.error(error.message);
    return { error: "An error occurred while fetching updates" };
  } finally {
    await prisma.$disconnect();
  }
}
export async function getSystems() {
  try {
    const res = await prisma.systems.findMany();
    return res;
  } catch (error: any) {
    console.error(error.message);
    return { error: "An error occurred while fetching updates" };
  } finally {
    await prisma.$disconnect();
  }
}

// cli
// async function main() {
//   try {
//     await prisma.systems.createMany({
//       data: [

//       ],
//     });

//     console.log("Data created successfully");
//   } catch (error) {
//     console.error(error.message);
//     return { error: "An error occurred while fetching updates" };
//   } finally {
//     await prisma.$disconnect();
//   }
// }
// main();
