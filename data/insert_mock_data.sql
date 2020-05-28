INSERT INTO users (username,first_name,last_name,password,shift) VALUES ("bloom","private","con","marketer","jornada_acumulada");

INSERT INTO users (username,first_name,last_name,password,shift) VALUES ("ladle","witch-hunt","manacle","lye","matutino");

INSERT INTO users (username,first_name,last_name,password,shift) VALUES ("heifer","angina","sin","endothelium","jornada_acumulada");

INSERT INTO users (username,first_name,last_name,password,shift) VALUES ("barometer","crewmate","rice","reboot","jornada_acumulada");

INSERT INTO users (username,first_name,last_name,password,shift) VALUES ("procedure","bandolier","fringe","monument","nocturno");

INSERT INTO users (username,first_name,last_name,password,shift) VALUES ("downtown","mousse","abolishment","skyline","jornada_acumulada");

INSERT INTO users (username,first_name,last_name,password,shift) VALUES ("gate","refuse","osprey","hurdle","matutino");

INSERT INTO users (username,first_name,last_name,password,shift) VALUES ("vomit","symbol","glass","leap","nocturno");

INSERT INTO users (username,first_name,last_name,password,shift) VALUES ("power","lipoprotein","sound","freak","vespertino");

INSERT INTO users (username,first_name,last_name,password,shift) VALUES ("dance","attempt","chasuble","sentencing","jornada_acumulada");




INSERT INTO roles (code) VALUES ("fountain");

INSERT INTO roles (code) VALUES ("mentor");

INSERT INTO roles (code) VALUES ("veranda");

INSERT INTO roles (code) VALUES ("mandarin");

INSERT INTO roles (code) VALUES ("chow");

INSERT INTO roles (code) VALUES ("iron");

INSERT INTO roles (code) VALUES ("kneejerk");

INSERT INTO roles (code) VALUES ("shark");

INSERT INTO roles (code) VALUES ("spokeswoman");

INSERT INTO roles (code) VALUES ("inch");




INSERT INTO permissions (id,resource,action) VALUES (810197,"prescriptions","haircut");

INSERT INTO permissions (id,resource,action) VALUES (162009,"inputs","disagreement");

INSERT INTO permissions (id,resource,action) VALUES (968324,"user_roles","jury");

INSERT INTO permissions (id,resource,action) VALUES (36752,"inputs","blowgun");

INSERT INTO permissions (id,resource,action) VALUES (224502,"inputs","hurdle");

INSERT INTO permissions (id,resource,action) VALUES (187288,"prescription_drugs","canteen");

INSERT INTO permissions (id,resource,action) VALUES (190313,"prescription_drugs","catacomb");

INSERT INTO permissions (id,resource,action) VALUES (50019,"drugs","highlight");

INSERT INTO permissions (id,resource,action) VALUES (644908,"transfer_details","aluminium");

INSERT INTO permissions (id,resource,action) VALUES (705791,"drugs","nut");




INSERT INTO role_permissions (role,permission) VALUES ((SELECT code FROM roles ORDER BY RAND() LIMIT 1),(SELECT id FROM permissions ORDER BY RAND() LIMIT 1));

INSERT INTO role_permissions (role,permission) VALUES ((SELECT code FROM roles ORDER BY RAND() LIMIT 1),(SELECT id FROM permissions ORDER BY RAND() LIMIT 1));

INSERT INTO role_permissions (role,permission) VALUES ((SELECT code FROM roles ORDER BY RAND() LIMIT 1),(SELECT id FROM permissions ORDER BY RAND() LIMIT 1));

INSERT INTO role_permissions (role,permission) VALUES ((SELECT code FROM roles ORDER BY RAND() LIMIT 1),(SELECT id FROM permissions ORDER BY RAND() LIMIT 1));

INSERT INTO role_permissions (role,permission) VALUES ((SELECT code FROM roles ORDER BY RAND() LIMIT 1),(SELECT id FROM permissions ORDER BY RAND() LIMIT 1));

