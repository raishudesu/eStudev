/*
  Warnings:

  - Made the column `authorName` on table `Comment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `authorName` on table `Reply` required. This step will fail if there are existing NULL values in that column.
  - Made the column `authorName` on table `Thread` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "authorName" SET NOT NULL;

-- AlterTable
ALTER TABLE "Reply" ALTER COLUMN "authorName" SET NOT NULL;

-- AlterTable
ALTER TABLE "Thread" ALTER COLUMN "authorName" SET NOT NULL;
