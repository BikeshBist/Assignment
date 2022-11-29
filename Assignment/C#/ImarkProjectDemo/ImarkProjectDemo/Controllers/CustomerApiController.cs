using ImarkProjectDemo.DTO;
using ImarkProjectDemo.Models;
using ImarkProjectDemo.RandomId;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ImarkProjectDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerApiController : ControllerBase
    {
        private readonly NorthwindContext _Db;
        public CustomerApiController(NorthwindContext Db)
        {
            this._Db = Db;
            
        }
     

        // GET: api/<CustomerApiController>
        [HttpGet]
        public ActionResult<List<Customers>> Get()
        {
           
            var customerList = _Db.Customers.Include(x=>x.Orders).ToList();
            return customerList;
        }

        // GET api/<CustomerApiController>/5
        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            var selectedCustomer = _Db.Customers.Where(x => x.CustomerId == id).Include(x => x.Orders).FirstOrDefault();
            return Ok(selectedCustomer);
        }

        [HttpGet]
        [Route("GetEmployees")]
        public IActionResult GetEmployees()
        {
            var employees = _Db.Employees.ToList();
            return Ok(employees);
        }

        [HttpGet]
        [Route("GetProducts")]
        public IActionResult GetProducts()
        {
            var products = _Db.Products.ToList();
            return Ok(products);
        }
        // POST api/<CustomerApiController>
        [HttpPost]
        public IActionResult Post([FromBody] Customers customer)
        {
            Random res = new Random();

            // String of alphabets 
            String str = "abcdefghijklmnopqrstuvwxyz";
            int size = 5;

            // Initializing the empty string
            String ran = "";

            for (int i = 0; i < size; i++)
            {

                // Selecting a index randomly
                int x = res.Next(26);

                // Appending the character at the 
                // index to the random string.
                ran = ran + str[x];
            }
                Customers newCustomers = new Customers();
                newCustomers.CustomerId = ran;
                newCustomers.CompanyName = customer.CompanyName;
            newCustomers.ContactName = customer.ContactName;
            newCustomers.ContactTitle = customer.ContactTitle;
            newCustomers.Address = customer.Address;
            newCustomers.City = customer.City;
            newCustomers.PostalCode = customer.PostalCode;
            newCustomers.Country = customer.Country;
            newCustomers.Phone = customer.Fax;
            _Db.Add(newCustomers);       
            _Db.SaveChanges();

            foreach (Orders order in customer.Orders)
            {
                Orders newOrder = new Orders();
                {
                    newOrder.CustomerId = newCustomers.CustomerId;
                    newOrder.ShipAddress = order.ShipAddress;
                    newOrder.ShipCity = order.ShipCity;
                    newOrder.ShipRegion = order.ShipRegion;
                    newOrder.ShipPostalCode = order.ShipPostalCode;
                    newOrder.ShipCountry = order.ShipCountry;
                }
                _Db.Add(newOrder);
                _Db.SaveChanges();
            }
             return Ok();
        }

        // PUT api/<CustomerApiController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CustomerApiController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
