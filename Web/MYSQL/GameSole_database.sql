DROP DATABASE IF EXISTS `GameSole`;
CREATE DATABASE IF NOT EXISTS `GameSole`;
USE `GameSole`;

CREATE TABLE `USER` (
    `USER_ID` VARCHAR(11) NOT NULL,
    `USER_Firstname` VARCHAR(20) NOT NULL,
    `USER_Lastname` VARCHAR(20) NOT NULL,
    `USER_Telephone` CHAR(10) NOT NULL,
    `USER_Address` VARCHAR(100) NOT NULL,
    `USER_EMAIL` VARCHAR(100) NOT NULL,
    `USER_Password` VARCHAR(30) NOT NULL,
    `USER_Role` VARCHAR(13) NOT NULL DEFAULT 'Client',
    PRIMARY KEY (`USER_ID`, `USER_EMAIL`),
    CONSTRAINT chk_USER_Role CHECK (USER_Role IN ('Administator' , 'Client'))
);

ALTER TABLE `USER` ADD INDEX FK_USER_ID (USER_ID);
ALTER TABLE `USER` ADD INDEX FK_USER_EMAIL (USER_EMAIL);

CREATE TABLE `Login_Info` (
    `LOGIN_ID` INT NOT NULL,
    `USER_ID` VARCHAR(11) NOT NULL,
    `USER_EMAIL` VARCHAR(100) NOT NULL,
    `USER_Password` VARCHAR(30) NOT NULL,
    `LOGIN_Log` DATE NOT NULL,
    PRIMARY KEY (`LOGIN_ID`),
    CONSTRAINT FK_USER_ID FOREIGN KEY (USER_ID)
        REFERENCES `USER` (USER_ID),
    CONSTRAINT FK_USER_EMAIL FOREIGN KEY (USER_EMAIL)
        REFERENCES `USER` (USER_EMAIL)
);

CREATE TABLE `PRODUCT` (
    `PROD_ID` INT PRIMARY KEY NOT NULL,
    `PROD_Name` VARCHAR(100) NOT NULL,
    `PROD_Price` INT NOT NULL,
    `PROD_Description` VARCHAR(100) DEFAULT NULL,
    `PROD_Image` LONGBLOB NOT NULL,
    `PROD_Type` VARCHAR(13) NOT NULL,
    `PROD_Period_generation` VARCHAR(10) DEFAULT NULL,
    `PROD_Console_type` VARCHAR(25) DEFAULT NULL,
    CONSTRAINT `chk_PROD_Type` CHECK (`PROD_Type` IN ('Video game' , 'Game player', 'Controller')),
    CONSTRAINT `chk_PROD_Period_generation` CHECK (`PROD_Period_generation` IN ('First' , 'Second', 'Third', 'Fourth', 'Fifth', 'Seventh','Sixth', 'Eighth', 'Ninth')),
    CONSTRAINT `chk_PROD_Console_type` CHECK (`PROD_Console_type` IN ('home console player' , 'handheld console player', NULL))
);

INSERT INTO `USER` (`USER_ID`, `USER_Firstname`, `USER_Lastname`, `USER_Telephone`, `USER_Address`,`USER_EMAIL`,`USER_Password`,`USER_Role`) VALUES
('u1000000001', 'Sam', 'Willer', '2043048999', 'Florida 32010', 'SamWill@gmail.com', 'Firstmustang35*', 'Administator'),
('u1000000002', 'John', 'Kruger', '5876782145', 'Lowa 51002', 'Kruger1996@hotmail.com', 'Jadewheel89-', 'Client'),
('u1000000003', 'Rose', 'Agnello', '3245878494', 'Idaho 83254', 'Rosello@gmail.com', 'Loudkey99_', 'Client'),
('u1000000004', 'Anne', 'Miller', '3255500014', 'Texas 73331', 'ANNIE1234@gmail.com', 'Freeglue78=', 'Client'),
('u1000000005', 'Joe', 'Jakob', '7852456444', 'Mexico 87001', 'mexicanJOE@hotmail.com', 'Muddytiger37+', 'Client'),
('u1000000006', 'Zebra', 'Redfiend', '4285122489', 'Maine 04032', 'Zebv1asd@gmail.com', 'Freesilver36/', 'Client'),
('u1000000007', 'John', 'Mayer', '8234554259', 'Ohio 44101', 'Jonny8921@hotmail.com', 'Flatmonkey38#', 'Administator'),
('u1000000008', 'Angelena', 'Jolie', '9872347357', 'Nevada 89513', 'AMangel@gmail.com', 'Lumpylace59+', 'Client'),
('u1000000009', 'Jame', 'Bone', '8745786483', 'Maryland 20201', 'jamebond@hotmail.com', 'Emptypaste49*', 'Client'),
('u1000000010', 'Selen', 'Bush', '9689214681', 'Hawaii 96801', 'selena@hotmail.com', 'Spicyroll60-', 'Client'),
('u1000000011', 'Helena', 'Stone', '3452105426', 'Virginia 24517', 'Helenny@gmail.com', 'L_azyapple61', 'Administator');

