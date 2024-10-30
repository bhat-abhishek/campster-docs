---
title: Configuration
description: Configuration guide for Database and SMTP server
--- 

### Configuring the Environment variables

```env

PORT=1335
NODE_ENV=development | staging | production

JWT_SECRET=
JWT_EXPIRES_IN=7d | 30d

#Postgres Database Configuration
DB_NAME=mailman
DB_USER=mailman
DB_PASSWORD=mailman_password
DB_HOST=db_host
DB_PORT=5432

BATCH_SIZE=1000
CONCURRENT_BATCHES=5

#SMTP Configuration
MAIL_HOST=smtp_host
MAIL_PORT=587
MAIL_USER=mail_user
MAIL_PASS=mail_pass

API_HOST=https://api.domain.com
CLIENT_HOST=https://domain.com
BOUNCE_API_KEY=random bytes 
```