INSERT INTO role_permissions (role,permission) VALUES ((SELECT code FROM roles ORDER BY RAND() LIMIT 1),(SELECT id FROM permissions ORDER BY RAND() LIMIT 1));

INSERT INTO role_permissions (role,permission) VALUES ((SELECT code FROM roles ORDER BY RAND() LIMIT 1),(SELECT id FROM permissions ORDER BY RAND() LIMIT 1));

INSERT INTO role_permissions (role,permission) VALUES ((SELECT code FROM roles ORDER BY RAND() LIMIT 1),(SELECT id FROM permissions ORDER BY RAND() LIMIT 1));

INSERT INTO role_permissions (role,permission) VALUES ((SELECT code FROM roles ORDER BY RAND() LIMIT 1),(SELECT id FROM permissions ORDER BY RAND() LIMIT 1));

INSERT INTO role_permissions (role,permission) VALUES ((SELECT code FROM roles ORDER BY RAND() LIMIT 1),(SELECT id FROM permissions ORDER BY RAND() LIMIT 1));




INSERT INTO user_roles (user,role) VALUES ((SELECT username FROM users ORDER BY RAND() LIMIT 1),(SELECT code FROM roles ORDER BY RAND() LIMIT 1));

INSERT INTO user_roles (user,role) VALUES ((SELECT username FROM users ORDER BY RAND() LIMIT 1),(SELECT code FROM roles ORDER BY RAND() LIMIT 1));

INSERT INTO user_roles (user,role) VALUES ((SELECT username FROM users ORDER BY RAND() LIMIT 1),(SELECT code FROM roles ORDER BY RAND() LIMIT 1));

INSERT INTO user_roles (user,role) VALUES ((SELECT username FROM users ORDER BY RAND() LIMIT 1),(SELECT code FROM roles ORDER BY RAND() LIMIT 1));

INSERT INTO user_roles (user,role) VALUES ((SELECT username FROM users ORDER BY RAND() LIMIT 1),(SELECT code FROM roles ORDER BY RAND() LIMIT 1));

INSERT INTO user_roles (user,role) VALUES ((SELECT username FROM users ORDER BY RAND() LIMIT 1),(SELECT code FROM roles ORDER BY RAND() LIMIT 1));

INSERT INTO user_roles (user,role) VALUES ((SELECT username FROM users ORDER BY RAND() LIMIT 1),(SELECT code FROM roles ORDER BY RAND() LIMIT 1));

INSERT INTO user_roles (user,role) VALUES ((SELECT username FROM users ORDER BY RAND() LIMIT 1),(SELECT code FROM roles ORDER BY RAND() LIMIT 1));

INSERT INTO user_roles (user,role) VALUES ((SELECT username FROM users ORDER BY RAND() LIMIT 1),(SELECT code FROM roles ORDER BY RAND() LIMIT 1));

INSERT INTO user_roles (user,role) VALUES ((SELECT username FROM users ORDER BY RAND() LIMIT 1),(SELECT code FROM roles ORDER BY RAND() LIMIT 1));




INSERT INTO certificates (code,user,college,type) VALUES ("prosecutor",(SELECT username FROM users ORDER BY RAND() LIMIT 1),"patio","professional");

INSERT INTO certificates (code,user,college,type) VALUES ("well-being",(SELECT username FROM users ORDER BY RAND() LIMIT 1),"honey","specialty");

INSERT INTO certificates (code,user,college,type) VALUES ("profession",(SELECT username FROM users ORDER BY RAND() LIMIT 1),"possession","professional");

INSERT INTO certificates (code,user,college,type) VALUES ("happiness",(SELECT username FROM users ORDER BY RAND() LIMIT 1),"bug","specialty");

INSERT INTO certificates (code,user,college,type) VALUES ("sprout",(SELECT username FROM users ORDER BY RAND() LIMIT 1),"siding","professional");

INSERT INTO certificates (code,user,college,type) VALUES ("supper",(SELECT username FROM users ORDER BY RAND() LIMIT 1),"antiquity","professional");

