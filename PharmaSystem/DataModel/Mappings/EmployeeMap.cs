using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PharmaSystem.DataModel.Model;

namespace PharmaSystem.DataModel.Mappings
{
    public class EmployeeMap : IEntityTypeConfiguration<Employee>
    {
        public void Configure(EntityTypeBuilder<Employee> builder)
        {
            builder.ToTable("Employee");

            builder.Property(p => p.FirstName)
                .HasColumnType("varchar(50)")
                .IsRequired();

            builder.Property(p => p.LastName)
                .HasColumnType("varchar(50)")
                .IsRequired();

            builder.Property(p => p.Email)
                .HasColumnType("varchar(100)")
                .IsRequired();

            builder.Property(p => p.CPF)
                .HasColumnType("varchar(12)")
                .IsRequired();

            builder.Property(p => p.Password)
                .HasColumnType("varchar(50)")
                .IsRequired();
    }
    }
}
