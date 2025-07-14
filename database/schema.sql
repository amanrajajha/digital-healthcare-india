CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    gender VARCHAR(10),
    contact VARCHAR(20)
);

CREATE TABLE prescriptions (
    id SERIAL PRIMARY KEY,
    patient_id INT REFERENCES patients(id),
    date DATE,
    medication TEXT,
    dosage TEXT
);
