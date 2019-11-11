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
    public class DemandController : ApiController
    {
        [HttpPost]
        public void newDemand(DemandDTO newDemand)
        {
            DemandsFunction.newDemand(newDemand);

        }
        [HttpPost]
        public void deleteDemand(int demand)
        {
            DemandsFunction.deleteDemand(demand);
        }
        [HttpPost]
        public List<DemandDTO> showDemands(int id)
        {
          return DemandsFunction.showDemands(id);
        }
        [HttpPost]
        public void updateDemand(DemandDTO demand)
        {
            DemandsFunction.updateDemand(demand);
        }


    }



}
