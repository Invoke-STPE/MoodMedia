using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ModelLib;

namespace MoodREST.Interfaces
{
    interface IUserManager
    {
        public List<User> GetAll();
        public User Get(int id);
        public User GetBySpotifyId(string spotifyId);
        public User Update(int id, User user);
        public User Post(User user);
        public User Remove(int id);
        public bool ImportMoodPlaylists(int id, IEnumerable<Playlist> moodPlaylists);
        IDictionary<string, int> UserActivities();
        public bool ImportMoodPlaylists(string id, IEnumerable<Playlist> moodPlaylists);
    }
}
