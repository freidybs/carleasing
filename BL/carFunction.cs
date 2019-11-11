using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL;
using System.Net.Http;
using System.IO;
using System.Security.Claims;
using System.Web;


namespace BL
{
   public  class carFunction
    {
        public static int newCar(CarDTO car)
        {
            using (carLeasingEntities db=new carLeasingEntities())
            {
                Car newCar = Casting.CarCasting.castToDAL(car);
                db.Cars.Add(newCar);
                db.SaveChanges();
                return db.Cars.FirstOrDefault(p => p.carNum == car.carNum).carId;
            }
        }
        public static void deleteCar(int carId)
        {
            using(carLeasingEntities db=new carLeasingEntities())
            {
                Car c = db.Cars.FirstOrDefault(y => y.carId == carId);
                db.Cars.Remove(c);
                db.SaveChanges();
            }
        }

        public static List<CarDTO> allCars()
        {
            using (carLeasingEntities db = new carLeasingEntities())
            {
                return Casting.CarCasting.castListToDTO(db.Cars.ToList());
                }
        }

       

        public static List<CarDTO> carList(int id)
        {
            using (carLeasingEntities db = new carLeasingEntities())
            {
                return Casting.CarCasting.castListToDTO(db.Cars.Where(p => p.owner == id).ToList());
            }
        }
       

    }
}
