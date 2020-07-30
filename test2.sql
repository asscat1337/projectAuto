-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июл 30 2020 г., 14:29
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
(4, 'test', '2020-07-01', 'test', 'IMG_1119 (1) (18).jpeg', '../files/IMG_1119 (1) (18).jpeg', '1');

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
(4, 'IMG_1119 (1) (18).jpeg', '../files/IMG_1119 (1) (18).jpeg');

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
(3, 'test', '2020-07-01', 'test', 0);

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
  MODIFY `archive_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `files`
--
ALTER TABLE `files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `users_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
