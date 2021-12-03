using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using ModelLib;
using MoodREST.Managers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoodREST.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdministratorController : Controller
    {
        private static AdministratorManager _administratoManager = new AdministratorManager();
        public AdministratorController()
        {

        }
        [EnableCors]
        [HttpPost]
        public IActionResult Post([FromBody] Administrator admin)
        {
            bool authenticated = _administratoManager.ValidateAuthetication(admin.Username, admin.Password);
            if (authenticated)
            {
                return Ok(authenticated);
            } else { return BadRequest(authenticated); }
        }
    }
}
