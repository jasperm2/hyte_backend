CREATE USER 'healthdiary'@'localhost' IDENTIFIED BY 'root';
GRANT ALL PRIVILEGES ON `HealthDiary`.* TO 'healthdiary'@'localhost';
FLUSH PRIVILEGES;
