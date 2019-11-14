using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BL.Casting
{
    public class TransactionCasting
    { public static TransactionDTO castToDTO(Transaction transactionDAL)
        {
            return new TransactionDTO()
            {
                supplyId = transactionDAL.supplyId,
                transactionId = transactionDAL.transactionId,
                beginDate = transactionDAL.beginDate,
                beginHour = transactionDAL.beginHour,
                endDate = transactionDAL.endDate,
                endHour = transactionDAL.endHour,
                demandId = transactionDAL.demandId
            };
        }

        public static Transaction castToDAL(TransactionDTO transactionDTO)
        {
            using (carLeasingEntities db = new carLeasingEntities())
            {
                return new Transaction()
                {
                    transactionId = transactionDTO.transactionId,
                    beginDate = transactionDTO.beginDate,
                    beginHour = transactionDTO.beginHour,
                    demandId = transactionDTO.demandId,
                    endDate = transactionDTO.endDate,
                    endHour = transactionDTO.endHour,
                    supplyId = transactionDTO.supplyId,
                    Demand = db.Demand.FirstOrDefault(p => p.demanedId == transactionDTO.demandId),
                    Supply = db.Supply.FirstOrDefault(p => p.supplyId == transactionDTO.supplyId)
                };
            }
        }
                    
                    
                    
                    
                    
            

            
        
    }
}