INSERT INTO certificates (code,user,college,type) VALUES ("clothing",(SELECT username FROM users ORDER BY RAND() LIMIT 1),"referendum","professional");

INSERT INTO certificates (code,user,college,type) VALUES ("discipline",(SELECT username FROM users ORDER BY RAND() LIMIT 1),"offence","professional");

INSERT INTO certificates (code,user,college,type) VALUES ("start",(SELECT username FROM users ORDER BY RAND() LIMIT 1),"motion","professional");

INSERT INTO certificates (code,user,college,type) VALUES ("independent",(SELECT username FROM users ORDER BY RAND() LIMIT 1),"performance","professional");




INSERT INTO specialty_detail (certificate,specialty) VALUES ((SELECT code FROM certificates ORDER BY RAND() LIMIT 1),"pad");

INSERT INTO specialty_detail (certificate,specialty) VALUES ((SELECT code FROM certificates ORDER BY RAND() LIMIT 1),"jeweller");

INSERT INTO specialty_detail (certificate,specialty) VALUES ((SELECT code FROM certificates ORDER BY RAND() LIMIT 1),"stepping-stone");

INSERT INTO specialty_detail (certificate,specialty) VALUES ((SELECT code FROM certificates ORDER BY RAND() LIMIT 1),"peony");

INSERT INTO specialty_detail (certificate,specialty) VALUES ((SELECT code FROM certificates ORDER BY RAND() LIMIT 1),"conception");

INSERT INTO specialty_detail (certificate,specialty) VALUES ((SELECT code FROM certificates ORDER BY RAND() LIMIT 1),"listing");

INSERT INTO specialty_detail (certificate,specialty) VALUES ((SELECT code FROM certificates ORDER BY RAND() LIMIT 1),"hesitation");

INSERT INTO specialty_detail (certificate,specialty) VALUES ((SELECT code FROM certificates ORDER BY RAND() LIMIT 1),"detour");

INSERT INTO specialty_detail (certificate,specialty) VALUES ((SELECT code FROM certificates ORDER BY RAND() LIMIT 1),"trench");

INSERT INTO specialty_detail (certificate,specialty) VALUES ((SELECT code FROM certificates ORDER BY RAND() LIMIT 1),"mobster");




INSERT INTO drugs (code,name,presentation,units) VALUES ("kale","concrete","ikebana",923224);

INSERT INTO drugs (code,name,presentation,units) VALUES ("nectar","pledge","tire",861087);

INSERT INTO drugs (code,name,presentation,units) VALUES ("data","revenant","audience",402683);

INSERT INTO drugs (code,name,presentation,units) VALUES ("cutover","aluminium","coordination",313000);

INSERT INTO drugs (code,name,presentation,units) VALUES ("disruption","shield","speech",734792);

INSERT INTO drugs (code,name,presentation,units) VALUES ("stinger","movement","bayou",945727);

INSERT INTO drugs (code,name,presentation,units) VALUES ("marines","productivity","quinoa",349277);

INSERT INTO drugs (code,name,presentation,units) VALUES ("neonate","dependent","fax",192318);

INSERT INTO drugs (code,name,presentation,units) VALUES ("procedure","binoculars","tie",850186);

INSERT INTO drugs (code,name,presentation,units) VALUES ("pocket","mover","friend",96762);




INSERT INTO inputs (id,supplier,address,comments,type) VALUES (713841,"gravitas","undertaker","shackle","other");

INSERT INTO inputs (id,supplier,address,comments,type) VALUES (856811,"hiking","key","ectoderm","transfer");

INSERT INTO inputs (id,supplier,address,comments,type) VALUES (471482,"ashram","employ","scorn","other");

INSERT INTO inputs (id,supplier,address,comments,type) VALUES (372597,"pit","rip","lambkin","transfer");

INSERT INTO inputs (id,supplier,address,comments,type) VALUES (328804,"rugby","sick","sundae","purchase");

INSERT INTO inputs (id,supplier,address,comments,type) VALUES (498666,"horde","advocacy","addition","purchase");

