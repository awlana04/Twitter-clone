/*
  Warnings:

  - You are about to drop the column `liked_tweet_id` on the `replies` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "replies" DROP CONSTRAINT "replies_liked_tweet_id_fkey";

-- AlterTable
ALTER TABLE "replies" DROP COLUMN "liked_tweet_id",
ADD COLUMN     "user_id" TEXT;

-- AddForeignKey
ALTER TABLE "replies" ADD FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
