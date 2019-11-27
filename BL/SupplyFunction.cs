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
                d.isDone = false;
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
            {
                List<SupplyDTO> filterList = new List<SupplyDTO>();
                //לולאה על כל הרכבים חישוב לפי נקודות שלהם
                foreach (var supply in db.Supplies)
                {
                    var locA = new GeoCoordinate((double)demand.Locationx, (double)demand.Locationy);
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
                //if (demand.price)
                //{
                //    filterList = filterList.Where(p => p.price >= demand.price);//.ToList();
                //}
                //if (demand.carCompany && demand.numSeats)
                //{
                //    foreach (var fl in filterList)
                //    {
                //        var cc = db.Cars.FirstOrDefault(p => p.carNum == fl.carNum);
                //        if (cc.carCompany != demand.carCompany || cc.numSeats != demand.numSeats)
                //        {
                //            filterList.Remove(fl);
                //        }

                //    }
                //}
                //else if (demand.carCompany)
                //{
                //    foreach (var fl in filterList)
                //    {
                //        var cc = db.Cars.FirstOrDefault(p => p.carNum == fl.carNum);
                //        if (cc.carCompany != demand.carCompany)
                //        {
                //            filterList.Remove(fl);
                //        }

                //    }
                //}
                //else
                //{
                //    foreach (var fl in filterList)
                //    {
                //        var cc = db.Cars.FirstOrDefault(p => p.carNum == fl.carNum);
                //        if (cc.numSeats != demand.numSeats)
                //            filterList.Remove(fl);
                //    }

                //}
                    return filterList.Where(f => f.isDone == false).ToList();
                //    if(demand.toDate-demand.fromDate==0)
                //{
                //    demand.toHour - demand.fromHour;
                //}
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

                var s = db.Supplies.FirstOrDefault(p => p.supplyId == Supply.supplyId);
                s.fromDate = Supply.fromDate;
                s.fromHour = Supply.fromHour;
                s.carLocationx = Supply.carLocationx;
                s.carLocationy = Supply.carLocationy;
                s.toDate = Supply.toDate;
                s.toHour = Supply.toHour;
                db.SaveChanges();



            }

        }

        public static SupplyDTO GetSupply(int id)
        {
            using (carLeasingEntities db = new carLeasingEntities())
            {
                return Casting.SupplyCasting.CastToDTO(db.Supplies.FirstOrDefault(s => s.supplyId == id));
            }
        }

        public static void deleteSupplyByCar(int id)
        {
            using (carLeasingEntities db = new carLeasingEntities())
            {
                var d = db.Cars.FirstOrDefault(p => p.carId == id);
                Car n = d;
                List<Supply> s = db.Supplies.Where(p => p.carNum == n.carNum).ToList();
                db.Supplies.RemoveRange(s);
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



        public static List<SupplyDTO> showSupplies(int id)
        {
            using (carLeasingEntities db = new carLeasingEntities())
            {

                return Casting.SupplyCasting.castListToDTO(db.Supplies.Where(p => p.supplyU == id).ToList());


            }
        }
    }
}


