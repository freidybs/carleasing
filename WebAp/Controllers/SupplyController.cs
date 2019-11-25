using BL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;



namespace WebAp.Controllers
{
    //[EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/Supply")]
    public class SupplyController : ApiController
    {
        [HttpGet]
        [Route("get-list")]
        public List<SupplyDTO> getAllSupplies()
        {
            return SupplyFunction.getAllSupplies();
        }
        //[Route("getLocationsSupplies")]
        //public List<SupplyDTO> getLocation()
        //{
        //    return SupplyFunction.getLocationSupplies();
        //}
        [HttpPost]
        [Route("get-filter-list")]
        public List<SupplyDTO> getFilterList(DemandDTO demand)
        {
            //demand.interestedId = Helper.getCurrentUserId(Request.GetRequestContext());
            //DemandsFunction.newDemand(demand);
            return SupplyFunction.getFilterList(demand);
        }
        [HttpPost]
        [Route("saveDeamnd")]
        public DemandDTO SaveDeamnd(DemandDTO demand)
        {
            demand.interestedId = Helper.getCurrentUserId(Request.GetRequestContext());
            return DemandsFunction.newDemand(demand);
          
        }
        [HttpPost]
        public void newSupply(string subItem,SupplyDTO Supply)
        {
            switch (subItem)
            {
                case "newSupply":
                    Supply.supplyU = Helper.getCurrentUserId(Request.GetRequestContext());
                    SupplyFunction.newSupply(Supply);
                    break;
                case "updateSupply":
                    SupplyFunction.updateSupply(Supply); 
                        break;
                
                default:
                    break;
            }
           
        }
      [HttpDelete]
       public void deleteSupply(int id)
       {
          SupplyFunction.deleteSupply(id);
       }
       [HttpGet]
       [Route("userSupplies")]
        public List<SupplyDTO> showSupply()
        {
             var id = Helper.getCurrentUserId(Request.GetRequestContext());
           return SupplyFunction.showSupplies(id);
        }

        [HttpGet]
        [Route("getSupply/{id}")]
        public SupplyDTO GetSupply([FromUri] int id)
        {
            return SupplyFunction.GetSupply(id);
        }

    }
}
