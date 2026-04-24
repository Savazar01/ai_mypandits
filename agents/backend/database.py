import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

# Load env from root
load_dotenv(os.path.join(os.path.dirname(__file__), '../../.env'))

SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL")

# If DATABASE_URL starts with postgresql://, change it to postgresql+psycopg2:// for SQLAlchemy compatibility if needed
# but SQLAlchemy 2.0+ usually handles it or depends on the driver specified.
if SQLALCHEMY_DATABASE_URL and SQLALCHEMY_DATABASE_URL.startswith("postgresql://"):
    SQLALCHEMY_DATABASE_URL = SQLALCHEMY_DATABASE_URL.replace("postgresql://", "postgresql+psycopg2://", 1)

if SQLALCHEMY_DATABASE_URL and "?schema=" in SQLALCHEMY_DATABASE_URL:
    SQLALCHEMY_DATABASE_URL = SQLALCHEMY_DATABASE_URL.split("?schema=")[0]

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
