from audioop import cross
import time, json
import cp
from flask import Flask, request
from flask_cors import CORS, cross_origin

class History:
    def __init__(self, history):
        self.history = history

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
h = History([])

@app.route('/time')
def get_current_time():
    return {'time': time.time()}
# print(get_current_time())

def get_all_questions():
    with open ('challenges.txt') as f:
        data = f.read()
        data_dict = json.loads(data)
    return data_dict
# print(get_all_questions())

def get_selected_questions(q1_num, q2_num):
    all_questions = get_all_questions()
    result = []
    result.append(all_questions[str(q1_num)])
    result.append(all_questions[str(q2_num)])
    return result

def random_question_selector(filtered_questions, history):
    if len(filtered_questions) != 0:
        q1_num = filtered_questions[0]['q1']
        q2_num = filtered_questions[0]['q2']
        history.append(q1_num)
        history.append(q2_num)
    return get_selected_questions(q1_num, q2_num), history

@app.route('/resethistory')
# @cross_origin()
def ResetHistory():
    h.history = []

@app.route('/codingform', methods=['POST'])
@cross_origin()
def CodingForm():
    difficulty = request.json['difficulty']
    company = request.json['company']
    history = h.history
    # history = [1,2,3,7,8,9,13,14,15] #testing
    difficulty_code = cp.get_difficulty_code(difficulty) #todo
    # difficulty_code = cp.get_difficulty_code(['Easy', 'Medium']) #testing
    company_code = cp.get_company_code(company) #todo
    # company_code = cp.get_company_code(['Meta', 'Google']) #testing
    all_avail_questions = cp.get_available_questions(history)
    filtered_questions = []
    if all_avail_questions != None:
        for q in all_avail_questions:
            if q['level'] == difficulty_code and q['company'] == company_code:
                filtered_questions.append(q)
    questions, history = random_question_selector(filtered_questions, history)
    return {'questions': questions}

