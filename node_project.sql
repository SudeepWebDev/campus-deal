-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 31, 2023 at 06:51 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `node_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `adminchat`
--

CREATE TABLE `adminchat` (
  `admin` text NOT NULL,
  `email` varchar(255) NOT NULL,
  `phno` text NOT NULL,
  `text` longtext NOT NULL,
  `id` int(11) NOT NULL,
  `time` text NOT NULL,
  `sendtouser` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `adminchat`
--

INSERT INTO `adminchat` (`admin`, `email`, `phno`, `text`, `id`, `time`, `sendtouser`) VALUES
('Admin', 'sudeepkumarsingh2003@outlook.com', '28021', 'Hello 28021', 23, '6:31:33 PM', '28021'),
('Admin', 'sudeepkumarsingh2003@outlook.com', '28021', 'I want to say about today deal what do you think on this', 24, '6:38:04 PM', '28012'),
('Admin', 'sudeepkumarsingh2003@outlook.com', '28021', 'we have these deals do you want to know about these in details', 27, '7:40:09 PM', '28012'),
('Admin', 'sudeepkumarsingh2003@outlook.com', '28021', 'I want to know about today deal', 28, '8:28:47 PM', '20013'),
('Admin', 'sudeepkumarsingh2003@outlook.com', '28021', 'ok sending soon', 41, '7:24:17 AM', '28021');

-- --------------------------------------------------------

--
-- Table structure for table `admindata`
--

CREATE TABLE `admindata` (
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `id` int(11) NOT NULL,
  `email` text NOT NULL,
  `rollno` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admindata`
--

INSERT INTO `admindata` (`first_name`, `last_name`, `id`, `email`, `rollno`) VALUES
('Sudeep Kumar', ' Singh', 1, 'sudeepkumarsingh2003@outlook.com', '28021');

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
('raunak kumar', 'raunakmar2005@gmail.com', 'this is a great project'),
('Sudeep Kumar Singh', 'sudeep@gmail.com', 'I want ot .....'),
('Sudeep Kumar Singh', 's@gmail.com', 'csgdfasd'),
('Sudep', 'sudeepkumarsingh2003@gmail.com', '5 review '),
('Sudeep Kumar Singh', 'sudeepkumarsingh2003@outlook.com', 'we can write here any message including feedback or any help related'),
('Sudeep Kumar Singh', 'sudeepkumarsingh2003@outlook.com', 'Here we can write our reviews or any question which we will have or feedback and suggestions.');

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
(1, 'Hoodie', 'a nice hoodie', 10, 230, NULL, 'https://images.unsplash.com/photo-1651786216552-d627fe3aabdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'Clothing', NULL),
(2, 'Python book', 'A book for python beginners', 11, 200, NULL, 'https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', 'Books', 'Programming'),
(3, 'Java book', 'A book for java beginners', 100, 200, NULL, 'https://static.javatpoint.com/core/images/top-10-java-books1.png', 'Books', 'Programming'),
(4, 'Blue pen', 'For better and smooth writing linc smart.', 20, 200, NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeLP6ug5AmlNYxPQqJWW4QGjrt_0EKvmnGIg&usqp=CAU', 'Stationery', NULL),
(5, 'Writing registers', 'Write on smooth and endless pages.', 20, 160, NULL, 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xhc3NtYXRlJTIwbm90ZWJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 'Stationery', NULL),
(6, 'Geometry Box', 'Contain protector, divider, compass, scale and everything you need', 20, 100, NULL, 'https://ds393qgzrxwzn.cloudfront.net/resize/m720x480/cat1/img/images/0/QR937cx36L.jpg', 'Stationery', NULL),
(7, 'Fundamentals of Absolute Beginners ', 'Computer Programming for absolute beginners ', 5, 375, NULL, 'https://th.bing.com/th/id/OIP.lMZVWAIZtxTdsqYnD7f9igAAAA?pid=ImgDet&w=198&h=316&c=7', 'Books', 'Programming'),
(11, 'Fundamentals of C programming', 'The chapters of this book have been prepared according to the latest syllabus of Indian Universities', 10, 780, NULL, 'https://th.bing.com/th/id/OIP.H73Kz0xxP6KE30dJxgEzAAAAAA?pid=ImgDet&w=204&h=306&c=7', 'Books', 'Programming'),
(14, 'Principles of Mathematical Analysis', 'he Principles of Mathematical Analysis (International Series in Pure & Applied Mathematics), by Walter Rudin', 10, 502, NULL, 'https://lh3.googleusercontent.com/blogger_img_proxy/AHs97-lPhbFezBSQWDFr9IwgGyzXQ9pP72avJVLKbUOaUpRvzU2pR36bow1hOmGAWDnI8J60J1BaQfTnTVDY2mbMQfbeLNLGR7MEXx-3I5CUOi25u-pKgb5Q5iMiOLk=s0-d', 'Books', 'Mathematics');

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
  `Year` varchar(11) NOT NULL,
  `phno` text NOT NULL,
  `address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`first_name`, `last_name`, `Email`, `Password`, `Confirmpass`, `Gender`, `Age`, `College`, `college_roll_no`, `Course`, `Year`, `phno`, `address`) VALUES
('Sudeep Kumar', 'Singh', 'sudeepkumarsingh2003@outlook.com', '22012', '22012', 'on', '20', 'Aatma Ram Sanata Dharma College', '22013', 'Bsc Cs Hons', 'on', '0', ''),
('Nidhi', 'Singh', 'sudeepkumarsingh2003@gmail.com', 'Sud', 'Sud', 'on', '15', 'Aatma Ram Sanata Dharma College', '28012', 'Bsc Cs Hons', 'on', '9717939246', 'Delhi'),
('Sudeep Kumar', 'Singh', 'sudeepkumarsingh2003@outlook.com', 'Sudeep', 'Sudeep', 'Male', '15', 'Aatma Ram Sanata Dharma College', '28021', 'Bsc Cs Hons', 'on', '9717939244', 'New Delhi');

-- --------------------------------------------------------

--
-- Table structure for table `userchat`
--

CREATE TABLE `userchat` (
  `name` text NOT NULL,
  `email` varchar(255) NOT NULL,
  `rollno` text NOT NULL,
  `text` longtext NOT NULL,
  `id` int(11) NOT NULL,
  `time` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userchat`
--

INSERT INTO `userchat` (`name`, `email`, `rollno`, `text`, `id`, `time`) VALUES
('Sudeep Kumar\r\n                            Singh', 'sudeepkumarsingh2003@outlook.com', '28021', 'ok', 41, '8:40:48 PM'),
('Sudeep Kumar\r\n                            Singh', 'sudeepkumarsingh2003@outlook.com', '28021', 'I want to know about today deal', 42, '4:35:12 AM'),
('Sudeep Kumar\r\n                            Singh', 'sudeepkumarsingh2003@outlook.com', '22013', 'Hello', 43, '4:47:27 AM'),
('Nidhi\r\n                            Singh', 'sudeepkumarsingh2003@gmail.com', '28012', 'What should I say', 44, '5:38:56 AM'),
('Sudeep Kumar\r\n                            Singh', 'sudeepkumarsingh2003@outlook.com', '28021', 'ok sure chekcing', 45, '8:28:55 AM');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminchat`
--
ALTER TABLE `adminchat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admindata`
--
ALTER TABLE `admindata`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `userchat`
--
ALTER TABLE `userchat`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adminchat`
--
ALTER TABLE `adminchat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `admindata`
--
ALTER TABLE `admindata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `newsletter`
--
ALTER TABLE `newsletter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `userchat`
--
ALTER TABLE `userchat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
COMMIT;
