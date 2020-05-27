CREATE TABLE `users` (
  `username` varchar(255) PRIMARY KEY,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `password` varchar(255),
  `shift` ENUM ('matutino', 'vespertino', 'nocturno', 'jornada_acumulada')
);

CREATE TABLE `roles` (
  `code` varchar(255) PRIMARY KEY
);

CREATE TABLE `permissions` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `resource` ENUM ('user_roles', 'users', 'patientes', 'certificates', 'prescriptions', 'prescription_fills', 'prescription_returns', 'prescription_drugs', 'drugs', 'batches', 'inputs', 'outputs', 'purchase_details', 'transfer_details'),
  `action` varchar(255)
);

CREATE TABLE `role_permissions` (
  `role` varchar(255),
  `permission` int
);

CREATE TABLE `user_roles` (
  `user` varchar(255),
  `role` varchar(255)
);

CREATE TABLE `certificates` (
  `code` varchar(255) PRIMARY KEY,
  `user` varchar(255),
  `college` varchar(255),
  `type` ENUM ('professional', 'specialty')
);

CREATE TABLE `specialty_detail` (
  `certificate` varchar(255),
  `specialty` varchar(255)
);

CREATE TABLE `drugs` (
  `code` varchar(255) PRIMARY KEY,
  `name` varchar(255),
  `presentation` varchar(255),
  `units` int
);

CREATE TABLE `inputs` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `supplier` varchar(255),
  `address` varchar(255),
  `comments` varchar(255),
  `type` ENUM ('purchase', 'transfer', 'other')
);

CREATE TABLE `batches` (
  `code` varchar(255) PRIMARY KEY,
  `input` int,
  `drug` varchar(255),
  `expires` datetime,
  `quantity` int,
  `lab` varchar(255)
);

CREATE TABLE `purchase_details` (
  `input` int,
  `invoice` varchar(255),
  `sanitary_license` varchar(255)
);

CREATE TABLE `transfer_details` (
  `input` int,
  `document` varchar(255)
);

CREATE TABLE `outputs` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `sign` varchar(255),
  `batch` varchar(255),
  `quantity` int,
  `comment` varchar(255),
  `type` ENUM ('expiration', 'prescription_fill', 'other')
);

CREATE TABLE `patients` (
  `file` varchar(255) PRIMARY KEY,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `curp` varchar(255),
  `birthdate` date,
  `gender` gender,
  `address` varchar(255),
  `floor` varchar(255),
  `bed` varchar(255),
  `diagnostic` varchar(255),
  `arrival_time` datetime,
  `departure_time` datetime
);

CREATE TABLE `prescriptions` (
  `code` int PRIMARY KEY AUTO_INCREMENT,
  `patient` varchar(255),
  `doctor` varchar(255),
  `issue_date` datetime,
  `comments` varchar(255)
);

CREATE TABLE `prescription_drugs` (
  `prescription` int,
  `drug` varchar(255),
  `quantity` int,
  `dose` varchar(255),
  `administration_route` varchar(255)
);

CREATE TABLE `prescription_fills` (
  `prescription` int,
  `output` varchar(255)
);

CREATE TABLE `prescription_returns` (
  `prescription` int,
  `batch` varchar(255),
  `quantity` int
);

ALTER TABLE `role_permissions` ADD FOREIGN KEY (`role`) REFERENCES `roles` (`code`);

ALTER TABLE `role_permissions` ADD FOREIGN KEY (`permission`) REFERENCES `permissions` (`id`);

ALTER TABLE `user_roles` ADD FOREIGN KEY (`user`) REFERENCES `users` (`username`);

ALTER TABLE `user_roles` ADD FOREIGN KEY (`role`) REFERENCES `roles` (`code`);

ALTER TABLE `certificates` ADD FOREIGN KEY (`user`) REFERENCES `users` (`username`);

ALTER TABLE `specialty_detail` ADD FOREIGN KEY (`certificate`) REFERENCES `certificates` (`code`);

ALTER TABLE `batches` ADD FOREIGN KEY (`input`) REFERENCES `inputs` (`id`);

ALTER TABLE `batches` ADD FOREIGN KEY (`drug`) REFERENCES `drugs` (`code`);

ALTER TABLE `purchase_details` ADD FOREIGN KEY (`input`) REFERENCES `inputs` (`id`);

ALTER TABLE `transfer_details` ADD FOREIGN KEY (`input`) REFERENCES `inputs` (`id`);

ALTER TABLE `outputs` ADD FOREIGN KEY (`sign`) REFERENCES `users` (`username`);

ALTER TABLE `outputs` ADD FOREIGN KEY (`batch`) REFERENCES `batches` (`code`);

ALTER TABLE `prescriptions` ADD FOREIGN KEY (`patient`) REFERENCES `patients` (`file`);

ALTER TABLE `prescriptions` ADD FOREIGN KEY (`doctor`) REFERENCES `certificates` (`code`);

ALTER TABLE `prescription_drugs` ADD FOREIGN KEY (`prescription`) REFERENCES `prescriptions` (`code`);

ALTER TABLE `prescription_drugs` ADD FOREIGN KEY (`drug`) REFERENCES `drugs` (`code`);

ALTER TABLE `prescription_fills` ADD FOREIGN KEY (`prescription`) REFERENCES `prescriptions` (`code`);

ALTER TABLE `prescription_fills` ADD FOREIGN KEY (`output`) REFERENCES `outputs` (`id`);

ALTER TABLE `prescription_returns` ADD FOREIGN KEY (`prescription`) REFERENCES `prescriptions` (`code`);

ALTER TABLE `prescription_returns` ADD FOREIGN KEY (`batch`) REFERENCES `batches` (`code`);
