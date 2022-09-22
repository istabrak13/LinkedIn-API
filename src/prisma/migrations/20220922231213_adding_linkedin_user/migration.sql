-- CreateTable
CREATE TABLE `LinkedInUser` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `URL` VARCHAR(191) NOT NULL,
    `position` VARCHAR(191) NOT NULL,
    `currentCompany` VARCHAR(191) NOT NULL,
    `avatarURL` VARCHAR(191) NOT NULL,
    `about` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `LinkedInUser_URL_key`(`URL`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
