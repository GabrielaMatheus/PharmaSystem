using PharmaSystem.DataModel.DataContext;
using PharmaSystem.DataModel.Model;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PharmaSystem.Repository
{
    public interface IMedicineRepository
    {
        Medicine Find(Guid id);
        List<Medicine> GetAll();
        Medicine Add(Medicine Medicine);
        Medicine Update(Medicine Medicine);

        void Remove(Guid id);
    }

    public class MedicineRepository : IMedicineRepository
    {
        private readonly PharmacyContext _db;

        public MedicineRepository(PharmacyContext db)
        {
            _db = db;
        }

        public Medicine Add(Medicine Medicine)
        {
            _db.Medicines.Add(Medicine);
            _db.SaveChanges();
            return Medicine;
        }

        public Medicine Find(Guid id)
        {
            return _db.Medicines.FirstOrDefault(c => c.ID == id);
        }

        public List<Medicine> GetAll()
        {
            return _db.Medicines.ToList();
        }

        public void Remove(Guid id)
        {
            Medicine Medicine = _db.Medicines.FirstOrDefault(c => c.ID == id);
            _db.Medicines.Remove(Medicine);
            _db.SaveChanges();
        }

        public Medicine Update(Medicine Medicine)
        {
            _db.Medicines.Update(Medicine);
            _db.SaveChanges();
            return Medicine;
        }
    }
}
