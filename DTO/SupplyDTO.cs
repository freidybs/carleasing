using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class SupplyDTO
    {
        public int supplyId { get; set; }
        public string carNum { get; set; }
        public Nullable<System.DateTime> fromDate { get; set; }
        public Nullable<System.TimeSpan> fromHour { get; set; }
        public Nullable<System.DateTime> toDate { get; set; }
        public Nullable<System.TimeSpan> toHour { get; set; }
        public Nullable<double> carLocationx { get; set; }
        public Nullable<double> carLocationy { get; set; }
        public Nullable<bool> insuranceDemand { get; set; }

       
       
       


    }
}
