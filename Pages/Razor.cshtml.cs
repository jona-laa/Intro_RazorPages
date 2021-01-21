using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace RazorIntro.Pages
{
    public class RazorModel : PageModel
    {
        public void OnGet()
        {
        }
    }

    public class Course {
        public string code { get; set; }
        public string name { get; set; }
    }
}
