import os
from flask import Flask, request, jsonify
from flask_cors import CORS

# --- Application Setup ---
app = Flask(__name__)
# Allow the front-end to communicate with this server
CORS(app, resources={r"/api/*": {"origins": "http://localhost:8080"}})

# --- Placeholders for Future Questions ---
# These variables will hold the text for your 4 specific questions.
QUESTION_1_PLACEHOLDER = "Placeholder for Question 1: What is your GPA?"
QUESTION_2_PLACEHOLDER = "Placeholder for Question 2: How is your stress level (1-5)?"
QUESTION_3_PLACEHOLDER = "Placeholder for Question 3: Is therapy helping you?"
QUESTION_4_PLACEHOLDER = "Placeholder for Question 4: What can we do to help more?"


# --- Core Logic / Data Analysis ---
def perform_analysis(survey_id=None):
    """
    This function simulates the data analysis process.
    Later, it will be updated to analyze a real uploaded file.
    """
    # This data structure matches what the Dashboard.tsx and QuestionAnalyzer.tsx
    # components expect to receive.
    analysis_results = {
        "summary": {
            "totalResponses": 252,
            "surveyTitle": "Student Wellness Survey"
        },
        "questionAnalysis": [
            {"id": 1, "text": QUESTION_1_PLACEHOLDER, "type": "numerical", "category": "Academic Performance", "responses": 247},
            {"id": 2, "text": QUESTION_2_PLACEHOLDER, "type": "scale", "category": "Mental Health", "responses": 251},
            {"id": 3, "text": QUESTION_3_PLACEHOLDER, "type": "categorical", "category": "Treatment Effectiveness", "responses": 189},
            {"id": 4, "text": QUESTION_4_PLACEHOLDER, "type": "text", "category": "Feedback & Suggestions", "responses": 156}
        ],
        "keyMetrics": [
            {"title": "Average GPA", "value": "3.24", "change": "+0.12 from baseline", "trend": "up", "category": "Academic"},
            {"title": "Avg Stress Level", "value": "3.1", "change": "-0.3 improvement", "trend": "down", "category": "Wellness"},
            {"title": "Sleep Hours", "value": "6.8", "change": "+0.5 from baseline", "trend": "up", "category": "Health"},
            {"title": "Therapy Satisfaction", "value": "78%", "change": "+5% improvement", "trend": "up", "category": "Treatment"}
        ],
        "charts": {
            "gpaStressData": [
                {"name": "1.0-2.0", "value": 4.2}, {"name": "2.1-2.5", "value": 3.8},
                {"name": "2.6-3.0", "value": 3.1}, {"name": "3.1-3.5", "value": 2.4},
                {"name": "3.6-4.0", "value": 1.9}
            ],
            "sleepGpaData": [
                {"name": "4 hrs", "value": 2.1}, {"name": "5 hrs", "value": 2.6},
                {"name": "6 hrs", "value": 3.2}, {"name": "7 hrs", "value": 3.7},
                {"name": "8 hrs", "value": 3.8}, {"name": "9+ hrs", "value": 3.5}
            ],
            "therapyData": [
                {"name": "Very Helpful", "value": 45}, {"name": "Somewhat Helpful", "value": 32},
                {"name": "Neutral", "value": 15}, {"name": "Not Helpful", "value": 8}
            ]
        },
        "insights": [
            {"title": "Detected: Strong Correlation", "text": "Higher GPA students report significantly lower stress levels."},
            {"title": "Detected: Sleep Sweet Spot", "text": "7-8 hours of sleep shows optimal GPA performance."},
        ]
    }
    return analysis_results


# --- API Routes (Endpoints) ---

@app.route("/api/status")
def status():
    """A simple endpoint to check if the server is running."""
    return jsonify({"status": "Backend is running!"})


@app.route("/api/upload", methods=['POST'])
def upload_file():
    """Endpoint to handle file uploads."""
    # File handling logic will go here in a future step.
    # For now, it just simulates a success and returns a static ID.
    return jsonify({
        "message": "File processed successfully.",
        "surveyId": "student-wellness-survey"
    }), 200


@app.route("/api/dashboard-data/<survey_id>")
def get_dashboard_data(survey_id):
    """Endpoint to provide data to the Dashboard component."""
    # We pass the survey_id to the analysis function.
    # This allows us to fetch different data for different surveys in the future.
    analysis_data = perform_analysis(survey_id)
    return jsonify(analysis_data)


# --- Run the Server ---
if __name__ == "__main__":
    app.run(debug=True, port=5000)