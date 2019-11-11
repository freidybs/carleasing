using DAL;
using Microsoft.Owin.Security.OAuth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;

namespace WebAp
{
    public class MyAuthProvider : OAuthAuthorizationServerProvider
    {

        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            var identity = new ClaimsIdentity(context.Options.AuthenticationType);

            using (carLeasingEntities db = new carLeasingEntities())
            {
                var user = db.Users.FirstOrDefault(p => p.email == context.UserName && p.password == context.Password);
                if (user != null)
                {
                    identity.AddClaim(new Claim("Id", user.userId.ToString()));
                    context.Validated(identity);

                }
                else
                {
                    context.SetError("invalid_grant", "Provided username and password is incorrect");
                    context.Rejected();
                }
            }
        }

    }
}