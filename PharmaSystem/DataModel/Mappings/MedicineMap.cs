using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PharmaSystem.DataModel.Model;

namespace PharmaSystem.DataModel.Mappings
{
  public class MedicineMap : IEntityTypeConfiguration<Medicine>
  {
    public void Configure(EntityTypeBuilder<Medicine> builder)
    {
      builder.ToTable("Medicine");

      builder.Property(p => p.Name)
          .HasColumnType("varchar(75)")
          .IsRequired();

      builder.Property(p => p.Price)
          .HasColumnType("float")
          .IsRequired();

      builder.Property(p => p.Amount)
          .HasColumnType("integer")
          .IsRequired();

      builder.Property(p => p.Category)
          .HasColumnType("varchar(100)")
          .IsRequired();

      builder.Property(p => p.Amount)
          .HasColumnType("integer")
          .IsRequired();

    }
  }
}
