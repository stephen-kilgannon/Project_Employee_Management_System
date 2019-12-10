-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.18 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for addressbook
DROP DATABASE IF EXISTS `addressbook`;
CREATE DATABASE IF NOT EXISTS `addressbook` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `addressbook`;

-- Dumping structure for table addressbook.addresses
DROP TABLE IF EXISTS `addresses`;
CREATE TABLE IF NOT EXISTS `addresses` (
  `addressID` int(11) NOT NULL AUTO_INCREMENT,
  `personID` int(11) NOT NULL,
  `address1` varchar(50) NOT NULL,
  `address2` varchar(50) NOT NULL,
  `city` varchar(30) NOT NULL,
  `county` varchar(30) NOT NULL,
  `eircode` varchar(8) NOT NULL,
  PRIMARY KEY (`addressID`),
  KEY `fk_addresses` (`personID`),
  CONSTRAINT `fk_addresses` FOREIGN KEY (`personID`) REFERENCES `first name` (`personID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table addressbook.comments
DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `Column 1` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table addressbook.emailaddresses
DROP TABLE IF EXISTS `emailaddresses`;
CREATE TABLE IF NOT EXISTS `emailaddresses` (
  `emailID` int(11) NOT NULL AUTO_INCREMENT,
  `personID` int(11) NOT NULL,
  `emailAddress` varchar(50) NOT NULL,
  PRIMARY KEY (`emailID`),
  KEY `fk_emailAddresses` (`personID`),
  CONSTRAINT `fk_emailAddresses` FOREIGN KEY (`personID`) REFERENCES `first name` (`personID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table addressbook.first name
DROP TABLE IF EXISTS `first name`;
CREATE TABLE IF NOT EXISTS `first name` (
  `personID` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(30) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  PRIMARY KEY (`personID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table addressbook.id number
DROP TABLE IF EXISTS `id number`;
CREATE TABLE IF NOT EXISTS `id number` (
  `Column 1` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table addressbook.last name
DROP TABLE IF EXISTS `last name`;
CREATE TABLE IF NOT EXISTS `last name` (
  `Column 1` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table addressbook.phonenumbers
DROP TABLE IF EXISTS `phonenumbers`;
CREATE TABLE IF NOT EXISTS `phonenumbers` (
  `phoneID` int(11) NOT NULL AUTO_INCREMENT,
  `personID` int(11) NOT NULL,
  `phoneNumber` varchar(20) NOT NULL,
  PRIMARY KEY (`phoneID`),
  KEY `fk_phoneNumbers` (`personID`),
  CONSTRAINT `fk_phoneNumbers` FOREIGN KEY (`personID`) REFERENCES `first name` (`personID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
