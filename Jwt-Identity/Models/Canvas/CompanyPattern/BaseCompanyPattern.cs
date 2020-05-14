using Jwt_Identity.Models.Companies;
using Jwt_Identity.Models.Pattern;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Jwt_Identity.Models.Canvas.Sections.CompanyPattern
{
    public class BaseCompanyPattern
    {
        [Key]
        public int Id { get; set; }

        public int BaseCompanyId { get; set; }
        public BaseCompany BaseCompany { get; set; }

        public int BasePatternId { get; set; }
        public BasePattern BasePattern { get; set; }
    }
}
