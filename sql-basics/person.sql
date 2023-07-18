-- creating person table
create table person(
    person_id serial primary key,
    person_name varchar(30) not null, 
    age integer,
    height float, 
    city varchar(30),
    favorite_color varchar(30)
)

-- inserting multiple people
INSERT INTO person(person_name, age, height, city, favorite_color)
VALUES('Maria', 25, 170, 'Longmont', 'red'), ('Clayton', 37, 180, 'Longmont', 'blue'), ('Michael Johnson', 40, 175, 'Los Angeles', 'red'), ('Emily Brown', 35, 160, 'Paris', 'purple'), ('John Doe', 30, 180, 'New York', 'blue');

-- select all people from person by height from talles to shortest
-- SELECT *from person order by height desc;

--select all people from person by height from shortest to tallest 
-- SELECT * from person order by height

--select all people from person by age, oldest to youngest 
-- SELECT * from person order by age desc;

--Select all people from person older than 20
-- SELECT * from person where age > 20;

--select all people from person that age is 18 
-- SELECT * from person where age = 18;

--select all people from person that age is less than 20 and older than 30
-- SELECT * from person where age < 20 and age > 30;

--selecty all people from person that are not 27
-- SELECT * from person where age != 27;

--select all people from person where their favorite color is not red
-- SELECT * from person where favorite_color <> 'red';

--select all people from person where their favorite color is not red or blue
-- SELECT * from person where favorite_color <> 'red' and favorite_color <> 'blue'
-- SELECT * from person where favorite_color not in ('red', 'blue')

--select all people from person where favorite_color is orange and green 
-- SELECT * from person where favorite_color in ('orange', 'green')

--select all people from person where favorite color is orange, green or blue
-- SELECT * from person where favorite_color in ('orange', 'green', 'blue')

--select all people from person where favorite color is yellow or purple 
-- SELECT * from person where favorite_color in ('yellow', 'purple');
