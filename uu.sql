USE [master]
GO
/****** Object:  Database [carLeasing]    Script Date: 04/11/19 20:06:29 ******/
CREATE DATABASE [carLeasing] ON  PRIMARY 
( NAME = N'carLeasing', FILENAME = N'D:\SQL-DATA\carLeasing.mdf' , SIZE = 2304KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'carLeasing_log', FILENAME = N'D:\SQL-DATA\carLeasing_log.LDF' , SIZE = 2368KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [carLeasing] SET COMPATIBILITY_LEVEL = 100
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [carLeasing].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [carLeasing] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [carLeasing] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [carLeasing] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [carLeasing] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [carLeasing] SET ARITHABORT OFF 
GO
ALTER DATABASE [carLeasing] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [carLeasing] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [carLeasing] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [carLeasing] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [carLeasing] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [carLeasing] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [carLeasing] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [carLeasing] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [carLeasing] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [carLeasing] SET  ENABLE_BROKER 
GO
ALTER DATABASE [carLeasing] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [carLeasing] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [carLeasing] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [carLeasing] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [carLeasing] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [carLeasing] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [carLeasing] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [carLeasing] SET RECOVERY FULL 
GO
ALTER DATABASE [carLeasing] SET  MULTI_USER 
GO
ALTER DATABASE [carLeasing] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [carLeasing] SET DB_CHAINING OFF 
GO
EXEC sys.sp_db_vardecimal_storage_format N'carLeasing', N'ON'
GO
USE [carLeasing]
GO
/****** Object:  User [students\hitmachut]    Script Date: 04/11/19 20:06:30 ******/
CREATE USER [students\hitmachut] FOR LOGIN [STUDENTS\hitmachut] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [students\hitmachut]
GO
ALTER ROLE [db_accessadmin] ADD MEMBER [students\hitmachut]
GO
ALTER ROLE [db_securityadmin] ADD MEMBER [students\hitmachut]
GO
ALTER ROLE [db_ddladmin] ADD MEMBER [students\hitmachut]
GO
ALTER ROLE [db_backupoperator] ADD MEMBER [students\hitmachut]
GO
ALTER ROLE [db_datareader] ADD MEMBER [students\hitmachut]
GO
ALTER ROLE [db_datawriter] ADD MEMBER [students\hitmachut]
GO
ALTER ROLE [db_denydatareader] ADD MEMBER [students\hitmachut]
GO
ALTER ROLE [db_denydatawriter] ADD MEMBER [students\hitmachut]
GO
/****** Object:  Table [dbo].[Car]    Script Date: 04/11/19 20:06:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Car](
	[carId] [int] IDENTITY(1,1) NOT NULL,
	[carCompany] [nvarchar](50) NOT NULL,
	[model] [nvarchar](50) NULL,
	[numSeats] [int] NOT NULL,
	[trunc] [bit] NOT NULL,
	[description] [nvarchar](100) NOT NULL,
	[picture] [nvarchar](100) NULL,
	[owner] [int] NOT NULL,
	[insuranceType] [int] NOT NULL,
	[expiryDate] [datetime] NOT NULL,
	[file] [nvarchar](max) NULL,
	[carNum] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK__Car__1436F17407F6335A] PRIMARY KEY CLUSTERED 
(
	[carId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Demand]    Script Date: 04/11/19 20:06:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Demand](
	[demanedId] [int] IDENTITY(1,1) NOT NULL,
	[fromDate] [datetime] NULL,
	[fromHour] [time](7) NULL,
	[toDate] [datetime] NULL,
	[toHour] [time](7) NULL,
	[Locationx] [float] NULL,
	[Locationy] [float] NULL,
	[interestedId] [int] NULL,
	[numSeats] [int] NULL,
	[carCompany] [nvarchar](50) NULL,
 CONSTRAINT [PK__Demand__CB073F13117F9D94] PRIMARY KEY CLUSTERED 
(
	[demanedId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Insurance]    Script Date: 04/11/19 20:06:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Insurance](
	[insuranceId] [int] IDENTITY(1,1) NOT NULL,
	[insuranceName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Insurance] PRIMARY KEY CLUSTERED 
(
	[insuranceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Supply]    Script Date: 04/11/19 20:06:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Supply](
	[supplyId] [int] IDENTITY(1,1) NOT NULL,
	[carNum] [nvarchar](50) NOT NULL,
	[fromDate] [datetime] NULL,
	[fromHour] [time](7) NULL,
	[toDate] [datetime] NULL,
	[toHour] [time](7) NULL,
	[carLocationx] [float] NULL,
	[carLocationy] [float] NULL,
 CONSTRAINT [PK__Supply__EF30F8800CBAE877] PRIMARY KEY CLUSTERED 
(
	[supplyId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Transaction]    Script Date: 04/11/19 20:06:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Transaction](
	[transactionId] [int] IDENTITY(1,1) NOT NULL,
	[demandId] [int] NULL,
	[supplyId] [int] NULL,
	[beginDate] [datetime] NULL,
	[beginHour] [time](7) NULL,
	[endDate] [datetime] NULL,
	[endHour] [time](7) NULL,
PRIMARY KEY CLUSTERED 
(
	[transactionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 04/11/19 20:06:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[userId] [int] IDENTITY(1,1) NOT NULL,
	[firstName] [nvarchar](50) NOT NULL,
	[lastName] [nvarchar](50) NOT NULL,
	[phone] [nvarchar](10) NOT NULL,
	[email] [nvarchar](50) NOT NULL,
	[password] [nvarchar](50) NOT NULL,
	[insuranceType] [int] NOT NULL,
 CONSTRAINT [PK__Users__CB9A1CFF0425A276] PRIMARY KEY CLUSTERED 
(
	[userId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Car] ON 

INSERT [dbo].[Car] ([carId], [carCompany], [model], [numSeats], [trunc], [description], [picture], [owner], [insuranceType], [expiryDate], [file], [carNum]) VALUES (36, N'jhgf', N'jhgf', 0, 1, N'jhgf', N' http://localhost:58516/UploadFiles/36/4_22.JPG', 9, 1, CAST(N'2019-08-27T21:00:00.000' AS DateTime), N'C:\fakepath\102.JPG', N'jgh')
INSERT [dbo].[Car] ([carId], [carCompany], [model], [numSeats], [trunc], [description], [picture], [owner], [insuranceType], [expiryDate], [file], [carNum]) VALUES (38, N'hgfd', N'hgfd', 0, 1, N'hgdf', N' http://localhost:58516/UploadFiles/38/1010.JPG', 9, 1, CAST(N'2019-08-30T21:00:00.000' AS DateTime), N'C:\fakepath\בית כנסת.jpg', N'bnfgd')
INSERT [dbo].[Car] ([carId], [carCompany], [model], [numSeats], [trunc], [description], [picture], [owner], [insuranceType], [expiryDate], [file], [carNum]) VALUES (39, N'גכדע', N'עכשגד', 0, 1, N'עכגד', N' http://localhost:58516/UploadFiles/39/1010.JPG', 9, 1, CAST(N'2019-08-21T21:00:00.000' AS DateTime), N'C:\fakepath\101.JPG', N'2079861')
INSERT [dbo].[Car] ([carId], [carCompany], [model], [numSeats], [trunc], [description], [picture], [owner], [insuranceType], [expiryDate], [file], [carNum]) VALUES (40, N'mazda', N'mpv', 7, 1, N'a new car!!!!', N' http://localhost:58516/UploadFiles/40/ANTIQUE2.JPG', 9, 1, CAST(N'2019-08-27T21:00:00.000' AS DateTime), NULL, N'20788520')
INSERT [dbo].[Car] ([carId], [carCompany], [model], [numSeats], [trunc], [description], [picture], [owner], [insuranceType], [expiryDate], [file], [carNum]) VALUES (41, N'toyota', N'564', 4, 1, N'fast and new car', N' http://localhost:58516/UploadFiles/41/33_DEUSE.JPG', 9, 1, CAST(N'2019-08-26T21:00:00.000' AS DateTime), NULL, N'987654321')
INSERT [dbo].[Car] ([carId], [carCompany], [model], [numSeats], [trunc], [description], [picture], [owner], [insuranceType], [expiryDate], [file], [carNum]) VALUES (42, N'kia', N'karneval', 8, 1, N'a modern car ', N' http://localhost:58516/UploadFiles/42/FERRARI.JPG', 9, 1, CAST(N'2019-08-28T21:00:00.000' AS DateTime), NULL, N'95159515')
INSERT [dbo].[Car] ([carId], [carCompany], [model], [numSeats], [trunc], [description], [picture], [owner], [insuranceType], [expiryDate], [file], [carNum]) VALUES (44, N'kia', N'456', 7, 0, N'a new car', N' http://localhost:58516/UploadFiles/44/ANTIQUE6.JPG', 9, 1, CAST(N'2019-08-28T21:00:00.000' AS DateTime), N'C:\fakepath\CAR.JPG', N'456123789')
SET IDENTITY_INSERT [dbo].[Car] OFF
SET IDENTITY_INSERT [dbo].[Demand] ON 

INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (1, CAST(N'2019-07-08T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), CAST(N'2019-07-07T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (2, CAST(N'2012-12-12T00:00:00.000' AS DateTime), CAST(N'09:00:00' AS Time), CAST(N'2012-12-12T00:00:00.000' AS DateTime), CAST(N'11:00:00' AS Time), NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (3, CAST(N'2012-12-12T00:00:00.000' AS DateTime), CAST(N'12:20:00' AS Time), CAST(N'2012-12-12T00:00:00.000' AS DateTime), CAST(N'13:00:00' AS Time), NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (4, NULL, CAST(N'13:00:00' AS Time), NULL, CAST(N'14:00:00' AS Time), NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (5, NULL, CAST(N'13:13:13' AS Time), NULL, CAST(N'13:13:13' AS Time), NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (6, NULL, CAST(N'13:13:13' AS Time), NULL, CAST(N'13:13:13' AS Time), NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (7, NULL, CAST(N'13:13:13' AS Time), NULL, CAST(N'13:13:13' AS Time), NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (8, CAST(N'2012-12-12T00:00:00.000' AS DateTime), CAST(N'12:00:00' AS Time), CAST(N'2012-12-12T00:00:00.000' AS DateTime), CAST(N'13:00:00' AS Time), 34.833524099999977, 32.0799527, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (9, CAST(N'2019-08-16T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), CAST(N'2019-08-29T21:00:00.000' AS DateTime), CAST(N'20:20:20' AS Time), 34.836553999999978, 32.079266, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (10, CAST(N'2019-08-15T21:00:00.000' AS DateTime), CAST(N'10:20:10' AS Time), CAST(N'2019-08-30T21:00:00.000' AS DateTime), CAST(N'20:20:20' AS Time), 34.831046799999967, 32.081927500000013, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (11, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (12, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (13, CAST(N'2019-08-08T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), CAST(N'2019-08-30T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), 35.528538000000026, 32.950829, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (14, CAST(N'2019-08-08T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), CAST(N'2019-08-30T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), 35.528538000000026, 32.950829, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (15, CAST(N'2019-08-08T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), CAST(N'2019-08-30T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), 35.528538000000026, 32.950829, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (16, CAST(N'2019-08-08T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), CAST(N'2019-08-30T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), 34.843547100000023, 32.0872667, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (17, CAST(N'2019-08-08T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), CAST(N'2019-08-30T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), 34.843547100000023, 32.0872667, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (18, CAST(N'2019-08-07T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), CAST(N'2019-08-29T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), 35.082677999999987, 32.933052, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (19, CAST(N'2019-08-07T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), CAST(N'2019-08-29T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), 35.082677999999987, 32.933052, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (20, CAST(N'2019-08-07T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), CAST(N'2019-08-29T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), 35.082677999999987, 32.933052, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (21, CAST(N'2019-08-05T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), CAST(N'2019-08-30T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), 35.495996999999988, 32.964648, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (22, CAST(N'2019-08-05T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), CAST(N'2019-08-30T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), 35.495996999999988, 32.964648, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (23, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (24, CAST(N'2019-08-06T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), CAST(N'2019-08-29T21:00:00.000' AS DateTime), CAST(N'20:20:00' AS Time), 34.843547100000023, 32.0872667, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (25, CAST(N'2019-08-06T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), CAST(N'2019-08-22T21:00:00.000' AS DateTime), NULL, -4.4212655000000041, 36.721261, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (26, CAST(N'2019-08-06T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), CAST(N'2019-08-22T21:00:00.000' AS DateTime), NULL, -4.4212655000000041, 36.721261, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (27, CAST(N'2019-08-15T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), CAST(N'2019-08-13T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (28, CAST(N'2019-08-15T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), CAST(N'2019-08-13T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), 34.843547100000023, 32.0872667, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (29, CAST(N'2019-08-06T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), CAST(N'2019-08-28T21:00:00.000' AS DateTime), CAST(N'20:20:00' AS Time), 34.843547100000023, 32.0872667, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (30, CAST(N'2019-08-21T07:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), CAST(N'2019-08-22T07:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), -80.137317400000029, 26.1224386, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (31, CAST(N'2019-08-31T07:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), CAST(N'2019-08-23T07:00:00.000' AS DateTime), CAST(N'20:20:00' AS Time), 34.833736000000044, 32.077622, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (32, CAST(N'2019-08-07T07:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), CAST(N'2019-08-15T07:00:00.000' AS DateTime), CAST(N'20:20:00' AS Time), -89.932223000000022, 38.5835576, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (33, CAST(N'2019-08-09T07:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), CAST(N'2019-08-10T07:00:00.000' AS DateTime), CAST(N'20:20:00' AS Time), NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (34, CAST(N'2019-08-03T07:00:00.000' AS DateTime), CAST(N'10:00:10' AS Time), CAST(N'2019-08-09T07:00:00.000' AS DateTime), CAST(N'20:20:20' AS Time), NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (35, CAST(N'2019-08-03T07:00:00.000' AS DateTime), CAST(N'10:00:10' AS Time), CAST(N'2019-08-09T07:00:00.000' AS DateTime), CAST(N'20:20:20' AS Time), 34.828688800000009, 32.0710752, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (36, CAST(N'2019-08-07T07:00:00.000' AS DateTime), CAST(N'10:00:10' AS Time), CAST(N'2019-08-31T07:00:00.000' AS DateTime), CAST(N'20:20:20' AS Time), 34.828688800000009, 32.0710752, NULL, NULL, NULL)
INSERT [dbo].[Demand] ([demanedId], [fromDate], [fromHour], [toDate], [toHour], [Locationx], [Locationy], [interestedId], [numSeats], [carCompany]) VALUES (37, CAST(N'2019-08-07T07:00:00.000' AS DateTime), CAST(N'10:00:10' AS Time), CAST(N'2019-08-17T07:00:00.000' AS DateTime), CAST(N'20:20:20' AS Time), 34.833736000000044, 32.077622, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Demand] OFF
SET IDENTITY_INSERT [dbo].[Insurance] ON 

INSERT [dbo].[Insurance] ([insuranceId], [insuranceName]) VALUES (1, N'מקיף')
INSERT [dbo].[Insurance] ([insuranceId], [insuranceName]) VALUES (2, N'נהג צעיר')
SET IDENTITY_INSERT [dbo].[Insurance] OFF
SET IDENTITY_INSERT [dbo].[Supply] ON 

INSERT [dbo].[Supply] ([supplyId], [carNum], [fromDate], [fromHour], [toDate], [toHour], [carLocationx], [carLocationy]) VALUES (32, N'20788520', CAST(N'2019-08-06T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), CAST(N'2019-08-28T21:00:00.000' AS DateTime), CAST(N'20:20:00' AS Time), 34.841741700000057, 32.0846751)
INSERT [dbo].[Supply] ([supplyId], [carNum], [fromDate], [fromHour], [toDate], [toHour], [carLocationx], [carLocationy]) VALUES (33, N'95159515', CAST(N'2019-08-08T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), CAST(N'2019-08-30T21:00:00.000' AS DateTime), CAST(N'20:20:00' AS Time), 34.840278000000012, 32.137793000000009)
INSERT [dbo].[Supply] ([supplyId], [carNum], [fromDate], [fromHour], [toDate], [toHour], [carLocationx], [carLocationy]) VALUES (34, N'987654321', CAST(N'2019-08-08T21:00:00.000' AS DateTime), CAST(N'10:10:10' AS Time), CAST(N'2019-08-30T21:00:00.000' AS DateTime), CAST(N'20:20:00' AS Time), 34.840278000000012, 32.137793000000009)
INSERT [dbo].[Supply] ([supplyId], [carNum], [fromDate], [fromHour], [toDate], [toHour], [carLocationx], [carLocationy]) VALUES (37, N'456123789', CAST(N'2019-08-20T21:00:00.000' AS DateTime), CAST(N'10:00:10' AS Time), CAST(N'2019-08-07T21:00:00.000' AS DateTime), CAST(N'20:20:20' AS Time), -0.12775829999998223, 51.5073509)
SET IDENTITY_INSERT [dbo].[Supply] OFF
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([userId], [firstName], [lastName], [phone], [email], [password], [insuranceType]) VALUES (2, N'פריידי', N'בן שלום', N'0556773464', N'fredy.benshalom@gmail.com', N'123123', 1)
INSERT [dbo].[Users] ([userId], [firstName], [lastName], [phone], [email], [password], [insuranceType]) VALUES (8, N'5', N'5', N'5', N'5', N'1', 1)
INSERT [dbo].[Users] ([userId], [firstName], [lastName], [phone], [email], [password], [insuranceType]) VALUES (9, N'5', N'5', N'5', N'5', N'5', 1)
INSERT [dbo].[Users] ([userId], [firstName], [lastName], [phone], [email], [password], [insuranceType]) VALUES (11, N'5', N'5', N'5', N'5', N'5', 1)
INSERT [dbo].[Users] ([userId], [firstName], [lastName], [phone], [email], [password], [insuranceType]) VALUES (12, N'5', N'5', N'5', N'5', N'5', 1)
INSERT [dbo].[Users] ([userId], [firstName], [lastName], [phone], [email], [password], [insuranceType]) VALUES (13, N'5', N'5', N'5', N'5', N'5', 1)
INSERT [dbo].[Users] ([userId], [firstName], [lastName], [phone], [email], [password], [insuranceType]) VALUES (22, N'5', N'5', N'5', N'5', N'5', 1)
INSERT [dbo].[Users] ([userId], [firstName], [lastName], [phone], [email], [password], [insuranceType]) VALUES (24, N'5', N'5', N'5', N'5', N'5', 1)
SET IDENTITY_INSERT [dbo].[Users] OFF
SET ANSI_PADDING ON
GO
/****** Object:  Index [NonClusteredIndex-20190704-155202]    Script Date: 04/11/19 20:06:30 ******/
CREATE UNIQUE NONCLUSTERED INDEX [NonClusteredIndex-20190704-155202] ON [dbo].[Car]
(
	[carNum] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Car]  WITH CHECK ADD  CONSTRAINT [fk_1] FOREIGN KEY([owner])
REFERENCES [dbo].[Users] ([userId])
GO
ALTER TABLE [dbo].[Car] CHECK CONSTRAINT [fk_1]
GO
ALTER TABLE [dbo].[Car]  WITH CHECK ADD  CONSTRAINT [FK_Car_Insurance] FOREIGN KEY([insuranceType])
REFERENCES [dbo].[Insurance] ([insuranceId])
GO
ALTER TABLE [dbo].[Car] CHECK CONSTRAINT [FK_Car_Insurance]
GO
ALTER TABLE [dbo].[Demand]  WITH CHECK ADD  CONSTRAINT [FK_Demand_Users] FOREIGN KEY([interestedId])
REFERENCES [dbo].[Users] ([userId])
GO
ALTER TABLE [dbo].[Demand] CHECK CONSTRAINT [FK_Demand_Users]
GO
ALTER TABLE [dbo].[Supply]  WITH CHECK ADD  CONSTRAINT [FK_Supply_Car] FOREIGN KEY([carNum])
REFERENCES [dbo].[Car] ([carNum])
GO
ALTER TABLE [dbo].[Supply] CHECK CONSTRAINT [FK_Supply_Car]
GO
ALTER TABLE [dbo].[Transaction]  WITH CHECK ADD  CONSTRAINT [fk_3] FOREIGN KEY([demandId])
REFERENCES [dbo].[Demand] ([demanedId])
GO
ALTER TABLE [dbo].[Transaction] CHECK CONSTRAINT [fk_3]
GO
ALTER TABLE [dbo].[Transaction]  WITH CHECK ADD  CONSTRAINT [fk_4] FOREIGN KEY([supplyId])
REFERENCES [dbo].[Supply] ([supplyId])
GO
ALTER TABLE [dbo].[Transaction] CHECK CONSTRAINT [fk_4]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_Users_Insurance] FOREIGN KEY([insuranceType])
REFERENCES [dbo].[Insurance] ([insuranceId])
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_Users_Insurance]
GO
USE [master]
GO
ALTER DATABASE [carLeasing] SET  READ_WRITE 
GO
