using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class CarDTO
    {
        public int carId { get; set; }
        public string carCompany { get; set; }
        public string model { get; set; }
        public int numSeats { get; set; }
        public bool trunc { get; set; }
        public string description { get; set; }
        public string picture { get; set; }
        public int owner { get; set; }
        public int insuranceType { get; set; }
        public System.DateTime expiryDate { get; set; }
        public string file { get; set; }
        public string carNum { get; set; }

    }
}
