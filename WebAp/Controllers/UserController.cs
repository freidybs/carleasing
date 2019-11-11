using BL;
using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebAp.Controllers
{
    //[EnableCors(origins:"*",headers:"*",methods:"*")]
    [RoutePrefix("api/User")]
    public class UserController : ApiController
    {
        [HttpGet]
        [Route("getProfile")]
        public UserDTO getProfile()
        {
            var id = Helper.getCurrentUserId(Request.GetRequestContext());
            return UserFunction.GetUserById(id);
        }
        [HttpPost]
        [Route("updateDetails")]
        public void updateDetails(UserDTO user)
        {

            UserFunction.updateDetails(user);
        }
        [HttpPost]
        public bool login(string subItem, UserDTO user)
        {
            switch (subItem)
            {
                case "login":
                    return UserFunction.login(user);
                case "register":
                    return UserFunction.register(user);
                default:
                    break;
            }
            return false;

        }
        //[HttpGet]
        //public UserDTO GetCurrentUserInfo()
        //{
        //    var id = Helper.getCurrentUserId(Request.GetRequestContext());
        //    return UserFunction.GetUserById(id);
        //}
        //[HttpPost]
        //public bool register(UserDTO user)
        //{
        //    if (UserFunction.register(user))
        //        return true;
        //    return false;

        //}
    }
}
