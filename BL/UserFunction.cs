using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;


namespace BL
{
    public class UserFunction
    {
       
        public static bool  login(UserDTO userD)
        {
            using (carLeasingEntities db = new carLeasingEntities())
            {
                var user = db.Users.FirstOrDefault(p => p.email == userD.email && p.password == userD.password);
                if (user != null)
                    return true;
                return false;
            }

        }
        public static bool register(UserDTO user)
        {
            using (carLeasingEntities db = new carLeasingEntities())
            { 
                var u = db.Users.FirstOrDefault(p => p.password== user.password);
                if (u != null)
                    return false;
                User newUser = Casting.UserCasting.castToDal(user);
                db.Users.Add(newUser);
                db.SaveChanges();
                return true;
            }
            
        }

        public static void updateDetails(UserDTO userU)
        {
            using (carLeasingEntities db = new carLeasingEntities())
            {
                var user=db.Users.Where(i => i.userId == userU.userId).FirstOrDefault();
                user.firstName = userU.firstName;
                user.lastName = userU.lastName;
                user.email = userU.email;
                user.password = userU.password;
                user.insuranceType = userU.insuranceType;
                user.phone = userU.phone;
                db.SaveChanges();
            }
        }

        public static UserDTO GetUserById(int userId)
        {
            using (carLeasingEntities db = new carLeasingEntities())
            {
                var user= db.Users.FirstOrDefault(p => p.userId == userId);
                return Casting.UserCasting.castToDto(user);
            }

        }

    }
}
