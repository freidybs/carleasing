using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTO;
using BL;

namespace WebApi.Controllers
{
    public class SupplyController : ApiController
    {
        [HttpPost]
        public void newSupply(SupplyDTO newSupply)
        {
            SupplyFunction.newSupply(newSupply);

        }
        [HttpPost]
        public void deleteSupply(int Supply)
        {
            SupplyFunction.deleteSupply(Supply);
        }
        //[HttpPost]
        //public List<SupplyDTO> showSupply(int id)
        //{
        //    return SupplyFunction.showSupplies(id);
        //}
        [HttpPost]
        public void updateSupply(SupplyDTO supply)
        {
            SupplyFunction.updateSupply(supply);
        }




    }
}
