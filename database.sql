-- MySQL dump 10.13  Distrib 8.0.21, for Linux (x86_64)
--
-- Host: localhost    Database: job_board
-- ------------------------------------------------------
-- Server version	8.0.21-0ubuntu0.20.04.4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `advertisement`
--

DROP TABLE IF EXISTS `advertisement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `advertisement` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date` date NOT NULL,
  `salary` int DEFAULT NULL,
  `id_companies` int NOT NULL,
  `id_contract_types` int NOT NULL,
  `id_cities` int NOT NULL,
  `id_jobs` int DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `worktime` varchar(100) DEFAULT NULL,
  `experience` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `advertisement_companies_FK` (`id_companies`),
  KEY `advertisement_contract_types0_FK` (`id_contract_types`),
  KEY `advertisement_cities1_FK` (`id_cities`),
  KEY `id_jobs` (`id_jobs`),
  CONSTRAINT `advertisement_cities1_FK` FOREIGN KEY (`id_cities`) REFERENCES `cities` (`id`),
  CONSTRAINT `advertisement_companies_FK` FOREIGN KEY (`id_companies`) REFERENCES `companies` (`id`),
  CONSTRAINT `advertisement_contract_types0_FK` FOREIGN KEY (`id_contract_types`) REFERENCES `contract_types` (`id`),
  CONSTRAINT `advertisement_ibfk_1` FOREIGN KEY (`id_jobs`) REFERENCES `jobs` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `advertisement`
--

