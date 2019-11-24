using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL;

namespace BL.Casting
{
    class DemandCasting
    {
        public static DemandDTO castToDTO(Demand demandDAL)
        {
            return new DemandDTO()
            {
                demanedId = demandDAL.demanedId,
                interestedId = demandDAL.interestedId,
                fromDate = demandDAL.fromDate,
                fromHour = demandDAL.fromHour,
                Locationx = demandDAL.Locationx,
                Locationy = demandDAL.Locationy,
                toDate = demandDAL.toDate,
                toHour = demandDAL.toHour,
                Picture = demandDAL.User != null ? demandDAL.User.picture : "",
          
                
            };


        }

        public static Demand castToDAL(DemandDTO demandDTO)
        {
            using (carLeasingEntities db = new carLeasingEntities())
            {
                return new Demand()
                {
                    demanedId = demandDTO.demanedId,
                    interestedId = demandDTO.interestedId,
                    fromDate = demandDTO.fromDate,
                    fromHour = demandDTO.fromHour,
                    Locationx = demandDTO.Locationx,
                    Locationy = demandDTO.Locationy,
                    toDate = demandDTO.toDate,
                    toHour = demandDTO.toHour,
                    Transactions = db.Transactions.Where(p => p.demandId == demandDTO.demanedId).ToList(),
                    
                    User = db.Users.FirstOrDefault(p => p.userId == demandDTO.interestedId)


                };
            }
        }
        public static List<DemandDTO>castListToDTO(List<Demand>demandList)
        {
            List<DemandDTO> newList = new List<DemandDTO>();
            demandList.ForEach(p => newList.Add(castToDTO(p)));
            return newList;



        }
    }
}
            
            




            
    

   
   



   
