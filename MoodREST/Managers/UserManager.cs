using ModelLib;
using MoodREST.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace MoodREST.Managers
{
    public class UserManager : IUserManager
    {

        public static List<User> Users = new List<User>()
        {
            new User(0, "Mikkel", "solrød", "mikk568f@edu.zealand.dk", "B)", "1234"),
            new User(1, "Oscar", "Roskål", "oscar568f@edu.zealand.dk", "B)", "1234"),
            new User(2, "Steven", "Kan ikke huske", "steve568f@edu.zealand.dk", "B)", "1234"),
            new User(3, "Christopher", "Roskål", "chris568f@edu.zealand.dk", "B)", "1234"),
        };

        public User Get(int id)
        {
            User foundUser = Users.Find(u => u.Id == id);
            if(foundUser == null)
            {
                throw new KeyNotFoundException($"User with Id: {id} not found");
            }
            return foundUser;
        }        

        public List<User> GetAll()
        {
            return Users;
        }

        public bool Post(User user)
        {
            if (user != null)
            {
                Users.Add(user);
                return true;
            }
            return false;
        }

        public User Remove(int id)
        {
            try
            {
                User RemovedUser = Get(id);
                Users.Remove(Get((id)));
                return RemovedUser;
            }
            catch (KeyNotFoundException knfe)
            {
                throw new KeyNotFoundException(knfe.Message);
            }
        }


        public User Update(int id, User updatedUser)
        {
            if (updatedUser != null)
            {
                var obj = Get(id);
                obj.Id = updatedUser.Id;
                obj.Name = updatedUser.Name;
                obj.SpotifyId = updatedUser.SpotifyId;
                obj.Address = updatedUser.Address;
                obj.Email = updatedUser.Email;
                obj.ProfilePhotoURL = updatedUser.ProfilePhotoURL;
                return obj;
            }
            return null;
        }


        //Methods from here are used for testing
        public void TestSetup()
        {
            List<User> newList = new List<User>() {
                new User(0, "Mikkel", "solrød", "mikk568f@edu.zealand.dk", "B)", "1234"),
                new User(1, "Oscar", "Roskål", "oscar568f@edu.zealand.dk", "B)", "1234"),
                new User(2, "Steven", "Kan ikke huske", "steve568f@edu.zealand.dk", "B)", "1234"),
                new User(3, "Christopher", "Roskål", "chris568f@edu.zealand.dk", "B)", "1234"),
            };
            Users = newList;
        }
    }
}