LOCK TABLES `advertisement` WRITE;
/*!40000 ALTER TABLE `advertisement` DISABLE KEYS */;
INSERT INTO `advertisement` VALUES (1,'Notre société cherche un auteur pour créer de nouvelles blagues. Votre profil: vous êtes quelqu\'un de drôle et désopilant pour réinventer le monde de Toto','2020-09-30',35000,2,4,1,1,'Recherche clown','none','10 ans +'),(2,'Dans le cadre de notre développement nous recherchons un dev pour améliorer nos infrastructures web. Votre profil: Vous êtes à l\'aise autant avec les technos front que web','2020-09-30',45000,1,3,1,2,'Un titre','part-time','1 an'),(3,'Nous recherchons un développeur spécialisé en Js et ses frameworks afin de pouvoir aider les noobs en JS, vous devrez être pédagogue et surtout patient','2020-09-30',55000,1,1,4,5,'Recherche cdd ','full time','pas d\'experience requise');
/*!40000 ALTER TABLE `advertisement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `city` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `zipcode` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES (1,'Bordeaux','33000'),(2,'Paris 16','75016'),(3,'Pessac','33600'),(4,'Mérignac','33700'),(5,'Lyon','69000'),(13,'Montesson','78360'),(31,'Houilles','78800'),(33,'Carrières','78420');
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `companies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description_company` varchar(500) NOT NULL,
  `address` varchar(100) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `website` varchar(1000) NOT NULL,
  `id_cities` int NOT NULL,
  `activity` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `companies_cities0_FK` (`id_cities`),
  CONSTRAINT `companies_cities0_FK` FOREIGN KEY (`id_cities`) REFERENCES `cities` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` VALUES (1,'La compagnie de toto','Compagnie important et exportant les recettes typiques du monde de toto et de ses nombreuses blagues','36 cours Toto','0556000000','email@mail.fr','toto.com',1,''),(2,'Epitech','École d\'ingénierie informatique proposant un grand nombre de cursus dans différents domaines liés à l\'informatique et reconnue nationalement et internationalement','16 rue Théodore Blanc','0556123456','contact@epitech.eu','epitech.eu',13,''),(3,'Doctor JS','Docteur spécialement prévu pour les nuls en JavaScript, dites lui votre problème et il trouvera la solution pour vos scripts','123 avenue du dev','6666666666','jsStink@htmlforever.com','JSisshit.com',4,''),(4,'newname','description de la compagny','cours stutz','544330210','stutz@gmail.stutz','stutz.com',5,'');
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contract_types`
--

DROP TABLE IF EXISTS `contract_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contract_types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type_contract` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contract_types`
--

LOCK TABLES `contract_types` WRITE;
/*!40000 ALTER TABLE `contract_types` DISABLE KEYS */;
INSERT INTO `contract_types` VALUES (1,'CDD'),(2,'CDI'),(3,'Stage'),(4,'freelance'),(5,'apprentissage/alternance');
/*!40000 ALTER TABLE `contract_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_applications`
--

DROP TABLE IF EXISTS `job_applications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_applications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `id_advertisements` int DEFAULT NULL,
  `id_users` int DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `message` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `job_applications_advertisement_FK` (`id_advertisements`),
  KEY `job_applications_users0_FK` (`id_users`),
  CONSTRAINT `job_applications_advertisement_FK` FOREIGN KEY (`id_advertisements`) REFERENCES `advertisement` (`id`),
  CONSTRAINT `job_applications_users0_FK` FOREIGN KEY (`id_users`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_applications`
--

LOCK TABLES `job_applications` WRITE;
/*!40000 ALTER TABLE `job_applications` DISABLE KEYS */;
INSERT INTO `job_applications` VALUES (1,'2020-09-30',1,1,'','','','',''),(2,'2020-09-30',2,2,'','','','',''),(3,'2020-09-30',3,3,'','','','',''),(11,'2020-10-18',1,1,'myname','Flaneuse','myemail@emila.fr','0612748500','mmmm');
/*!40000 ALTER TABLE `job_applications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `job_type` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
INSERT INTO `jobs` VALUES (1,'maquilleuse'),(2,'développeur web'),(3,'médecin'),(4,'développeur front'),(5,'développeur back'),(6,'développeur fullstack');
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mail_sent`
--

DROP TABLE IF EXISTS `mail_sent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mail_sent` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mail_content` varchar(1000) NOT NULL,
  `date_sent` date NOT NULL,
  `id_job_application` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mail_sent_job_applications_FK` (`id_job_application`),
  CONSTRAINT `mail_sent_job_applications_FK` FOREIGN KEY (`id_job_application`) REFERENCES `job_applications` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mail_sent`
--

LOCK TABLES `mail_sent` WRITE;
/*!40000 ALTER TABLE `mail_sent` DISABLE KEYS */;
INSERT INTO `mail_sent` VALUES (1,'rxdcfygvubhno,xrtcyvubino,wrextcfygvubhjnwrxdtcfygvubhjn','2020-09-30',1),(2,'xtcfygvuhbjnok,l;','2020-09-30',2),(3,'xtrcyvubino,pxtrcyvubino,drxtcfygvuhbijnok,','2020-09-30',3),(4,'blablabla','2020-10-08',1);
/*!40000 ALTER TABLE `mail_sent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_types`
--

DROP TABLE IF EXISTS `user_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_types`
--

LOCK TABLES `user_types` WRITE;
/*!40000 ALTER TABLE `user_types` DISABLE KEYS */;
INSERT INTO `user_types` VALUES (1,'user'),(2,'company_user'),(3,'admin');
/*!40000 ALTER TABLE `user_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `birthday` date NOT NULL,
  `phone` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `id_user_types` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `users_user_types_FK` (`id_user_types`),
  CONSTRAINT `users_user_types_FK` FOREIGN KEY (`id_user_types`) REFERENCES `user_types` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Pailhe-Belair','Geoffroy','1985-03-29','0679299366','geoffroy.pailhe-belair@epitech.eu','118 rue abbé de l\'épée','TOTO',3),(2,'Ricardo','Alexandra','1998-12-08','0600000000','alexandra.ricardo@epitech.eu','33 rue toto','tata',2),(3,'Dupont','Toto','2019-08-10','0600000000','toto.dupont@mail.com','33 rue Alexandra','tutu',1),(5,'blablabla','Firstname','1998-12-08','0637137896','my@email.com','21','mypassword',1),(8,'alex','ricardo','2020-08-19','0612748500','myemail@emila.fr','33 avenue des roses, PESSAC','1234',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `worktimes`
--

DROP TABLE IF EXISTS `worktimes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `worktimes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `week_worktime` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `worktimes`
--

LOCK TABLES `worktimes` WRITE;
/*!40000 ALTER TABLE `worktimes` DISABLE KEYS */;
INSERT INTO `worktimes` VALUES (1,'temps partiel'),(2,'temps plein');
/*!40000 ALTER TABLE `worktimes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-18 22:13:13
