using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Jwt_Identity.Models
{
    public class Base
    {
        public class BaseModel
        {
            //[Key]
            [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
            public int Id { get; set; }

            //[Required]
            [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
            public DateTime CreatedOn { get; set; } = DateTime.UtcNow;

            //It is either required - then there is no sense in it being nullable - or it is not required, then you nullable makes sense, but it makes no sense to require it.
            [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
            public DateTime? UpdatedOn { get; set; }

            [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
            public DateTime LastAccessed { get; set; }
        }
    }
}
