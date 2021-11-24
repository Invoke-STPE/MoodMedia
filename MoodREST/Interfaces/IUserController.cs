using ModelLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoodREST.Interfaces
{
    interface IUserController
    {
        public List<User> GetAll();
        public User Get(int id);
        public User Put(int id, User user);
        public bool Post(User user);
        public User Delete(int id);
    }
}
