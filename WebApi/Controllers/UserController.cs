using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTO;
using BL;

namespace WebApi.Controllers
{
    public class UserController : ApiController

    {
        public bool login(string fName)
        {
            //if (UserFunction.login(fName, lName, password))
                return true;
            //return false;
        }
        //[HttpPost]
        //public bool login(string fName, string lName, string password)
        //{
        //    if (UserFunction.login(fName, lName, password))
        //        return true;
        //    return false;
        //}
        //[HttpPost]
        //public bool register(UserDTO user)
        //{if (UserFunction.register(user))
        //        return true;
        //    return false;

        //}












    }
}
