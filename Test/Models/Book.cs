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
        [StringLength(100, MinimumLength = 2, ErrorMessage = "Der Titel muss zwischen 2 und 100 Zeichen lang sein.")]
        public string Titel { get; set; }
        [Required(ErrorMessage ="Der Autor wird benötigt!")]
        [StringLength(80, MinimumLength = 2, ErrorMessage = "Der Autor muss zwischen 2 und 100 Zeichen lang sein.")]
        public string Autor { get; set; }
        [Required(ErrorMessage ="Eine ISBN wird benötigt!")]
        [RegularExpression(@"^[\d\-xX]{10,17}$", ErrorMessage = "Ungültige ISBN (10-13 Ziffern, ggf mit Bindestrichen).")]
        public string ISBN { get; set; }
        [Required(ErrorMessage ="Das Erscheinungsjahr wird benötigt!")]
        [Range(1000, 2025, ErrorMessage = "Das erscheinungsjahr muss zwischen 1000 und 2025 liegen.")]
        public int Jahr { get; set; }
    }
}