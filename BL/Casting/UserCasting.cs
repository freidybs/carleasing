using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL;
namespace BL.Casting
{
    public class UserCasting
    {
        public static UserDTO castToDto(User user)
        {
            return new UserDTO()
            {
                userId = user.userId,
                email = user.email,
                lastName = user.lastName,
                firstName = user.firstName,
                password = user.password,
                phone = user.phone,
                insuranceType=user.insuranceType
            };


        }
        public static User castToDal(UserDTO userDTO)
        {
            using (carLeasingEntities db = new carLeasingEntities())
            {
                return new User()
                {
                    userId = userDTO.userId,
                    email = userDTO.email,
                    firstName = userDTO.firstName,
                    lastName = userDTO.lastName,
                    phone = userDTO.phone,
                    password = userDTO.password,
                    Cars = db.Cars.Where(c => c.owner == userDTO.userId).ToList(),
                    //Demands = db.Demands.Where(d => d.interestedId == userDTO.userId).ToList(),
                    insuranceType=userDTO.insuranceType
                };
            }
        }
    }
}