using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Jwt_Identity.Extensions;
using Jwt_Identity.Models;
using Jwt_Identity.Models.User;
using Jwt_Identity.Options;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;

namespace Jwt_Identity
{
    public class Startup
    {

        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }


        // injects classes into interfaces
        // "installs this classes into our application"
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddDatabaseExtension(Configuration);

            services.AddIdentityExtension();

            services.AddSwaggerExtension();

            services.AddCanvasServiceExtension();

        }







        // Configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }



            // swagger setup
            var swaggerOptions = new SwaggerOptions();
            Configuration.GetSection(nameof(SwaggerOptions)).Bind(swaggerOptions);
            app.UseSwagger(option =>
            {
                option.RouteTemplate = swaggerOptions.JsonRoute;
            });
            app.UseSwaggerUI(option => {
                option.SwaggerEndpoint(swaggerOptions.UiEndpoint, swaggerOptions.Description);
            });





            app.UseHttpsRedirection();

            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