INSERT INTO inputs (id,supplier,address,comments,type) VALUES (52443,"alligator","exclamation","might","purchase");

INSERT INTO inputs (id,supplier,address,comments,type) VALUES (192086,"crisp","lode","flight","other");

INSERT INTO inputs (id,supplier,address,comments,type) VALUES (211568,"pennant","stockings","lumber","purchase");

INSERT INTO inputs (id,supplier,address,comments,type) VALUES (749760,"balloonist","sousaphone","socialist","transfer");




INSERT INTO batches (code,input,drug,expires,quantity,lab) VALUES ("location",(SELECT id FROM inputs ORDER BY RAND() LIMIT 1),(SELECT code FROM drugs ORDER BY RAND() LIMIT 1),"1931-08-11 05-33-16",999784,"sloth");

INSERT INTO batches (code,input,drug,expires,quantity,lab) VALUES ("forehead",(SELECT id FROM inputs ORDER BY RAND() LIMIT 1),(SELECT code FROM drugs ORDER BY RAND() LIMIT 1),"1958-11-10 15-06-30",445977,"rumor");

INSERT INTO batches (code,input,drug,expires,quantity,lab) VALUES ("collapse",(SELECT id FROM inputs ORDER BY RAND() LIMIT 1),(SELECT code FROM drugs ORDER BY RAND() LIMIT 1),"1953-11-08 01-08-16",691440,"queen");

INSERT INTO batches (code,input,drug,expires,quantity,lab) VALUES ("manifestation",(SELECT id FROM inputs ORDER BY RAND() LIMIT 1),(SELECT code FROM drugs ORDER BY RAND() LIMIT 1),"2004-07-27 14-13-38",724690,"program");

INSERT INTO batches (code,input,drug,expires,quantity,lab) VALUES ("shoestring",(SELECT id FROM inputs ORDER BY RAND() LIMIT 1),(SELECT code FROM drugs ORDER BY RAND() LIMIT 1),"1988-09-20 19-44-36",965358,"arch");

INSERT INTO batches (code,input,drug,expires,quantity,lab) VALUES ("diary",(SELECT id FROM inputs ORDER BY RAND() LIMIT 1),(SELECT code FROM drugs ORDER BY RAND() LIMIT 1),"1991-11-08 17-17-44",809652,"twister");

INSERT INTO batches (code,input,drug,expires,quantity,lab) VALUES ("collar",(SELECT id FROM inputs ORDER BY RAND() LIMIT 1),(SELECT code FROM drugs ORDER BY RAND() LIMIT 1),"2017-02-09 11-30-22",470042,"garage");

INSERT INTO batches (code,input,drug,expires,quantity,lab) VALUES ("insurgence",(SELECT id FROM inputs ORDER BY RAND() LIMIT 1),(SELECT code FROM drugs ORDER BY RAND() LIMIT 1),"1928-04-10 11-35-36",597574,"caviar");

INSERT INTO batches (code,input,drug,expires,quantity,lab) VALUES ("aside",(SELECT id FROM inputs ORDER BY RAND() LIMIT 1),(SELECT code FROM drugs ORDER BY RAND() LIMIT 1),"1950-06-22 23-45-24",305469,"beyond");

INSERT INTO batches (code,input,drug,expires,quantity,lab) VALUES ("sole",(SELECT id FROM inputs ORDER BY RAND() LIMIT 1),(SELECT code FROM drugs ORDER BY RAND() LIMIT 1),"1948-09-19 05-41-35",207466,"massage");




INSERT INTO purchase_details (input,invoice,sanitary_license) VALUES ((SELECT id FROM inputs ORDER BY RAND() LIMIT 1),"coast","snowplow");

INSERT INTO purchase_details (input,invoice,sanitary_license) VALUES ((SELECT id FROM inputs ORDER BY RAND() LIMIT 1),"establishment","picturesque");

INSERT INTO purchase_details (input,invoice,sanitary_license) VALUES ((SELECT id FROM inputs ORDER BY RAND() LIMIT 1),"disdain","zipper");

