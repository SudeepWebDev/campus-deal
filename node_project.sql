-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 17, 2023 at 04:12 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `Name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `message` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`Name`, `email`, `message`) VALUES
('raunak kumar', 'raunakmar2005@gmail.com', 'this is a great project'),
('raunak kumar', 'raunakmar2005@gmail.com', 'this is a great project');

-- --------------------------------------------------------

--
-- Table structure for table `newsletter`
--

CREATE TABLE `newsletter` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `newsletter`
--

INSERT INTO `newsletter` (`id`, `email`) VALUES
(1, 'ritesh29june@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `sale_price` float(8,2) DEFAULT NULL,
  `image` text NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `Name`, `description`, `quantity`, `price`, `sale_price`, `image`, `category`, `type`) VALUES
(1, 'Hoodie', 'a nice hoodie', 10, 230, NULL, 'https://images.unsplash.com/photo-1651786216552-d627fe3aabdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', NULL, NULL),
(2, 'Python book', 'a book for python beginners', 11, 200, NULL, 'https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', 'books', NULL),
(3, 'Java book', 'A book for java beginners', 100, 200, NULL, 'https://static.javatpoint.com/core/images/top-10-java-books1.png', 'books', NULL),
(4, 'Blue pen', 'For better and smooth writing linc smart.', 20, 200, NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeLP6ug5AmlNYxPQqJWW4QGjrt_0EKvmnGIg&usqp=CAU', 'stationary', NULL),
(5, 'Writing registers', 'Write on smooth and endless pages.', 20, 160, NULL, 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xhc3NtYXRlJTIwbm90ZWJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 'stationary', NULL),
(6, 'Geometry Box', 'Contain protector, divider, compass, scale and everything you need', 20, 100, NULL, 'https://ds393qgzrxwzn.cloudfront.net/resize/m720x480/cat1/img/images/0/QR937cx36L.jpg', 'stationary', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `first_name` text NOT NULL,
  `last_name` text DEFAULT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(200) NOT NULL,
  `Confirmpass` varchar(200) NOT NULL,
  `Gender` text NOT NULL,
  `Age` varchar(5) NOT NULL,
  `College` varchar(300) NOT NULL,
  `college_roll_no` varchar(15) NOT NULL,
  `Course` text NOT NULL,
  `Year` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`first_name`, `last_name`, `Email`, `Password`, `Confirmpass`, `Gender`, `Age`, `College`, `college_roll_no`, `Course`, `Year`) VALUES
('raunak kumar', 'singh', 'raunak.000270@kvsropatna.in', 'rakusi', 'rakusi', 'on', '19', 'undefined', '220311', 'undefined', 'on'),
('raunak kumar', 'singh', 'raunak.000270@kvsropatna.in', 'rakusi', 'rakusi', 'on', '19', 'arsd', '2203178', 'cs hons', 'on'),
('sudeep', 'kumar', 'sudeep@gmail.com', 'sudeep', 'sudeep', 'on', '19', 'arsd', '28021', 'cs hons', 'on'),
('aryan', '', 'aryan@gmail.com', 'aryan', 'aryan', 'on', '19', 'arsd', '28090', 'cs hons', 'on'),
('shubham', 'kushwaha', 'shubham@gmail.com', 'sam', 'sam', 'on', '19', 'arsd', '28091', 'cs hons', 'on'),
('sudeep', 'singh', 'sudeep@gmail.com', 'sudeep', 'sudeep', 'on', '21', 'arsd', '29080', 'cs hons', 'on'),
('aftab', 'kahn', 'aaftab@gmail.com', 'aaftab', 'aaftab', 'male', '21', 'du', '4567320', 'cs hons', 'First'),
('yjuidsah', 'singh', 'raunak.000270@kvsropatna.in', 'tuyiop', 'tuyiop', 'on', '45', 'du', '5678432', 'cs hons', 'on'),
('raunak kumar', 'kushwaha', 'shubham@gmail.com', 'sam', '6767', 'on', '78', 'arsd', '676765', 'cs hons', 'on'),
('raunak kumar', 'singh', 'ritesh@gmail.com', 'yuio', 'yuio', 'undefined', '23', 'arsd', '7890543', 'cs hons', 'on'),
('ritesh', 'kumar', 'ritesh@gmail.com', 'ritesh', 'ritesh', 'on', '17', 'du', '89765', 'cs hons', 'on');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `newsletter`
--
ALTER TABLE `newsletter`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`college_roll_no`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `newsletter`
--
ALTER TABLE `newsletter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
