#!flask/bin/python
from flask import Flask
from flask import request
from flask_cors import CORS

import imager as im

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return request.args.get('input') + " something else"

@app.route('/healthcheck')
def healthcheck():
    return "I'm ok!"

@app.route('/imgSize/')
def imgSize():
    url = request.args.get('input')
    try:
        width, height = im.getImgSize(url)
        return "Width: {}, Height: {}".format(width, height)
    except:
        return "An error occured!"


if __name__ == '__main__':
    app.run(debug=True)
