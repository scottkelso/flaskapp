#!flask/bin/python
from flask import Flask
from flask import request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return request.args.get('input') + " something else"

@app.route('/healthcheck')
def healthcheck():
    return "I'm ok!"

if __name__ == '__main__':
    app.run(debug=True)