INSERT INTO purchase_details (input,invoice,sanitary_license) VALUES ((SELECT id FROM inputs ORDER BY RAND() LIMIT 1),"retreat","railway");

INSERT INTO purchase_details (input,invoice,sanitary_license) VALUES ((SELECT id FROM inputs ORDER BY RAND() LIMIT 1),"speed","outrage");

INSERT INTO purchase_details (input,invoice,sanitary_license) VALUES ((SELECT id FROM inputs ORDER BY RAND() LIMIT 1),"naming","aglet");

INSERT INTO purchase_details (input,invoice,sanitary_license) VALUES ((SELECT id FROM inputs ORDER BY RAND() LIMIT 1),"psychologist","curve");

INSERT INTO purchase_details (input,invoice,sanitary_license) VALUES ((SELECT id FROM inputs ORDER BY RAND() LIMIT 1),"proposition","collectivisation");

INSERT INTO purchase_details (input,invoice,sanitary_license) VALUES ((SELECT id FROM inputs ORDER BY RAND() LIMIT 1),"rise","interface");

INSERT INTO purchase_details (input,invoice,sanitary_license) VALUES ((SELECT id FROM inputs ORDER BY RAND() LIMIT 1),"state","joint");




INSERT INTO transfer_details (input,document) VALUES ((SELECT id FROM inputs ORDER BY RAND() LIMIT 1),"heart-throb");

INSERT INTO transfer_details (input,document) VALUES ((SELECT id FROM inputs ORDER BY RAND() LIMIT 1),"cheddar");

INSERT INTO transfer_details (input,document) VALUES ((SELECT id FROM inputs ORDER BY RAND() LIMIT 1),"crunch");

INSERT INTO transfer_details (input,document) VALUES ((SELECT id FROM inputs ORDER BY RAND() LIMIT 1),"caliber");

INSERT INTO transfer_details (input,document) VALUES ((SELECT id FROM inputs ORDER BY RAND() LIMIT 1),"subcontractor");

INSERT INTO transfer_details (input,document) VALUES ((SELECT id FROM inputs ORDER BY RAND() LIMIT 1),"infarction");

INSERT INTO transfer_details (input,document) VALUES ((SELECT id FROM inputs ORDER BY RAND() LIMIT 1),"progress");

INSERT INTO transfer_details (input,document) VALUES ((SELECT id FROM inputs ORDER BY RAND() LIMIT 1),"hypochondria");

INSERT INTO transfer_details (input,document) VALUES ((SELECT id FROM inputs ORDER BY RAND() LIMIT 1),"bankbook");

INSERT INTO transfer_details (input,document) VALUES ((SELECT id FROM inputs ORDER BY RAND() LIMIT 1),"pike");




INSERT INTO outputs (id,sign,batch,quantity,comment,type) VALUES (983602,(SELECT username FROM users ORDER BY RAND() LIMIT 1),(SELECT code FROM batches ORDER BY RAND() LIMIT 1),480281,"cribbage","other");

INSERT INTO outputs (id,sign,batch,quantity,comment,type) VALUES (833649,(SELECT username FROM users ORDER BY RAND() LIMIT 1),(SELECT code FROM batches ORDER BY RAND() LIMIT 1),154731,"cheetah","other");

INSERT INTO outputs (id,sign,batch,quantity,comment,type) VALUES (719382,(SELECT username FROM users ORDER BY RAND() LIMIT 1),(SELECT code FROM batches ORDER BY RAND() LIMIT 1),200542,"baseline","prescription_fill");

INSERT INTO outputs (id,sign,batch,quantity,comment,type) VALUES (856356,(SELECT username FROM users ORDER BY RAND() LIMIT 1),(SELECT code FROM batches ORDER BY RAND() LIMIT 1),697248,"softening","expiration");

INSERT INTO outputs (id,sign,batch,quantity,comment,type) VALUES (69321,(SELECT username FROM users ORDER BY RAND() LIMIT 1),(SELECT code FROM batches ORDER BY RAND() LIMIT 1),771046,"compost","other");

