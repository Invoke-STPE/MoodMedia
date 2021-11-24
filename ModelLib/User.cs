using System;

namespace ModelLib
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string ProfilePhotoURL { get; set; }
        public string Password { get; set; }

        public User(int id, string name, string address, string email, string profilePhotoURL, string password)
        {
            Id = id;
            Name = name;
            Address = address;
            Email = email;
            ProfilePhotoURL = profilePhotoURL;
            Password = password;
        }

        public User()
        {
            
        }

        public override string ToString()
        {
            return $"{Name} - Id: {Id}\nAdress: {Address}\nE-mail: {Email}\nProfilePhotoURL: {ProfilePhotoURL}";
        }

        public override bool Equals(object obj)
        {
            return obj is User user &&
                   Id == user.Id &&
                   Name == user.Name &&
                   Address == user.Address &&
                   Email == user.Email &&
                   ProfilePhotoURL == user.ProfilePhotoURL &&
                   Password == user.Password;
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Id, Name, Address, Email, ProfilePhotoURL, Password);
        }
    }
}
