/*
  Warnings:

  - Made the column `authorId` on table `Thread` required. This step will fail if there are existing NULL values in that column.
  - Made the column `authorName` on table `Thread` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Thread" DROP CONSTRAINT "Thread_authorId_fkey";

-- AlterTable
ALTER TABLE "Thread" ALTER COLUMN "authorId" SET NOT NULL,
ALTER COLUMN "authorName" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Thread" ADD CONSTRAINT "Thread_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
