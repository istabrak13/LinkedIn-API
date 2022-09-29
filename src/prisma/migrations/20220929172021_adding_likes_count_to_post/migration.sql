/*
  Warnings:

  - Added the required column `likesCount` to the `LinkedinPost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `LinkedinPost` ADD COLUMN `likesCount` INTEGER NOT NULL;
