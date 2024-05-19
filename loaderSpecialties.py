import json
import requests

# URL del endpoint
url = 'https://db.buckapi.com:8090/api/collections/camiwaSpecialties/records'

# Leer las especialidades del archivo specialties.txt
with open('specialties.txt', 'r', encoding='utf-8') as file:
    data = json.load(file)

# Procesar cada categoría y sus especialidades
for category, details in data.items():
    father_id = details['id']
    specialties = details['specialties']
    
    for specialty in specialties:
        # Crear el diccionario de datos
        payload = {
            "name": specialty,
            "fatherId": father_id,
            "image": "",  # Asumimos que no hay imagen por el momento
            "level": ""  # Asumimos que no hay nivel por el momento
        }
        
        # Enviar la solicitud POST
        response = requests.post(url, json=payload)
        
        # Mostrar mensaje por consola
        if response.status_code == 200 or response.status_code == 201:
            print(f"Especialidad '{specialty}' creada exitosamente.")
        else:
            print(f"Error al crear la especialidad '{specialty}': {response.text}")
