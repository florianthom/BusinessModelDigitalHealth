using Microsoft.EntityFrameworkCore.Migrations;

namespace Jwt_Identity.Migrations
{
    public partial class BaseModelTry1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Companies",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Companies", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Pattern",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pattern", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BaseCompanyPattern",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BaseCompanyId = table.Column<int>(nullable: false),
                    BasePatternId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BaseCompanyPattern", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BaseCompanyPattern_Companies_BaseCompanyId",
                        column: x => x.BaseCompanyId,
                        principalTable: "Companies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BaseCompanyPattern_Pattern_BasePatternId",
                        column: x => x.BasePatternId,
                        principalTable: "Pattern",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Canvas",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    ApplicationUserId = table.Column<int>(nullable: false),
                    ApplicationUserId1 = table.Column<string>(nullable: true),
                    BasePatternId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Canvas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Canvas_AspNetUsers_ApplicationUserId1",
                        column: x => x.ApplicationUserId1,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Canvas_Pattern_BasePatternId",
                        column: x => x.BasePatternId,
                        principalTable: "Pattern",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ChannelEntry",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Text = table.Column<string>(nullable: true),
                    Note = table.Column<string>(nullable: true),
                    BaseCanvasId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChannelEntry", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ChannelEntry_Canvas_BaseCanvasId",
                        column: x => x.BaseCanvasId,
                        principalTable: "Canvas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CostStructureEntry",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Text = table.Column<string>(nullable: true),
                    Note = table.Column<string>(nullable: true),
                    BaseCanvasId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CostStructureEntry", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CostStructureEntry_Canvas_BaseCanvasId",
                        column: x => x.BaseCanvasId,
                        principalTable: "Canvas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CustomerRelationshipEntry",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Text = table.Column<string>(nullable: true),
                    Note = table.Column<string>(nullable: true),
                    BaseCanvasId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomerRelationshipEntry", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CustomerRelationshipEntry_Canvas_BaseCanvasId",
                        column: x => x.BaseCanvasId,
                        principalTable: "Canvas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CustomerSegmentEntry",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Text = table.Column<string>(nullable: true),
                    Note = table.Column<string>(nullable: true),
                    BaseCanvasId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomerSegmentEntry", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CustomerSegmentEntry_Canvas_BaseCanvasId",
                        column: x => x.BaseCanvasId,
                        principalTable: "Canvas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "KeyActivietyEntry",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Text = table.Column<string>(nullable: true),
                    Note = table.Column<string>(nullable: true),
                    BaseCanvasId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KeyActivietyEntry", x => x.Id);
                    table.ForeignKey(
                        name: "FK_KeyActivietyEntry_Canvas_BaseCanvasId",
                        column: x => x.BaseCanvasId,
                        principalTable: "Canvas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "KeyPartnerEntry",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Text = table.Column<string>(nullable: true),
                    Note = table.Column<string>(nullable: true),
                    BaseCanvasId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KeyPartnerEntry", x => x.Id);
                    table.ForeignKey(
                        name: "FK_KeyPartnerEntry_Canvas_BaseCanvasId",
                        column: x => x.BaseCanvasId,
                        principalTable: "Canvas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "KeyResourceEntry",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Text = table.Column<string>(nullable: true),
                    Note = table.Column<string>(nullable: true),
                    BaseCanvasId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KeyResourceEntry", x => x.Id);
                    table.ForeignKey(
                        name: "FK_KeyResourceEntry_Canvas_BaseCanvasId",
                        column: x => x.BaseCanvasId,
                        principalTable: "Canvas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RevenueStreamEntry",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Text = table.Column<string>(nullable: true),
                    Note = table.Column<string>(nullable: true),
                    BaseCanvasId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RevenueStreamEntry", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RevenueStreamEntry_Canvas_BaseCanvasId",
                        column: x => x.BaseCanvasId,
                        principalTable: "Canvas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ValuePropositionEntry",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Text = table.Column<string>(nullable: true),
                    Note = table.Column<string>(nullable: true),
                    BaseCanvasId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ValuePropositionEntry", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ValuePropositionEntry_Canvas_BaseCanvasId",
                        column: x => x.BaseCanvasId,
                        principalTable: "Canvas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BaseCompanyPattern_BaseCompanyId",
                table: "BaseCompanyPattern",
                column: "BaseCompanyId");

            migrationBuilder.CreateIndex(
                name: "IX_BaseCompanyPattern_BasePatternId",
                table: "BaseCompanyPattern",
                column: "BasePatternId");

            migrationBuilder.CreateIndex(
                name: "IX_Canvas_ApplicationUserId1",
                table: "Canvas",
                column: "ApplicationUserId1");

            migrationBuilder.CreateIndex(
                name: "IX_Canvas_BasePatternId",
                table: "Canvas",
                column: "BasePatternId",
                unique: true,
                filter: "[BasePatternId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_ChannelEntry_BaseCanvasId",
                table: "ChannelEntry",
                column: "BaseCanvasId");

            migrationBuilder.CreateIndex(
                name: "IX_CostStructureEntry_BaseCanvasId",
                table: "CostStructureEntry",
                column: "BaseCanvasId");

            migrationBuilder.CreateIndex(
                name: "IX_CustomerRelationshipEntry_BaseCanvasId",
                table: "CustomerRelationshipEntry",
                column: "BaseCanvasId");

            migrationBuilder.CreateIndex(
                name: "IX_CustomerSegmentEntry_BaseCanvasId",
                table: "CustomerSegmentEntry",
                column: "BaseCanvasId");

            migrationBuilder.CreateIndex(
                name: "IX_KeyActivietyEntry_BaseCanvasId",
                table: "KeyActivietyEntry",
                column: "BaseCanvasId");

            migrationBuilder.CreateIndex(
                name: "IX_KeyPartnerEntry_BaseCanvasId",
                table: "KeyPartnerEntry",
                column: "BaseCanvasId");

            migrationBuilder.CreateIndex(
                name: "IX_KeyResourceEntry_BaseCanvasId",
                table: "KeyResourceEntry",
                column: "BaseCanvasId");

            migrationBuilder.CreateIndex(
                name: "IX_RevenueStreamEntry_BaseCanvasId",
                table: "RevenueStreamEntry",
                column: "BaseCanvasId");

            migrationBuilder.CreateIndex(
                name: "IX_ValuePropositionEntry_BaseCanvasId",
                table: "ValuePropositionEntry",
                column: "BaseCanvasId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BaseCompanyPattern");

            migrationBuilder.DropTable(
                name: "ChannelEntry");

            migrationBuilder.DropTable(
                name: "CostStructureEntry");

            migrationBuilder.DropTable(
                name: "CustomerRelationshipEntry");

            migrationBuilder.DropTable(
                name: "CustomerSegmentEntry");

            migrationBuilder.DropTable(
                name: "KeyActivietyEntry");

            migrationBuilder.DropTable(
                name: "KeyPartnerEntry");

            migrationBuilder.DropTable(
                name: "KeyResourceEntry");

            migrationBuilder.DropTable(
                name: "RevenueStreamEntry");

            migrationBuilder.DropTable(
                name: "ValuePropositionEntry");

            migrationBuilder.DropTable(
                name: "Companies");

            migrationBuilder.DropTable(
                name: "Canvas");

            migrationBuilder.DropTable(
                name: "Pattern");
        }
    }
}
