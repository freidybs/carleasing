//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class Supply
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Supply()
        {
            this.Transactions = new HashSet<Transaction>();
        }
    
        public int supplyId { get; set; }
        public string carNum { get; set; }
        public Nullable<System.DateTime> fromDate { get; set; }
        public Nullable<System.TimeSpan> fromHour { get; set; }
        public Nullable<System.DateTime> toDate { get; set; }
        public Nullable<System.TimeSpan> toHour { get; set; }
        public Nullable<double> carLocationx { get; set; }
        public Nullable<double> carLocationy { get; set; }
        public Nullable<int> supplyU { get; set; }
        public Nullable<bool> isDone { get; set; }
        public Nullable<double> price { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Transaction> Transactions { get; set; }
        public virtual User User { get; set; }
    }
}
