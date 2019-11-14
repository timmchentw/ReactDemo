using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ReactDemo.Models.app;

namespace ReactDemo.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Forms()
        {
            return View();
        }

        [HttpPost]
        public JsonResult TempTrans(double data)
        {   // 接收Json並回傳
            var tempC = data;
            var tempF = tempC * 9 / 5 + 32;

            return Json(tempF);
        } 
    }
}