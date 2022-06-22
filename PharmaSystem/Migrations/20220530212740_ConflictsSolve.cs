using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PharmaSystem.Migrations
{
    public partial class ConflictsSolve : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Medicine_Employee_EmployeeID",
                table: "Medicine");

            migrationBuilder.DropIndex(
                name: "IX_Medicine_EmployeeID",
                table: "Medicine");

            migrationBuilder.DropColumn(
                name: "EmployeeID",
                table: "Medicine");

            migrationBuilder.DropColumn(
                name: "Stripe",
                table: "Medicine");

            migrationBuilder.AlterColumn<string>(
                name: "CPF",
                table: "Employee",
                type: "varchar(12)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "Employee",
                type: "varchar(50)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AlterColumn<string>(
                name: "CPF",
                table: "Costumer",
                type: "varchar(12)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Password",
                table: "Employee");

            migrationBuilder.AddColumn<Guid>(
                name: "EmployeeID",
                table: "Medicine",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Stripe",
                table: "Medicine",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "CPF",
                table: "Employee",
                type: "integer",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(12)");

            migrationBuilder.AlterColumn<int>(
                name: "CPF",
                table: "Costumer",
                type: "integer",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(12)");

            migrationBuilder.CreateIndex(
                name: "IX_Medicine_EmployeeID",
                table: "Medicine",
                column: "EmployeeID");

            migrationBuilder.AddForeignKey(
                name: "FK_Medicine_Employee_EmployeeID",
                table: "Medicine",
                column: "EmployeeID",
                principalTable: "Employee",
                principalColumn: "ID");
        }
    }
}
