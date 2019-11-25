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
        public static UserDTO  login(UserDTO userD)
        {
            using (carLeasingEntities db = new carLeasingEntities())
            {
                var user = db.Users.FirstOrDefault(p => p.email == userD.email && p.password == userD.password);
                return Casting.UserCasting.castToDto(user);
            }

        }

        public static int getUsers()
        {
            using (carLeasingEntities db = new carLeasingEntities())
            {
                return db.Users.Count();
            }
        }
        public static int getTrans()
        {
            using (carLeasingEntities db = new carLeasingEntities())
            {
                return db.Transactions.Count();
            }
        }
        public static UserDTO register(UserDTO user)
        {
            using (carLeasingEntities db = new carLeasingEntities())
            { 
                var u = db.Users.FirstOrDefault(p => p.password== user.password);
                if (u != null)
                    return null;
                User newUser = Casting.UserCasting.castToDal(user);
               var uu= db.Users.Add(newUser);
                db.SaveChanges();
                return Casting.UserCasting.castToDto(uu);
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
