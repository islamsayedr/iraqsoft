/*
  Warnings:

  - You are about to drop the `systems` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "systems" DROP CONSTRAINT "systems_userId_fkey";

-- DropTable
DROP TABLE "systems";

-- CreateTable
CREATE TABLE "Systems" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "des" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cover" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "platforms" "Platform"[],
    "landingLink" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Systems_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Systems" ADD CONSTRAINT "Systems_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
