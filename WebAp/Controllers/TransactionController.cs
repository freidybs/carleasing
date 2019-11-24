using BL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Web.Http;
using System.Web.Http.Cors;



namespace WebAp.Controllers
{
    //[EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/Transaction")]
    public class TransactionController : ApiController
    {
       
        [HttpGet]
        [Route("creatTransaction/{supplyId}/{demanedId}")]
        public bool CreatTransaction([FromUri]int supplyId, [FromUri]int demanedId)
        {
            return TransactionFunction.CreatTransaction(supplyId, demanedId);

        }
        [HttpGet]
        [Route("userTransaction")]
        public List<TransactionDTO> showTransaction()
        {
            var id = Helper.getCurrentUserId(Request.GetRequestContext());
            return TransactionFunction.showTransaction(id);
        }
        //[HttpGet]
        //[Route("try")]
        //public MailMessage Try()
        //{
        
        //    return TransactionFunction.SendEmail();
        //}
    }
}


