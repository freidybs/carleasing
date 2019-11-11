using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Web;
using System.Web.Http.Controllers;

namespace WebAp
{
    public class Helper
    {
        public static int getCurrentUserId(HttpRequestContext context)
        {
            ClaimsPrincipal principal = context.Principal as ClaimsPrincipal;
            var claims = principal.Claims.Select(x => new { type = x.Type, value = x.Value });

            return int.Parse(claims.Where(x => x.type == "Id").FirstOrDefault().value);
        }

    }
}