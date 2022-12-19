# SQL Queries

[Return to main page](../README.md)

Example Schema:

```sql
CREATE TABLE IF NOT EXISTS `Customer` (
  `CustID` int(6) unsigned NOT NULL,
  `FirstName` varchar(200) NOT NULL,
  `LastName` varchar(200) NOT NULL,
  PRIMARY KEY (`CustID`)
) DEFAULT CHARSET=utf8;
INSERT INTO `Customer` (`CustID`, `FirstName`, `LastName`) VALUES
  (1, 'John', 'Doe'),
  (2, 'Jane', 'Doe'),
  (3, 'Alice', 'Bob'),
  (4, 'Oliver', 'James'),
  (5, 'John', 'Smith'),
  (6, 'Robert', 'Smith'),
  (7, 'Steve', 'Stevenson');

CREATE TABLE IF NOT EXISTS `Order` (
  `OrderID` int(6) unsigned NOT NULL,
  `CustomerID`int(6) unsigned NOT NULL,
  `OrderDate` date NOT NULL,
  PRIMARY KEY (`OrderID`),
  CONSTRAINT `FK_Order_CustomerID` FOREIGN KEY (`CustomerID`)
    REFERENCES `Customer` (`CustID`) 
) DEFAULT CHARSET=utf8;
INSERT INTO `Order` (`OrderID`, `CustomerID`, `OrderDate`) VALUES
  (1, 3, '2022-01-01'),
  (2, 3, '2022-02-02'),
  (3, 1, '2022-03-03'),
  (4, 4, '2022-04-04'),
  (5, 6, '2022-05-05'),
  (6, 3, '2022-06-06'),
  (7, 2, '2022-07-07'),
  (8, 7, '2022-08-08'),
  (9, 3, '2022-09-09'),
  (10, 3, '2022-10-10'),
  (11, 1, '2022-11-11'),
  (12, 4, '2022-12-12');

CREATE TABLE IF NOT EXISTS `OrderLine` (
  `OrderLineID` int(6) unsigned NOT NULL,
  `OrdID` int(6) unsigned NOT NULL,
  `ItemName` varchar(200) NOT NULL,
  `Cost` decimal(6,2) NOT NULL,
  `Quantity` int(6) NOT NULL,
  PRIMARY KEY (`OrderLineID`),
  CONSTRAINT `FK_OrderLine_OrdID` FOREIGN KEY (`OrdID`)
    REFERENCES `Order` (`OrderID`) 
) DEFAULT CHARSET=utf8;
INSERT INTO `OrderLine` (`OrderLineID`, `OrdID`, `ItemName`, `Cost`, `Quantity`) VALUES
  (1, 1, 'Apples', 2.30, 5),
  (2, 1, 'Bananas', 1.15, 4),
  (3, 1, 'Cherries', 3.45, 9),
  (4, 2, 'Danishes', 4.60, 3),
  (5, 2, 'Eggs', 8.05, 2),
  (6, 3, 'Figs', 2.65, 5),
  (7, 4, 'Grapes', 0.70, 7),
  (8, 4, 'Hats', 3.35, 2),
  (9, 5, 'Apples', 4.05, 9),
  (10, 6, 'Bananas', 7.40, 1),
  (11, 6, 'Cherries', 1.45, 1),
  (12, 6, 'Danishes', 8.85, 2),
  (13, 6, 'Eggs', 0.30, 3),
  (14, 7, 'Figs', 9.15, 5),
  (15, 8, 'Grapes', 9.45, 8),
  (16, 8, 'Hats', 8.60, 3),
  (17, 9, 'Apples', 2.30, 15),
  (18, 9, 'Bananas', 1.15, 14),
  (19, 9, 'Cherries', 3.45, 19),
  (20, 9, 'Danishes', 4.60, 13),
  (21, 9, 'Eggs', 8.05, 12),
  (22, 9, 'Figs', 2.65, 15),
  (23, 10, 'Grapes', 0.70, 17),
  (24, 10, 'Hats', 3.35, 12),
  (25, 10, 'Apples', 4.05, 19),
  (26, 10, 'Bananas', 7.40, 11),
  (27, 11, 'Cherries', 1.45, 11),
  (28, 11, 'Danishes', 8.85, 12),
  (29, 11, 'Eggs', 0.30, 13),
  (30, 11, 'Figs', 9.15, 15),
  (31, 12, 'Grapes', 9.45, 18),
  (32, 12, 'Hats', 8.60, 13);

```
