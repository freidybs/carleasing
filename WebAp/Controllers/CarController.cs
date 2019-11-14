using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using DTO;
using BL;
using System.Web;
using System.Security.Claims;
using System.IO;
using DAL;

namespace WebAp.Controllers
{
    //[EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/Car")]
    //[Authorize]
    public class CarController : ApiController
    {
        [HttpGet]
        [Route("getCarList")]
        public List<CarDTO> getCarList()
        {
            var id = Helper.getCurrentUserId(Request.GetRequestContext());
            return carFunction.carList(id);

        }
        //[HttpGet]
        //[Route("getAllList")]
        //public List<CarDTO> getAllcars()
        //{

        //    return carFunction.allCars();

        //}

        [Route("UploadPhotos")]
        [HttpPost]
        public HttpResponseMessage UploadFile(string id)
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
                    var car = db.Car.FirstOrDefault(p => p.carId.ToString() == id);

                    car.picture = pathToSql;
                    db.SaveChanges();
                }

            }

            return response;

        }
        [Route("newCar")]
        [HttpPost]
        public int newCar(CarDTO car)
        {

            car.owner = Helper.getCurrentUserId(Request.GetRequestContext());
            return carFunction.newCar(car);


        }
        [HttpDelete]
        public void delete(int id)
        {
            SupplyFunction.deleteSupplyByCar(id);
            carFunction.deleteCar(id);
        }
        [Route("edit")]
        [HttpPost]
        public void edit(CarDTO car)
        {
            carFunction.edit(car);
        }
    }
}

