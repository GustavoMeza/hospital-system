# DB creation steps

1. Install mysql client
    - [Official documentation](https://dev.mysql.com/doc/mysql-getting-started/en/#mysql-getting-started-installing)
    - You can also use compatible clients like [MariaDB](https://mariadb.org/)
2. Create a new user
    > $ sudo mysql -u root <br />
    > \> CREATE USER '*db_user*'@'localhost' IDENTIFIES BY '*password*'; <br />
    > \> quit <br />
3. Create database
    > $ mysql -u '*db_user*' <br />
    > \> CREATE DATABASE hospital_system; <br />
    > \> quit <br />
4. Load schema
    > $ mysql -u '*db_user*' hospital_system < data/schema.sql
