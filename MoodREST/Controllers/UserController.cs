using Microsoft.AspNetCore.Mvc;
using MoodREST.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ModelLib;
using MoodREST.Managers;

namespace MoodREST.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : IUserController
    {
        UserManager userManager = new UserManager();

          [HttpGet]
        public List<User> GetAll()
        {
            return userManager.GetAll();
        }

        [HttpGet("{id}")]
        public User Get(int id)
        {
            return userManager.Get(id);
        }

        [HttpPost]
        public bool Post([FromBody] User user)
        {
            return userManager.Post(user);
        }

        [HttpPut]
        public User Put(int id, [FromBody] User user)
        {
            return userManager.Update(id, user);
        }

        [HttpDelete("{id}")]
        public User Delete(int id)
        {
            return userManager.Remove(id);
        }
    }
}
