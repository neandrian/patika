# Sql - Proje 10

Aşağıdaki sorgu senaryolarını **dvdrental** örnek veri tabanı üzerinden gerçekleştiriniz.

- city tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz LEFT JOIN sorgusunu yazınız.

  ```sql
  select city, country from city left join country on city.country_id = country.country_id
  ```

- customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz RIGHT JOIN sorgusunu yazınız.

  ```sql
  select first_name, last_name, payment_id from payment right join customer on payment.customer_id = customer.customer_id
  ```

- customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz FULL JOIN sorgusunu yazınız.
  ```sql
  select first_name, last_name, rental_id from rental full join customer on rental.customer_id = customer.customer_id
  ```

[https://www.patika.dev](https://www.patika.dev)
