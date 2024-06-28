from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import datetime
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load the trained model
model = joblib.load('period_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    start_date = pd.to_datetime(data['start_date'], format='%Y-%m-%d')
    end_date = pd.to_datetime(data['end_date'], format='%Y-%m-%d')
    cycle_length = int(data['cycle_length'])
    
    prediction_input = pd.DataFrame({'cycle_length': [cycle_length]})
    next_period_length = model.predict(prediction_input)[0]
    next_period_date = end_date + datetime.timedelta(days=int(next_period_length))
    
    return jsonify({'next_period': next_period_date.strftime('%Y-%m-%d')})

if __name__ == '__main__':
    app.run(debug=True)
