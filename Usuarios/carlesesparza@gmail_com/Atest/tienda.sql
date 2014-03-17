USE [tienda]
GO
/****** Object:  Table [dbo].[Categoria]    Script Date: 10/03/2014 10:57:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Categoria](
	[id] [int] NOT NULL,
	[nombre] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Categoria] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Historial]    Script Date: 10/03/2014 10:57:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Historial](
	[id] [int] IDENTITY(1,1) NOT FOR REPLICATION NOT NULL,
	[fecha] [date] NULL,
	[precio_total] [float] NULL,
 CONSTRAINT [PK_Historial] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Producto]    Script Date: 10/03/2014 10:57:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Producto](
	[id] [int] NOT NULL,
	[id_categoria] [int] NULL,
	[nombre] [varchar](50) NULL,
	[precio] [float] NOT NULL,
	[imagen] [varchar](max) NULL,
 CONSTRAINT [PK_Producto] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[Categoria] ([id], [nombre]) VALUES (1, N'Música')
INSERT [dbo].[Categoria] ([id], [nombre]) VALUES (2, N'Alimentación')
INSERT [dbo].[Categoria] ([id], [nombre]) VALUES (3, N'Android Apps')
SET IDENTITY_INSERT [dbo].[Historial] ON 

INSERT [dbo].[Historial] ([id], [fecha], [precio_total]) VALUES (4, CAST(0x3B380B00 AS Date), 8.9899997711181641)
INSERT [dbo].[Historial] ([id], [fecha], [precio_total]) VALUES (5, CAST(0x3C380B00 AS Date), 13.309999465942383)
INSERT [dbo].[Historial] ([id], [fecha], [precio_total]) VALUES (6, CAST(0x45380B00 AS Date), 5.8400001525878906)
INSERT [dbo].[Historial] ([id], [fecha], [precio_total]) VALUES (7, CAST(0x58380B00 AS Date), 8.09000015258789)
INSERT [dbo].[Historial] ([id], [fecha], [precio_total]) VALUES (8, CAST(0x58380B00 AS Date), 8.09000015258789)
INSERT [dbo].[Historial] ([id], [fecha], [precio_total]) VALUES (9, CAST(0x78380B00 AS Date), 15)
INSERT [dbo].[Historial] ([id], [fecha], [precio_total]) VALUES (10, CAST(0x45380B00 AS Date), 5.8400001525878906)
INSERT [dbo].[Historial] ([id], [fecha], [precio_total]) VALUES (11, CAST(0x45380B00 AS Date), 2.8199999332427979)
INSERT [dbo].[Historial] ([id], [fecha], [precio_total]) VALUES (12, CAST(0x5A380B00 AS Date), 18.989999771118164)
INSERT [dbo].[Historial] ([id], [fecha], [precio_total]) VALUES (13, CAST(0x4E380B00 AS Date), 33.25)
INSERT [dbo].[Historial] ([id], [fecha], [precio_total]) VALUES (1009, CAST(0x95380B00 AS Date), 36.459999084472656)
SET IDENTITY_INSERT [dbo].[Historial] OFF
INSERT [dbo].[Producto] ([id], [id_categoria], [nombre], [precio], [imagen]) VALUES (1, 1, N'Bruce Springsteen - Born in the USA', 8.99, N'Imatges/bruce_born.jpg')
INSERT [dbo].[Producto] ([id], [id_categoria], [nombre], [precio], [imagen]) VALUES (2, 1, N'Bruce Springsteen - Greatest Hits', 15, N'Imatges/bruce_greatest.jpg')
INSERT [dbo].[Producto] ([id], [id_categoria], [nombre], [precio], [imagen]) VALUES (3, 1, N'Michael Jackson - Thriller', 12.99, N'Imatges/michael_thriller.jpg')
INSERT [dbo].[Producto] ([id], [id_categoria], [nombre], [precio], [imagen]) VALUES (4, 3, N'The Cave', 3.45, N'Imatges/cave.png')
INSERT [dbo].[Producto] ([id], [id_categoria], [nombre], [precio], [imagen]) VALUES (5, 3, N'Plague Inc', 0.89, N'Imatges/plague.jpg')
INSERT [dbo].[Producto] ([id], [id_categoria], [nombre], [precio], [imagen]) VALUES (6, 2, N'Macarrones', 0.55, N'Imatges/macarrones.jpg')
INSERT [dbo].[Producto] ([id], [id_categoria], [nombre], [precio], [imagen]) VALUES (7, 2, N'Coca-cola', 0.32, N'Imatges/coca.jpg')
INSERT [dbo].[Producto] ([id], [id_categoria], [nombre], [precio], [imagen]) VALUES (8, 1, N'Artic Monkeys - AM', 18.25, N'Imatges/artic_am.jpg')
INSERT [dbo].[Producto] ([id], [id_categoria], [nombre], [precio], [imagen]) VALUES (9, 1, N'Artic Monkeys - Whatever People Say I Am', 10, N'Imatges/artic_whatever.jpg')
INSERT [dbo].[Producto] ([id], [id_categoria], [nombre], [precio], [imagen]) VALUES (10, 3, N'Asphalt 8', 0.5, N'Imatges/asphalt.png')
INSERT [dbo].[Producto] ([id], [id_categoria], [nombre], [precio], [imagen]) VALUES (11, 3, N'Minecraft', 4.55, N'Imatges/minecraft.png')
INSERT [dbo].[Producto] ([id], [id_categoria], [nombre], [precio], [imagen]) VALUES (12, 3, N'Plants Vs. Zombies', 0.79, N'Imatges/plants.png')
INSERT [dbo].[Producto] ([id], [id_categoria], [nombre], [precio], [imagen]) VALUES (13, 2, N'Oli Oliva', 5.5, N'Imatges/aceite.jpg')
INSERT [dbo].[Producto] ([id], [id_categoria], [nombre], [precio], [imagen]) VALUES (14, 2, N'Tonyina en Llauna', 2.5, N'Imatges/atun.jpg')
ALTER TABLE [dbo].[Producto]  WITH CHECK ADD  CONSTRAINT [FK_Producto_Categoria] FOREIGN KEY([id_categoria])
REFERENCES [dbo].[Categoria] ([id])
GO
ALTER TABLE [dbo].[Producto] CHECK CONSTRAINT [FK_Producto_Categoria]
GO
