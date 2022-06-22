using System;
using System.Collections.Generic;

namespace PharmaSystem.DataModel.Model.ViewModel
{
  public class MedicineViewModel
  {
    public Guid ID { get; set; }
    public string Name { get; set; }
    public double Price { get; set; }
    public string Category { get; set; }
    public int Amount { get; set; }
  }
}
