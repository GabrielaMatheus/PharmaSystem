using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PharmaSystem.DataModel.Model;

namespace PharmaSystem.DataModel.Mappings
{
    public class CostumerMap : IEntityTypeConfiguration<Costumer>
    {
        public void Configure(EntityTypeBuilder<Costumer> builder)
        {
            builder.ToTable("Costumer");

            builder.Property(p => p.FirstName)
                .HasColumnType("varchar(50)")
                .IsRequired();

            builder.Property(p => p.LastName)
                .HasColumnType("varchar(50)")
                .IsRequired();

            builder.Property(p => p.Address)
                .HasColumnType("varchar(200)");

            builder.Property(p => p.PhoneNumber)
                .HasColumnType("integer");

            builder.Property(p => p.CPF)
                .HasColumnType("varchar(12)")
                .IsRequired();
        }
    }
}
