using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Jwt_Identity.Contracts.V1.Requests
{
    public class RegisterPostRequest
    {
        public string FirstName { get; set; }
        public string SurName { get; set; }
        public string Email { get; set; }
        public string Passwort { get; set; }
        public string ConfirmPassword { get; set; }
    }
}
