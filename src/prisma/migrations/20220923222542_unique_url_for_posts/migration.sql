/*
  Warnings:

  - A unique constraint covering the columns `[URL]` on the table `LinkedInPost` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `LinkedInPost_URL_key` ON `LinkedInPost`(`URL`);