INSERT INTO outputs (id,sign,batch,quantity,comment,type) VALUES (219751,(SELECT username FROM users ORDER BY RAND() LIMIT 1),(SELECT code FROM batches ORDER BY RAND() LIMIT 1),879838,"data","other");

INSERT INTO outputs (id,sign,batch,quantity,comment,type) VALUES (611694,(SELECT username FROM users ORDER BY RAND() LIMIT 1),(SELECT code FROM batches ORDER BY RAND() LIMIT 1),516122,"cultivator","expiration");

INSERT INTO outputs (id,sign,batch,quantity,comment,type) VALUES (464032,(SELECT username FROM users ORDER BY RAND() LIMIT 1),(SELECT code FROM batches ORDER BY RAND() LIMIT 1),414159,"aluminum","other");

INSERT INTO outputs (id,sign,batch,quantity,comment,type) VALUES (347976,(SELECT username FROM users ORDER BY RAND() LIMIT 1),(SELECT code FROM batches ORDER BY RAND() LIMIT 1),35099,"resolve","prescription_fill");

INSERT INTO outputs (id,sign,batch,quantity,comment,type) VALUES (58915,(SELECT username FROM users ORDER BY RAND() LIMIT 1),(SELECT code FROM batches ORDER BY RAND() LIMIT 1),156908,"brace","prescription_fill");




INSERT INTO patients (file,first_name,last_name,curp,birthdate,sex,address,floor,bed,diagnostic,arrival_time,departure_time) VALUES ("ceremony","anteater","wisdom","assist","1970-08-23","male","chicken","sideboard","organizing","roundabout","1931-10-19 04-17-20","1953-11-05 10-01-59");

INSERT INTO patients (file,first_name,last_name,curp,birthdate,sex,address,floor,bed,diagnostic,arrival_time,departure_time) VALUES ("cutlet","pan","proposition","viola","1989-02-15","male","conformation","whip","mineshaft","injustice","1994-06-18 23-25-54","1901-09-10 19-55-30");

INSERT INTO patients (file,first_name,last_name,curp,birthdate,sex,address,floor,bed,diagnostic,arrival_time,departure_time) VALUES ("console","freight","semiconductor","mattress","1999-07-03","other","shaker","gymnastics","incubation","morale","1948-06-22 01-55-38","1952-10-05 09-37-35");

INSERT INTO patients (file,first_name,last_name,curp,birthdate,sex,address,floor,bed,diagnostic,arrival_time,departure_time) VALUES ("macro","expression","glucose","ordination","1942-07-25","other","ratio","polyp","jot","hops","1950-01-09 16-28-06","1939-10-21 15-28-58");

INSERT INTO patients (file,first_name,last_name,curp,birthdate,sex,address,floor,bed,diagnostic,arrival_time,departure_time) VALUES ("goldfish","beach","tatami","epee","1949-11-13","male","rebel","hypochondria","magnet","dragster","1957-08-15 09-47-56","1908-01-15 14-01-03");

INSERT INTO patients (file,first_name,last_name,curp,birthdate,sex,address,floor,bed,diagnostic,arrival_time,departure_time) VALUES ("ad","coin","whey","waistband","1953-03-25","other","reference","classic","laundry","creationism","1979-06-23 01-35-20","1967-08-09 23-37-21");

INSERT INTO patients (file,first_name,last_name,curp,birthdate,sex,address,floor,bed,diagnostic,arrival_time,departure_time) VALUES ("fritter","gamma-ray","parallelogram","analogy","1930-01-09","female","bump","rifle","testimony","councilperson","1954-08-20 17-32-53","1996-03-09 16-55-01");

INSERT INTO patients (file,first_name,last_name,curp,birthdate,sex,address,floor,bed,diagnostic,arrival_time,departure_time) VALUES ("orchard","channel","speculation","origin","1923-11-13","male","disarmament","erection","essay","app","1977-02-23 16-33-41","1935-08-08 07-17-36");

