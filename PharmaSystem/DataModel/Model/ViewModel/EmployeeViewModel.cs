using System;

namespace PharmaSystem.DataModel.Model.ViewModel
{
  public class EmployeeViewModel
  {
    public Guid ID { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string CPF { get; set; }
    public string Password { get; set; }
  }
}
