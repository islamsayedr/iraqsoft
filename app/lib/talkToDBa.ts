import { Update, UpdateResponse } from "../lib/definitions";
// const { PrismaClient } = require("@prisma/client");
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
//
//
//
// updates endpoints
export async function getUpdates(): Promise<UpdateResponse> {
  try {
    const fetchFromDatabase = async () => {
      const res = await prisma.updates.findMany();
      return res;
    };
    const updates: Update[] = await fetchFromDatabase();
    return updates;
  } catch (error) {
    return { error: "An error occurred while fetching updates" };
  } finally {
    await prisma.$disconnect();
  }
}
export async function getLatestUpdates(): Promise<UpdateResponse> {
  try {
    const fetchFromDatabase = async () => {
      const res = await prisma.updates.findMany({
        take: 15,
        orderBy: {
          createdAt: "desc", // Example ordering, adjust as needed
        },
      });
      return res;
    };
    const updates: Update[] = await fetchFromDatabase();
    return updates;
  } catch (error) {
    return { error: "An error occurred while fetching updates" };
  } finally {
    await prisma.$disconnect();
  }
}

//
//
//
// systems endpoints
export async function getSystems() {
  try {
    const res = await prisma.systems.findMany();
    return res;
  } catch (error: any) {
    console.error(error.message);
    return [{ error: "An error occurred while fetching updates" }];
  } finally {
    await prisma.$disconnect();
  }
}
