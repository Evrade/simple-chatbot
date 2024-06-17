import os

class Config:
    SECRET_KEY = 'a_very_secret_key'
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:''@localhost/flask_blog'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
