using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL;

namespace BL.Casting
{
    public class CarCasting
    {
        public static CarDTO castToDTO(Car carDAL)
        {
            return new CarDTO()
            { carId = carDAL.carId,
                carCompany = carDAL.carCompany,
                description = carDAL.description,
                model = carDAL.model,
                numSeats = carDAL.numSeats,
                owner = carDAL.owner,
                picture = carDAL.picture,
                trunc = carDAL.trunc,
                carNum=carDAL.carNum,
                insuranceType=carDAL.insuranceType,
                file=carDAL.file,
                expiryDate=carDAL.expiryDate
            };

        }
        public static Car castToDAL(CarDTO carDTO)
        {
            using (carLeasingEntities db = new carLeasingEntities())
            {
                return new Car()
                {
                    carId = carDTO.carId,
                    carCompany = carDTO.carCompany,
                    description = carDTO.description,
                    model = carDTO.model,
                    numSeats = carDTO.numSeats,
                    owner = carDTO.owner,
                    picture = carDTO.picture,
                    trunc = carDTO.trunc,
                    carNum=carDTO.carNum,
                    insuranceType=carDTO.insuranceType,
                    file=carDTO.file,
                    expiryDate=carDTO.expiryDate
                };
            }
        }

        public static List<CarDTO> castListToDTO(List<Car> carList)
        {
            List<CarDTO> newList = new List<CarDTO>();
            carList.ForEach(p => newList.Add(castToDTO(p)));
            return newList;



        }


    }
}
