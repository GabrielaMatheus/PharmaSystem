using PharmaSystem.DataModel.DataContext;
using PharmaSystem.DataModel.Model;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PharmaSystem.Repository
{
    public interface ICostumerRepository
    {
        Costumer Find(Guid id);
        List<Costumer> GetAll();
        Costumer Add(Costumer costumer);
        Costumer Update(Costumer costumer);

        void Remove(Guid id);
    }

    public class CostumerRepository : ICostumerRepository
    {
        private readonly PharmacyContext _db;

        public CostumerRepository(PharmacyContext db)
        {
            _db = db;
        }

        public Costumer Add(Costumer costumer)
        {
            _db.Costumers.Add(costumer);
            _db.SaveChanges();
            return costumer;
        }

        public Costumer Find(Guid id)
        {
            return _db.Costumers.FirstOrDefault(c => c.ID == id);
        }

        public List<Costumer> GetAll()
        {
            return _db.Costumers.ToList();
        }

        public void Remove(Guid id)
        {
            Costumer costumer = _db.Costumers.FirstOrDefault(c => c.ID == id);
            _db.Costumers.Remove(costumer);
            _db.SaveChanges();
        }

        public Costumer Update(Costumer costumer)
        {
            _db.Costumers.Update(costumer);
            _db.SaveChanges();
            return costumer;
        }   
    }
}
