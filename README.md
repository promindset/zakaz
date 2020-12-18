# Zakaz project

## Please update me later and write some good documentation

## Setup up Database locally

install postgres locally

`brew install postgresql`

create database zakazDB

`initdb <path>/zakazDB`

start database

`pg_ctl -D <path>/zakazDB start`


`psql <PATH_TO_DB>/zakazDB`

```
CREATE ROLE admin WITH PASSWORD "admin123";
CREATE DATABASE userDB;
ALTER USER admin WITH SUPERUSER CREATEDB CREATEROLE LOGIN BYPASSRLS REPLICATION;
GRANT CONNECT ON userDB database_name TO admin;
```

psql -U admin -d userdb -W
<Enter Password>
CREATE TABLE user (id SERIAL NOT NULL PRIMARY KEY, first_name varchar(16), last_name varchar(16), phone_number INT, password varchar(256), create_date TIMESTAMPTZ NOT NULL DEFAULT NOW (),last_update varchar(32), last_login varchar(32), gender varchar(8), user_type varchar(16), birth_date varchar(32));
