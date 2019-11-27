using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
using System.Device.Location;
using System.Net.Mail;

namespace BL
{
    public class TransactionFunction
    {



        public static bool CreatTransaction(int supplyId, int demanedId)
        {

            using (carLeasingEntities db = new carLeasingEntities())
            {
                Supply supply = db.Supplies.FirstOrDefault(s => s.supplyId == supplyId);
                Demand demaned = db.Demands.FirstOrDefault(d => d.demanedId == demanedId);
                if (supply != null && demaned != null)
                {
                    Transaction t = new Transaction()
                    {
                        demandId = demanedId,
                        supplyId = supplyId,
                    };
                    db.Transactions.Add(t);
                    supply.isDone = true;
                    demaned.isDone = true;
                    if (supply.fromDate < demaned.fromDate)
                    {
                        Supply s = new Supply()
                        {
                            carNum = supply.carNum,
                            carLocationx = supply.carLocationx,
                            carLocationy = supply.carLocationy,
                            supplyId = supply.supplyId,
                            supplyU = supply.supplyU,
                            fromDate = supply.fromDate,
                            fromHour = supply.fromHour,
                            toDate = demaned.fromDate,
                            toHour = demaned.toHour,
                            isDone = false
                        };
                        db.Supplies.Add(s);
                    }
                    if (supply.toDate > demaned.toDate)
                    {
                        Supply s = new Supply()
                        {
                            carNum = supply.carNum,
                            carLocationx = supply.carLocationx,
                            carLocationy = supply.carLocationy,
                            supplyId = supply.supplyId,
                            supplyU = supply.supplyU,
                            fromDate = demaned.toDate,
                            fromHour = demaned.toHour,
                            toDate = supply.toDate,
                            toHour = supply.toHour,
                            isDone = false

                        };
                        db.Supplies.Add(s);
                    }
                }
                db.SaveChanges();
                SendEmail(supply);
            }
            return true;
        }

        public static List<TransactionDTO> showTransaction(int id)
        {

            using (carLeasingEntities db = new carLeasingEntities())
            {
                var transactions = db.Transactions.Where(p => p.Supply.supplyU == id || p.Demand.interestedId == id).ToList();
                var transactionsDto = Casting.TransactionCasting.castListToDTO(transactions);
                return transactionsDto;

            }
        }

        public static MailMessage SendEmail(Supply supply = null)
        {
            using (carLeasingEntities db = new carLeasingEntities())
            {
                if (supply == null)
                    supply = db.Supplies.FirstOrDefault(s => s.supplyId == 39);
                var user = db.Users.FirstOrDefault(u => u.userId == supply.supplyU);

                string htmlText = @"
                    <head> 
                        <style> 
                            body{background-color:cadetblue;direction:rtl;text-align:center;}
                            h1,h3,p{font-size:30px; text-align:center;color:black;}
                            .button {
                              font-size: 14px;
                            text-align: center;
                            border: 0px solid transparent;
                            background: rgb(230, 89, 8);
                            color: #ffffff;
                            display: inline-block;
                            text-transform: capitalize;
                            vertical-align: middle;
                            padding: 8px 20px;
                            -webkit-transform: perspective(1px) translateZ(0);
                            transform: perspective(1px) translateZ(0);
                            position: relative;
                            transition-property: color;
                            transition-duration: 0.5s;}
                        </style>
                    </head>
                    <body>";

                htmlText += "<h1> שלום" + user.firstName + ' ' + user.lastName + "</h1><p>";
                htmlText += "<div> ההצעה שהצעת נתפסה מתאריך" + supply.fromDate.Value.ToString("dd/mm/yy") + "בשעה " + supply.fromHour + "</div>";
                htmlText += "<div> עד תאריך" + supply.toDate.Value.ToString("dd/mm/yy") + " בשעה" + supply.toHour + "</div>";
                htmlText += "<button class='button'> מתאים לי </button>";
                string fromMail = "carLeasing@gmail.com";
                try
                {


                           SmtpClient smtp = new SmtpClient();
                    smtp.Host = "smtp.gmail.com";
                    smtp.Port = 587;
                    smtp.UseDefaultCredentials = true;
                    smtp.Credentials = new System.Net.NetworkCredential("idealtojob@gmail.com", "963852741+");
                    AlternateView plainView = AlternateView
                    .CreateAlternateViewFromString("Some plaintext", Encoding.UTF8, "text/plain");
                    smtp.EnableSsl = true;
                    var toMail = user.email;
                    MailMessage mail = new MailMessage(fromMail, toMail, "הצעתך נתפסה", htmlText);
                    mail.AlternateViews.Add(plainView);
                    System.Net.Mail.Attachment attachment;
                    AlternateView htmlView =
                           AlternateView.CreateAlternateViewFromString(htmlText, Encoding.UTF8, "text/html");
                    mail.AlternateViews.Add(htmlView);
                    mail.IsBodyHtml = true;
                    mail.BodyEncoding = UTF8Encoding.UTF8;
                    smtp.Send(mail);
                    return new MailMessage();
                }
                catch (Exception ex)
                {
                    var x = ex.Message;
                    return new MailMessage();

                }
            }
        }



    }
}


