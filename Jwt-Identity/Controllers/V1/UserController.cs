using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Jwt_Identity.Contracts.V1;
using Jwt_Identity.Contracts.V1.Requests;
using Jwt_Identity.Contracts.V1.Responses;
using Jwt_Identity.Models.User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Jwt_Identity.Controllers.V1
{

    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> userManager;
        private readonly SignInManager<ApplicationUser> signInManager;

        public UserController(UserManager<ApplicationUser> userManager,
                                 SignInManager<ApplicationUser> signInManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
        }

        //[HttpGet]
        //[Route(ApiRoutes.User.GetAll)]
        //public async Task<IActionResult> GetAll()
        //{
        //    return Ok(new { name = "Nick" });
        //}

    //    [HttpPost]
    //    [Route(ApiRoutes.User.Login)]
    //    [AllowAnonymous]
    //    public async Task<IActionResult> Login([FromBody] RegisterPostRequest registerPostRequest)
    //    {

    //        ApplicationUser user = new ApplicationUser
    //        {
    //            FirstName = registerPostRequest.FirstName,
    //            SurName = registerPostRequest.SurName,
    //            Email = registerPostRequest.Email,
    //        };

    //        var result = await userManager.CreateAsync(user, registerPostRequest.Passwort);


            

    //        var baseUrl = $"{HttpContext.Request.Scheme}://{HttpContext.Request.Host.ToUriComponent()}";
    //        var locationUri = baseUrl + "/" + ApiRoutes.User.Get.Replace("{userId}", user.Id);
    //        var response = new LoginPostResponse {
    //            FirstName = user.FirstName,
    //            SurName=user.SurName,
    //            UserName=user.UserName,
    //            Email =user.Email};
    //        return Created(locationUri, user);
    //    }
    }

}





//)
//        {
//            if (ModelState.IsValid)
//            {
//                // Identity user requires UserName and Email (and passwort)
//                var user = new ApplicationUser { UserName = model.Email, Email = model.Email, City = model.City };
//var result = await userManager.CreateAsync(user, model.Password);

//                if (result.Succeeded)
//                {

//                    var token = await userManager.GenerateEmailConfirmationTokenAsync(user);

//// Request.scheme makes the relative url to a clickable url-link
//var confirmationLink = Url.Action("ConfirmEmail", "Account",
//        new { userId = user.Id, token = token }, Request.Scheme);

//// 1. to get url for testing in development
//// 2. for general-logging
//logger.Log(LogLevel.Warning, confirmationLink);

//                    // otherwise if we create user as Admin we will login as this user instantly
//                    if(signInManager.IsSignedIn(User) && User.IsInRole("Admin"))
//                    {
//                        return RedirectToAction("ListUsers", "Administration");
//                    }

//                    // persistent asks if the user should be logged in even if he closed the browser
//                    await signInManager.SignInAsync(user, isPersistent: false);
//                    return RedirectToAction("index", "home");
//                }

//                foreach (var error in result.Errors)
//                {
//                    ModelState.AddModelError("", error.Description);
//                }
//            }
//            return View(model);
//        }