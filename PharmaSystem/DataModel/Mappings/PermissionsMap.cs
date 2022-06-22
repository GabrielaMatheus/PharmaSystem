using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PharmaSystem.DataModel.Model;

namespace PharmaSystem.DataModel.Mappings
{
    public class PermissionsMap : IEntityTypeConfiguration<Permissions>
    {
        public void Configure(EntityTypeBuilder<Permissions> builder)
        {
            builder.ToTable("Permission");

            builder.Property(p => p.Level)
                .HasColumnType("int")
                .IsRequired();

            builder.Property(p => p.Description)
                .HasColumnType("varchar(100)");
        }
    }
}