INSERT INTO `Login_Info` (`LOGIN_ID`, `USER_ID`, `USER_EMAIL`, `USER_Password`, `LOGIN_Log`) VALUES
(1010547, 'u1000000001', 'SamWill@gmail.com', 'Firstmustang35*', '2022-02-02'),
(1010625, 'u1000000002', 'Kruger1996@hotmail.com', 'Jadewheel89-', '2022-02-04'),
(1010628, 'u1000000003', 'Rosello@gmail.com', 'Loudkey99_', '2022-02-04'),
(1010748, 'u1000000004', 'ANNIE1234@gmail.com', 'Freeglue78=', '2022-02-05'),
(1010895, 'u1000000005', 'mexicanJOE@hotmail.com', 'Muddytiger37+', '2022-02-06'),
(1010896, 'u1000000006', 'Zebv1asd@gmail.com', 'Freesilver36/', '2022-02-06'),
(1010900, 'u1000000007', 'Jonny8921@hotmail.com', 'Flatmonkey38#', '2022-02-07'),
(1010950, 'u1000000008', 'AMangel@gmail.com', 'Lumpylace59+', '2022-02-09'),
(1010987, 'u1000000009', 'jamebond@hotmail.com', 'Emptypaste49*', '2022-02-10'),
(1011021, 'u1000000010', 'selena@hotmail.com', 'Spicyroll60-', '2022-02-12'),
(1011105, 'u1000000011', 'Helenny@gmail.com', 'L_azyapple61', '2022-02-15');
    
INSERT INTO `PRODUCT` (`PROD_ID`, `PROD_Name`, `PROD_Price`, `PROD_Description`, `PROD_Image`, `PROD_Type`, `PROD_Period_generation`, `PROD_Console_type`) VALUES
(00000001, 'Sonic Ultimate Genesis Collection', 301, 'A Sega Games from 2009 play on Xbox 360', LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\Images\\Product\\Sonic.jpg'), 'Video game', 'Seventh', NULL),
(00000002, 'Magnavox Odyssey 2', 5988, 'One of the oldest home console game player from second generation', LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\Images\\Product\\Odyssey.jpg'), 'Game player', 'Second', 'home console player'),
(00000003, 'PS5 : DualSense Wireless Controller', 2690, 'A Wireless Controller for playstation 5 DualSense', LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\Images\\Product\\DualSense Controller.jpg'), 'Controller', 'Ninth', 'home console player'),
(00000004, 'Microsoft Xbox One S 1TB', 8189, 'A console game player from microsoft', LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\Images\\Product\\xbox 1.jpg'), 'Game player', 'Seventh', 'home console player'),
(00000005, 'Game boy', 3250, 'A first version of handheld in game history', LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\Images\\Product\\Game-Boy-Original.jpg'), 'Game player', 'First', 'handheld console player'),
(00000006, 'Finding Nemo', '157', NULL, LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\Images\\Product\\nemo.jpg'), 'Video game', 'Fourth', NULL),
(00000007, 'PSP Go', 4099, 'Portable playstation', LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\Images\\Product\\PSP Go.jpg'), 'Game player', 'Sixth', 'handheld console player'),
(00000008, 'Dragon Age 2', 281, 'An action role-playing video game developed by BioWare', LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\Images\\Product\\Dragonage.jpg'), 'Video game', 'Sixth', NULL),
(00000009, 'The Evil Within 2', 359, NULL, LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\Images\\Product\\The Evil Within 2.jpg'), 'Video game', 'Eighth', NULL),
(00000010, 'Mortal Kombat X', 221, 'A 2015 fighting video game developed by NetherRealm Studios', LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\Images\\Product\\mortalcombatx.jpg'), 'Video game', 'Seventh', NULL),
(00000011, 'Steam Deck', 13399, NULL, LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\Images\\Product\\Steam_Deck.png'), 'Game player', 'Ninth', 'handheld console player'),
(00000012, 'Sid Meiers Civilization Revolution', 219, NULL, LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\Images\\Product\\Sid Meier.jpg'), 'Video game', 'Fifth', NULL),
(00000013, 'Nintendo 64', 2600, 'A home video game console developed by Nintendo', LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\Images\\Product\\nintendo64.jpg'), 'Game player', 'Fifth', 'home console player');