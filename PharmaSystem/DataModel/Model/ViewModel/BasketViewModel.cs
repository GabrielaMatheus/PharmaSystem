using System;
using System.Collections.Generic;

namespace PharmaSystem.DataModel.Model.ViewModel
{
  public class BasketViewModel
  {
    public Guid ID { get; set; }
    public double TotalValue { get; set; }

    public Costumer Costumer { get; set; }
    public Medicine Medicine { get; set; }
    public Employee Employee { get; set; }

  }
}
