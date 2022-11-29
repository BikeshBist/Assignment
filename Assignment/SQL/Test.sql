-- 1. Write a SQL query to generate Customer along with their number of Orders.
-- Your query starts from here.
	select cust.CustomerID, cust.ContactName, cust.Address,cust.Phone,  count(*) as totalCount  from Customers cust
	left join Orders as O
	on cust.CustomerID=O.CustomerID
	group by cust.CustomerID,cust.ContactName,cust.Address,cust.Phone

-- 2. Write a SQL query to Find Customers who haven’t ordered anything yet using both SQL join and subqueries.  
-- Your query starts from here.

	--using SQL join--
	select cust.CustomerID,cust.CompanyName, cust.ContactName,cust.ContactTitle, cust.Address,City,
	cust.Region,cust.PostalCode,cust.Phone,cust.Fax
	from Customers as cust  left join Orders as o on cust.CustomerID=o.CustomerID where 
	o.CustomerID is null

	--using subqueries--
	select CustomerID,CompanyName, ContactName,ContactTitle, Address,City,Region,PostalCode,Phone,Fax
	from Customers
	where CustomerID not in
	(select CustomerID from orders)

-- 3. Write a SQL query to find Customers along with their latest order.
-- Your query starts from here.

	select cust.CustomerID,cust.ContactName, o.OrderID from Customers as cust inner join  Orders as o 
	on cust.CustomerID=o.CustomerID order by o.OrderID DESC

		--(Comment_line: here o.OrderID is primary key of Orders table.So descending  
		--order by of OrderID gives recent order).


-- 4. Using only the Orders table find the number of Orders Shipped by Country. 
-- Your query starts from here.

	select ShipCountry,
	count(OrderID)as NumOfOrders
	from Orders
	group by ShipCountry


-- 5. Using the Orders table only find the Customers with 5 Orders. 
-- Your query starts from here.

	select CustomerID, count(CustomerID) as NumOrders 
	from Orders 
	group by CustomerID having count (*)=5;



