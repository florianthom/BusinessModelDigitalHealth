using Jwt_Identity.Models;
using Jwt_Identity.Models.User;
using Jwt_Identity.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Jwt_Identity.Extensions
{
    public static class ServiceInstallerExtensions
    {
        public static IServiceCollection AddIdentityExtension(this IServiceCollection services)
        {
            services.AddIdentity<ApplicationUser, IdentityRole>()
                // to make entityFramework function with identity
                .AddEntityFrameworkStores<ApplicationDbContext>();
            return services;
        }

        public static IServiceCollection AddSwaggerExtension(this IServiceCollection services)
        {
            services.AddSwaggerGen(a =>
            {
                a.SwaggerDoc("v1", new OpenApiInfo { Title = "Digital Businessmodel Digital Health", Version = "v1" });
            });
            return services;
        }

        public static IServiceCollection AddDatabaseExtension(this IServiceCollection services, IConfiguration config)
        {
            services.AddDbContextPool<ApplicationDbContext>(options =>
                options.UseSqlServer(config.GetConnectionString("DefaultConnection"))
            );
            return services;
        }

        public static IServiceCollection AddCanvasServiceExtension(this IServiceCollection services)
        {
            services.AddSingleton<ICanvasService, CanvasService>();
            return services;
        }
    }
}
