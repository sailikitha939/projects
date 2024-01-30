from flask import Flask, jsonify, request
from flask_cors import CORS
from database import get_db_connection

app = Flask(__name__)
CORS(app)

@app.route('/api/destinations')
def get_destinations():
    destination_type = request.args.get('type', '')
    continent = request.args.get('continent', '')
    
    conn = get_db_connection()
    cursor = conn.cursor()

    query = """
    SELECT * FROM destinations
    WHERE Type LIKE ? AND Continent LIKE ?
    """
    cursor.execute(query, ('%' + destination_type + '%', '%' + continent + '%'))

    column_names = [column[0] for column in cursor.description]
    destinations = [dict(zip(column_names, row)) for row in cursor.fetchall()]

    cursor.close()
    conn.close()

    return jsonify(destinations)

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)

