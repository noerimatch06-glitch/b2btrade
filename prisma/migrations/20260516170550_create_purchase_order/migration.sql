-- CreateTable
CREATE TABLE `PurchaseOrder` (
    `id` VARCHAR(191) NOT NULL,
    `poNumber` VARCHAR(191) NOT NULL,
    `sender` VARCHAR(191) NOT NULL,
    `poRecipient` VARCHAR(191) NOT NULL,
    `deliveryLocation` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `paymentTerm` VARCHAR(191) NOT NULL,
    `poDate` VARCHAR(191) NOT NULL,
    `deliveryDate` VARCHAR(191) NOT NULL,
    `totalPpn` DOUBLE NOT NULL,
    `totalOrder` DOUBLE NOT NULL,
    `totalQty` INTEGER NOT NULL,
    `totalDiscount` DOUBLE NOT NULL,
    `expiredDate` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
