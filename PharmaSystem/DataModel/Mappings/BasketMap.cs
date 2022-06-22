using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PharmaSystem.DataModel.Model;

namespace PharmaSystem.DataModel.Mappings
{
    public class BasketMap : IEntityTypeConfiguration<Basket>
    {
        public void Configure(EntityTypeBuilder<Basket> builder)
        {
            builder.ToTable("Basket");

            builder.Property(p => p.TotalValue)
                .HasColumnType("float")
                .IsRequired();
        }
    }
}
