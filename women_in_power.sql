-- create table manager
drop table manager;
create table manager (
country varchar,
code varchar,
new_code varchar primary key,
latitude decimal,
longitude decimal,
indicator_name varchar,
"2009" decimal,
"2010" decimal,
"2011" decimal,
"2012" decimal,
"2013" decimal,
"2014" decimal,
"2015" decimal,
"2016" decimal,
"2017" decimal,
"2018" decimal,
"2019" decimal
);
select * from manager;
-- create table labor
drop table labor;
create table labor (
country varchar,
code varchar,
new_code varchar primary key,
latitude decimal,
longitude decimal,
indicator_name varchar,
"2009" decimal,
"2010" decimal,
"2011" decimal,
"2012" decimal,
"2013" decimal,
"2014" decimal,
"2015" decimal,
"2016" decimal,
"2017" decimal,
"2018" decimal,
"2019" decimal
);
select * from labor;

-- create table ownership
drop table ownership;
create table ownership (
country varchar,
code varchar,
new_code varchar primary key,
latitude decimal,
longitude decimal,
indicator_name varchar,
"2009" decimal,
"2010" decimal,
"2011" decimal,
"2012" decimal,
"2013" decimal,
"2014" decimal,
"2015" decimal,
"2016" decimal,
"2017" decimal,
"2018" decimal,
"2019" decimal
);
select * from ownership;

-- create table parliament
drop table parliament;
create table parliament (
country varchar,
code varchar,
new_code varchar primary key,
latitude decimal,
longitude decimal,
indicator_name varchar,
"2009" decimal,
"2010" decimal,
"2011" decimal,
"2012" decimal,
"2013" decimal,
"2014" decimal,
"2015" decimal,
"2016" decimal,
"2017" decimal,
"2018" decimal,
"2019" decimal
);
select * from parliament;
-- create the union between all tables
select * from manager
union all
select * from labor
union all 
select * from ownership
union all
select * from parliament
order by indicator_name
;

-- create a new table girls in power that will hold the unified tables
create table girls_in_power (
country varchar,
code varchar,
new_code varchar primary key,
latitude decimal,
longitude decimal,
indicator_name varchar,
"2009" decimal,
"2010" decimal,
"2011" decimal,
"2012" decimal,
"2013" decimal,
"2014" decimal,
"2015" decimal,
"2016" decimal,
"2017" decimal,
"2018" decimal,
"2019" decimal
);

-- code for reading the merged files into the new table 
select * from girls_in_power;
drop table girls_in_power;
select *
into girls_in_power
from manager
UNION all
Select *
From labor
union all
select * from ownership
union all
select * from parliament;
select * from girls_in_power;



