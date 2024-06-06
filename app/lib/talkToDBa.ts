// import prisma from "./db";
// const { prisma } = require("./db");

import { Update, UpdateResponse } from "../lib/definitions";
// const { PrismaClient } = require("@prisma/client");
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getUpdates(): Promise<UpdateResponse> {
  try {
    const fetchFromDatabase = () => {
      const res = prisma.updates.findMany();
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

// cli
// async function main() {
//   await prisma.updates.createMany({
//     data: [
//       {
//         title: "برنامج سبيدو لأدارة المطاعم - فكرة عامة",
//         des: "Description for Update 2",
//         createdAt: "2024-06-07T12:00:00Z",
//         cover:
//           "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZO8J5zSP0wCZqqucLEF756eyYeAD5oYksZdvXSWRU0-AVH1WXsalJQAWY-qfjEAhS5it7vytx0m642JRKH0vP0WE99Ex-qtA=w5120-h970-rw-v1",
//         video:
//           "https://www.youtube.com/embed/pctmnCCqXi4?controls=0&autoplay=1&modestbranding=1",
//         userId: "clx314fyq0000t094h5uqfcvy",
//       },
//       {
//         title: "برنامج سبيدو لأدارة المطاعم - فكرة عامة",
//         des: "Description for Update 2",
//         createdAt: "2024-06-07T12:00:00Z",
//         cover:
//           "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZO8J5zSP0wCZqqucLEF756eyYeAD5oYksZdvXSWRU0-AVH1WXsalJQAWY-qfjEAhS5it7vytx0m642JRKH0vP0WE99Ex-qtA=w5120-h970-rw-v1",
//         video:
//           "https://www.youtube.com/embed/pctmnCCqXi4?controls=0&autoplay=1&modestbranding=1",
//         userId: "clx314fyq0000t094h5uqfcvy",
//       },
//       {
//         title: "برنامج سبيدو لأدارة المطاعم - فكرة عامة",
//         des: "Description for Update 2",
//         createdAt: "2024-06-07T12:00:00Z",
//         cover:
//           "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZO8J5zSP0wCZqqucLEF756eyYeAD5oYksZdvXSWRU0-AVH1WXsalJQAWY-qfjEAhS5it7vytx0m642JRKH0vP0WE99Ex-qtA=w5120-h970-rw-v1",
//         video:
//           "https://www.youtube.com/embed/pctmnCCqXi4?controls=0&autoplay=1&modestbranding=1",
//         userId: "clx314fyq0000t094h5uqfcvy",
//       },
//       {
//         title: "برنامج سبيدو لأدارة المطاعم - فكرة عامة",
//         des: "Description for Update 2",
//         createdAt: "2024-06-07T12:00:00Z",
//         cover:
//           "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZO8J5zSP0wCZqqucLEF756eyYeAD5oYksZdvXSWRU0-AVH1WXsalJQAWY-qfjEAhS5it7vytx0m642JRKH0vP0WE99Ex-qtA=w5120-h970-rw-v1",
//         video:
//           "https://www.youtube.com/embed/pctmnCCqXi4?controls=0&autoplay=1&modestbranding=1",
//         userId: "clx314fyq0000t094h5uqfcvy",
//       },
//       {
//         title: "برنامج سبيدو لأدارة المطاعم - فكرة عامة",
//         des: "Description for Update 2",
//         createdAt: "2024-06-07T12:00:00Z",
//         cover:
//           "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZO8J5zSP0wCZqqucLEF756eyYeAD5oYksZdvXSWRU0-AVH1WXsalJQAWY-qfjEAhS5it7vytx0m642JRKH0vP0WE99Ex-qtA=w5120-h970-rw-v1",
//         video:
//           "https://www.youtube.com/embed/pctmnCCqXi4?controls=0&autoplay=1&modestbranding=1",
//         userId: "clx314fyq0000t094h5uqfcvy",
//       },
//       {
//         title: "برنامج سبيدو لأدارة المطاعم - فكرة عامة",
//         des: "Description for Update 2",
//         createdAt: "2024-06-07T12:00:00Z",
//         cover:
//           "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZO8J5zSP0wCZqqucLEF756eyYeAD5oYksZdvXSWRU0-AVH1WXsalJQAWY-qfjEAhS5it7vytx0m642JRKH0vP0WE99Ex-qtA=w5120-h970-rw-v1",
//         video:
//           "https://www.youtube.com/embed/pctmnCCqXi4?controls=0&autoplay=1&modestbranding=1",
//         userId: "clx314fyq0000t094h5uqfcvy",
//       },
//       {
//         title: "برنامج سبيدو لأدارة المطاعم - فكرة عامة",
//         des: "Description for Update 2",
//         createdAt: "2024-06-07T12:00:00Z",
//         cover:
//           "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZO8J5zSP0wCZqqucLEF756eyYeAD5oYksZdvXSWRU0-AVH1WXsalJQAWY-qfjEAhS5it7vytx0m642JRKH0vP0WE99Ex-qtA=w5120-h970-rw-v1",
//         video:
//           "https://www.youtube.com/embed/pctmnCCqXi4?controls=0&autoplay=1&modestbranding=1",
//         userId: "clx314fyq0000t094h5uqfcvy",
//       },
//     ],
//   });
// await prisma.user.createMany({
//   data: [
//     {
//       name: "برنامج سبيدو لأدارة المطاعم - فكرة عامة",
//       password: "Description for Update 2",
//       email: "2024-06-07T12:00:00Z",
//       role: "ADMIN",
//     },
//   ],
// });
// }
// main();
