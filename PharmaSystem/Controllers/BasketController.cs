using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PharmaSystem.DataModel.Model;
using PharmaSystem.DataModel.Model.ViewModel;
using PharmaSystem.Repository;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PharmaSystem.Controllers
{
  [ApiController]
  [Route("v1")]
  public class BasketController : Controller
  {


    private readonly IMedicineRepository _MedicineRepository;
    private readonly IEmployeeRepository _EmployeeRepository;
    private readonly ICostumerRepository _CostumerRepository;
    private readonly IBasketRepository _BasketRepository;


    public BasketController(IMedicineRepository medicineRepository, IEmployeeRepository employeeRepository, ICostumerRepository costumerRepository, IBasketRepository basketRepository)
    {
      _MedicineRepository = medicineRepository;
      _EmployeeRepository = employeeRepository;
      _CostumerRepository = costumerRepository;
      _BasketRepository = basketRepository;
    }


    [HttpPost]
    [Route("basket/new")]
    public IActionResult AddBasket(Guid employeeId, Guid costumerId, Guid medicineId, double totalValue)
    {
      Basket basket = new Basket();

      if (ModelState.IsValid)
      {
        try
        {
          var employee = _EmployeeRepository.Find(employeeId);
          var costumer = _CostumerRepository.Find(costumerId);
          var medicine = _MedicineRepository.Find(medicineId);

          basket.Medicine = medicine;
          basket.Costumer = costumer;
          basket.Employee = employee;
          basket.TotalValue = totalValue;

          _BasketRepository.Update(basket);
          return Ok(basket);
        }
        catch (DbUpdateConcurrencyException)
        {
          return BadRequest();
        }
      }
      return BadRequest();
    }

    [HttpGet]
    [Route("basket/get")]
    public async Task<IActionResult> GetAllCostumers()
    {
      var basket = _BasketRepository.GetAll();
      return Ok(basket);
    }


    [HttpGet]
    [Route("basket/get/{id}")]
    public async Task<IActionResult> GetBasketById(Guid id)
    {

      var basket = _BasketRepository.Find(id);

      if (basket == null)
      {
        return NotFound();
      }

      return Ok(basket);
    }

    [HttpPut]
    [Route("basket/update/{id}")]
    public async Task<IActionResult> UpdateBasket(BasketViewModel basketView, Guid id)
    {
      var basket = _BasketRepository.Find(id);
      if (basket == null)
      {
        return NotFound();
      }

      try
      {
        basket.TotalValue = basketView.TotalValue;
        basket.Costumer = basketView.Costumer;
        basket.Medicine = basketView.Medicine;
        basket.Employee = basketView.Employee;

        _BasketRepository.Add(basket);
        return Ok(basket);
      }
      catch (DbUpdateConcurrencyException)
      {
        return BadRequest();
      }
    }

    [HttpPost]
    [Route("basket/delete/{id}")]
    public async Task<IActionResult> DeleteBasket([FromRoute] Guid id)
    {
      _BasketRepository.Remove(id);
      return Ok();
    }
  }
}
