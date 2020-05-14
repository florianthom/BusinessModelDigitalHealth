using Jwt_Identity.Models.Canvas.Sections.CompanyPattern;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Jwt_Identity.Models.Companies
{
    public class BaseCompany/* : Base*/
    {
        [Key]
        public int Id { get; set; }

        public string? Description { get; set; }
        public List<BaseCompanyPattern>? BaseCompanyPatterns { get; set; }

    }
}
