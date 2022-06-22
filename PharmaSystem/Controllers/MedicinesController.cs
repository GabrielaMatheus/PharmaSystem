using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using PharmaSystem.DataModel.DataContext;
using PharmaSystem.DataModel.Model;
using PharmaSystem.DataModel.Model.ViewModel;
using PharmaSystem.Repository;

namespace PharmaSystem.Controllers
{
  [ApiController]
  [Route("v1")]
  public class MedicinesController : Controller
  {
    private readonly IMedicineRepository _MedicineRepository;

    public MedicinesController(IMedicineRepository MedicineRepository)
    {
      _MedicineRepository = MedicineRepository;
    }

    [HttpGet]
    [Route("Medicine/get")]
    public async Task<IActionResult> GetAllMedicines()
    {
      var Medicine = _MedicineRepository.GetAll();
      return Ok(Medicine);
    }


    [HttpGet]
    [Route("Medicine/get/{id}")]
    public async Task<IActionResult> GetMedicineById(Guid id)
    {

      var Medicine = _MedicineRepository.Find(id);

      if (Medicine == null)
      {
        return NotFound();
      }

      return Ok(Medicine);
    }

    [HttpPut]
    [Route("medicine/update/{id}")]
    public async Task<IActionResult> UpdateMedicine(MedicineViewModel medicineView, [FromRoute] Guid id)
    {
      var medicine = _MedicineRepository.Find(id);
      if (medicine == null)
      {
        return NotFound();
      }

      try
      {
        medicine.Name = medicineView.Name;
        medicine.Price = medicineView.Price;
        medicine.Amount = medicine.Amount;

        _MedicineRepository.Update(medicine);
        return Ok(medicine);
      }
      catch (DbUpdateConcurrencyException)
      {
        return BadRequest();
      }
    }

    [HttpPost]
    [Route("Medicine/new")]
    public async Task<IActionResult> AddMedicine(Medicine Medicine)
    {
      _MedicineRepository.Add(Medicine);
      return Ok(Medicine);
    }

    [HttpPost]
    [Route("Medicine/delete/{id}")]
    public async Task<IActionResult> DeleteMedicine([FromRoute] Guid id)
    {
      _MedicineRepository.Remove(id);
      return Ok();
    }
  }
}
