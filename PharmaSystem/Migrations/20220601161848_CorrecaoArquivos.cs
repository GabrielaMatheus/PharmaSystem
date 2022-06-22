using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PharmaSystem.Migrations
{
    public partial class CorrecaoArquivos : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Discount",
                table: "Basket");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "Discount",
                table: "Basket",
                type: "float",
                nullable: true);
        }
    }
}
