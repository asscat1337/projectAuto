-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Авг 03 2020 г., 10:32
-- Версия сервера: 10.3.13-MariaDB-log
-- Версия PHP: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `test2`
--

-- --------------------------------------------------------

--
-- Структура таблицы `arhive`
--

CREATE TABLE `arhive` (
  `archive_id` int(11) NOT NULL,
  `fio` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `telephone` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `filename` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `path` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `arhive`
--

INSERT INTO `arhive` (`archive_id`, `fio`, `date`, `telephone`, `filename`, `path`, `status`) VALUES
(1, 'gdfgdf', '2020-07-01', 'bvcbvc', 'IMG_1119 (1) (18).jpeg', '../files/IMG_1119 (1) (18).jpeg', '2'),
(2, 'test', '2020-07-01', 'test', '', '', '1'),
(3, 'test', '2020-07-01', 'test', 'IMG_1119 (1) (18).jpeg', '../files/IMG_1119 (1) (18).jpeg', ''),
(4, 'test', '2020-07-01', 'test', 'IMG_1119 (1) (18).jpeg', '../files/IMG_1119 (1) (18).jpeg', '1'),
(5, 'gfdgdf', '2020-07-30', 'vcxvcx', 'IMG_1119 (1) (18).jpeg', '../files/IMG_1119 (1) (18).jpeg', '1'),
(6, 'fsdfdsf', '2020-08-06', 'vxcvcxvx', 'IMG_1119 (1) (16) (1).jpeg', '../files/IMG_1119 (1) (16) (1).jpeg', '1'),
(7, 'fdsfdsfds', '2020-08-14', 'vxcvcx', 'IMG_1119 (1) (16) (1).jpeg', '../files/IMG_1119 (1) (16) (1).jpeg', '1'),
(8, '111', '2020-08-01', '1111', '', '', '1'),
(9, 'fsdfds', '2020-08-01', '79174059541', '', '', '1'),
(10, 'fdsfds', '2020-08-07', '79659352764', '', '', '1'),
(11, 'fdsfds', '2020-08-07', '79659352764', '', '', '1'),
(12, 'fdsfd', '2020-08-06', '79174059541', '', '', '1'),
(13, 'Сабиров Радмир Рифович', '2020-08-05', '79373220192', '', '', '1'),
(14, 'Юшкевич Олег Сергеевич', '2020-08-15', '89656669270', '', '', '2'),
(15, 'Юшкевич Олег Сергеевич', '2020-08-15', '89656669270', '', '', ''),
(16, 'Юшкевич Олег Сергеевич', '2020-08-15', '89656669270', '', '', '1'),
(17, 'Юшкевич Олег Сергеевич', '2020-08-15', '89656669270', '', '', '1'),
(18, 'Юшкевич Олег Сергеевич', '2020-08-15', '89656669270', '', '', '1'),
(19, 'Юшкевич Олег Сергеевич', '2020-08-15', '89656669270', '', '', '2'),
(20, 'Юшкевич Олег Сергеевич', '2020-08-20', '79656669270', '', '', '2'),
(21, 'Юшкевич Олег Сергеевич', '2020-08-20', '79656669270', '', '', '1'),
(22, 'Юшкевич Олег Сергеевич', '2020-08-20', '79656669270', '', '', '1'),
(23, 'Юшкевич Олег Сергеевич', '2020-08-20', '79656669270', '', '', '1'),
(24, 'Юшкевич Олег Сергеевич', '2020-08-20', '79656669270', '', '', ''),
(25, 'Юшкевич Олег Сергеевич', '2020-08-20', '79656669270', '', '', '1'),
(26, 'Юшкевич Олег Сергеевич', '2020-08-20', '79656669270', '{', '{', '1'),
(27, 'Юшкевич Олег Сергеевич', '2020-08-20', '79656669270', '', '', '2'),
(28, 'Юшкевич Олег Сергеевич', '2020-08-20', '79656669270', '', '', '1'),
(29, 'Юшкевич Олег Сергеевич', '2020-08-20', '79656669270', '', '', '1'),
(30, 'Юшкевич Олег Сергеевич', '2020-08-20', '79656669270', '{', '{', '1'),
(31, 'Юшкевич Олег Сергеевич', '2020-08-20', '79656669270', 'IMG_1119 (1) (18).jpeg', '../files/IMG_1119 (1) (18).jpeg', '1'),
(32, 'Юшкевич Олег Сергеевич', '2020-08-20', '79656669270', 'IMG_1119 (1) (18).jpeg', '../files/IMG_1119 (1) (18).jpeg', '2');

-- --------------------------------------------------------

--
-- Структура таблицы `files`
--

CREATE TABLE `files` (
  `id` int(11) NOT NULL,
  `filename` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `path` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `files`
--

INSERT INTO `files` (`id`, `filename`, `path`) VALUES
(1, 'IMG_1119 (1) (18).jpeg', '../files/IMG_1119 (1) (18).jpeg'),
(2, 'IMG_1119 (1) (17).jpeg', '../files/IMG_1119 (1) (17).jpeg'),
(3, 'IMG_1119 (1) (18).jpeg', '../files/IMG_1119 (1) (18).jpeg'),
(4, 'IMG_1119 (1) (18).jpeg', '../files/IMG_1119 (1) (18).jpeg'),
(5, 'IMG_1119 (1) (16) (1).jpeg', '../files/IMG_1119 (1) (16) (1).jpeg'),
(6, 'IMG_1119 (1) (16) (1).jpeg', '../files/IMG_1119 (1) (16) (1).jpeg'),
(7, 'IMG_1119 (1) (16) (1).jpeg', '../files/IMG_1119 (1) (16) (1).jpeg'),
(8, 'IMG_1119 (1) (18).jpeg', '../files/IMG_1119 (1) (18).jpeg'),
(9, 'IMG_1119 (1) (16) (1).jpeg', '../files/IMG_1119 (1) (16) (1).jpeg'),
(10, 'IMG_1119 (1) (18).jpeg', '../files/IMG_1119 (1) (18).jpeg'),
(11, 'Уп 123 заоч.docx', '../files/Уп 123 заоч.docx'),
(12, 'IMG_1119 (1) (18).jpeg', '../files/IMG_1119 (1) (18).jpeg'),
(13, 'IMG_1119 (1) (18).jpeg', '../files/IMG_1119 (1) (18).jpeg'),
(14, 'IMG_1119 (1) (16) (1).jpeg', '../files/IMG_1119 (1) (16) (1).jpeg'),
(15, 'IMG_1119 (1) (18).jpeg', '../files/IMG_1119 (1) (18).jpeg'),
(16, '', '../files/'),
(17, 'IMG_1119 (1) (16) (1).jpeg', '../files/IMG_1119 (1) (16) (1).jpeg'),
(18, '', '../files/'),
(19, 'IMG_1119 (1) (18).jpeg', '../files/IMG_1119 (1) (18).jpeg'),
(20, 'IMG_1119 (1) (16) (1).jpeg', '../files/IMG_1119 (1) (16) (1).jpeg'),
(21, '', '../files/'),
(22, 'IMG_1119 (1) (18).jpeg', '../files/IMG_1119 (1) (18).jpeg'),
(23, 'IMG_1119 (1) (18).jpeg', '../files/IMG_1119 (1) (18).jpeg'),
(24, 'IMG_1119 (1) (16) (1).jpeg', '../files/IMG_1119 (1) (16) (1).jpeg'),
(25, 'IMG_1119 (1) (16) (1).jpeg', '../files/IMG_1119 (1) (16) (1).jpeg'),
(26, '', '../files/'),
(27, '', '../files/'),
(28, '', '../files/'),
(29, '', '../files/'),
(30, '', '../files/'),
(31, '', '../files/'),
(32, 'IMG_1119 (1) (16) (1).jpeg', '../files/IMG_1119 (1) (16) (1).jpeg'),
(33, 'IMG_1119 (1) (18).jpeg', '../files/IMG_1119 (1) (18).jpeg'),
(34, 'IMG_1119 (1) (18).jpeg', '../files/IMG_1119 (1) (18).jpeg'),
(35, 'IMG_1119 (1) (18).jpeg', '../files/IMG_1119 (1) (18).jpeg'),
(36, 'IMG_1119 (1) (18).jpeg', '../files/IMG_1119 (1) (18).jpeg'),
(37, 'IMG_1119 (1) (18).jpeg', '../files/IMG_1119 (1) (18).jpeg'),
(38, 'IMG_1119 (1) (17).jpeg', '../files/IMG_1119 (1) (17).jpeg'),
(39, 'IMG_1119 (1) (17).jpeg', '../files/IMG_1119 (1) (17).jpeg'),
(40, '', '../files/'),
(41, 'IMG_1119 (1) (18).jpeg', '../files/IMG_1119 (1) (18).jpeg'),
(42, 'IMG_1119 (1) (17).jpeg', '../files/IMG_1119 (1) (17).jpeg'),
(43, 'IMG_1119 (1) (18).jpeg', '../files/IMG_1119 (1) (18).jpeg'),
(44, 'IMG_1119 (1) (17).jpeg', '../files/IMG_1119 (1) (17).jpeg'),
(45, 'IMG_1119 (1) (17).jpeg', '../files/IMG_1119 (1) (17).jpeg'),
(46, 'IMG_1119 (1) (18).jpeg', '../files/IMG_1119 (1) (18).jpeg'),
(47, 'IMG_1119 (1) (17).jpeg', '../files/IMG_1119 (1) (17).jpeg'),
(48, 'IMG_1119 (1) (16) (1).jpeg', '../files/IMG_1119 (1) (16) (1).jpeg'),
(49, 'IMG_1119 (1) (18).jpeg', '../files/IMG_1119 (1) (18).jpeg');

-- --------------------------------------------------------

--
-- Структура таблицы `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `status` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `status`
--

INSERT INTO `status` (`id`, `status`) VALUES
(1, 'Здоров'),
(2, 'Госпиталь'),
(3, 'Стационар');

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `users_id` int(11) NOT NULL,
  `fio` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `telephone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checked` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`users_id`, `fio`, `date`, `telephone`, `checked`) VALUES
(1, 'gdfgdf', '2020-07-01', 'bvcbvc', 0),
(2, 'gfdgdf', '2020-07-01', 'bvcbcv', 0),
(3, 'test', '2020-07-01', 'test', 0),
(4, 'gfdgdf', '2020-07-30', 'vcxvcx', 0),
(5, 'fsdfdsf', '2020-08-06', 'vxcvcxvx', 0),
(6, 'fdsfdsfds', '2020-08-14', 'vxcvcx', 0),
(7, 'gdfgfd', '2020-08-07', 'vxcvcx', 0),
(8, '111', '2020-08-01', '1111', 0),
(9, 'fsdfds', '2020-08-01', '79174059541', 0),
(10, 'fdsfds', '2020-08-07', '79659352764', 0),
(11, 'fdsfd', '2020-08-06', '79174059541', 0),
(12, 'fdsfds', '2020-07-29', 'vcxvcx', 0),
(13, 'авыавы', '2020-08-06', 'мсчмсч', 0),
(14, 'fdsfd', '2020-08-13', 'vcxvxc', 0),
(15, 'fdsfd', '2020-08-14', 'vcxvcx', 0),
(16, 'fdfds', '2020-08-07', 'vcxvxc', 0),
(17, 'gdfgf', '2020-08-13', 'vcxvcx', 0),
(18, 'vcxvc', '2020-08-06', 'vcxvcx', 0),
(19, 'fdsfds', '2020-08-07', 'vxcvcx', 0),
(20, 'fdsfds', '2020-08-07', 'vcxvcx', 0),
(21, 'fdsfds', '2020-08-22', 'vxcvxc', 0),
(22, 'fdsfd', '2020-08-13', 'vxcvxc', 0),
(23, '11', '2020-08-14', '11', 0),
(24, 'ggfdgfd', '2020-08-07', '76677575657575dsfsd', 0),
(25, 'fdfsd', '2020-08-07', 'xcvxc', 0),
(26, 'fdsfds', '2020-08-22', '', 0),
(27, 'павпав', '2020-08-06', '', 0),
(28, 'авыав', '2020-08-07', '', 0),
(29, 'мсчмсч', '2020-08-08', '', 0),
(30, 'fdsfds', '2020-08-07', '', 0),
(31, 'fsdfds', '2020-08-08', 'vxcvcx', 0),
(32, 'vcxvxc', '2020-08-21', 'vcxvcx', 0),
(33, 'vcxvc', '2020-08-15', 'vxcvcx', 0),
(34, 'fff', '2020-08-08', '111', 0),
(35, 'fdfsdfds', '2020-08-15', 'vvvvv', 0),
(36, 'fdsfds', '2020-08-07', '79659352764', 0),
(37, 'авыавы', '2020-08-07', '79659352764', 0),
(38, 'авыавы', '2020-08-28', '79659352764', 0),
(39, 'авыавы', '2020-08-13', '79659352764', 0),
(40, 'Сабиров Радмир Рифович', '2020-08-05', '79373220192', 0),
(41, 'Юшкевич Олег Сергеевич', '2020-08-15', '89656669270', 0),
(42, 'Юшкевич Олег Сергеевич', '2020-08-20', '79656669270', 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `arhive`
--
ALTER TABLE `arhive`
  ADD PRIMARY KEY (`archive_id`);

--
-- Индексы таблицы `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`users_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `arhive`
--
ALTER TABLE `arhive`
  MODIFY `archive_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT для таблицы `files`
--
ALTER TABLE `files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT для таблицы `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `users_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
