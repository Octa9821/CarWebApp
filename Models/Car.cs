using System;
using System.Data.Entity;

namespace CarWebApp.Models
{
    public class Car
    {
        public int ID { get; set; }
        public string Make { get; set; }
        public int Power { get; set; }
        public bool Convertible { get; set; }
    }
    public class CarDBContext : DbContext
    {
        public DbSet<Car> Cars { get; set; }
    }
}
