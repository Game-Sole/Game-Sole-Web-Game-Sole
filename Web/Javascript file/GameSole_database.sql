ALTER USER 'root'@'localhost' IDENTIFIED BY '';

DROP DATABASE IF EXISTS `GameSole`;
CREATE DATABASE IF NOT EXISTS `GameSole`;
USE `GameSole`;

CREATE TABLE `USER` (
    `USER_ID` INT NOT NULL AUTO_INCREMENT,
    `USER_Firstname` VARCHAR(20) NOT NULL,
    `USER_Lastname` VARCHAR(20) NOT NULL,
    `USER_Telephone` CHAR(10) NOT NULL,
    `USER_Address` VARCHAR(100) NOT NULL,
    `USER_EMAIL` VARCHAR(100) NOT NULL,
    `USER_Password` VARCHAR(255) NOT NULL,
    `USER_Role` VARCHAR(13) DEFAULT 'Client',
    PRIMARY KEY (`USER_ID`),
    CONSTRAINT chk_USER_Role CHECK (USER_Role IN ('Administator' , 'Client'))
);

ALTER TABLE `USER` ADD INDEX FK_USER_ID (USER_ID);

CREATE TABLE `Login_Info` (
    `LOGIN_ID` INT NOT NULL AUTO_INCREMENT,
    `USER_ID` INT NOT NULL,
    `LOGIN_Log` DATE NOT NULL,
    PRIMARY KEY (`LOGIN_ID`),
    CONSTRAINT FK_USER_ID FOREIGN KEY (USER_ID)
        REFERENCES `USER` (USER_ID) ON DELETE CASCADE
);

CREATE TABLE `PRODUCT` (
    `PROD_ID` INT PRIMARY KEY NOT NULL,
    `PROD_Name` VARCHAR(100) NOT NULL,
    `PROD_Price` INT NOT NULL,
    `PROD_Description` VARCHAR(100) DEFAULT NULL,
    `PROD_Image` VARCHAR(255) NOT NULL,
    `PROD_Type` VARCHAR(13) NOT NULL,
    `PROD_Period_generation` VARCHAR(10) DEFAULT NULL,
    `PROD_Console_type` VARCHAR(25) DEFAULT NULL,
    CONSTRAINT `chk_PROD_Type` CHECK (`PROD_Type` IN ('Video game' , 'Game player', 'Controller')),
    CONSTRAINT `chk_PROD_Period_generation` CHECK (`PROD_Period_generation` IN ('First' , 'Second', 'Third', 'Fourth', 'Fifth', 'Seventh','Sixth', 'Eighth', 'Ninth')),
    CONSTRAINT `chk_PROD_Console_type` CHECK (`PROD_Console_type` IN ('home console player' , 'handheld console player', NULL))
);

INSERT INTO `USER` (`USER_ID`, `USER_Firstname`, `USER_Lastname`, `USER_Telephone`, `USER_Address`,`USER_EMAIL`,`USER_Password`,`USER_Role`) VALUES
(1000000001, 'Sam', 'Willer', '2043048999', 'Florida 32010', 'SamWill@gmail.com', 'Firstmustang35*', 'Administator'),
(1000000002, 'John', 'Kruger', '5876782145', 'Lowa 51002', 'Kruger1996@hotmail.com', 'Jadewheel89-', 'Client'),
(1000000003, 'Rose', 'Agnello', '3245878494', 'Idaho 83254', 'Rosello@gmail.com', 'Loudkey99_', 'Client'),
(1000000004, 'Anne', 'Miller', '3255500014', 'Texas 73331', 'ANNIE1234@gmail.com', 'Freeglue78=', 'Client'),
(1000000005, 'Joe', 'Jakob', '7852456444', 'Mexico 87001', 'mexicanJOE@hotmail.com', 'Muddytiger37+', 'Client'),
(1000000006, 'Zebra', 'Redfiend', '4285122489', 'Maine 04032', 'Zebv1asd@gmail.com', 'Freesilver36/', 'Client'),
(1000000007, 'John', 'Mayer', '8234554259', 'Ohio 44101', 'Jonny8921@hotmail.com', 'Flatmonkey38#', 'Administator'),
(1000000008, 'Angelena', 'Jolie', '9872347357', 'Nevada 89513', 'AMangel@gmail.com', 'Lumpylace59+', 'Client'),
(1000000009, 'Jame', 'Bone', '8745786483', 'Maryland 20201', 'jamebond@hotmail.com', 'Emptypaste49*', 'Client'),
(1000000010, 'Selen', 'Bush', '9689214681', 'Hawaii 96801', 'selena@hotmail.com', 'Spicyroll60-', 'Client'),
(1000000011, 'Helena', 'Stone', '3452105426', 'Virginia 24517', 'Helenny@gmail.com', 'L_azyapple61', 'Administator');

