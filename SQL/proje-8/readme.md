# Sql - Proje 8

Aşağıdaki sorgu senaryolarını yeni oluşturacağımız **test** veri tabanı üzerinden gerçekleştiriniz.

- test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.
  ```sql
  create table employee(
    id serial primary key,
    name varchar(50) not null,
    birthday date,
    email varchar(100)
  )
  ```
- Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.

  ```sql
  insert into employee (name, email, birthday) values ('Marc', 'mhearse0@google.co.uk', '1932-07-30');
  insert into employee (name, email, birthday) values ('Wenonah', 'wworthington1@reuters.com', '1951-11-10');
  insert into employee (name, email, birthday) values ('Philomena', 'pmoody2@google.es', '1967-10-13');
  insert into employee (name, email, birthday) values ('Stephan', 'schatelet3@washingtonpost.com', '1919-11-23');
  insert into employee (name, email, birthday) values ('Leroy', 'ldallow4@issuu.com', '1964-09-04');
  insert into employee (name, email, birthday) values ('Antoni', 'acomellini5@ucoz.ru', '1957-11-30');
  insert into employee (name, email, birthday) values ('Catha', 'cmaclardie6@cnn.com', '1970-10-04');
  insert into employee (name, email, birthday) values ('Abby', 'afoldes7@timesonline.co.uk', '1902-08-17');
  insert into employee (name, email, birthday) values ('Ede', 'echerry8@mediafire.com', '1997-07-07');
  insert into employee (name, email, birthday) values ('Cleo', 'cmacauley9@umn.edu', '1910-11-15');
  insert into employee (name, email, birthday) values ('Kaycee', 'kharbina@bandcamp.com', '1916-03-14');
  insert into employee (name, email, birthday) values ('Wye', 'wtilerb@bigcartel.com', '1961-02-03');
  insert into employee (name, email, birthday) values ('Robin', 'rbuschc@nba.com', '1974-01-21');
  insert into employee (name, email, birthday) values ('Ludvig', 'ldomegand@issuu.com', '1989-01-22');
  insert into employee (name, email, birthday) values ('Therine', 'tdosdille@webnode.com', '1962-03-11');
  insert into employee (name, email, birthday) values ('Den', 'ddeanef@si.edu', '1933-12-10');
  insert into employee (name, email, birthday) values ('Conchita', 'chedylstoneg@psu.edu', '1985-10-22');
  insert into employee (name, email, birthday) values ('Frances', 'fhavileh@sogou.com', '1941-02-01');
  insert into employee (name, email, birthday) values ('Yoshiko', 'ybalsheni@free.fr', '1905-02-23');
  insert into employee (name, email, birthday) values ('Alissa', 'aguagej@reference.com', '1935-01-24');
  insert into employee (name, email, birthday) values ('Delmar', 'dsuggettk@typepad.com', '1995-10-13');
  insert into employee (name, email, birthday) values ('Eryn', 'ewestneyl@cocolog-nifty.com', '1907-01-10');
  insert into employee (name, email, birthday) values ('Frederik', 'fczajkowskam@zimbio.com', '1919-01-03');
  insert into employee (name, email, birthday) values ('Cheryl', 'cjerdeinn@networkadvertising.org', '1954-01-19');
  insert into employee (name, email, birthday) values ('Lucius', 'lfaccinio@indiatimes.com', '1940-09-05');
  insert into employee (name, email, birthday) values ('Elwira', 'elambkinp@va.gov', '1968-01-13');
  insert into employee (name, email, birthday) values ('Hilliary', 'hadrienq@plala.or.jp', '1959-05-15');
  insert into employee (name, email, birthday) values ('Corrie', 'cpinnickr@usgs.gov', '1917-01-02');
  insert into employee (name, email, birthday) values ('Bearnard', 'blentons@aboutads.info', '1998-12-01');
  insert into employee (name, email, birthday) values ('Corrinne', 'cstapletont@nasa.gov', '1984-01-28');
  insert into employee (name, email, birthday) values ('Darice', 'dorangeu@4shared.com', '1959-01-06');
  insert into employee (name, email, birthday) values ('Carmelle', 'cproschv@blinklist.com', '1917-05-07');
  insert into employee (name, email, birthday) values ('Kriste', 'kbussellw@tripod.com', '1905-02-04');
  insert into employee (name, email, birthday) values ('Judith', 'jwaddiex@baidu.com', '1947-04-12');
  insert into employee (name, email, birthday) values ('Gerri', 'gmountery@desdev.cn', '1942-08-28');
  insert into employee (name, email, birthday) values ('Jolene', 'jpracyz@dell.com', '1981-04-09');
  insert into employee (name, email, birthday) values ('Rhiamon', 'rhayfield10@merriam-webster.com', '1979-08-17');
  insert into employee (name, email, birthday) values ('Maury', 'mickovitz11@acquirethisname.com', '1955-12-22');
  insert into employee (name, email, birthday) values ('Marjie', 'mtindall12@va.gov', '1992-12-22');
  insert into employee (name, email, birthday) values ('Jenica', 'jkull13@squarespace.com', '1907-08-06');
  insert into employee (name, email, birthday) values ('Lindie', 'lradleigh14@livejournal.com', '1994-04-27');
  insert into employee (name, email, birthday) values ('Ame', 'abruckental15@mac.com', '1987-09-24');
  insert into employee (name, email, birthday) values ('Judas', 'jrennicks16@thetimes.co.uk', '1904-11-19');
  insert into employee (name, email, birthday) values ('Breena', 'bbohan17@phpbb.com', '1918-10-21');
  insert into employee (name, email, birthday) values ('Kally', 'kmelhuish18@acquirethisname.com', '1940-11-07');
  insert into employee (name, email, birthday) values ('Mei', 'mrotchell19@elegantthemes.com', '1959-07-23');
  insert into employee (name, email, birthday) values ('Sancho', 'smcindoe1a@irs.gov', '1944-06-21');
  insert into employee (name, email, birthday) values ('Beverlie', 'bdineen1b@angelfire.com', '1961-09-14');
  insert into employee (name, email, birthday) values ('Marketa', 'myuranovev1c@vkontakte.ru', '1901-09-19');
  insert into employee (name, email, birthday) values ('Carleen', 'cfelten1d@mlb.com', '1935-03-29');
  ```

- Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.
  ```sql
  update employee set name = 'Ahmet' where id = 1;
  update employee set birthday = '1977-01-01' where name = 'Ahmet';
  update employee set email = 'ahmet@ahmet.com' where name = 'Ahmet';
  update employee set name = 'Mehmet' where email = 'ahmet@ahmet.com';
  update employee set email = 'mehmet@mehmet.com' where name = 'Mehmet';
  ```
- Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.
  ```sql
  delete from employee where id = 2;
  delete from employee where name = 'Stephan';
  delete from employee where email = 'acomellini5@ucoz.ru';
  delete from employee where birthday = '1910-11-15';
  delete from employee where name = 'Judas';
  ```

[https://www.patika.dev](https://www.patika.dev)
