/*
  Warnings:

  - You are about to drop the column `date` on the `Updates` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Updates" DROP COLUMN "date",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "systems" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "des" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cover" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "landingLink" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "systems_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "systems" ADD CONSTRAINT "systems_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
