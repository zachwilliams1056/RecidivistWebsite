CREATE TABLE newsletter_subscribers (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE
);


INSERT INTO newsletter_subscribers (email) VALUES ('');