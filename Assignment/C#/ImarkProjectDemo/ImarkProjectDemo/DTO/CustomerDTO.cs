using ImarkProjectDemo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImarkProjectDemo.DTO
{
    public class CustomerDTO
    {
        public string Address { get; set; }
        public string City { get; set; }
        public string CompanyName { get; set; }
        public string ContactName { get; set; }
        public string ContactTitle { get; set; }
        public string Country { get; set; }
        public string CustomerID { get; set; }
        public string  Fax { get; set; }
        public string Phone { get; set; }
        public string PostalCode { get; set; }
        public string Region { get; set; }
        public ICollection<orders> Order { get; set; }

    }
    public class orders
    {
        public int ProoductID { get; set; }
        public short Quantity { get; set; }
        public string ShipAddress { get; set; }
        public string ShipCity { get; set; }
        public string ShipCountry { get; set; }
        public string ShipPostalCode { get; set; }
        public string ShipRegion { get; set; }
        public int Total { get; set; }
        public int UnitPrice { get; set; }
        public ICollection<OrderDetails> OrderDetails { get; set; }
    }
}
