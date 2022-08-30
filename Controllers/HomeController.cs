using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CarWebApp.Models;

namespace CarWebApp.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "List of cars";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Contact page.";

            return View();
        }

        public ActionResult SaveCar(Car car)
        {
            Console.WriteLine($"Car received make: {car.Make} power {car.Power} and is convertible {(car.Convertible ? "Yes" : "No")}");
            return View("About");
        }
    }
}