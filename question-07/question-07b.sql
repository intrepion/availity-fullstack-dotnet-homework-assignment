SELECT c.`CustID`, c.`FirstName`, c.`LastName`, COALESCE(SUM(ol.`Cost` * ol.`Quantity`),0) as `TotalValue`
    FROM `Customer` c
    LEFT JOIN `Order` o ON c.`CustID` = o.`CustomerID`
    AND o.`OrderDate` >= DATE_SUB(NOW(), interval 6 month)
    LEFT JOIN `OrderLine` ol ON o.`OrderID` = ol.`OrdID`
    GROUP BY c.`CustID`;
