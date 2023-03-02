# Sql - Proje 12

Aşağıdaki sorgu senaryolarını **dvdrental** örnek veri tabanı üzerinden gerçekleştiriniz.

- film tablosunda film uzunluğu length sütununda gösterilmektedir. Uzunluğu ortalama film uzunluğundan fazla kaç tane film vardır?

  ```sql
  select * from film where length > (select avg(length) from film)
  ```

- film tablosunda en yüksek rental_rate değerine sahip kaç tane film vardır?

  ```sql
  select * from film where rental_rate = (select max(rental_rate) from film)
  ```

- film tablosunda en düşük rental_rate ve en düşün replacement_cost değerlerine sahip filmleri sıralayınız.

  ```sql
  select * from film where rental_rate = (select min(rental_rate) from film) or replacement_cost = (select min(replacement_cost) from film)
  ```

- payment tablosunda en fazla sayıda alışveriş yapan müşterileri(customer) sıralayınız.
  ```sql
  select customer_id, count(customer_id) from payment group by customer_id order by count(customer_id) desc
  ```

[https://www.patika.dev](https://www.patika.dev)
