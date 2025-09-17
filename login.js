import requests
from datetime import datetime

# Identifiants
USERNAME = "mwaghef"
PASSWORD = "mwaghef"

# URL
LOGIN_URL = "http://extranet.guinot.asso.fr:30001/authentification/sauve"
PRESENCE_URL = "http://extranet.guinot.asso.fr:30001/assiduite"

# Session
session = requests.Session()

# Connexion
login_data = {"login": USERNAME, "mot_de_passe": PASSWORD}
session.post(LOGIN_URL, data=login_data)

# Heure actuelle
now = datetime.now()
hour = now.hour

# Déterminer la case à cocher
if hour == 9:
    case = "9:00"
elif hour == 14:
    case = "14:00"
else:
    case = None

if case:
    # Cocher la case
    data = {case: "on"}
    session.post(PRESENCE_URL, data=data)
    print(f"Présence cochée pour {case}")
else:
    print("Pas l'heure de pointer")
