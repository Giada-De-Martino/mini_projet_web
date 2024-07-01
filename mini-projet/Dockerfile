# Extend official PostgreSQL image
FROM postgres:latest

# Copy initialization SQL scripts to Docker image
COPY init_db.sql /docker-entrypoint-initdb.d/

# Expose PostgreSQL default port
EXPOSE 5432
