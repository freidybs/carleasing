using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
using System.Device.Location;

namespace BL
{
    public class SupplyFunction
    {

        public static void newSupply(SupplyDTO Supply)
        {
            using (carLeasingEntities db = new carLeasingEntities())
            {
                Supply d = Casting.SupplyCasting.castToDAL(Supply);
                db.Supplies.Add(d);
                db.SaveChanges();


            }
        }

        public static List<SupplyDTO> getAllSupplies()
        {
            using (carLeasingEntities db = new carLeasingEntities())
            {
                return Casting.SupplyCasting.castListToDTO(db.Supplies.ToList());
            }

        }

        public static List<SupplyDTO> getFilterList(DemandDTO demand)
        {
            
            using (carLeasingEntities db = new carLeasingEntities())
            { List<SupplyDTO> filterList = new List<SupplyDTO>();
                //לולאה על כל החניונים חישוב לפי נקודות שלהם
                foreach (var supply in db.Supplies)
                {
                    var locA = new GeoCoordinate((double)demand.Locationx, (double)demand.Locationy );
                    var locB = new GeoCoordinate((double)supply.carLocationx, (double)supply.carLocationy);
                   double distance1 = locA.GetDistanceTo(locB);
                   var d = db.Supplies.FirstOrDefault(p => p.fromDate <= demand.fromDate && p.fromHour <= demand.fromHour && p.toDate >= demand.toDate
                  && p.toHour >= demand.toHour);
                    if (/*d!=null&&*/ distance1 < 2000)
                    {
                        var s = Casting.SupplyCasting.CastToDTO(supply);
                        filterList.Add(s);
                    }

                }
                return filterList;
            }
        }

    


    
    public static void deleteSupply(int SupplyId)
        {
            using (carLeasingEntities db = new carLeasingEntities())
            {
                Supply d = db.Supplies.FirstOrDefault(p => p.supplyId == SupplyId);
                db.Supplies.Remove(d);
                db.SaveChanges();
            }
        }

        public static void updateSupply(SupplyDTO Supply)
        {
            using (carLeasingEntities db = new carLeasingEntities())
            {

                SupplyDTO d = Casting.SupplyCasting.CastToDTO(db.Supplies.FirstOrDefault(p => p.supplyId == Supply.supplyId));
                d.fromDate = Supply.fromDate;
                d.fromHour = Supply.fromHour;
                d.carLocationx = Supply.carLocationx;
                d.carLocationy = Supply.carLocationy;
                d.toDate = Supply.toDate;
                d.toHour = Supply.toHour;
                Casting.SupplyCasting.castToDAL(d);
                db.SaveChanges();



            }

        }
        public static CarDTO lookForSuggest(DemandDTO demand)
        {
            using (carLeasingEntities db = new carLeasingEntities())
            {
                var d = db.Supplies.FirstOrDefault(p => p.fromDate <= demand.fromDate && p.fromHour <= demand.fromHour && p.toDate >= demand.toDate
                  && p.toHour >= demand.toHour);
                if (d != null)
                {
                    var currentCar = db.Cars.FirstOrDefault(c => c.carNum == d.carNum);
                    CarDTO carDTO = Casting.CarCasting.castToDTO(currentCar);
                    return carDTO;
                }
                return null;
            }
        }
    }
}
    //public static List<SupplyDTO> showSupplies(int userId)
    //{

    //    using (carLeasingEntities db = new carLeasingEntities())
    //    {

    //      return Casting.SupplyCasting.castListToDTO(db.Supplies.Where(p => p. == userId).ToList());


    //    }

    //}



