# DB creation steps

1. Install mysql client
  1. [Official documentation](https://dev.mysql.com/doc/mysql-getting-started/en/#mysql-getting-started-installing)
  2. You can also use compatible clients like [MariaDB](https://mariadb.org/)
2. Create a new user
  1. Login as root `$ sudo mysql -u root`
  2. Create a new user `CREATE USER '_db_user_'@'localhost' IDENTIFIES BY '_password';`
  3. Quit `quit`
3. Create database 
  1. Login `$ mysql -u '_db_user_'`
  2. Create databse `CREATE DATABASE hospital_system;`
  3. Quit `quit`
4. Load schema
  1. Load schema `$ mysql -u '_db_user_' < data/schema.sql`
