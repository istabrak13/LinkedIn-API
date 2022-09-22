/*
  Warnings:

  - Added the required column `postId` to the `LinkedInComment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `LinkedInComment` ADD COLUMN `postId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `LinkedInPost` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `URL` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `LinkedInComment` ADD CONSTRAINT `LinkedInComment_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `LinkedInPost`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
