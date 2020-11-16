from flask import Flask, jsonify, render_template
# import sqlalchemy stuff
import sqlalchemy
from config import password
import datetime as dt
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import pandas as pd

from sqlalchemy.ext.automap import automap_base
from config import password
from sqlalchemy import create_engine



engine = create_engine(f'postgresql://postgres:{password}@localhost:5432/women_in_power')
Base = automap_base()
Base.prepare(engine, reflect=True)

# @app.route('myroute')
# def whatever():
#     session = Session(engine)
#     results = session.query(graffiti.address).all()
#     return
    


session = Session(engine)

# Create an app
app = Flask(__name__)


#API Page
@app.route("/api")
def api():
    girls_in_power = pd.read_sql_query("select * from girls_in_power", con=engine)
    girls_in_power = girls_in_power.to_dict(orient="record")
    return jsonify(girls_in_power)

@app.route('/')
def index():
    return render_template("index.html")

    # template = env.get_template('index.html')

@app.route('/map2')
def map():
    return render_template("map2.html")

@app.route('/logistic')
def map():
    return render_template("logistic_table.html")
if __name__ == "__main__": 
    app.run(debug= True)