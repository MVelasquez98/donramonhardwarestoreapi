DROP TABLE IF EXISTS products;

CREATE TABLE products (
    provider_id INT NOT NULL,
    code VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (provider_id, code)
);

ALTER TABLE products 
ADD INDEX idx_provider_id_code (provider_id, code),
ADD INDEX idx_description (description)

DROP TABLE IF EXISTS providers;

CREATE TABLE providers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    telephone VARCHAR(255),
    config JSON NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE INDEX idx_products_provider_id ON products (provider_id);
CREATE INDEX idx_providers_name ON providers (name);