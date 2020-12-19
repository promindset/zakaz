# Zakaz project

## Setup up Database locally

1 - install postgres locally

```bash
brew install postgresql
```

2 - create database zakazDB

```bash
initdb <path>/zakazDB
```

3 - start database

```bash
pg_ctl -D <path>/zakazDB start
```

4 - connect to postgres db and setup up roles and new db for our app

```bash
psql postgres
```

```sql
CREATE DATABASE "zakaz-dev";

CREATE ROLE admin WITH PASSWORD 'admin123';

ALTER USER admin WITH SUPERUSER CREATEDB CREATEROLE LOGIN BYPASSRLS REPLICATION;

GRANT CONNECT ON DATABASE "zakaz-dev" TO admin;
```

5 - connect as the new user

```bash
psql -U admin -d zakaz-dev -W
```

```sql
CREATE TABLE user (
  id SERIAL NOT NULL PRIMARY KEY,
  firstName varchar(16),
  lastName varchar(16),
  phoneNumber INT,
  password varchar(256),
  dateCreated TIMESTAMPTZ NOT NULL DEFAULT NOW (),
  lastUpdated varchar(32),
  lastLogin varchar(32),
  gender varchar(8),
  userType varchar(16),
  birthDate varchar(32)
 );
```

---
