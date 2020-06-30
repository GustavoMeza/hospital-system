CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `salt` varchar(255) NOT NULL,
  `hash` varchar(255) NOT NULL,
  `shift` ENUM ('morning', 'afternoon', 'night', 'accumulate') NOT NULL,
  `status` ENUM ('active', 'history') NOT NULL,
  `original_id` int,
  `created_at` datetime NOT NULL,
  `created_by` int
);

CREATE TABLE `roles` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `status` ENUM ('active', 'history') NOT NULL,
  `original_id` int,
  `created_at` datetime NOT NULL,
  `created_by` int
);

CREATE TABLE `permissions` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `action` varchar(255) NOT NULL,
  `status` ENUM ('active', 'history') NOT NULL,
  `original_id` int,
  `created_at` datetime NOT NULL,
  `created_by` int
);

CREATE TABLE `role_permissions` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `role` int NOT NULL,
  `permission` int NOT NULL,
  `status` ENUM ('active', 'history') NOT NULL,
  `original_id` int,
  `created_at` datetime NOT NULL,
  `created_by` int
);

CREATE TABLE `user_roles` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user` int NOT NULL,
  `role` int NOT NULL,
  `status` ENUM ('active', 'history') NOT NULL,
  `original_id` int,
  `created_at` datetime NOT NULL,
  `created_by` int
);

CREATE TABLE `licenses` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `code` varchar(255) NOT NULL,
  `user` int NOT NULL,
  `college` varchar(255) NOT NULL,
  `type` ENUM ('professional', 'specialty') NOT NULL,
  `status` ENUM ('active', 'history') NOT NULL,
  `original_id` int,
  `created_at` datetime NOT NULL,
  `created_by` int
);

CREATE TABLE `specialties` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `license` int NOT NULL,
  `field` varchar(255) NOT NULL,
  `status` ENUM ('active', 'history') NOT NULL,
  `original_id` int,
  `created_at` datetime NOT NULL,
  `created_by` int
);

CREATE TABLE `drugs` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `internal_code` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `presentation` varchar(255) NOT NULL,
  `status` ENUM ('active', 'history') NOT NULL,
  `original_id` int,
  `created_at` datetime NOT NULL,
  `created_by` int
);

CREATE TABLE `inputs` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `supplier` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `comments` varchar(255),
  `type` ENUM ('purchase', 'transfer', 'other') NOT NULL,
  `status` ENUM ('active', 'history') NOT NULL,
  `original_id` int,
  `created_at` datetime NOT NULL,
  `created_by` int
);

CREATE TABLE `batches` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `internal_code` varchar(255) NOT NULL,
  `input` int NOT NULL,
  `drug` int NOT NULL,
  `expires_on` date NOT NULL,
  `quantity` int NOT NULL,
  `lab` varchar(255) NOT NULL,
  `status` ENUM ('active', 'history') NOT NULL,
  `original_id` int,
  `created_at` datetime NOT NULL,
  `created_by` int
);

CREATE TABLE `purchases` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `input` int NOT NULL,
  `invoice` varchar(255) NOT NULL,
  `sanitary_license` varchar(255) NOT NULL,
  `status` ENUM ('active', 'history') NOT NULL,
  `original_id` int,
  `created_at` datetime NOT NULL,
  `created_by` int
);

CREATE TABLE `transfers` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `input` int NOT NULL,
  `document` varchar(255) NOT NULL,
  `status` ENUM ('active', 'history') NOT NULL,
  `original_id` int,
  `created_at` datetime NOT NULL,
  `created_by` int
);

CREATE TABLE `outputs` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `sign` int,
  `batch` int NOT NULL,
  `quantity` int NOT NULL,
  `comment` varchar(255) NOT NULL,
  `type` ENUM ('expiration', 'prescription_fill', 'other') NOT NULL,
  `status` ENUM ('active', 'history') NOT NULL,
  `original_id` int,
  `created_at` datetime NOT NULL,
  `created_by` int
);

CREATE TABLE `patients` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `file` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `curp` varchar(255),
  `birthdate` date,
  `sex` ENUM ('male', 'female', 'other'),
  `address` varchar(255),
  `floor` varchar(255),
  `bed` varchar(255),
  `diagnostic` varchar(255),
  `status` ENUM ('active', 'history') NOT NULL,
  `original_id` int,
  `created_at` datetime NOT NULL,
  `created_by` int
);

CREATE TABLE `prescriptions` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `internal_code` int NOT NULL,
  `patient` int NOT NULL,
  `doctor` int NOT NULL,
  `comments` varchar(255),
  `status` ENUM ('active', 'history') NOT NULL,
  `original_id` int,
  `created_at` datetime NOT NULL,
  `created_by` int
);

CREATE TABLE `prescription_drugs` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `prescription` int NOT NULL,
  `drug` int NOT NULL,
  `quantity` int NOT NULL,
  `days` int NOT NULL,
  `dose` varchar(255) NOT NULL,
  `frequency` varchar(255) NOT NULL,
  `administration_route` varchar(255) NOT NULL,
  `status` ENUM ('active', 'history') NOT NULL,
  `original_id` int,
  `created_at` datetime NOT NULL,
  `created_by` int
);

CREATE TABLE `prescription_fills` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `prescription` int NOT NULL,
  `receiver_type` ENUM ('patient', 'emissary', 'crew', 'other') NOT NULL,
  `receiver_name` varchar(255) NOT NULL,
  `receiver_id_type` ENUM ('ine', 'passport') NOT NULL,
  `receiver_id_number` varchar(255) NOT NULL,
  `status` ENUM ('active', 'history') NOT NULL,
  `original_id` int,
  `created_at` datetime NOT NULL,
  `created_by` int
);

CREATE TABLE `fill_batches` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `prescription_fill` int NOT NULL,
  `outputs` int NOT NULL,
  `status` ENUM ('active', 'history') NOT NULL,
  `original_id` int,
  `created_at` datetime NOT NULL,
  `created_by` int
);

CREATE TABLE `prescription_returns` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `prescription` int NOT NULL,
  `batch` int NOT NULL,
  `quantity` int NOT NULL,
  `status` ENUM ('active', 'history') NOT NULL,
  `original_id` int,
  `created_at` datetime NOT NULL,
  `created_by` int
);

ALTER TABLE `users` ADD FOREIGN KEY (`original_id`) REFERENCES `users` (`id`);

ALTER TABLE `users` ADD FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `roles` ADD FOREIGN KEY (`original_id`) REFERENCES `roles` (`id`);

ALTER TABLE `roles` ADD FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `permissions` ADD FOREIGN KEY (`original_id`) REFERENCES `permissions` (`id`);

ALTER TABLE `permissions` ADD FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `role_permissions` ADD FOREIGN KEY (`role`) REFERENCES `roles` (`id`);

ALTER TABLE `role_permissions` ADD FOREIGN KEY (`permission`) REFERENCES `permissions` (`id`);

ALTER TABLE `role_permissions` ADD FOREIGN KEY (`original_id`) REFERENCES `role_permissions` (`id`);

ALTER TABLE `role_permissions` ADD FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `user_roles` ADD FOREIGN KEY (`user`) REFERENCES `users` (`id`);

ALTER TABLE `user_roles` ADD FOREIGN KEY (`role`) REFERENCES `roles` (`id`);

ALTER TABLE `user_roles` ADD FOREIGN KEY (`original_id`) REFERENCES `user_roles` (`id`);

ALTER TABLE `user_roles` ADD FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `licenses` ADD FOREIGN KEY (`user`) REFERENCES `users` (`id`);

ALTER TABLE `licenses` ADD FOREIGN KEY (`original_id`) REFERENCES `licenses` (`id`);

ALTER TABLE `licenses` ADD FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `specialties` ADD FOREIGN KEY (`license`) REFERENCES `licenses` (`id`);

ALTER TABLE `specialties` ADD FOREIGN KEY (`original_id`) REFERENCES `specialties` (`id`);

ALTER TABLE `specialties` ADD FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `drugs` ADD FOREIGN KEY (`original_id`) REFERENCES `drugs` (`id`);

ALTER TABLE `drugs` ADD FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `inputs` ADD FOREIGN KEY (`original_id`) REFERENCES `inputs` (`id`);

ALTER TABLE `inputs` ADD FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `batches` ADD FOREIGN KEY (`input`) REFERENCES `inputs` (`id`);

ALTER TABLE `batches` ADD FOREIGN KEY (`drug`) REFERENCES `drugs` (`id`);

ALTER TABLE `batches` ADD FOREIGN KEY (`original_id`) REFERENCES `batches` (`id`);

ALTER TABLE `batches` ADD FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `purchases` ADD FOREIGN KEY (`input`) REFERENCES `inputs` (`id`);

ALTER TABLE `purchases` ADD FOREIGN KEY (`original_id`) REFERENCES `purchases` (`id`);

ALTER TABLE `purchases` ADD FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `transfers` ADD FOREIGN KEY (`input`) REFERENCES `inputs` (`id`);

ALTER TABLE `transfers` ADD FOREIGN KEY (`original_id`) REFERENCES `transfers` (`id`);

ALTER TABLE `transfers` ADD FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `outputs` ADD FOREIGN KEY (`sign`) REFERENCES `users` (`id`);

ALTER TABLE `outputs` ADD FOREIGN KEY (`batch`) REFERENCES `batches` (`id`);

ALTER TABLE `outputs` ADD FOREIGN KEY (`original_id`) REFERENCES `outputs` (`id`);

ALTER TABLE `outputs` ADD FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `patients` ADD FOREIGN KEY (`original_id`) REFERENCES `patients` (`id`);

ALTER TABLE `patients` ADD FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `prescriptions` ADD FOREIGN KEY (`patient`) REFERENCES `patients` (`id`);

ALTER TABLE `prescriptions` ADD FOREIGN KEY (`doctor`) REFERENCES `users` (`id`);

ALTER TABLE `prescriptions` ADD FOREIGN KEY (`original_id`) REFERENCES `prescriptions` (`id`);

ALTER TABLE `prescriptions` ADD FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `prescription_drugs` ADD FOREIGN KEY (`prescription`) REFERENCES `prescriptions` (`id`);

ALTER TABLE `prescription_drugs` ADD FOREIGN KEY (`drug`) REFERENCES `drugs` (`id`);

ALTER TABLE `prescription_drugs` ADD FOREIGN KEY (`original_id`) REFERENCES `prescription_drugs` (`id`);

ALTER TABLE `prescription_drugs` ADD FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `prescription_fills` ADD FOREIGN KEY (`prescription`) REFERENCES `prescriptions` (`id`);

ALTER TABLE `prescription_fills` ADD FOREIGN KEY (`original_id`) REFERENCES `prescription_fills` (`id`);

ALTER TABLE `prescription_fills` ADD FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `fill_batches` ADD FOREIGN KEY (`prescription_fill`) REFERENCES `prescription_fills` (`id`);

ALTER TABLE `fill_batches` ADD FOREIGN KEY (`outputs`) REFERENCES `outputs` (`id`);

ALTER TABLE `fill_batches` ADD FOREIGN KEY (`original_id`) REFERENCES `fill_batches` (`id`);

ALTER TABLE `fill_batches` ADD FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `prescription_returns` ADD FOREIGN KEY (`prescription`) REFERENCES `prescriptions` (`id`);

ALTER TABLE `prescription_returns` ADD FOREIGN KEY (`batch`) REFERENCES `batches` (`id`);

ALTER TABLE `prescription_returns` ADD FOREIGN KEY (`original_id`) REFERENCES `prescription_returns` (`id`);

ALTER TABLE `prescription_returns` ADD FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

