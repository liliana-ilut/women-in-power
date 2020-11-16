-- create table manager
drop table manager;
create table manager (
country varchar,
code varchar,
new_code varchar primary key,
latitude decimal,
longitude decimal,
indicator_name varchar,
"year_2009" decimal,
"year_2010" decimal,
"year_2011" decimal,
"year_2012" decimal,
"year_2013" decimal,
"year_2014" decimal,
"year_2015" decimal,
"year_2016" decimal,
"year_2017" decimal,
"year_2018" decimal,
"year_2019" decimal
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
"year_2009" decimal,
"year_2010" decimal,
"year_2011" decimal,
"year_2012" decimal,
"year_2013" decimal,
"year_2014" decimal,
"year_2015" decimal,
"year_2016" decimal,
"year_2017" decimal,
"year_2018" decimal,
"year_2019" decimal
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
"year_2009" decimal,
"year_2010" decimal,
"year_2011" decimal,
"year_2012" decimal,
"year_2013" decimal,
"year_2014" decimal,
"year_2015" decimal,
"year_2016" decimal,
"year_2017" decimal,
"year_2018" decimal,
"year_2019" decimal
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
"year_2009" decimal,
"year_2010" decimal,
"year_2011" decimal,
"year_2012" decimal,
"year_2013" decimal,
"year_2014" decimal,
"year_2015" decimal,
"year_2016" decimal,
"year_2017" decimal,
"year_2018" decimal,
"year_2019" decimal
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
drop table girls_in_power
create table girls_in_power (
country varchar,
code varchar,
new_code varchar primary key,
latitude decimal,
longitude decimal,
indicator_name varchar,
"year_2009" decimal,
"year_2010" decimal,
"year_2011" decimal,
"year_2012" decimal,
"year_2013" decimal,
"year_2014" decimal,
"year_2015" decimal,
"year_2016" decimal,
"year_2017" decimal,
"year_2018" decimal,
"year_2019" decimal
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




















