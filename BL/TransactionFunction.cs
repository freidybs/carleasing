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
    public class TransactionFunction
    {

        

        public static bool CreatTransaction(int supplyId, int demanedId)
        {

            using (carLeasingEntities db = new carLeasingEntities())
                {
                Supply supply = db.Supplies.FirstOrDefault(s => s.supplyId == supplyId);
                Demand demaned = db.Demands.FirstOrDefault(d => d.demanedId == demanedId);
                if (supply!=null && demaned!=null)
                {
                    Transaction t = new Transaction()
                    {
                        demandId = demanedId,
                        supplyId = supplyId,
                    };
                    db.Transactions.Add(t);
                    if(supply.fromDate<demaned.fromDate)
                    {
                        Supply s = new Supply()
                        {
                            carNum = supply.carNum,
                            carLocationx = supply.carLocationx,
                            carLocationy = supply.carLocationy,
                            supplyId = supply.supplyId,
                            supplyU = supply.supplyU,
                            fromDate = supply.fromDate,
                            fromHour = supply.fromHour,
                            toDate = demaned.fromDate,
                            toHour = demaned.toHour
                        };
                        db.Supplies.Add(s);
                    }
                    if (supply.toDate > demaned.toDate)
                    {
                        Supply s = new Supply()
                        {
                            carNum = supply.carNum,
                            carLocationx = supply.carLocationx,
                            carLocationy = supply.carLocationy,
                            supplyId = supply.supplyId,
                            supplyU = supply.supplyU,
                            fromDate = demaned.toDate,
                            fromHour = demaned.toHour,
                            toDate = supply.toDate,
                            toHour = supply.toHour
                        };
                        db.Supplies.Add(s);
                    }
                }
                db.SaveChanges();
                }
            return true;    
        }

        public static List<TransactionDTO> showTransaction(int id)
        {
          
            using (carLeasingEntities db = new carLeasingEntities())
            {
                var uuu = db.Transactions.ToList();
                var y = db.Transactions.Where(p => p.Supply.supplyU == id || p.Demand.interestedId == id).ToList();
                var t= Casting.TransactionCasting.castListToDTO(y);
                return t;

            }
        }
    }
}


