import os
from dotenv import load_dotenv

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

HINDSIGHT_API_KEY = os.getenv("HINDSIGHT_API_KEY")
HINDSIGHT_API_URL = os.getenv(
    "HINDSIGHT_API_URL",
    "https://api.hindsight.vectorize.io"
)
HINDSIGHT_BANK_ID = os.getenv(
    "HINDSIGHT_BANK_ID",
    "bidmemory"
)

if not GROQ_API_KEY:
    raise ValueError("GROQ_API_KEY is not set")

if not HINDSIGHT_API_KEY:
    raise ValueError("HINDSIGHT_API_KEY is not set")