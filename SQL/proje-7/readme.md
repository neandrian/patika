# Sql - Proje 7

Aşağıdaki sorgu senaryolarını **dvdrental** örnek veri tabanı üzerinden gerçekleştiriniz.

- film tablosunda bulunan filmleri rating değerlerine göre gruplayınız.

  ```sql
  select rating, title from film group by rating, title order by rating
  ```

- film tablosunda bulunan filmleri replacement_cost sütununa göre grupladığımızda film sayısı 50 den fazla olan replacement_cost değerini ve karşılık gelen film sayısını sıralayınız.

  ```sql
  select replacement_cost, count(*) from film group by replacement_cost having count(*) > 50
  ```

- customer tablosunda bulunan store_id değerlerine karşılık gelen müşteri sayılarını nelerdir?

  ```sql
  select store_id, count(*) from customer group by store_id
  ```

- city tablosunda bulunan şehir verilerini country_id sütununa göre gruplandırdıktan sonra en fazla şehir sayısı barındıran country_id bilgisini ve şehir sayısını paylaşınız.
  ```sql
  select country_id, count(*) from city group by country_id order by count(*) desc limit 1
  ```

[https://www.patika.dev](https://www.patika.dev)
