using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BL.Casting
{
    public class SupplyCasting
    {
        public static SupplyDTO CastToDTO(Supply supplyDAL)
        {

            
            return new SupplyDTO()
            {
                supplyId = supplyDAL.supplyId,
                fromDate = supplyDAL.fromDate,
                fromHour = supplyDAL.fromHour,
                carLocationx = supplyDAL.carLocationx,
                carLocationy = supplyDAL.carLocationy,
                toDate = supplyDAL.toDate,
                toHour = supplyDAL.toHour,
                carNum = supplyDAL.carNum,
              

            };
            
        }
        public static Supply castToDAL(SupplyDTO supplyDTO)
        {
            using (carLeasingEntities db = new carLeasingEntities())
            {
                return new Supply()
                {
                    supplyId = supplyDTO.supplyId,
                    carLocationx = supplyDTO.carLocationx,
                    carLocationy = supplyDTO.carLocationy,
                    carNum = supplyDTO.carNum,
                    fromDate = supplyDTO.fromDate,
                    fromHour = supplyDTO.fromHour,
                    toDate = supplyDTO.toDate,
                   supplyU=supplyDTO.supplyU,
                    toHour = supplyDTO.toHour,
                    Transactions = db.Transactions.Where(p => p.supplyId == supplyDTO.supplyId).ToList(),
                    
                };



            }
           
        }
        public static List<SupplyDTO> castListToDTO(List<Supply>supplyList)
        {
            List<SupplyDTO> newList = new List<SupplyDTO>();
            supplyList.ForEach(p => newList.Add(CastToDTO(p)));
            return newList;
            
        }
        //public static List<Supply> castListToDAL(List<SupplyDTO> supplyList)
        //{
        //    List<Supply> newList = new List<Supply>();
        //    supplyList.ForEach(p => newList.Add(castToDAL(p)));
        //    return newList;

        //}
    }
}
