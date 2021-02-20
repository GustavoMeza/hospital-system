-- MariaDB dump 10.18  Distrib 10.5.8-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: hospital_system
-- ------------------------------------------------------
-- Server version	10.5.8-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `batches`
--

DROP TABLE IF EXISTS `batches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `batches` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `internal_code` varchar(255) NOT NULL,
  `input` int(11) NOT NULL,
  `drug` int(11) NOT NULL,
  `expires_on` date NOT NULL,
  `quantity` int(11) NOT NULL,
  `lab` varchar(255) NOT NULL,
  `status` enum('active','history') NOT NULL,
  `original_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `input` (`input`),
  KEY `drug` (`drug`),
  KEY `original_id` (`original_id`),
  KEY `created_by` (`created_by`),
  CONSTRAINT `batches_ibfk_1` FOREIGN KEY (`input`) REFERENCES `inputs` (`id`),
  CONSTRAINT `batches_ibfk_2` FOREIGN KEY (`drug`) REFERENCES `drugs` (`id`),
  CONSTRAINT `batches_ibfk_3` FOREIGN KEY (`original_id`) REFERENCES `batches` (`id`),
  CONSTRAINT `batches_ibfk_4` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `batches`
--

LOCK TABLES `batches` WRITE;
/*!40000 ALTER TABLE `batches` DISABLE KEYS */;
INSERT INTO `batches` VALUES (1,'league',1,3,'2006-07-23',164319,'manacle','active',NULL,'2021-02-01 17:39:31',NULL),(2,'fireman',6,2,'1940-05-07',231593,'oval','active',NULL,'2021-02-01 17:39:31',NULL),(3,'dough',10,3,'1938-07-15',877809,'homeownership','active',NULL,'2021-02-01 17:39:31',NULL),(4,'asset',5,3,'1961-05-24',552004,'skylight','active',NULL,'2021-02-01 17:39:31',NULL),(5,'bottom-line',7,9,'1995-02-11',981549,'impediment','active',NULL,'2021-02-01 17:39:31',NULL),(6,'pineapple',1,1,'1901-06-08',207604,'double','active',NULL,'2021-02-01 17:39:31',NULL),(7,'grove',5,7,'1915-11-03',158742,'shrimp','active',NULL,'2021-02-01 17:39:31',NULL),(8,'vivo',7,8,'1909-01-07',700305,'slate','active',NULL,'2021-02-01 17:39:31',NULL),(9,'loafer',4,8,'1938-02-25',120242,'buying','active',NULL,'2021-02-01 17:39:31',NULL),(10,'bug',1,7,'1901-03-02',201364,'impostor','active',NULL,'2021-02-01 17:39:31',NULL);
/*!40000 ALTER TABLE `batches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `drugs`
--

DROP TABLE IF EXISTS `drugs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `drugs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `internal_code` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `presentation` varchar(255) NOT NULL,
  `status` enum('active','history') NOT NULL,
  `original_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `original_id` (`original_id`),
  KEY `created_by` (`created_by`),
  CONSTRAINT `drugs_ibfk_1` FOREIGN KEY (`original_id`) REFERENCES `drugs` (`id`),
  CONSTRAINT `drugs_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drugs`
--

LOCK TABLES `drugs` WRITE;
/*!40000 ALTER TABLE `drugs` DISABLE KEYS */;
INSERT INTO `drugs` VALUES (1,'uykqgj96d18','Synthroid ','Tablets','active',NULL,'2021-02-01 17:39:30',NULL),(2,'iax09onfdbl','Crestor','Tablets','active',NULL,'2021-02-01 17:39:31',NULL),(3,'c5v0nbx29a8','Ventolin HFA ','Spray','active',NULL,'2021-02-01 17:39:31',NULL),(4,'sm9y6qb5v41','Nexium','Tablets','active',NULL,'2021-02-01 17:39:31',NULL),(5,'6gcj37sbre2','Advair Diskus','Spray','active',NULL,'2021-02-01 17:39:31',NULL),(6,'5uo6qac32sk','Lantus Solostar','Spray','active',NULL,'2021-02-01 17:39:31',NULL),(7,'o3s7yv8r4xp','Vyvanse ','Tablets','active',NULL,'2021-02-01 17:39:31',NULL),(8,'79ril2qozm4','Lyrica ','Tablets','active',NULL,'2021-02-01 17:39:31',NULL),(9,'nr6e5wchfqj','Spiriva Handihaler','Spray','active',NULL,'2021-02-01 17:39:31',NULL),(10,'mrjuo3a8tx0','Januvia','Tablets','active',NULL,'2021-02-01 17:39:31',NULL);
/*!40000 ALTER TABLE `drugs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fill_batches`
--

DROP TABLE IF EXISTS `fill_batches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fill_batches` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `prescription_fill` int(11) NOT NULL,
  `outputs` int(11) NOT NULL,
  `status` enum('active','history') NOT NULL,
  `original_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `prescription_fill` (`prescription_fill`),
  KEY `outputs` (`outputs`),
  KEY `original_id` (`original_id`),
  KEY `created_by` (`created_by`),
  CONSTRAINT `fill_batches_ibfk_1` FOREIGN KEY (`prescription_fill`) REFERENCES `prescription_fills` (`id`),
  CONSTRAINT `fill_batches_ibfk_2` FOREIGN KEY (`outputs`) REFERENCES `outputs` (`id`),
  CONSTRAINT `fill_batches_ibfk_3` FOREIGN KEY (`original_id`) REFERENCES `fill_batches` (`id`),
  CONSTRAINT `fill_batches_ibfk_4` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fill_batches`
--

LOCK TABLES `fill_batches` WRITE;
/*!40000 ALTER TABLE `fill_batches` DISABLE KEYS */;
INSERT INTO `fill_batches` VALUES (1,10,6,'active',NULL,'2021-02-01 17:39:31',NULL),(2,4,2,'active',NULL,'2021-02-01 17:39:31',NULL),(3,2,7,'active',NULL,'2021-02-01 17:39:31',NULL),(4,1,2,'active',NULL,'2021-02-01 17:39:31',NULL),(5,2,2,'active',NULL,'2021-02-01 17:39:31',NULL),(6,5,10,'active',NULL,'2021-02-01 17:39:31',NULL),(7,6,7,'active',NULL,'2021-02-01 17:39:31',NULL),(8,7,6,'active',NULL,'2021-02-01 17:39:31',NULL),(9,9,3,'active',NULL,'2021-02-01 17:39:31',NULL),(10,1,3,'active',NULL,'2021-02-01 17:39:31',NULL);
/*!40000 ALTER TABLE `fill_batches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inputs`
--

DROP TABLE IF EXISTS `inputs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inputs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `supplier` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `type` enum('purchase','transfer','other') NOT NULL,
  `status` enum('active','history') NOT NULL,
  `original_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `original_id` (`original_id`),
  KEY `created_by` (`created_by`),
  CONSTRAINT `inputs_ibfk_1` FOREIGN KEY (`original_id`) REFERENCES `inputs` (`id`),
  CONSTRAINT `inputs_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inputs`
--

LOCK TABLES `inputs` WRITE;
/*!40000 ALTER TABLE `inputs` DISABLE KEYS */;
INSERT INTO `inputs` VALUES (1,'heirloom','summer','show-stopper','purchase','active',NULL,'2021-02-01 17:39:31',NULL),(2,'painter','pill','minority','transfer','active',NULL,'2021-02-01 17:39:31',NULL),(3,'bifocals','radiator','fig','purchase','active',NULL,'2021-02-01 17:39:31',NULL),(4,'contributor','insolence','idiot','transfer','active',NULL,'2021-02-01 17:39:31',NULL),(5,'theism','turkey','vehicle','purchase','active',NULL,'2021-02-01 17:39:31',NULL),(6,'maid','complication','cloves','transfer','active',NULL,'2021-02-01 17:39:31',NULL),(7,'gong','aspic','involvement','purchase','active',NULL,'2021-02-01 17:39:31',NULL),(8,'synod','castanet','calico','transfer','active',NULL,'2021-02-01 17:39:31',NULL),(9,'nursery','feather','campanile','other','active',NULL,'2021-02-01 17:39:31',NULL),(10,'inhibition','webinar','hunter','transfer','active',NULL,'2021-02-01 17:39:31',NULL);
/*!40000 ALTER TABLE `inputs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `licenses`
--

DROP TABLE IF EXISTS `licenses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `licenses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) NOT NULL,
  `user` int(11) NOT NULL,
  `college` varchar(255) NOT NULL,
  `type` enum('professional','specialty') NOT NULL,
  `status` enum('active','history') NOT NULL,
  `original_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user` (`user`),
  KEY `original_id` (`original_id`),
  KEY `created_by` (`created_by`),
  CONSTRAINT `licenses_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`id`),
  CONSTRAINT `licenses_ibfk_2` FOREIGN KEY (`original_id`) REFERENCES `licenses` (`id`),
  CONSTRAINT `licenses_ibfk_3` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `licenses`
--

LOCK TABLES `licenses` WRITE;
/*!40000 ALTER TABLE `licenses` DISABLE KEYS */;
INSERT INTO `licenses` VALUES (1,'59pbbrr7rjbbt',6,'Australasian College for Emergency Medicine','professional','active',NULL,'2021-02-01 17:39:30',NULL),(2,'58sbbfh4dybbs',1,'Australasian College of Dermatologists','professional','active',NULL,'2021-02-01 17:39:30',NULL),(3,'89pbbss2wzbbt',8,'Australasian College of Sport and Exercise Physicians','specialty','active',NULL,'2021-02-01 17:39:30',NULL),(4,'96vbbtb4yzbbz',2,'Australian and New Zealand College of Anaesthetists','specialty','active',NULL,'2021-02-01 17:39:30',NULL),(5,'27fbbgp6mjbbh',5,'Australian College of Rural and Remote Medicine','specialty','active',NULL,'2021-02-01 17:39:30',NULL),(6,'47kbbxm6zwbbw',7,'College of Intensive Care Medicine','specialty','active',NULL,'2021-02-01 17:39:30',NULL),(7,'59hbbcf3wtbbg',9,'Royal Australasian College of Medical Administrators','specialty','active',NULL,'2021-02-01 17:39:30',NULL),(8,'82tbbmb5qxbbg',8,'Royal Australasian College of Physicians','specialty','active',NULL,'2021-02-01 17:39:30',NULL),(9,'53qbbmt7mgbbx',5,'Royal Australasian College of Surgeons','specialty','active',NULL,'2021-02-01 17:39:30',NULL),(10,'82cbbfg7fgbbh',4,'Royal Australian and New Zealand College of Obstetricians and Gynaecologists','professional','active',NULL,'2021-02-01 17:39:30',NULL);
/*!40000 ALTER TABLE `licenses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `outputs`
--

DROP TABLE IF EXISTS `outputs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `outputs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sign` int(11) DEFAULT NULL,
  `batch` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `type` enum('expiration','prescription_fill','other') NOT NULL,
  `status` enum('active','history') NOT NULL,
  `original_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sign` (`sign`),
  KEY `batch` (`batch`),
  KEY `original_id` (`original_id`),
  KEY `created_by` (`created_by`),
  CONSTRAINT `outputs_ibfk_1` FOREIGN KEY (`sign`) REFERENCES `users` (`id`),
  CONSTRAINT `outputs_ibfk_2` FOREIGN KEY (`batch`) REFERENCES `batches` (`id`),
  CONSTRAINT `outputs_ibfk_3` FOREIGN KEY (`original_id`) REFERENCES `outputs` (`id`),
  CONSTRAINT `outputs_ibfk_4` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `outputs`
--

LOCK TABLES `outputs` WRITE;
/*!40000 ALTER TABLE `outputs` DISABLE KEYS */;
INSERT INTO `outputs` VALUES (1,1,6,433117,'confirmation','expiration','active',NULL,'2021-02-01 17:39:31',NULL),(2,4,1,150731,'demon','other','active',NULL,'2021-02-01 17:39:31',NULL),(3,9,3,873374,'chromolithograph','prescription_fill','active',NULL,'2021-02-01 17:39:31',NULL),(4,4,2,455975,'celsius','expiration','active',NULL,'2021-02-01 17:39:31',NULL),(5,8,8,973556,'graduate','expiration','active',NULL,'2021-02-01 17:39:31',NULL),(6,3,1,541191,'oven','expiration','active',NULL,'2021-02-01 17:39:31',NULL),(7,3,3,932990,'jaw','expiration','active',NULL,'2021-02-01 17:39:31',NULL),(8,10,7,112443,'supporter','prescription_fill','active',NULL,'2021-02-01 17:39:31',NULL),(9,9,9,351740,'prose','prescription_fill','active',NULL,'2021-02-01 17:39:31',NULL),(10,10,2,933634,'doughnut','other','active',NULL,'2021-02-01 17:39:31',NULL);
/*!40000 ALTER TABLE `outputs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patients`
--

DROP TABLE IF EXISTS `patients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `file` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `curp` varchar(255) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `sex` enum('male','female','other') DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `floor` varchar(255) DEFAULT NULL,
  `bed` varchar(255) DEFAULT NULL,
  `diagnostic` varchar(255) DEFAULT NULL,
  `status` enum('active','history') NOT NULL,
  `original_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `original_id` (`original_id`),
  KEY `created_by` (`created_by`),
  CONSTRAINT `patients_ibfk_1` FOREIGN KEY (`original_id`) REFERENCES `patients` (`id`),
  CONSTRAINT `patients_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patients`
--

LOCK TABLES `patients` WRITE;
/*!40000 ALTER TABLE `patients` DISABLE KEYS */;
INSERT INTO `patients` VALUES (1,'study','inevitable','constitution','self-confidence','1932-06-12','other','aglet','manor','degradation','code','active',NULL,'2021-02-01 17:39:31',NULL),(2,'close','warfare','anybody','retreat','2008-10-10','female','gift','webinar','poison','search','active',NULL,'2021-02-01 17:39:31',NULL),(3,'sustenance','zero','icecream','kazoo','2002-01-07','male','uncle','sparerib','electrocardiogram','threshold','active',NULL,'2021-02-01 17:39:31',NULL),(4,'tuxedo','zebrafish','blood','crook','1974-03-27','other','woodwind','gaiters','cave','labourer','active',NULL,'2021-02-01 17:39:31',NULL),(5,'creationist','utility','reservoir','upward','1957-11-11','female','offset','means','cauliflower','pomegranate','active',NULL,'2021-02-01 17:39:31',NULL),(6,'armament','charger','soulmate','word','1977-07-04','male','wound','analog','consent','testament','active',NULL,'2021-02-01 17:39:31',NULL),(7,'sunglasses','arch-rival','carbon','margin','1946-04-02','male','norm','dud','newsletter','nectarine','active',NULL,'2021-02-01 17:39:31',NULL),(8,'zebrafish','position','leaf','sari','1949-10-12','male','emotion','dance','gamebird','warden','active',NULL,'2021-02-01 17:39:31',NULL),(9,'placode','hog','peacoat','hammer','2018-10-08','other','debris','pajamas','keystone','nation','active',NULL,'2021-02-01 17:39:31',NULL),(10,'pineapple','selling','paper','insolence','1954-04-23','male','tragedy','era','chick','amenity','active',NULL,'2021-02-01 17:39:31',NULL);
/*!40000 ALTER TABLE `patients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action` varchar(255) NOT NULL,
  `status` enum('active','history') NOT NULL,
  `original_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `original_id` (`original_id`),
  KEY `created_by` (`created_by`),
  CONSTRAINT `permissions_ibfk_1` FOREIGN KEY (`original_id`) REFERENCES `permissions` (`id`),
  CONSTRAINT `permissions_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
INSERT INTO `permissions` VALUES (1,'day','active',NULL,'2021-02-01 17:39:30',NULL),(2,'almighty','active',NULL,'2021-02-01 17:39:30',NULL),(3,'speakerphone','active',NULL,'2021-02-01 17:39:30',NULL),(4,'cranberry','active',NULL,'2021-02-01 17:39:30',NULL),(5,'welcome','active',NULL,'2021-02-01 17:39:30',NULL),(6,'cheer','active',NULL,'2021-02-01 17:39:30',NULL);
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prescription_drugs`
--

DROP TABLE IF EXISTS `prescription_drugs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prescription_drugs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `prescription` int(11) NOT NULL,
  `drug` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `days` int(11) NOT NULL,
  `dose` varchar(255) NOT NULL,
  `frequency` varchar(255) NOT NULL,
  `administration_route` varchar(255) NOT NULL,
  `status` enum('active','history') NOT NULL,
  `original_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `prescription` (`prescription`),
  KEY `drug` (`drug`),
  KEY `original_id` (`original_id`),
  KEY `created_by` (`created_by`),
  CONSTRAINT `prescription_drugs_ibfk_1` FOREIGN KEY (`prescription`) REFERENCES `prescriptions` (`id`),
  CONSTRAINT `prescription_drugs_ibfk_2` FOREIGN KEY (`drug`) REFERENCES `drugs` (`id`),
  CONSTRAINT `prescription_drugs_ibfk_3` FOREIGN KEY (`original_id`) REFERENCES `prescription_drugs` (`id`),
  CONSTRAINT `prescription_drugs_ibfk_4` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prescription_drugs`
--

LOCK TABLES `prescription_drugs` WRITE;
/*!40000 ALTER TABLE `prescription_drugs` DISABLE KEYS */;
INSERT INTO `prescription_drugs` VALUES (1,6,10,639251,125435,'fit','moccasins','prow','active',NULL,'2021-02-01 17:39:31',NULL),(2,9,6,115561,558683,'witch-hunt','deathwatch','harbor','active',NULL,'2021-02-01 17:39:31',NULL),(3,4,8,224676,515801,'locker','candle','screamer','active',NULL,'2021-02-01 17:39:31',NULL),(4,4,1,193236,272056,'goodie','nose','actor','active',NULL,'2021-02-01 17:39:31',NULL),(5,2,10,552380,736896,'usage','satellite','toothbrush','active',NULL,'2021-02-01 17:39:31',NULL),(6,8,6,160670,771987,'category','alert','tractor','active',NULL,'2021-02-01 17:39:31',NULL),(7,8,7,838312,322497,'miss','dealing','amber','active',NULL,'2021-02-01 17:39:31',NULL),(8,2,3,48379,511367,'raccoon','spell','communication','active',NULL,'2021-02-01 17:39:31',NULL),(9,5,3,244435,272090,'abdomen','gray','labourer','active',NULL,'2021-02-01 17:39:31',NULL),(10,7,3,370260,967788,'duffel','handgun','razor','active',NULL,'2021-02-01 17:39:31',NULL);
/*!40000 ALTER TABLE `prescription_drugs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prescription_fills`
--

DROP TABLE IF EXISTS `prescription_fills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prescription_fills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `prescription` int(11) NOT NULL,
  `receiver_type` enum('patient','emissary','crew','other') NOT NULL,
  `receiver_name` varchar(255) NOT NULL,
  `receiver_id_type` enum('ine','passport') NOT NULL,
  `receiver_id_number` varchar(255) NOT NULL,
  `status` enum('active','history') NOT NULL,
  `original_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `prescription` (`prescription`),
  KEY `original_id` (`original_id`),
  KEY `created_by` (`created_by`),
  CONSTRAINT `prescription_fills_ibfk_1` FOREIGN KEY (`prescription`) REFERENCES `prescriptions` (`id`),
  CONSTRAINT `prescription_fills_ibfk_2` FOREIGN KEY (`original_id`) REFERENCES `prescription_fills` (`id`),
  CONSTRAINT `prescription_fills_ibfk_3` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prescription_fills`
--

LOCK TABLES `prescription_fills` WRITE;
/*!40000 ALTER TABLE `prescription_fills` DISABLE KEYS */;
INSERT INTO `prescription_fills` VALUES (1,3,'emissary','alluvium','passport','volleyball','active',NULL,'2021-02-01 17:39:31',NULL),(2,8,'patient','trip','ine','axis','active',NULL,'2021-02-01 17:39:31',NULL),(3,8,'crew','panty','ine','blind','active',NULL,'2021-02-01 17:39:31',NULL),(4,3,'emissary','daughter','passport','measles','active',NULL,'2021-02-01 17:39:31',NULL),(5,7,'crew','blowgun','ine','wilderness','active',NULL,'2021-02-01 17:39:31',NULL),(6,9,'other','bore','passport','faculty','active',NULL,'2021-02-01 17:39:31',NULL),(7,2,'patient','tuber','ine','shareholder','active',NULL,'2021-02-01 17:39:31',NULL),(8,10,'other','republic','passport','access','active',NULL,'2021-02-01 17:39:31',NULL),(9,7,'emissary','equal','passport','subexpression','active',NULL,'2021-02-01 17:39:31',NULL),(10,6,'emissary','disposition','ine','labor','active',NULL,'2021-02-01 17:39:31',NULL);
/*!40000 ALTER TABLE `prescription_fills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prescription_returns`
--

DROP TABLE IF EXISTS `prescription_returns`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prescription_returns` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `prescription` int(11) NOT NULL,
  `batch` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `status` enum('active','history') NOT NULL,
  `original_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `prescription` (`prescription`),
  KEY `batch` (`batch`),
  KEY `original_id` (`original_id`),
  KEY `created_by` (`created_by`),
  CONSTRAINT `prescription_returns_ibfk_1` FOREIGN KEY (`prescription`) REFERENCES `prescriptions` (`id`),
  CONSTRAINT `prescription_returns_ibfk_2` FOREIGN KEY (`batch`) REFERENCES `batches` (`id`),
  CONSTRAINT `prescription_returns_ibfk_3` FOREIGN KEY (`original_id`) REFERENCES `prescription_returns` (`id`),
  CONSTRAINT `prescription_returns_ibfk_4` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prescription_returns`
--

LOCK TABLES `prescription_returns` WRITE;
/*!40000 ALTER TABLE `prescription_returns` DISABLE KEYS */;
INSERT INTO `prescription_returns` VALUES (1,10,2,571812,'active',NULL,'2021-02-01 17:39:31',NULL),(2,2,2,886470,'active',NULL,'2021-02-01 17:39:31',NULL),(3,1,1,95541,'active',NULL,'2021-02-01 17:39:31',NULL),(4,3,4,894446,'active',NULL,'2021-02-01 17:39:31',NULL),(5,6,10,767991,'active',NULL,'2021-02-01 17:39:31',NULL),(6,7,7,347396,'active',NULL,'2021-02-01 17:39:31',NULL),(7,9,9,603472,'active',NULL,'2021-02-01 17:39:31',NULL),(8,4,8,219064,'active',NULL,'2021-02-01 17:39:31',NULL),(9,7,3,861147,'active',NULL,'2021-02-01 17:39:31',NULL),(10,2,2,119111,'active',NULL,'2021-02-01 17:39:31',NULL);
/*!40000 ALTER TABLE `prescription_returns` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prescriptions`
--

DROP TABLE IF EXISTS `prescriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prescriptions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `internal_code` int(11) NOT NULL,
  `patient` int(11) NOT NULL,
  `doctor` int(11) NOT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `status` enum('active','history') NOT NULL,
  `original_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `patient` (`patient`),
  KEY `doctor` (`doctor`),
  KEY `original_id` (`original_id`),
  KEY `created_by` (`created_by`),
  CONSTRAINT `prescriptions_ibfk_1` FOREIGN KEY (`patient`) REFERENCES `patients` (`id`),
  CONSTRAINT `prescriptions_ibfk_2` FOREIGN KEY (`doctor`) REFERENCES `users` (`id`),
  CONSTRAINT `prescriptions_ibfk_3` FOREIGN KEY (`original_id`) REFERENCES `prescriptions` (`id`),
  CONSTRAINT `prescriptions_ibfk_4` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prescriptions`
--

LOCK TABLES `prescriptions` WRITE;
/*!40000 ALTER TABLE `prescriptions` DISABLE KEYS */;
INSERT INTO `prescriptions` VALUES (1,798398,2,4,'combination','active',NULL,'2021-02-01 17:39:31',NULL),(2,300333,4,4,'nerve','active',NULL,'2021-02-01 17:39:31',NULL),(3,635189,1,4,'oldie','active',NULL,'2021-02-01 17:39:31',NULL),(4,294241,8,4,'kindness','active',NULL,'2021-02-01 17:39:31',NULL),(5,633234,9,4,'kingfish','active',NULL,'2021-02-01 17:39:31',NULL),(6,102477,9,4,'saxophone','active',NULL,'2021-02-01 17:39:31',NULL),(7,896058,5,4,'brake','active',NULL,'2021-02-01 17:39:31',NULL),(8,615125,1,4,'formicarium','active',NULL,'2021-02-01 17:39:31',NULL),(9,692676,9,4,'witch-hunt','active',NULL,'2021-02-01 17:39:31',NULL),(10,943473,1,4,'thermostat','active',NULL,'2021-02-01 17:39:31',NULL);
/*!40000 ALTER TABLE `prescriptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchases`
--

DROP TABLE IF EXISTS `purchases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purchases` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `input` int(11) NOT NULL,
  `invoice` varchar(255) NOT NULL,
  `sanitary_license` varchar(255) NOT NULL,
  `status` enum('active','history') NOT NULL,
  `original_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `input` (`input`),
  KEY `original_id` (`original_id`),
  KEY `created_by` (`created_by`),
  CONSTRAINT `purchases_ibfk_1` FOREIGN KEY (`input`) REFERENCES `inputs` (`id`),
  CONSTRAINT `purchases_ibfk_2` FOREIGN KEY (`original_id`) REFERENCES `purchases` (`id`),
  CONSTRAINT `purchases_ibfk_3` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchases`
--

LOCK TABLES `purchases` WRITE;
/*!40000 ALTER TABLE `purchases` DISABLE KEYS */;
INSERT INTO `purchases` VALUES (1,3,'freedom','dimension','active',NULL,'2021-02-01 17:39:31',NULL),(2,4,'waterfront','carload','active',NULL,'2021-02-01 17:39:31',NULL),(3,9,'bacon','brilliant','active',NULL,'2021-02-01 17:39:31',NULL),(4,4,'list','gigantism','active',NULL,'2021-02-01 17:39:31',NULL),(5,3,'ballpark','phase','active',NULL,'2021-02-01 17:39:31',NULL),(6,8,'forestry','opposition','active',NULL,'2021-02-01 17:39:31',NULL),(7,8,'trial','steam','active',NULL,'2021-02-01 17:39:31',NULL),(8,6,'resume','kinase','active',NULL,'2021-02-01 17:39:31',NULL),(9,2,'bidet','omega','active',NULL,'2021-02-01 17:39:31',NULL),(10,6,'quarter','drainage','active',NULL,'2021-02-01 17:39:31',NULL);
/*!40000 ALTER TABLE `purchases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_permissions`
--

DROP TABLE IF EXISTS `role_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` int(11) NOT NULL,
  `permission` int(11) NOT NULL,
  `status` enum('active','history') NOT NULL,
  `original_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `role` (`role`),
  KEY `permission` (`permission`),
  KEY `original_id` (`original_id`),
  KEY `created_by` (`created_by`),
  CONSTRAINT `role_permissions_ibfk_1` FOREIGN KEY (`role`) REFERENCES `roles` (`id`),
  CONSTRAINT `role_permissions_ibfk_2` FOREIGN KEY (`permission`) REFERENCES `permissions` (`id`),
  CONSTRAINT `role_permissions_ibfk_3` FOREIGN KEY (`original_id`) REFERENCES `role_permissions` (`id`),
  CONSTRAINT `role_permissions_ibfk_4` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_permissions`
--

LOCK TABLES `role_permissions` WRITE;
/*!40000 ALTER TABLE `role_permissions` DISABLE KEYS */;
INSERT INTO `role_permissions` VALUES (1,1,4,'active',NULL,'2021-02-01 17:39:30',NULL),(2,2,4,'active',NULL,'2021-02-01 17:39:30',NULL),(3,1,2,'active',NULL,'2021-02-01 17:39:30',NULL),(4,1,6,'active',NULL,'2021-02-01 17:39:30',NULL),(5,1,1,'active',NULL,'2021-02-01 17:39:30',NULL),(6,1,1,'active',NULL,'2021-02-01 17:39:30',NULL),(7,1,1,'active',NULL,'2021-02-01 17:39:30',NULL),(8,4,3,'active',NULL,'2021-02-01 17:39:30',NULL),(9,1,1,'active',NULL,'2021-02-01 17:39:30',NULL),(10,1,1,'active',NULL,'2021-02-01 17:39:30',NULL);
/*!40000 ALTER TABLE `role_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `status` enum('active','history') NOT NULL,
  `original_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `original_id` (`original_id`),
  KEY `created_by` (`created_by`),
  CONSTRAINT `roles_ibfk_1` FOREIGN KEY (`original_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `roles_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Doctor','active',NULL,'2021-02-01 17:39:30',NULL),(2,'Doctor Jefe','active',NULL,'2021-02-01 17:39:30',NULL),(3,'Farmacia','active',NULL,'2021-02-01 17:39:30',NULL),(4,'Responsable Sanitario','active',NULL,'2021-02-01 17:39:30',NULL),(5,'Recepcion','active',NULL,'2021-02-01 17:39:30',NULL),(6,'Admin','active',NULL,'2021-02-01 17:39:30',NULL);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `specialties`
--

DROP TABLE IF EXISTS `specialties`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `specialties` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `license` int(11) NOT NULL,
  `field` varchar(255) NOT NULL,
  `status` enum('active','history') NOT NULL,
  `original_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `license` (`license`),
  KEY `original_id` (`original_id`),
  KEY `created_by` (`created_by`),
  CONSTRAINT `specialties_ibfk_1` FOREIGN KEY (`license`) REFERENCES `licenses` (`id`),
  CONSTRAINT `specialties_ibfk_2` FOREIGN KEY (`original_id`) REFERENCES `specialties` (`id`),
  CONSTRAINT `specialties_ibfk_3` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `specialties`
--

LOCK TABLES `specialties` WRITE;
/*!40000 ALTER TABLE `specialties` DISABLE KEYS */;
INSERT INTO `specialties` VALUES (1,6,'Adolescent medicine','active',NULL,'2021-02-01 17:39:30',NULL),(2,4,'Allergy and immunology','active',NULL,'2021-02-01 17:39:30',NULL),(3,7,'Anesthesiology','active',NULL,'2021-02-01 17:39:30',NULL),(4,2,'Odontology','active',NULL,'2021-02-01 17:39:30',NULL),(5,4,'Transplant surgery','active',NULL,'2021-02-01 17:39:30',NULL),(6,10,'Pulmonology','active',NULL,'2021-02-01 17:39:30',NULL),(7,9,'Public health','active',NULL,'2021-02-01 17:39:30',NULL),(8,7,'Cardiovascular surgery','active',NULL,'2021-02-01 17:39:30',NULL),(9,2,'Clinical laboratory sciences','active',NULL,'2021-02-01 17:39:30',NULL),(10,5,'Dietetics','active',NULL,'2021-02-01 17:39:30',NULL),(11,9,'Medical genetics','active',NULL,'2021-02-11 20:26:00',NULL),(12,2,'Accident and emergency medicine','active',NULL,'2021-02-11 20:26:00',NULL),(13,2,'Clinical neurophysiology','active',NULL,'2021-02-11 20:26:00',NULL),(14,2,'Craniofacial surgery','active',NULL,'2021-02-11 20:26:00',NULL),(15,2,'Dermatology','active',NULL,'2021-02-11 20:26:00',NULL),(16,2,'Endocrinology','active',NULL,'2021-02-11 20:26:00',NULL),(17,2,'Family and General Medicine','active',NULL,'2021-02-11 20:26:00',NULL),(18,2,'Gastroenterologic surgery','active',NULL,'2021-02-11 20:26:00',NULL),(19,2,'Gastroenterology','active',NULL,'2021-02-11 20:26:00',NULL),(20,2,'General Practice','active',NULL,'2021-02-11 20:26:00',NULL),(21,2,'General surgery','active',NULL,'2021-02-11 20:26:00',NULL),(22,2,'Geriatrics','active',NULL,'2021-02-11 20:26:00',NULL),(23,2,'Hematology','active',NULL,'2021-02-11 20:26:00',NULL),(24,2,'Immunology','active',NULL,'2021-02-11 20:26:00',NULL),(25,2,'Infectious diseases','active',NULL,'2021-02-11 20:26:00',NULL),(26,2,'Internal medicine','active',NULL,'2021-02-11 20:26:00',NULL),(27,2,'Laboratory medicine','active',NULL,'2021-02-11 20:26:00',NULL),(28,2,'Nephrology','active',NULL,'2021-02-11 20:26:00',NULL),(29,2,'Neuropsychiatry','active',NULL,'2021-02-11 20:26:00',NULL),(30,2,'Neurology','active',NULL,'2021-02-11 20:26:00',NULL),(31,2,'Neurosurgery','active',NULL,'2021-02-11 20:26:00',NULL),(32,2,'Nuclear medicine','active',NULL,'2021-02-11 20:26:00',NULL),(33,2,'Obstetrics and gynaecology','active',NULL,'2021-02-11 20:26:00',NULL),(34,2,'Occupational medicine','active',NULL,'2021-02-11 20:26:00',NULL),(35,2,'Oncology','active',NULL,'2021-02-11 20:26:00',NULL),(36,2,'Ophthalmology','active',NULL,'2021-02-11 20:26:00',NULL),(37,2,'Oral and maxillofacial surgery','active',NULL,'2021-02-11 20:26:00',NULL),(38,2,'Orthopaedics','active',NULL,'2021-02-11 20:26:00',NULL),(39,2,'Otorhinolaryngology','active',NULL,'2021-02-11 20:26:00',NULL),(40,2,'Paediatric surgery','active',NULL,'2021-02-11 20:26:00',NULL),(41,2,'Paediatrics','active',NULL,'2021-02-11 20:26:00',NULL),(42,2,'Pathology','active',NULL,'2021-02-11 20:26:00',NULL),(43,2,'Pharmacology','active',NULL,'2021-02-11 20:26:00',NULL),(44,2,'Physical medicine and rehabilitation','active',NULL,'2021-02-11 20:26:00',NULL),(45,2,'Plastic surgery','active',NULL,'2021-02-11 20:26:00',NULL),(46,2,'Podiatric surgery','active',NULL,'2021-02-11 20:26:00',NULL),(47,2,'Preventive medicine','active',NULL,'2021-02-11 20:26:00',NULL),(48,2,'Psychiatry','active',NULL,'2021-02-11 20:26:00',NULL),(49,2,'Public health','active',NULL,'2021-02-11 20:26:00',NULL),(50,2,'Radiation Oncology','active',NULL,'2021-02-11 20:26:00',NULL),(51,2,'Radiology','active',NULL,'2021-02-11 20:26:00',NULL),(52,2,'Respiratory medicine','active',NULL,'2021-02-11 20:26:00',NULL),(53,2,'Rheumatology','active',NULL,'2021-02-11 20:26:00',NULL),(54,2,'Stomatology','active',NULL,'2021-02-11 20:26:00',NULL),(55,2,'Thoracic surgery','active',NULL,'2021-02-11 20:26:00',NULL),(56,2,'Tropical medicine','active',NULL,'2021-02-11 20:26:00',NULL),(57,2,'Urology','active',NULL,'2021-02-11 20:26:00',NULL),(58,2,'Vascular surgery','active',NULL,'2021-02-11 20:26:00',NULL),(59,2,'Venereology','active',NULL,'2021-02-11 20:26:00',NULL);
/*!40000 ALTER TABLE `specialties` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transfers`
--

DROP TABLE IF EXISTS `transfers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transfers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `input` int(11) NOT NULL,
  `document` varchar(255) NOT NULL,
  `status` enum('active','history') NOT NULL,
  `original_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `input` (`input`),
  KEY `original_id` (`original_id`),
  KEY `created_by` (`created_by`),
  CONSTRAINT `transfers_ibfk_1` FOREIGN KEY (`input`) REFERENCES `inputs` (`id`),
  CONSTRAINT `transfers_ibfk_2` FOREIGN KEY (`original_id`) REFERENCES `transfers` (`id`),
  CONSTRAINT `transfers_ibfk_3` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transfers`
--

LOCK TABLES `transfers` WRITE;
/*!40000 ALTER TABLE `transfers` DISABLE KEYS */;
INSERT INTO `transfers` VALUES (1,3,'translation','active',NULL,'2021-02-01 17:39:31',NULL),(2,6,'artifact','active',NULL,'2021-02-01 17:39:31',NULL),(3,2,'dare','active',NULL,'2021-02-01 17:39:31',NULL),(4,2,'lout','active',NULL,'2021-02-01 17:39:31',NULL),(5,8,'reorganization','active',NULL,'2021-02-01 17:39:31',NULL),(6,2,'amendment','active',NULL,'2021-02-01 17:39:31',NULL),(7,1,'monster','active',NULL,'2021-02-01 17:39:31',NULL),(8,3,'correspondence','active',NULL,'2021-02-01 17:39:31',NULL),(9,6,'phrase','active',NULL,'2021-02-01 17:39:31',NULL),(10,7,'seagull','active',NULL,'2021-02-01 17:39:31',NULL);
/*!40000 ALTER TABLE `transfers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` int(11) NOT NULL,
  `role` int(11) NOT NULL,
  `status` enum('active','history') NOT NULL,
  `original_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user` (`user`),
  KEY `role` (`role`),
  KEY `original_id` (`original_id`),
  KEY `created_by` (`created_by`),
  CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`id`),
  CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`role`) REFERENCES `roles` (`id`),
  CONSTRAINT `user_roles_ibfk_3` FOREIGN KEY (`original_id`) REFERENCES `user_roles` (`id`),
  CONSTRAINT `user_roles_ibfk_4` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES (1,9,4,'active',NULL,'2021-02-01 17:39:30',NULL),(2,1,1,'active',NULL,'2021-02-01 17:39:30',NULL),(3,2,5,'active',NULL,'2021-02-01 17:39:30',NULL),(4,5,3,'active',NULL,'2021-02-01 17:39:30',NULL),(5,10,4,'active',NULL,'2021-02-01 17:39:30',NULL),(6,4,1,'active',NULL,'2021-02-01 17:39:30',NULL),(7,3,3,'active',NULL,'2021-02-01 17:39:30',NULL),(8,9,4,'active',NULL,'2021-02-01 17:39:30',NULL),(9,8,5,'active',NULL,'2021-02-01 17:39:30',NULL),(10,6,2,'active',NULL,'2021-02-01 17:39:30',NULL);
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `salt` varchar(255) NOT NULL,
  `hash` varchar(255) NOT NULL,
  `shift` enum('morning','afternoon','night','accumulate') NOT NULL,
  `status` enum('active','history') NOT NULL,
  `original_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `original_id` (`original_id`),
  KEY `created_by` (`created_by`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`original_id`) REFERENCES `users` (`id`),
  CONSTRAINT `users_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'quique','Luis enrique ','Orozco Robles','AB26F26B6B21D90114531897F3A4ACBC','6a5308b94486dbc0d19e70bd9c7a77431e4ad932336a37ae09707ce5c80d1c824e63d02052897c2b18d654c13cc57d1b339bcf08871324f66c5c7176f44c53d1','accumulate','active',NULL,'2021-02-01 17:39:30',NULL),(2,'RicardoGV','José Ricardo ','Gómez Valadez','AB26F26B6B21D90114531897F3A4ACBC','6a5308b94486dbc0d19e70bd9c7a77431e4ad932336a37ae09707ce5c80d1c824e63d02052897c2b18d654c13cc57d1b339bcf08871324f66c5c7176f44c53d1','night','active',NULL,'2021-02-01 17:39:30',NULL),(3,'GusMG','Gustavo ','Meza García','AB26F26B6B21D90114531897F3A4ACBC','6a5308b94486dbc0d19e70bd9c7a77431e4ad932336a37ae09707ce5c80d1c824e63d02052897c2b18d654c13cc57d1b339bcf08871324f66c5c7176f44c53d1','accumulate','active',NULL,'2021-02-01 17:39:30',NULL),(4,'EsaulFR','Fernando Esaul','Franco Robles','AB26F26B6B21D90114531897F3A4ACBC','6a5308b94486dbc0d19e70bd9c7a77431e4ad932336a37ae09707ce5c80d1c824e63d02052897c2b18d654c13cc57d1b339bcf08871324f66c5c7176f44c53d1','morning','active',NULL,'2021-02-01 17:39:30',NULL),(5,'DanielMD','Daniel','Mendez Altuzar','AB26F26B6B21D90114531897F3A4ACBC','6a5308b94486dbc0d19e70bd9c7a77431e4ad932336a37ae09707ce5c80d1c824e63d02052897c2b18d654c13cc57d1b339bcf08871324f66c5c7176f44c53d1','night','active',NULL,'2021-02-01 17:39:30',NULL),(6,'PabloCL','José Pablo','Cisneros López','AB26F26B6B21D90114531897F3A4ACBC','6a5308b94486dbc0d19e70bd9c7a77431e4ad932336a37ae09707ce5c80d1c824e63d02052897c2b18d654c13cc57d1b339bcf08871324f66c5c7176f44c53d1','morning','active',NULL,'2021-02-01 17:39:30',NULL),(7,'EduardoVG','Sergio Eduardo','Valenzuela Guerrero','AB26F26B6B21D90114531897F3A4ACBC','6a5308b94486dbc0d19e70bd9c7a77431e4ad932336a37ae09707ce5c80d1c824e63d02052897c2b18d654c13cc57d1b339bcf08871324f66c5c7176f44c53d1','accumulate','active',NULL,'2021-02-01 17:39:30',NULL),(8,'JanetHC','Mirza Janet ','Hadad Chavez','AB26F26B6B21D90114531897F3A4ACBC','6a5308b94486dbc0d19e70bd9c7a77431e4ad932336a37ae09707ce5c80d1c824e63d02052897c2b18d654c13cc57d1b339bcf08871324f66c5c7176f44c53d1','morning','active',NULL,'2021-02-01 17:39:30',NULL),(9,'JosueMJ','Josue','Muñoz Plancarte','AB26F26B6B21D90114531897F3A4ACBC','6a5308b94486dbc0d19e70bd9c7a77431e4ad932336a37ae09707ce5c80d1c824e63d02052897c2b18d654c13cc57d1b339bcf08871324f66c5c7176f44c53d1','afternoon','active',NULL,'2021-02-01 17:39:30',NULL),(10,'AlexRA','Alex','Romo Aguilar','AB26F26B6B21D90114531897F3A4ACBC','6a5308b94486dbc0d19e70bd9c7a77431e4ad932336a37ae09707ce5c80d1c824e63d02052897c2b18d654c13cc57d1b339bcf08871324f66c5c7176f44c53d1','morning','active',NULL,'2021-02-01 17:39:30',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-20 14:35:26
