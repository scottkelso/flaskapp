from PIL import Image
import requests
from io import BytesIO

def getImgSize(url):
    response = requests.get(url)
    img = Image.open(BytesIO(response.content))
    width, height = img.size
    return width, height
