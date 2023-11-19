/*
  Warnings:

  - Added the required column `authorName` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorName` to the `Reply` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorName` to the `Thread` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "authorName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Reply" ADD COLUMN     "authorName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Thread" ADD COLUMN     "authorName" TEXT NOT NULL;