INSERT INTO patients (file,first_name,last_name,curp,birthdate,sex,address,floor,bed,diagnostic,arrival_time,departure_time) VALUES ("veal","system","papaya","jail","1930-04-21","other","order","guy","boot","therapy","1915-08-04 10-45-52","1927-05-24 09-11-47");

INSERT INTO patients (file,first_name,last_name,curp,birthdate,sex,address,floor,bed,diagnostic,arrival_time,departure_time) VALUES ("vomit","praise","bulb","melon","2010-06-08","other","domination","peacoat","kick-off","western","2001-08-07 10-30-33","1953-08-14 22-09-00");




INSERT INTO prescriptions (code,patient,doctor,issue_date,comments) VALUES (249565,(SELECT file FROM patients ORDER BY RAND() LIMIT 1),(SELECT code FROM certificates ORDER BY RAND() LIMIT 1),"1905-02-06 00-45-30","octopus");

INSERT INTO prescriptions (code,patient,doctor,issue_date,comments) VALUES (422720,(SELECT file FROM patients ORDER BY RAND() LIMIT 1),(SELECT code FROM certificates ORDER BY RAND() LIMIT 1),"1989-01-23 01-07-23","soy");

INSERT INTO prescriptions (code,patient,doctor,issue_date,comments) VALUES (10318,(SELECT file FROM patients ORDER BY RAND() LIMIT 1),(SELECT code FROM certificates ORDER BY RAND() LIMIT 1),"1911-01-20 05-45-38","landform");

INSERT INTO prescriptions (code,patient,doctor,issue_date,comments) VALUES (85256,(SELECT file FROM patients ORDER BY RAND() LIMIT 1),(SELECT code FROM certificates ORDER BY RAND() LIMIT 1),"2012-03-17 16-05-02","tritone");

INSERT INTO prescriptions (code,patient,doctor,issue_date,comments) VALUES (33556,(SELECT file FROM patients ORDER BY RAND() LIMIT 1),(SELECT code FROM certificates ORDER BY RAND() LIMIT 1),"1937-09-14 20-03-47","vernacular");

INSERT INTO prescriptions (code,patient,doctor,issue_date,comments) VALUES (754380,(SELECT file FROM patients ORDER BY RAND() LIMIT 1),(SELECT code FROM certificates ORDER BY RAND() LIMIT 1),"1978-06-17 20-36-20","buckle");

INSERT INTO prescriptions (code,patient,doctor,issue_date,comments) VALUES (866363,(SELECT file FROM patients ORDER BY RAND() LIMIT 1),(SELECT code FROM certificates ORDER BY RAND() LIMIT 1),"1983-07-25 13-29-23","paranoia");

INSERT INTO prescriptions (code,patient,doctor,issue_date,comments) VALUES (238112,(SELECT file FROM patients ORDER BY RAND() LIMIT 1),(SELECT code FROM certificates ORDER BY RAND() LIMIT 1),"2015-09-17 06-42-07","antibody");

INSERT INTO prescriptions (code,patient,doctor,issue_date,comments) VALUES (199123,(SELECT file FROM patients ORDER BY RAND() LIMIT 1),(SELECT code FROM certificates ORDER BY RAND() LIMIT 1),"1952-02-12 00-19-52","login");

INSERT INTO prescriptions (code,patient,doctor,issue_date,comments) VALUES (780439,(SELECT file FROM patients ORDER BY RAND() LIMIT 1),(SELECT code FROM certificates ORDER BY RAND() LIMIT 1),"1922-04-27 18-47-48","bucket");




INSERT INTO prescription_drugs (prescription,drug,quantity,dose,administration_route) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT code FROM drugs ORDER BY RAND() LIMIT 1),724915,"work","incision");

INSERT INTO prescription_drugs (prescription,drug,quantity,dose,administration_route) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT code FROM drugs ORDER BY RAND() LIMIT 1),201341,"sled","lens");

INSERT INTO prescription_drugs (prescription,drug,quantity,dose,administration_route) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT code FROM drugs ORDER BY RAND() LIMIT 1),918496,"logic","digestion");

