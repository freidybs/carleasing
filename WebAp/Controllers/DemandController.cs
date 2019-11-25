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
        [HttpGet]
        [Route("userDemands")]
        public List<DemandDTO> userDemands()
        {
            var id = Helper.getCurrentUserId(Request.GetRequestContext());
            return DemandsFunction.showDemands(id);
               
            
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
        [HttpDelete]
        public void delete(int id)
        {
            
            DemandsFunction.deleteDemand(id);
        }

        [HttpGet]
        [Route("getDemand/{id}")]
        public DemandDTO GetDemand([FromUri] int id)
        {
            return DemandsFunction.GetDemand(id);
        }



    }
}
