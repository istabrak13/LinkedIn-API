/*
  Warnings:

  - You are about to drop the `LinkedInComment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LinkedInPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LinkedInUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `LinkedInComment` DROP FOREIGN KEY `LinkedInComment_postId_fkey`;

-- DropForeignKey
ALTER TABLE `LinkedInComment` DROP FOREIGN KEY `LinkedInComment_userId_fkey`;

-- DropTable
DROP TABLE `LinkedInComment`;

-- DropTable
DROP TABLE `LinkedInPost`;

-- DropTable
DROP TABLE `LinkedInUser`;

-- CreateTable
CREATE TABLE `LinkedinPost` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `URL` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `LinkedinPost_URL_key`(`URL`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LinkedinComment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `comment` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `postId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LinkedinUser` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `URL` VARCHAR(191) NOT NULL,
    `position` VARCHAR(191) NOT NULL,
    `currentCompany` VARCHAR(191) NULL,
    `avatarURL` VARCHAR(191) NOT NULL,
    `about` VARCHAR(191) NULL,

    UNIQUE INDEX `LinkedinUser_URL_key`(`URL`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `LinkedinComment` ADD CONSTRAINT `LinkedinComment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `LinkedinUser`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LinkedinComment` ADD CONSTRAINT `LinkedinComment_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `LinkedinPost`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
