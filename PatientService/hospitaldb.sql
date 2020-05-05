-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2020 at 04:40 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hospitaldb`
--

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `pID` int(11) NOT NULL,
  `pFname` varchar(50) NOT NULL,
  `pLname` varchar(50) NOT NULL,
  `pAge` int(11) NOT NULL,
  `pGender` varchar(12) NOT NULL,
  `pAddress` varchar(45) NOT NULL,
  `pContactNo` varchar(15) NOT NULL,
  `pNIC` varchar(12) NOT NULL,
  `pEmail` varchar(50) NOT NULL,
  `pUsername` varchar(50) NOT NULL,
  `pPassword` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`pID`, `pFname`, `pLname`, `pAge`, `pGender`, `pAddress`, `pContactNo`, `pNIC`, `pEmail`, `pUsername`, `pPassword`) VALUES
(1, 'Yasangi', 'Perera', 32, 'Female', 'Asgiriya', '0771245123', '162342132v', 'yasangi@gmail.com', 'yasangi123', 'f87cef59c17b9b2ee6f4fa484391d52006ea3c46'),
(2, 'Sachini', 'Ten', 21, 'Female', 'abcd,Kandy', '0812231234', '121212121v', 'sach123@gmail.com', 'aaa', '8639316725bece379d63338db8ba6fcece609819'),
(3, 'Sajini', 'Bandara', 40, 'Female', 'Digana', '0114272342', '121212421V', 'suga@gmail.com', 'suga123', '162e3fbc324275e1307c40b5febdd998155e9e04'),
(9, 'Moveena', 'Rajapakse', 41, 'Female', 'Pilimathalawa,Kandy', '0812242124', '124512365v', 'movee@gmail.com', 'movee', '4b6c812cf500b82cece3de2162f037b4d99244dd'),
(10, 'Katy', 'Perry', 34, 'Female', 'Malabe,Colombo', '0724571246', '111111111v', 'katy@gmail.com', 'katy', '13fbd79c3d390e5d6585a21e11ff5ec1970cff0c'),
(12, 'Michael', 'Peterson', 55, 'Male', 'Peradeniya, Kandy', '0114571246', '111111111v', 'mike@gmail.com', 'mike', '13fbd79c3d390e5d6585a21e11ff5ec1970cff0c'),
(13, 'Peter', 'Pan', 32, 'Male', '37 1/2 Galle', '0114571246', '111111111v', 'peter@gmail.com', 'peter123', '13fbd79c3d390e5d6585a21e11ff5ec1970cff0c'),
(14, 'Harry', 'Potter', 45, 'Male', 'Kandy', '0775464571', '199945715v', 'harry@gmail.com', 'harry', '23a0b5e4fb6c6e8280940920212ecd563859cb3c');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`pID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `pID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
