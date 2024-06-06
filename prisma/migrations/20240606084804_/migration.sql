/*
  Warnings:

  - You are about to drop the `Systems` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Updates` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "platform" AS ENUM ('WINDOWS', 'MAC', 'LINUX', 'WEB', 'ANDROID', 'IOS');

-- DropForeignKey
ALTER TABLE "Systems" DROP CONSTRAINT "Systems_userId_fkey";

-- DropForeignKey
ALTER TABLE "Updates" DROP CONSTRAINT "Updates_userId_fkey";

-- DropTable
DROP TABLE "Systems";

-- DropTable
DROP TABLE "Updates";

-- DropTable
DROP TABLE "User";

-- DropEnum
DROP TYPE "Platform";

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "updates" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "des" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cover" TEXT NOT NULL,
    "video" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "updates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "systems" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "des" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cover" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "platforms" "platform"[],
    "landingLink" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "systems_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "updates" ADD CONSTRAINT "updates_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "systems" ADD CONSTRAINT "systems_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
