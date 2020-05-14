using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Jwt_Identity.Contracts.V1
{
    public static class ApiRoutes
    {
        public const string Root = "api";
        public const string Version = "v1";
        public const string Base = Root + "/" + Version;

        public static class Canvas
        {

            public const string Get = Base + "/canvas/{userId}";

            public const string GetAll = Base + "/canvas";

            public const string Create = Base + "/canvas";

            public const string Update = Base + "/canvas/{userId}";

            public const string Delete = Base + "/canvas/{userId}";

        }

        public static class User
        {

            public const string Login = Base + "/identity/login";

            public const string Register = Base + "/identity/register";

        }

    }
}
