using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace ImarkProjectDemo.Models
{
    public partial class ViewCustomers
    {
        [Required]
        [Column("CustomerID")]
        [StringLength(5)]
        public string CustomerId { get; set; }
        [StringLength(30)]
        public string ContactName { get; set; }
    }
}
