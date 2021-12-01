using ModelLib;
using MoodREST.MockData;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoodREST.Managers
{
    public class AdministratorManager
    {
        private static List<Administrator> _administrators;
        private static int _nextId = 1;
        public AdministratorManager()
        {
            if (_administrators == null) _administrators = MockAdminData.GetMockData().ToList();

 
            foreach (var data in _administrators)
            {
                if (data.Id > _nextId) _nextId = data.Id;
            }
            _nextId++; 
        }
        public AdministratorManager(IEnumerable<Administrator> administrators)
        {
            _administrators = administrators.ToList();

            // Find next available id. To be used when adding new data
            foreach (var data in _administrators)
            {
                if (data.Id > _nextId) _nextId = data.Id;
            }
            _nextId++; // should be 1 above highest id found in list
        }

        public bool ValidateAuthetication(string username, string password)
        {
            return _administrators.Exists(u => u.Username.ToLower() == username.ToLower() && u.Password == password);
        }
    }
}
