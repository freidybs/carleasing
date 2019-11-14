using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BL
{
   public class insuranceFunction
    {
        public static List<insuranceTypeDTO> insuranceList()
        {using (carLeasingEntities db = new carLeasingEntities())
                return Casting.insuranceCasting.castListToDTO(db.Insurance.ToList());



        }
    }
}
