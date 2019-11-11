using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using DTO;
using BL;
namespace WebAp.Controllers
{
    //[EnableCors(origins: "*", headers: "*", methods: "*")]
    public class InsuranceController : ApiController
    {
        [HttpGet]
        public List<insuranceTypeDTO> insuranceList()
        {
            return insuranceFunction.insuranceList(); 
        }
    }
}
