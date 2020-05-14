using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Jwt_Identity.Contracts.V1.Responses
{
    public class LoginPostResponse
    {
        public string FirstName { get; set; }
        public string SurName { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
    }
}
