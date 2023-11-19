-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "authorName" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Reply" ALTER COLUMN "authorName" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Thread" ALTER COLUMN "authorName" DROP NOT NULL;
