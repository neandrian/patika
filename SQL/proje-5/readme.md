# Sql - Proje 5

Aşağıdaki sorgu senaryolarını **dvdrental** örnek veri tabanı üzerinden gerçekleştiriniz.

- film tablosunda bulunan ve film ismi (title) 'n' karakteri ile biten en uzun (length) 5 filmi sıralayınız.

  ```sql
  select * from film where title like '%n' order by length desc limit 5
  ```

- film tablosunda bulunan ve film ismi (title) 'n' karakteri ile biten en kısa (length) ikinci(6,7,8,9,10) 5 filmi(6,7,8,9,10) sıralayınız.

  ```sql
  select * from film where title like '%n' order by length asc offset 5 limit 5
  ```

- customer tablosunda bulunan last_name sütununa göre azalan yapılan sıralamada store_id 1 olmak koşuluyla ilk 4 veriyi sıralayınız.
  ```sql
  select * from customer where store_id = 1 order by last_name limit 4
  ```

[https://www.patika.dev](https://www.patika.dev)
