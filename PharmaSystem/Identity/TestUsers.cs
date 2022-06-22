using IdentityModel;
using IdentityServer4.Test;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text.Json;
using IdentityServer4;

namespace PharmaSystem.Identity
{
    public class TestUsers
    {
        public static List<TestUser> Users
        {
            get
            {
                var address = new
                {
                    street_address = "Pinaple Streed",
                    locality = "Bikini Bottom",
                    postal_code = 202014,
                    country = "Some place at the Sea"
                };
                
                return new List<TestUser>
                {
                    new TestUser
                    {
                        SubjectId = "4002",
                        Username = "SpongeBob@KrustyCrab.com",
                        Password = "SquarePants",
                        Claims =
                        {
                            new Claim(JwtClaimTypes.Name, "Sponge Bob SquarePants"),
                            new Claim(JwtClaimTypes.Email, "SpongeBob@KrustyCrab.com"),
                            new Claim(JwtClaimTypes.EmailVerified, "true", ClaimValueTypes.Boolean),
                        }
                    },
                    new TestUser
                    {
                        SubjectId = "8922",
                        Username = "PatricTheStar@KrustyCrab.com",
                        Password = "ImPink",
                        Claims =
                        {
                            new Claim(JwtClaimTypes.Name, "Patric Star"),
                            new Claim(JwtClaimTypes.Email, "PatricTheStar@KrustyCrab.com"),
                            new Claim(JwtClaimTypes.EmailVerified, "true", ClaimValueTypes.Boolean),
                        }
                    }
                };
            }
        }
    }
}