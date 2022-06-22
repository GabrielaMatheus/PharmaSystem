using PharmaSystem.DataModel.DataContext;
using PharmaSystem.DataModel.Model;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PharmaSystem.Repository
{
    public interface IEmployeeRepository
    {
        Employee Find(Guid id);
        List<Employee> GetAll();
        Employee Add(Employee Employee);
        Employee Update(Employee Employee);

        void Remove(Guid id);
    }

    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly PharmacyContext _db;

        public EmployeeRepository(PharmacyContext db)
        {
            _db = db;
        }

        public Employee Add(Employee Employee)
        {
            _db.Employees.Add(Employee);
            _db.SaveChanges();
            return Employee;
        }

        public Employee Find(Guid id)
        {
            return _db.Employees.FirstOrDefault(c => c.ID == id);
        }

        public List<Employee> GetAll()
        {
            return _db.Employees.ToList();
        }

        public void Remove(Guid id)
        {
            Employee Employee = _db.Employees.FirstOrDefault(c => c.ID == id);
            _db.Employees.Remove(Employee);
            _db.SaveChanges();
        }

        public Employee Update(Employee Employee)
        {
            _db.Employees.Update(Employee);
            _db.SaveChanges();
            return Employee;
        }
    }
}
