using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BL
{
   public  class DemandsFunction
    {
        public static void newDemand(DemandDTO demand)
        {using (carLeasingEntities db = new carLeasingEntities())
            {
                Demand d = Casting.DemandCasting.castToDAL(demand);
                db.Demands.Add(d);
                db.SaveChanges();
            }
        }
        public static void deleteDemand(int demandId)
        {
            using (carLeasingEntities db = new carLeasingEntities())
            {
                Demand d = db.Demands.FirstOrDefault(p => p.demanedId == demandId);
                db.Demands.Remove(d);
                db.SaveChanges();
            }
        }

        public static List<DemandDTO> getAllDemands()
        {

            using (carLeasingEntities db = new carLeasingEntities())
            {

                return Casting.DemandCasting.castListToDTO(db.Demands.ToList());


            }
        }

        public static List<DemandDTO> showDemands(int userId)
        {
           
                using (carLeasingEntities db = new carLeasingEntities())
            {

                return  Casting.DemandCasting.castListToDTO(db.Demands.Where(p => p.interestedId == userId).ToList());
                   
                 
            }

        }
        public static void updateDemand(DemandDTO demand)
        {
            using (carLeasingEntities db = new carLeasingEntities())
            {
               
                 var d = db.Demands.FirstOrDefault(p => p.demanedId == demand.demanedId);
                d.fromDate = demand.fromDate;
                d.fromHour = demand.fromHour;
                d.Locationx = demand.Locationx;
                d.Locationy = demand.Locationy;
                d.toDate = demand.toDate;
                d.toHour = demand.toHour;
                db.SaveChanges();

                
               
            }
        }

    }
}
