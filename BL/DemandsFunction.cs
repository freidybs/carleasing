﻿using System;
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
        public static DemandDTO newDemand(DemandDTO demand)
        {using (carLeasingEntities db = new carLeasingEntities())
            {
                Demand d = Casting.DemandCasting.castToDAL(demand);
                d.isDone = false;
                var dd= db.Demands.Add(d);
                db.SaveChanges();
                dd.interestedId = demand.interestedId;
                db.SaveChanges();
                return Casting.DemandCasting.castToDTO(dd);
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
                List<Demand> list = new List<Demand>();
                list = db.Demands.Where(p => p.isDone == false).ToList();

                return Casting.DemandCasting.castListToDTO(list);


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

        public static DemandDTO GetDemand(int id)
        {
            using (carLeasingEntities db = new carLeasingEntities())
            {
                return Casting.DemandCasting.castToDTO(db.Demands.FirstOrDefault(s => s.demanedId == id));
            }
        }
    }
}