INSERT INTO prescription_drugs (prescription,drug,quantity,dose,administration_route) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT code FROM drugs ORDER BY RAND() LIMIT 1),842795,"bulb","meantime");

INSERT INTO prescription_drugs (prescription,drug,quantity,dose,administration_route) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT code FROM drugs ORDER BY RAND() LIMIT 1),756183,"postbox","recliner");

INSERT INTO prescription_drugs (prescription,drug,quantity,dose,administration_route) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT code FROM drugs ORDER BY RAND() LIMIT 1),215102,"machine","mate");

INSERT INTO prescription_drugs (prescription,drug,quantity,dose,administration_route) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT code FROM drugs ORDER BY RAND() LIMIT 1),202939,"lyocell","subgroup");

INSERT INTO prescription_drugs (prescription,drug,quantity,dose,administration_route) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT code FROM drugs ORDER BY RAND() LIMIT 1),897841,"epoch","hope");

INSERT INTO prescription_drugs (prescription,drug,quantity,dose,administration_route) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT code FROM drugs ORDER BY RAND() LIMIT 1),653032,"harvest","nonbeliever");

INSERT INTO prescription_drugs (prescription,drug,quantity,dose,administration_route) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT code FROM drugs ORDER BY RAND() LIMIT 1),972433,"light","synod");




INSERT INTO prescription_fills (prescription,output) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT id FROM outputs ORDER BY RAND() LIMIT 1));

INSERT INTO prescription_fills (prescription,output) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT id FROM outputs ORDER BY RAND() LIMIT 1));

INSERT INTO prescription_fills (prescription,output) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT id FROM outputs ORDER BY RAND() LIMIT 1));

INSERT INTO prescription_fills (prescription,output) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT id FROM outputs ORDER BY RAND() LIMIT 1));

INSERT INTO prescription_fills (prescription,output) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT id FROM outputs ORDER BY RAND() LIMIT 1));

INSERT INTO prescription_fills (prescription,output) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT id FROM outputs ORDER BY RAND() LIMIT 1));

INSERT INTO prescription_fills (prescription,output) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT id FROM outputs ORDER BY RAND() LIMIT 1));

INSERT INTO prescription_fills (prescription,output) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT id FROM outputs ORDER BY RAND() LIMIT 1));

INSERT INTO prescription_fills (prescription,output) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT id FROM outputs ORDER BY RAND() LIMIT 1));

INSERT INTO prescription_fills (prescription,output) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT id FROM outputs ORDER BY RAND() LIMIT 1));




INSERT INTO prescription_returns (prescription,batch,quantity) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT code FROM batches ORDER BY RAND() LIMIT 1),259569);

INSERT INTO prescription_returns (prescription,batch,quantity) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT code FROM batches ORDER BY RAND() LIMIT 1),889036);

INSERT INTO prescription_returns (prescription,batch,quantity) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT code FROM batches ORDER BY RAND() LIMIT 1),488123);

INSERT INTO prescription_returns (prescription,batch,quantity) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT code FROM batches ORDER BY RAND() LIMIT 1),750721);

INSERT INTO prescription_returns (prescription,batch,quantity) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT code FROM batches ORDER BY RAND() LIMIT 1),575578);

INSERT INTO prescription_returns (prescription,batch,quantity) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT code FROM batches ORDER BY RAND() LIMIT 1),675338);

INSERT INTO prescription_returns (prescription,batch,quantity) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT code FROM batches ORDER BY RAND() LIMIT 1),222929);

INSERT INTO prescription_returns (prescription,batch,quantity) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT code FROM batches ORDER BY RAND() LIMIT 1),585326);

INSERT INTO prescription_returns (prescription,batch,quantity) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT code FROM batches ORDER BY RAND() LIMIT 1),632692);

INSERT INTO prescription_returns (prescription,batch,quantity) VALUES ((SELECT code FROM prescriptions ORDER BY RAND() LIMIT 1),(SELECT code FROM batches ORDER BY RAND() LIMIT 1),857824);




