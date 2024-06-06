-- CreateEnum
CREATE TYPE "Platform" AS ENUM ('WINDOWS', 'MAC', 'LINUX', 'WEB', 'ANDROID', 'IOS');

-- AlterTable
ALTER TABLE "systems" ADD COLUMN     "platforms" "Platform"[];
