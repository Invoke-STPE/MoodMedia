using SpotifyAPI.Web;

namespace MoodMedia.Services
{
    public class SpotifyService
    {
        private readonly IConfiguration _configuration;
        private SpotifyClient _client;

        public SpotifyService(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public Uri NewLoginRequest()
        {
            var loginRequest = new LoginRequest(
                new Uri("https://localhost:7130/"),
                "643154b5cff4485aa3558dfe456741c8",
                LoginRequest.ResponseType.Code
                )
            {
                //Scope = new[] { Scopes.PlaylistReadPrivate, Scopes.PlaylistReadCollaborative }
            };
            return loginRequest.ToUri();
        }

        public async Task GetAccessToken(string code)
        {
            string clientId = _configuration.GetValue<string>("clientId");
            string clientSecret = _configuration.GetValue<string>("clientSecret");
            var response = await new OAuthClient().RequestToken(

                new AuthorizationCodeTokenRequest(clientId, clientSecret, code, new Uri("https://localhost:7130/"))
                );
            _client = new SpotifyClient(response.AccessToken);
        }

        public async Task<FullTrack> GetTrack(string trackId)
        {
            return await _client.Tracks.Get(trackId);
        }
    }
}
