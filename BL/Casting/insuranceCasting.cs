using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BL.Casting
{
    public class insuranceCasting
    {
        public static insuranceTypeDTO castToDTO(Insurance insuraneDAL)
        {
            return new insuranceTypeDTO()
            {
                insuranceId = insuraneDAL.insuranceId,
                insuranceName = insuraneDAL.insuranceName
            };


    }

        public static List<insuranceTypeDTO> castListToDTO(List<Insurance> dalList)
        {
            using (carLeasingEntities db = new carLeasingEntities())
            {
                List<insuranceTypeDTO> newList = new List<insuranceTypeDTO>();
                dalList.ForEach(p => newList.Add(castToDTO(p)));
                return newList;


            }


        }
}
}