INSERT INTO `Login_Info` (`LOGIN_ID`, `USER_ID`, `LOGIN_Log`) VALUES
(1010547, 1000000001, '2022-02-02'),
(1010625, 1000000002, '2022-02-04'),
(1010628, 1000000003, '2022-02-04'),
(1010748, 1000000004, '2022-02-05'),
(1010895, 1000000005, '2022-02-06'),
(1010896, 1000000006, '2022-02-06'),
(1010900, 1000000007, '2022-02-07'),
(1010950, 1000000008, '2022-02-09'),
(1010987, 1000000009, '2022-02-10'),
(1011021, 1000000010, '2022-02-12'),
(1011105, 1000000011, '2022-02-15');
    
INSERT INTO `PRODUCT` (`PROD_ID`, `PROD_Name`, `PROD_Price`, `PROD_Description`, `PROD_Image`, `PROD_Type`, `PROD_Period_generation`, `PROD_Console_type`) VALUES
(00000001, 'Sonic Ultimate Genesis Collection', 301, 'A Sega Games from 2009 play on Xbox 360', ('https://raw.githubusercontent.com/Game-Sole/Game-Sole-Web-Game-Sole/main/Web/Images/Product/Sonic.jpg'), 'Video game', 'Seventh', NULL),
(00000002, 'Magnavox Odyssey 2', 5988, 'One of the oldest home console game player from second generation', ('https://raw.githubusercontent.com/Game-Sole/Game-Sole-Web-Game-Sole/main/Web/Images/Product/Odyssey.jpg'), 'Game player', 'Second', 'home console player'),
(00000003, 'PS5 : DualSense Wireless Controller', 2690, 'A Wireless Controller for playstation 5 DualSense', ('https://raw.githubusercontent.com/Game-Sole/Game-Sole-Web-Game-Sole/main/Web/Images/Product/DualSense%20Controller.jpg'), 'Controller', 'Ninth', 'home console player'),
(00000004, 'Microsoft Xbox One S 1TB', 8189, 'A console game player from microsoft', ('https://raw.githubusercontent.com/Game-Sole/Game-Sole-Web-Game-Sole/main/Web/Images/Product/xbox%201.jpg'), 'Game player', 'Seventh', 'home console player'),
(00000005, 'Game boy', 3250, 'A first version of handheld in game history', ('https://raw.githubusercontent.com/Game-Sole/Game-Sole-Web-Game-Sole/main/Web/Images/Product/Game-Boy-Original.jpg'), 'Game player', 'First', 'handheld console player'),
(00000006, 'Finding Nemo', '157', NULL, ('https://raw.githubusercontent.com/Game-Sole/Game-Sole-Web-Game-Sole/main/Web/Images/Product/nemo.jpg'), 'Video game', 'Fourth', NULL),
(00000007, 'PSP Go', 4099, 'Portable playstation', ('https://raw.githubusercontent.com/Game-Sole/Game-Sole-Web-Game-Sole/main/Web/Images/Product/PSP%20Go.jpg'), 'Game player', 'Sixth', 'handheld console player'),
(00000008, 'Dragon Age 2', 281, 'An action role-playing video game developed by BioWare', ('https://raw.githubusercontent.com/Game-Sole/Game-Sole-Web-Game-Sole/main/Web/Images/Product/Dragonage.jpg'), 'Video game', 'Sixth', NULL),
(00000009, 'The Evil Within 2', 359, NULL, ('https://raw.githubusercontent.com/Game-Sole/Game-Sole-Web-Game-Sole/main/Web/Images/Product/The%20Evil%20Within%202.jpg'), 'Video game', 'Eighth', NULL),
(00000010, 'Mortal Kombat X', 221, 'A 2015 fighting video game developed by NetherRealm Studios', ('https://raw.githubusercontent.com/Game-Sole/Game-Sole-Web-Game-Sole/main/Web/Images/Product/mortalcombatx.jpg'), 'Video game', 'Seventh', NULL),
(00000011, 'Steam Deck', 13399, NULL, ('https://raw.githubusercontent.com/Game-Sole/Game-Sole-Web-Game-Sole/main/Web/Images/Product/Steam_Deck.png'), 'Game player', 'Ninth', 'handheld console player'),
(00000012, 'Sid Meiers Civilization Revolution', 219, NULL, ('https://raw.githubusercontent.com/Game-Sole/Game-Sole-Web-Game-Sole/main/Web/Images/Product/Sid%20Meier.jpg'), 'Video game', 'Fifth', NULL),
(00000013, 'Nintendo 64', 2600, 'A home video game console developed by Nintendo', ('https://raw.githubusercontent.com/Game-Sole/Game-Sole-Web-Game-Sole/main/Web/Images/Product/nintendo64.jpg'), 'Game player', 'Fifth', 'home console player');