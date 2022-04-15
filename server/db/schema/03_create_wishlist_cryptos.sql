DROP TABLE IF EXISTS wishlist_cryptos CASCADE;

CREATE TABLE wishlist_cryptos (
  id SERIAL PRIMARY KEY,
  wishlist_id INTEGER REFERENCES wishlists(id) ON DELETE CASCADE,
  crypto_id INTEGER REFERENCES cryptos(id) ON DELETE CASCADE
);