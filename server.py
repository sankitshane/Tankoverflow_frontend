import json
import os
import time
from flask import Flask, Response, request, render_template

app = Flask(__name__, static_url_path='', static_folder='app/dist')
app.add_url_rule('/', 'root', lambda: app.send_static_file('view/index.html'))



if __name__ == '__main__':
    app.run(port=int(os.environ.get("PORT", 8000)), debug=True)
