create database datingapp;
use  datingapp

create table occupation(
 occu_id int primary key,
 occupation varchar(40)
)
insert into occupation(occu_id,occupation)
values
(401,'artist'),
(402,'teacher'),
(403,'lawyer')

create table hobbies(
 hobby_id int primary key,
 hobby char(50)
)

insert into hobbies(hobby_id,hobby)
values
(2001,'reading'),
(2002,'dancing'),
(2003,'cooking'),
(2004,'singing')

create table moviegenres(
 genre_id int primary key,
 genrename char(50)
)
insert into moviegenres(genre_id,genrename)
values
(11,'fiction'),
(12,'thriller'),
(13,'horror'),
(14,'humor'),
(15,'action')

create table food(
 food_id int primary key,
 food char(50)
)
insert into food(food_id,food)
values
(32,'pizza'),
(33,'burger'),
(34,'biriyani'),
(35,'chocolate'),
(36,'icecream')


create table customer(
 customer_id int primary key,
 c_name varchar(40) not null,
 age int not null,
 occu_id int
 constraint fk_oid foreign key references occupation(occu_id),
 hobby_id int 
 constraint fk_hid foreign key references hobbies(hobby_id),
 food_id int
 constraint fk_fid foreign key references food(food_id),
 genre_id int
 constraint fk_gid foreign key references moviegenres(genre_id)
)

insert into customer(customer_id,c_name,age)
values
(3001,'Ruby',32),
(3002,'Rony',28),
(3003,'sony',46),
(3004,'john',42),
(3005,'juliet',35)






--create table hobbylist(
--hobbylist_id int primary key,
--customer_id int
--constraint fk_hcid foreign key references customer(customer_id),
--hobby_id int 
--constraint fk_hhid foreign key references hobbies(hobby_id)
--)


--create table moviegenreslist(
--movielist_id int primary key,
--customer_id int
--constraint fk_gcid foreign key references customer(customer_id),
--genre_id int 
--constraint fk_gid foreign key references moviegenres(genre_id)
--)


--create table foodlist(
--foodlist_id int primary key,
--customer_id int
--constraint fk_hcid foreign key references customer(customer_id),
--food_id int 
--constraint fk_fid foreign key references food(food_id)
--)




