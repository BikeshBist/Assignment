using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace ImarkProjectDemo.Models
{
    public partial class EmployeeTerritories
    {
        [Key]
        [Column("EmployeeID")]
        public int EmployeeId { get; set; }
        [Key]
        [Column("TerritoryID")]
        [StringLength(20)]
        public string TerritoryId { get; set; }

        [ForeignKey(nameof(EmployeeId))]
        [InverseProperty(nameof(Employees.EmployeeTerritories))]
        public virtual Employees Employee { get; set; }
        [ForeignKey(nameof(TerritoryId))]
        [InverseProperty(nameof(Territories.EmployeeTerritories))]
        public virtual Territories Territory { get; set; }
    }
}
