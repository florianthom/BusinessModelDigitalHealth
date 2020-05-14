using Jwt_Identity.Models.Canvas;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Jwt_Identity.Models.User
{
    public class ApplicationUser : IdentityUser
    {
        [MaxLength(50, ErrorMessage = "Firstname cannot exceeed 50 characters")]
        public string FirstName { get; set; }

        [MaxLength(50, ErrorMessage = "Surname cannot exceeed 50 characters")]
        public string SurName { get; set; }

        public List<BaseCanvas>? BaseCanvases { get; set; }




        //[Required]
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        //public DateTime CreatedOn { get; set; } = DateTime.UtcNow;


        //[DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        //public DateTime? UpdatedOn { get; set; }

        //[DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        //public DateTime LastAccessed { get; set; }
    }
}
