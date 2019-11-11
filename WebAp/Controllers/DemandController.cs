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
    [RoutePrefix("api/Demand")]
    public class DemandController : ApiController
    {
        [HttpPost]
        [Route("look-for-suggest")]
        //[AllowAnonymous]
        public CarDTO lookForSuggest( DemandDTO Demand)
        {
            return SupplyFunction.lookForSuggest(Demand);
        }
        
        [HttpGet]
        [Route("get-list")]
        public List<DemandDTO> getAllDemands()
        {
            return DemandsFunction.getAllDemands();
        }

        public void newDemand(string subItem, DemandDTO Demand)
        {
            switch (subItem)
            {
                case "newDemand":
                    DemandsFunction.newDemand(Demand);
                    break;
               
                case "updateDemand":
                    DemandsFunction.updateDemand(Demand);
                    break;
                default:
                    break;
            }


        }
        
        //איך להעיבר עם סוג אוביקט אחר ולא עם demand
        //public void deleteDemand(int demand)
        //{
        //    DemandsFunction.deleteDemand(demand);
        //}

        //public List<DemandDTO> showDemands(int id)
        //{
        //    return DemandsFunction.showDemands(id);
        //}



    }
}
