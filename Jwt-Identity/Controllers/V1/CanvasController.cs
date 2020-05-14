using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Jwt_Identity.Contracts.V1;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Jwt_Identity.Controllers.V1
{
    [ApiController]
    public class CanvasController : ControllerBase
    {

        public CanvasController()
        {

        }

        [HttpGet]
        [Route(ApiRoutes.Canvas.GetAll)]
        public IActionResult GetAll()
        {

            return Ok();
        }
    }
}