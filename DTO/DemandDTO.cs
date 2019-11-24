using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class DemandDTO
    {
        public int demanedId { get; set; }
        public Nullable<System.DateTime> fromDate { get; set; }
        public Nullable<System.TimeSpan> fromHour { get; set; }
        public Nullable<System.DateTime> toDate { get; set; }
        public Nullable<System.TimeSpan> toHour { get; set; }
        public Nullable<double> Locationx { get; set; }
        public Nullable<double> Locationy { get; set; }
        public Nullable<int> interestedId { get; set; }
        public string Picture { get; set; }


    }
}
