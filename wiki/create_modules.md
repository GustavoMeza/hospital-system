1. Install npm's sequelize-auto globally
> $ npm install -g sequelize
2. Install npm's mysql globally
> $ npm install -g mysql
3. Setup additional config
> $ echo '{"timestamps":false}' > .config/sequelize-auto-additional.json
4. Create modules
> $ sequelize-auto -d hospital\_system -u '*db_user*' -h localhost -a .config/sequelize\_auto\_additional.json -o ./src/models
