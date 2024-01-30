import pyodbc

def get_db_connection():
    connection = pyodbc.connect(
        driver='{SQL Server}',  # Use the appropriate driver for your SQL Server version
        server='DESKTOP-JEBPP6G\SQLEXPRESS',     # Replace with your SQL Server hostname or IP address
        database='vacation',  # Replace with your database name
    )
    return connection


