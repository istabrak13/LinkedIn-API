-- CreateTable
CREATE TABLE `LinkedInComment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `comment` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `LinkedInComment` ADD CONSTRAINT `LinkedInComment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `LinkedInUser`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
