-- CreateTable
CREATE TABLE "replies" (
    "id" TEXT NOT NULL,
    "content" TEXT,
    "tweetId" TEXT,
    "liked_tweet_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "replies" ADD FOREIGN KEY ("tweetId") REFERENCES "tweets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "replies" ADD FOREIGN KEY ("liked_tweet_id") REFERENCES "liked_tweet"("id") ON DELETE SET NULL ON UPDATE CASCADE;
