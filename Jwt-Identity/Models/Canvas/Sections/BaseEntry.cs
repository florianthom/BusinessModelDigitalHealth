using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Jwt_Identity.Models.Canvas.Sections
{
    public class BaseEntry
    {
        [Key]
        public int Id { get; set; }
        public string Text { get; set; }
        public string? Note { get; set; }
        public int BaseCanvasId { get; set; }
        public BaseCanvas BaseCanvas { get; set; }
    }
}
