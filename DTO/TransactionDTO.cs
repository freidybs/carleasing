using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class TransactionDTO
    {
        public int transactionId { get; set; }
        public Nullable<int> demandId { get; set; }
        public Nullable<int> supplyId { get; set; }
        public Nullable<System.DateTime> beginDate { get; set; }
        public Nullable<System.TimeSpan> beginHour { get; set; }
        public Nullable<System.DateTime> endDate { get; set; }
        public Nullable<System.TimeSpan> endHour { get; set; }

        
    }
}
