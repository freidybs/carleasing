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
            DemandsFunction.newDemand(demand);
            return SupplyFunction.getFilterList(demand);
        }
            
        [HttpPost]
        public void newSupply(string subItem,SupplyDTO Supply)
        {
            switch (subItem)
            {
                case "newSupply":
                    SupplyFunction.newSupply(Supply);
                    break;
                case "updateSupply":
                    SupplyFunction.updateSupply(Supply); 
                        break;
                //case "deleteSupply":
                //    SupplyFunction.deleteSupply(Supply);
                //    break;
                default:
                    break;
            }
           
        }
       //איך להבעביר בסוג אחר ולא אוביקט???
        //public void deleteSupply(int Supply)
        //{
        //    SupplyFunction.deleteSupply(Supply);
        //}
        ////[HttpPost]
        ////public List<SupplyDTO> showSupply(int id)
        ////{
        ////    return SupplyFunction.showSupplies(id);
        ////}
       
        
    }
}
