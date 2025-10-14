using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Test.Models
{
    public class Book
    {
        public int Id { get; set; }
        [Required(ErrorMessage ="Der Titel wird benötigt!")]
        public string Titel { get; set; }
        [Required(ErrorMessage ="Der Autor wird benötigt!")]
        public string Autor { get; set; }
        [Required(ErrorMessage ="Eine ISBN wird benötigt!")]
        public string ISBN { get; set; }
        [Required(ErrorMessage ="Das Erscheinungsjahr wird benötigt!")]
        public int Jahr { get; set; }
    }
}