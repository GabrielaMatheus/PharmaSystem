using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using PharmaSystem.DataModel.DataContext;
using PharmaSystem.Repository;
using System;
using System.Linq;

namespace PharmaSystem
{
    public class Startup
    {
        public string ConnectionString { get; set; }
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            ConnectionString = Configuration.GetConnectionString("DefaultConnectionString");
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();
            services.AddScoped<ICostumerRepository, CostumerRepository>();
            services.AddScoped<IMedicineRepository, MedicineRepository>();
            services.AddScoped<IEmployeeRepository, EmployeeRepository>();
            services.AddScoped<IBasketRepository, BasketRepository>();
            services.AddDbContext<PharmacyContext>(options => options.UseSqlServer(ConnectionString));
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });
            services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v1", new OpenApiInfo
                {
                    Version = "v1",
                    Title = "Pharma Api"
                });
              options.ResolveConflictingActions(apiDescriptions => apiDescriptions.First());
            });

      services.AddCors(option =>
      {
        option.AddDefaultPolicy(builder =>
        {
          builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();

        });
      });

          //services.AddCors(options => options.AddPolicy("CorsPolicy",
          //  builder =>
          //  {
          //    builder.AllowAnyHeader()
          //            .AllowAnyMethod()
          //            .SetIsOriginAllowed((host) => true)
          //            .AllowCredentials();
          //  }));


    }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }


            //app.UseCors("CorsPolicy");
            //app.UseSignalR(routes =>
            //{
            //  routes.MapHub<General>("/hubs/general");
            //});


           app.UseHttpsRedirection();
            app.UseStaticFiles();
            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }

            app.UseRouting();
            app.UseCors();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=v1}/{action=Index}/{id?}");
            });

            app.UseSwaggerUI(options =>
            {
                options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
                options.RoutePrefix = string.Empty;
            });

      


      app.UseSpa(spa =>
            {

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });



     

      



    }
    }
}
