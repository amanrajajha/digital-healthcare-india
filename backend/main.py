from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Patient(BaseModel):
    id: int
    name: str
    age: int
    gender: str
    contact: str

patients_db = []

@app.post("/patients/")
def create_patient(patient: Patient):
    patients_db.append(patient)
    return {"msg": "Patient added"}

@app.get("/patients/", response_model=List[Patient])
def list_patients():
    return patients_db
