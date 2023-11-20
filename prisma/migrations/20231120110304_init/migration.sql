-- DropForeignKey
ALTER TABLE "Thread" DROP CONSTRAINT "Thread_authorId_fkey";

-- AlterTable
ALTER TABLE "Thread" ALTER COLUMN "authorId" DROP NOT NULL,
ALTER COLUMN "authorName" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Thread" ADD CONSTRAINT "Thread_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
