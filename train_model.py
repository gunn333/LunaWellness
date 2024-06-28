import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
import joblib
import datetime

# Load the dataset
df = pd.read_csv('period_dataset.csv')

# Convert date columns to datetime with the correct format
df['start_date'] = pd.to_datetime(df['start_date'], format='%d-%m-%Y')
df['end_date'] = pd.to_datetime(df['end_date'], format='%d-%m-%Y')
df['next_period '] = pd.to_datetime(df['next_period '], format='%d-%m-%Y')

# Calculate the number of days between periods
df['cycle_length'] = (df['end_date'] - df['start_date']).dt.days
df['next_period_length'] = (df['next_period '] - df['end_date']).dt.days

# Features and target
X = df[['cycle_length']]
y = df['next_period_length']

# Split the data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Save the model
joblib.dump(model, 'period_model.pkl')

# Predict function
def predict_next_period(start_date, end_date, cycle_length):
    # Load the model
    model = joblib.load('period_model.pkl')
    
    # Calculate the number of days between the start and end dates
    start_date = pd.to_datetime(start_date, format='%d-%m-%Y')
    end_date = pd.to_datetime(end_date, format='%d-%m-%Y')
    cycle_length = (end_date - start_date).days
    
    # Create a DataFrame for prediction
    prediction_input = pd.DataFrame({'cycle_length': [cycle_length]})
    
    # Predict the next period length
    next_period_length = model.predict(prediction_input)[0]
    
    # Calculate the next period date
    next_period_date = end_date + datetime.timedelta(days=next_period_length)
    return next_period_date

# Example usage
start_date = '01-01-2024'
end_date = '07-01-2024'
cycle_length = 28

predicted_next_period = predict_next_period(start_date, end_date, cycle_length)
print(f"The predicted next period date is: {predicted_next_period.strftime('%Y-%m-%d')}")
