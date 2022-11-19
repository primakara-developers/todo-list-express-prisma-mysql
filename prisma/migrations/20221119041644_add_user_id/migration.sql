/*
  Warnings:

  - A unique constraint covering the columns `[userID]` on the table `Todo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userID` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `todo` ADD COLUMN `userID` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Todo_userID_key` ON `Todo`(`userID`);

-- CreateIndex
CREATE UNIQUE INDEX `User_username_key` ON `User`(`username`);

-- AddForeignKey
ALTER TABLE `Todo` ADD CONSTRAINT `Todo_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
