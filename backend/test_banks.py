import os
import requests
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("HINDSIGHT_API_KEY")
base_url = os.getenv(
    "HINDSIGHT_API_URL",
    "https://api.hindsight.vectorize.io"
)

response = requests.get(
    f"{base_url}/v1/default/banks",
    headers={
        "Authorization": f"Bearer {api_key}"
    }
)

print("Status:", response.status_code)

if response.ok:
    data = response.json()

    print("\n=== YOUR HINDSIGHT BANKS ===\n")

    for bank in data.get("banks", []):
        print("Name:", bank.get("name"))
        print("Bank ID:", bank.get("bank_id"))
        print("Memories:", bank.get("fact_count"))
        print("-----------------------------")
else:
    print(response.text)