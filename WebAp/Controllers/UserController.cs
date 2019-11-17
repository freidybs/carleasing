using BL;
using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
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
        public UserDTO login(string subItem, UserDTO user)
        {
            switch (subItem)
            {
                case "login":
                 return   UserFunction.login(user);
                  
                case "register":
                    return UserFunction.register(user);
                default:
                    break;
            }
            return null;

        }

        [Route("GetCurrentUser")]
        [HttpGet]
        public UserDTO getCurrent()
        {
            var id = Helper.getCurrentUserId(Request.GetRequestContext());
            return UserFunction.GetUserById(id);
        }
        [Route("UploadPhotos")]
        [HttpPost]
        public string UploadFile(string id)
        {
            var pathToSql = " http://localhost:58516/UploadFiles/";
            var allPath = "";
            HttpResponseMessage response = new HttpResponseMessage();
            var abc = Request.Properties.Values;
            var httpRequest = HttpContext.Current.Request;


            foreach (string file in httpRequest.Files)
            {

                pathToSql = " http://localhost:58516/UploadFiles/";
                var postedFile = httpRequest.Files[file];
                var directoryPath = HttpContext.Current.Server.MapPath("~/UploadFiles/");
                Directory.CreateDirectory(directoryPath + id);
                allPath = directoryPath + id + "/" + postedFile.FileName;
                postedFile.SaveAs(allPath);
                pathToSql += id + "/" + postedFile.FileName;
                using (carLeasingEntities db = new carLeasingEntities())
                {
                    var user = db.Users.FirstOrDefault(p => p.userId.ToString() == id);

                   user.picture = pathToSql;
                    db.SaveChanges();
                }

            }

            return pathToSql;

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
