using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace PharmaSystem.DataModel.Model
{
    public class Permissions
    {
        public int ID { get; set; }
        public Level Level { get; set; }
        public string Description { get; set; }
        public ICollection<Employee> Employee { get; set; }
    }

    public enum Level 
    { 
        Employee = 1,
        Manager = 2,
        Admin = 3,
        Owner = 4,
    }
}
