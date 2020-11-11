select manager.country, 
manager.code, 
manager.new_code, 
manager.latitude, 
manager.longitude, 
labor.indicator_name, 
labor."2009",
labor."2010", 
labor."2011", 
labor."2012", 
labor."2013", 
labor."2014", 
labor."2015", 
labor."2016", 
labor."2017", 
labor."2018", 
labor."2019", 
labor."2020",
manager.indicator_name, 
manager."2009",
manager."2010", 
manager."2011", 
manager."2012", 
manager."2013", 
manager."2014", 
manager."2015", 
manager."2016", 
manager."2017", 
manager."2018", 
manager."2019", 
manager."2020" 
from manager



inner join labor
on manager.new_code= labor.new_code;
select * from parliament;
select * from manager
union all
select * from labor
union all 
select * from ownership
union all
select * from parliament
order by indicator_name
;






















