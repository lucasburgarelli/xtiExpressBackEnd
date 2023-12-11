create database xti;
use xti;

create table users(
use_cpf char(11) not null primary key,
use_name varchar(255) not null,
use_password varchar(100) not null,
use_birthdate date not null,
use_money decimal(9, 2) not null,
use_privileges char(1) not null,
check(use_privileges in ('A','I'))
);

create table stocks(
sto_code varchar(11) not null primary key,
sto_companyname varchar(255) not null unique,
sto_price decimal(9, 2) not null,
sto_sector varchar(100),
sto_firstdate date
);

create table buys(
use_cpf char(11) not null,
sto_code varchar(11) not null,
buy_amount int not null,
buy_mediumprice decimal(9, 2) not null,
buy_date date not null,
buy_time time not null,
primary key(use_cpf, sto_code, buy_date, buy_time),
foreign key(use_cpf) references user(use_cpf),
foreign key(sto_code) references stock(sto_code)
);

create table sells(
use_cpf char(11) not null,
sto_code varchar(11) not null,
sel_amount int not null,
sel_mediumprice decimal(9, 2) not null,
sel_date date not null,
sel_time time not null,
primary key(use_cpf, sto_code, sel_date, sel_time),
foreign key(use_cpf) references user(use_cpf),
foreign key(sto_code) references stock(sto_code)
);