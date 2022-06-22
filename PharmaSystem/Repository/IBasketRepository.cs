using PharmaSystem.DataModel.DataContext;
using PharmaSystem.DataModel.Model;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PharmaSystem.Repository
{
  public interface IBasketRepository
  {
    Basket Find(Guid id);
    List<Basket> GetAll();
    Basket Add(Basket Basket);
    Basket Update(Basket Basket);

    void Remove(Guid id);
  }

  public class BasketRepository : IBasketRepository
  {
    private readonly PharmacyContext _db;

    public BasketRepository(PharmacyContext db)
    {
      _db = db;
    }

    public Basket Add(Basket Basket)
    {
      _db.Baskets.Add(Basket);
      _db.SaveChanges();
      return Basket;
    }

    public Basket Find(Guid id)
    {
      return _db.Baskets.FirstOrDefault(c => c.ID == id);
    }

    public List<Basket> GetAll()
    {
      return _db.Baskets.ToList();
    }

    public void Remove(Guid id)
    {
      Basket Basket = _db.Baskets.FirstOrDefault(c => c.ID == id);
      _db.Baskets.Remove(Basket);
      _db.SaveChanges();
    }

    public Basket Update(Basket Basket)
    {
      _db.Baskets.Update(Basket);
      _db.SaveChanges();
      return Basket;
    }
  }
}
