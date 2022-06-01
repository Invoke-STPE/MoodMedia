using Microsoft.AspNetCore.Components.Authorization;
using Microsoft.AspNetCore.Components.Server.ProtectedBrowserStorage;
using SpotifyAPI.Web;
using System.Security.Claims;

namespace MoodMedia.Authentication
{
    public class CustomAuthenticationStateProvider : AuthenticationStateProvider
    {
        private readonly ProtectedSessionStorage _protectedSessionStorage;

        // This is used for annoymouses user
        private ClaimsPrincipal _anonymous = new ClaimsPrincipal(new ClaimsIdentity());

        public CustomAuthenticationStateProvider(ProtectedSessionStorage protectedSessionStorage)
        {
            _protectedSessionStorage = protectedSessionStorage;
        }

        public override async Task<AuthenticationState> GetAuthenticationStateAsync()
        {
            try
            {
                var spotifySessionStorageResult = await _protectedSessionStorage.GetAsync<AuthUser>("SpotifySession");
                var spotifySession = spotifySessionStorageResult.Success ? spotifySessionStorageResult.Value : null;
                // If the user is not registed, create am annoymous user
                if (spotifySession == null)
                {
                    return await Task.FromResult(new AuthenticationState(_anonymous));
                }
                // If User is authenticated, create a claim and return an user
                //PrivateUser privateUser = await spotifySession.UserProfile.Current();
                var claimsPrincipal = new ClaimsPrincipal(new ClaimsIdentity(new List<Claim>
                {
                new Claim(ClaimTypes.Name, spotifySession.DisplayName),
                new Claim(ClaimTypes.SerialNumber, spotifySession.AccessToken),
                }, "CustomAuth"));

                return await Task.FromResult(new AuthenticationState(claimsPrincipal));
            }
            catch
            {
                return await Task.FromResult(new AuthenticationState(_anonymous));
            }
        }
        public async Task UpdateAuthenticationState(AuthUser spotifyClient)
        {
            ClaimsPrincipal claimsPrincipal;
            // If user is logged in, assign value userSession to protectedSessionStorage
            if (spotifyClient != null)
            {
                await _protectedSessionStorage.SetAsync("SpotifySession", spotifyClient);
                claimsPrincipal = new ClaimsPrincipal(new ClaimsIdentity(new List<Claim>
                {
                    new Claim(ClaimTypes.Name, spotifyClient.AccessToken),
                    new Claim(ClaimTypes.SerialNumber, spotifyClient.AccessToken),

                }));
            }
            else
            {
                // If the user logs out, delete session data and make it annoymous.
                await _protectedSessionStorage.DeleteAsync("SpotifySession");
                claimsPrincipal = _anonymous;
            }
            // Notifies blazor that an users authentication state has changed
            //NotifyAuthenticationStateChanged(Task.FromResult(new AuthenticationState(claimsPrincipal)));
            NotifyAuthenticationStateChanged(GetAuthenticationStateAsync());
        }
    }
}
