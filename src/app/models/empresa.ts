export class Empresa {
  IdEmpresa: number;
  RazonSocial: string;
  CantidadEmpleados: number;
  FechaFundacion: string;
  Activo: boolean;
};
export const Empresas: Empresa[] = [
  {
IdEmpresa:	1,
RazonSocial:	"Santex Group",
CantidadEmpleados:	300,
FechaFundacion:	"1976-07-09T00:00:00",
Activo: true
  },
{
IdEmpresa:	2,
RazonSocial:	"Compañia Sur",
CantidadEmpleados:	256,
FechaFundacion:	"1974-04-09T00:00:00",
Activo: true
  },
{	
IdEmpresa:	3,
RazonSocial:	"Santo Domingo",
CantidadEmpleados:	120,
FechaFundacion:	"1999-10-04T00:00:00",
Activo: true
  },
{
IdEmpresa:	4,
RazonSocial:	"Coca Cola",
CantidadEmpleados:	234,
FechaFundacion:	"2000-02-02T00:00:00",
Activo: true
  },
{
IdEmpresa:	7,
RazonSocial:	"Mafre",
CantidadEmpleados:	125,
FechaFundacion:	"2000-02-20T00:00:00",
Activo: true
  },
{
IdEmpresa:	8,
RazonSocial:	"Rivadavia",
CantidadEmpleados:	3,
FechaFundacion:	"2000-12-12T00:00:00",
Activo: true
  },
{
IdEmpresa:	9,
RazonSocial:	"ABC",
CantidadEmpleados:	3,
FechaFundacion:	"2001-10-10T00:00:00",
Activo: true
  },
{
IdEmpresa:	10,
RazonSocial:	"con fines de lucro",
CantidadEmpleados:	3,
FechaFundacion:	"2001-02-02T00:00:00",
Activo: true
  }

];
  
  /*,
{	
IdEmpresa	11
RazonSocial	"Arcor"
CantidadEmpleados	3
FechaFundacion	"2000-10-10T00:00:00"
9	
IdEmpresa	12
RazonSocial	"Noe and Company"
CantidadEmpleados	10
FechaFundacion	"1900-11-11T00:00:00"
10	
IdEmpresa	13
RazonSocial	"sin fin de lucro"
CantidadEmpleados	555
FechaFundacion	"2010-01-01T00:00:00"
11	
IdEmpresa	14
RazonSocial	"MaxEmpresa"
CantidadEmpleados	128
FechaFundacion	"1900-01-01T00:00:00"
12	
IdEmpresa	16
RazonSocial	"Empresa privada bis SRL"
CantidadEmpleados	50
FechaFundacion	"2000-08-02T00:00:00"
13	
IdEmpresa	17
RazonSocial	"Empresa privada bis"
CantidadEmpleados	52
FechaFundacion	"2000-08-01T00:00:00"
14	
IdEmpresa	18
RazonSocial	"Santex Group 1                                    "
CantidadEmpleados	300
FechaFundacion	"1976-07-09T00:00:00"
15	
IdEmpresa	19
RazonSocial	"TEST"
CantidadEmpleados	50
FechaFundacion	"2010-10-10T03:00:00"
16	
IdEmpresa	20
RazonSocial	"12345678901234567890123456789012345678901234567890"
CantidadEmpleados	10
FechaFundacion	"2020-01-01T03:00:00"
17	
IdEmpresa	21
RazonSocial	"Riggan Group"
CantidadEmpleados	150
FechaFundacion	"1995-03-15T03:00:00"
18	
IdEmpresa	22
RazonSocial	"TEST2"
CantidadEmpleados	100
FechaFundacion	"2015-12-15T03:00:00"
19	
IdEmpresa	23
RazonSocial	"TEST Salvai SA"
CantidadEmpleados	5
FechaFundacion	"1995-05-30T03:00:00"
20	
IdEmpresa	24
RazonSocial	"El retoño"
CantidadEmpleados	310
FechaFundacion	"2019-06-05T03:00:00"
21	
IdEmpresa	25
RazonSocial	"Pepers SRL"
CantidadEmpleados	500
FechaFundacion	"2000-03-12T03:00:00"
22	
IdEmpresa	26
RazonSocial	"TEST RP"
CantidadEmpleados	50000
FechaFundacion	"2020-10-10T03:00:00"
23	
IdEmpresa	27
RazonSocial	"Probando"
CantidadEmpleados	155
FechaFundacion	"1998-01-01T00:00:00"
24	
IdEmpresa	28
RazonSocial	"Ginobili SRL"
CantidadEmpleados	10004444
FechaFundacion	"2001-06-12T03:00:00"
25	
IdEmpresa	29
RazonSocial	"prueba migue"
CantidadEmpleados	200
FechaFundacion	"2020-01-17T03:00:00"
26	
IdEmpresa	30
RazonSocial	"PAV SRL"
CantidadEmpleados	100
FechaFundacion	"2000-03-12T03:00:00"
27	
IdEmpresa	31
RazonSocial	"PAVII SRL"
CantidadEmpleados	200
FechaFundacion	"2000-03-12T03:00:00"
28	
IdEmpresa	32
RazonSocial	"Gaspar 12345"
CantidadEmpleados	100000
FechaFundacion	"1998-01-01T00:00:00"
29	
IdEmpresa	33
RazonSocial	"Pablo SRL"
CantidadEmpleados	5000
FechaFundacion	"2020-05-20T03:00:00"
30	
IdEmpresa	34
RazonSocial	"asds"
CantidadEmpleados	2
FechaFundacion	"1998-10-21T03:00:00"
31	
IdEmpresa	35
RazonSocial	"Disney World"
CantidadEmpleados	500
FechaFundacion	"1955-10-03T03:00:00"
32	
IdEmpresa	36
RazonSocial	"TEST FINAL"
CantidadEmpleados	20
FechaFundacion	"2020-10-01T03:00:00"
33	
IdEmpresa	37
RazonSocial	"UTN"
CantidadEmpleados	2500
FechaFundacion	"1955-02-05T03:00:00"
34	
IdEmpresa	38
RazonSocial	"EMPRESA X"
CantidadEmpleados	5000
FechaFundacion	"1991-01-01T02:00:00"
35	
IdEmpresa	39
RazonSocial	"213"
CantidadEmpleados	12
FechaFundacion	"2020-12-12T00:00:00"
36	
IdEmpresa	40
RazonSocial	"EMPRESA FINAL"
CantidadEmpleados	5
FechaFundacion	"1990-01-01T02:00:00"
37	
IdEmpresa	41
RazonSocial	"gola"
CantidadEmpleados	12
FechaFundacion	"2020-12-12T00:00:00"
38	
IdEmpresa	42
RazonSocial	"EMPRESA Y"
CantidadEmpleados	200
FechaFundacion	"1990-02-01T02:00:00"
39	
IdEmpresa	43
RazonSocial	"Ultima Prueba"
CantidadEmpleados	12345
FechaFundacion	"2020-01-01T00:00:00"
40	
IdEmpresa	44
RazonSocial	"Pedro"
CantidadEmpleados	56
FechaFundacion	"1999-01-11T03:00:00"
41	
IdEmpresa	45
RazonSocial	"Tanus Jalil"
CantidadEmpleados	56
FechaFundacion	"1998-01-11T03:00:00"
42	
IdEmpresa	46
RazonSocial	"12345678901234567890123456789012345678901234567890"
CantidadEmpleados	999
FechaFundacion	"2019-04-08T03:00:00"
43	
IdEmpresa	47
RazonSocial	"Test-Odetti"
CantidadEmpleados	144
FechaFundacion	"1997-07-17T03:00:00"
44	
IdEmpresa	48
RazonSocial	"Ultima"
CantidadEmpleados	1000
FechaFundacion	"1998-01-01T00:00:00"
45	
IdEmpresa	49
RazonSocial	"Test2-Odetti"
CantidadEmpleados	145
FechaFundacion	"1997-07-17T03:00:00"
46	
IdEmpresa	50
RazonSocial	"The Last SRL"
CantidadEmpleados	300
FechaFundacion	"2000-03-12T03:00:00"
47	
IdEmpresa	51
RazonSocial	"Empresa Soruco"
CantidadEmpleados	60
FechaFundacion	"1993-12-06T03:00:00"
48	
IdEmpresa	52
RazonSocial	"coco"
CantidadEmpleados	52
FechaFundacion	"2020-11-09T03:00:00"
49	
IdEmpresa	53
RazonSocial	"Empresa prueba soruco"
CantidadEmpleados	60
FechaFundacion	"1990-11-06T02:00:00"
50	
IdEmpresa	54
RazonSocial	"prueba final"
CantidadEmpleados	60
FechaFundacion	"2000-11-11T03:00:00"
51	
IdEmpresa	55
RazonSocial	"HolaMundo2020"
CantidadEmpleados	60
FechaFundacion	"2020-09-05T03:00:00"
52	
IdEmpresa	56
RazonSocial	"EMPRESSS"
CantidadEmpleados	5
FechaFundacion	"2000-10-10T03:00:00"
53	
IdEmpresa	57
RazonSocial	"prueba"
CantidadEmpleados	1
FechaFundacion	"2020-11-09T00:00:00"
54	
IdEmpresa	58
RazonSocial	"asdfasdf"
CantidadEmpleados	12
FechaFundacion	"2020-12-10T03:00:00"
55	
IdEmpresa	59
RazonSocial	"prueba mariana"
CantidadEmpleados	15
FechaFundacion	"2020-11-11T00:00:00"
56	
IdEmpresa	60
RazonSocial	"Santex Group  30                           "
CantidadEmpleados	300
FechaFundacion	"1976-07-09T00:00:00"
57	
IdEmpresa	61
RazonSocial	"Pepers 123"
CantidadEmpleados	300
FechaFundacion	"2000-03-12T03:00:00"
58	
IdEmpresa	62
RazonSocial	"prueba mariana"
CantidadEmpleados	15
FechaFundacion	"2020-11-11T00:00:00"
59	
IdEmpresa	63
RazonSocial	"asdasd"
CantidadEmpleados	10
FechaFundacion	"1998-10-21T03:00:00"
60	
IdEmpresa	64
RazonSocial	"Prueba sin ID"
CantidadEmpleados	5421
FechaFundacion	"2020-12-02T00:00:00"
61	
IdEmpresa	65
RazonSocial	"gdagadg"
CantidadEmpleados	52454
FechaFundacion	"2020-01-22T03:00:00"
62	
IdEmpresa	66
RazonSocial	"asdasd"
CantidadEmpleados	12
FechaFundacion	"2020-12-12T03:00:00"
63	
IdEmpresa	67
RazonSocial	"wqeq"
CantidadEmpleados	12
FechaFundacion	"2020-12-12T00:00:00"
64	
IdEmpresa	68
RazonSocial	"prueba"
CantidadEmpleados	6
FechaFundacion	"2020-12-11T03:00:00"
65	
IdEmpresa	69
RazonSocial	"JIMENA SIERRA"
CantidadEmpleados	12
FechaFundacion	"2020-12-12T03:00:00"
66	
IdEmpresa	70
RazonSocial	"sfdg"
CantidadEmpleados	54
FechaFundacion	"2020-11-12T00:00:00"
67	
IdEmpresa	71
RazonSocial	"awsedra"
CantidadEmpleados	12
FechaFundacion	"2020-12-12T00:00:00"
68	
IdEmpresa	72
RazonSocial	"asd"
CantidadEmpleados	12
FechaFundacion	"2020-12-12T00:00:00"
69	
IdEmpresa	73
RazonSocial	"Sancord"
CantidadEmpleados	300
FechaFundacion	"1997-12-12T03:00:00"
70	
IdEmpresa	74
RazonSocial	"asddfg"
CantidadEmpleados	12
FechaFundacion	"2020-12-12T00:00:00"
71	
IdEmpresa	75
RazonSocial	"enzo ser"
CantidadEmpleados	12
FechaFundacion	"2008-12-11T02:00:00"
72	
IdEmpresa	76
RazonSocial	"fdfds"
CantidadEmpleados	45664
FechaFundacion	"1998-01-01T00:00:00"
73	
IdEmpresa	77
RazonSocial	"CocaCola"
CantidadEmpleados	250
FechaFundacion	"2025-05-05T03:00:00"
74	
IdEmpresa	78
RazonSocial	"dsads"
CantidadEmpleados	500
FechaFundacion	"2001-06-12T03:00:00"
75	
IdEmpresa	79
RazonSocial	"alumno 73261"
CantidadEmpleados	123
FechaFundacion	"2020-01-01T03:00:00"
76	
IdEmpresa	80
RazonSocial	"AA 76535"
CantidadEmpleados	123
FechaFundacion	"2020-01-01T03:00:00"
77	
IdEmpresa	81
RazonSocial	"71889 aaerwerewrwerewrrrrrrrrrreerererererrrrsfdsf"
CantidadEmpleados	123
FechaFundacion	"2020-01-01T03:00:00"
78	
IdEmpresa	82
RazonSocial	"AA77045"
CantidadEmpleados	333
FechaFundacion	"2020-01-01T03:00:00"
79	
IdEmpresa	83
RazonSocial	"AA77033 "
CantidadEmpleados	111111
FechaFundacion	"2020-01-01T00:00:00"
80	
IdEmpresa	84
RazonSocial	"AA77033 "
CantidadEmpleados	111111
FechaFundacion	"2020-01-01T00:00:00"
81	
IdEmpresa	85
RazonSocial	"AA 75181"
CantidadEmpleados	1
FechaFundacion	"2020-01-01T03:00:00"
82	
IdEmpresa	86
RazonSocial	"AA64429"
CantidadEmpleados	12
FechaFundacion	"2020-02-01T03:00:00"
83	
IdEmpresa	87
RazonSocial	"AA72489 "
CantidadEmpleados	123
FechaFundacion	"2020-01-01T00:00:00"
84	
IdEmpresa	88
RazonSocial	"AA76245"
CantidadEmpleados	123
FechaFundacion	"2020-02-01T03:00:00"
85	
IdEmpresa	89
RazonSocial	"AA71035"
CantidadEmpleados	333
FechaFundacion	"2020-02-01T03:00:00"
86	
IdEmpresa	90
RazonSocial	"AA76639"
CantidadEmpleados	35
FechaFundacion	"2025-01-01T00:00:00"
87	
IdEmpresa	91
RazonSocial	"kdaksdfk"
CantidadEmpleados	34
FechaFundacion	"2020-12-20T03:00:00"
88	
IdEmpresa	92
RazonSocial	"ALUMNO 76167"
CantidadEmpleados	100
FechaFundacion	"2018-11-12T03:00:00"
89	
IdEmpresa	93
RazonSocial	"ALUMNO 64797"
CantidadEmpleados	100
FechaFundacion	"2020-02-22T00:00:00"
90	
IdEmpresa	94
RazonSocial	"ALUMNO 64797"
CantidadEmpleados	100
FechaFundacion	"2020-11-10T00:00:00"
91	
IdEmpresa	95
RazonSocial	"ALUMNO 64797"
CantidadEmpleados	100
FechaFundacion	"2020-11-10T00:00:00"
92	
IdEmpresa	96
RazonSocial	"ALUMNO 64797"
CantidadEmpleados	100
FechaFundacion	"2020-11-10T00:00:00"
93	
IdEmpresa	97
RazonSocial	"ALUMNO v55 64797"
CantidadEmpleados	100
FechaFundacion	"2020-11-10T00:00:00"
94	
IdEmpresa	98
RazonSocial	"alumno 65130"
CantidadEmpleados	45
FechaFundacion	"2020-12-12T03:00:00"
95	
IdEmpresa	99
RazonSocial	"Prueba34"
CantidadEmpleados	1
FechaFundacion	"2020-11-21T03:00:00"
96	
IdEmpresa	100
RazonSocial	"empresa falsa"
CantidadEmpleados	3
FechaFundacion	"2020-11-24T03:00:00"
97	
IdEmpresa	101
RazonSocial	"dosdos"
CantidadEmpleados	2
FechaFundacion	"2002-02-02T03:00:00"
98	
IdEmpresa	102
RazonSocial	"asdad"
CantidadEmpleados	23
FechaFundacion	"2020-10-22T03:00:00"
99	
IdEmpresa	103
RazonSocial	"Timmy & Pantu S.A                                 "
CantidadEmpleados	2
FechaFundacion	"1993-02-07T02:00:00"
100	
IdEmpresa	104
RazonSocial	"hajshAJSHa"
CantidadEmpleados	1000
FechaFundacion	"2020-10-20T03:00:00"
101	
IdEmpresa	105
RazonSocial	"hajshAJSHa"
CantidadEmpleados	1000
FechaFundacion	"2020-10-20T03:00:00"
102	
IdEmpresa	106
RazonSocial	"hajshAJSHa"
CantidadEmpleados	1000
FechaFundacion	"2020-10-20T03:00:00"
103	
IdEmpresa	107
RazonSocial	"hajshAJSHa"
CantidadEmpleados	1000
FechaFundacion	"2020-10-20T03:00:00"
104	
IdEmpresa	108
RazonSocial	"LA CERVECERIA"
CantidadEmpleados	150
FechaFundacion	"1994-10-15T03:00:00"
105	
IdEmpresa	109
RazonSocial	"HOLA "
CantidadEmpleados	1000
FechaFundacion	"2020-10-12T03:00:00"
106	
IdEmpresa	110
RazonSocial	"HASDJHASJD"
CantidadEmpleados	100000
FechaFundacion	"2020-12-12T03:00:00"
107	
IdEmpresa	111
RazonSocial	"Cande S.A"
CantidadEmpleados	10
FechaFundacion	"2020-10-05T03:00:00"
108	
IdEmpresa	112
RazonSocial	"Hola que tal"
CantidadEmpleados	122
FechaFundacion	"2020-05-12T03:00:00"