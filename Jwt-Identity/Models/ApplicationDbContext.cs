using Jwt_Identity.Models.User;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Jwt_Identity.Models.Pattern;
using Jwt_Identity.Models.Companies;
using Jwt_Identity.Models.Canvas;

namespace Jwt_Identity.Models
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<BasePattern> Pattern { get; set; }

        public DbSet<BaseCompany> Companies { get; set; }
        public DbSet<BaseCanvas> Canvas { get; set; }


        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
    }
}
