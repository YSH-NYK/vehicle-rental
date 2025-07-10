# vehicle-rental
Step 1 - Ensure you have the following installed on your system:
1. Node.js
2. PostgreSQL (version 17.x)
3. Git (for version control)
4. npm (comes with Node.js)

Step 2 - Clone repository 
1. Git clone https://github.com/YSH-NYK/vehicle-rental.git
2. cd vehicle-rental

Step 3 - Install and connect to PostgreSQL 17

Step 4 - Create DataBase on Postgress using 
1. pg_ctl -D "C:\Program Files\PostgreSQL\17\data" start
2. createdb -U postgres vehicle_rental


Step 5 - Install Backend 
1. cd backend
2. npm i
3. Create .env file
DB_NAME=vehicle_rental
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
PORT=5000

Step 6 - Appyl Migrations
1. npx sequelize-cli init
2. npx sequelize-cli db:migrate

Step 7 - Insert Inital data (Seeders)
1. npx sequelize-cli db:seed:all

Step 8 - Install Frontend
1. cd..\frontend
2. npm i 

Step 9 - Start App
1. npm start (when in frontend)
2. Open new terminal 
3. cd backend
4. npm start (for backend)