from constraint import *
from itertools import combinations, product
import json

def get_all_questions():
    with open ('challenges.txt') as f:
        data = f.read()
        data_dict = json.loads(data)
    return data_dict

#input is array e.g. ['Easy', 'Medium']
def get_difficulty_code(difficulty):
    d_code = None
    easy = 0
    med = 0
    hard = 0
    for level in difficulty:
        level = level.lower()
        if level == 'easy':
            easy += 1
        elif level == 'medium':
            med += 1
        elif level == 'hard':
            hard += 1
    
    if easy == 1 and med == 1 and hard == 0:
        d_code = 1
    elif easy == 1 and med == 0 and hard == 1:
        d_code = 2
    elif easy == 0 and med == 1 and hard == 1:
        d_code = 3

    return d_code

#input is array e.g. ['Meta', 'Google']
def get_company_code(company):
    c_code = None
    meta = 0
    amazon = 0
    google = 0
    for choice in company:
        if choice == 'Meta':
            meta += 1
        elif choice == 'Amazon':
            amazon += 1
        elif choice == 'Google':
            google += 1
    
    if meta == 1 and amazon == 0 and google == 0: #meta only
        c_code = 1
    elif meta == 0 and amazon == 1 and google == 0: #amazon only
        c_code = 2
    elif meta == 0 and amazon == 0 and google == 1: #google only
        c_code = 3
    elif meta == 1 and amazon == 1 and google == 0: #meta + amazon
        c_code = 4
    elif meta == 1 and amazon == 0 and google == 1: #meta + google
        c_code = 5
    elif meta == 0 and amazon == 1 and google == 1: #amazon + google
        c_code = 6

    return c_code

def get_available_questions(history):
    problem = Problem()
    problem.addVariable('q1', range(1,19))
    problem.addVariable('q2', range(1,19))
    #1 = E and M; 2 = E and H; 3 = M & H
    problem.addVariable('level', range(1,4)) 
    #1 = Meta only; #2 = Amazon only; #3 = Google only; #4 = Meta & Amazon; #5 = Meta & Google; #6 = Amazon & Google
    problem.addVariable('company', range(1,7)) 
    
    def difficulty(q1, q2, level, company):
        if company == 1:
            if q1 % 3 == 1 and q2 % 3 == 1: #questions from Meta
                if level == 1:
                    if q1 <= 6 and q2 <= 12 and q2 >= 7: #easy and medium
                        if q1 not in history and q2 not in history:
                            return True
                elif level == 2:
                    if q1 <= 6 and q2 <= 18 and q2 >= 13: #easy and hard
                        if q1 not in history and q2 not in history:
                            return True
                elif level == 3:
                    if q1 <= 12 and q1 >= 7 and q2 >= 13: #medium and hard
                        if q1 not in history and q2 not in history:
                            return True
        elif company == 2:
            if q1 % 3 == 2 and q2 % 3 == 2: #questions from Amazon
                if level == 1:
                    if q1 <= 6 and q2 <= 12 and q2 >= 7: #easy and medium
                        if q1 not in history and q2 not in history:
                            return True
                elif level == 2:
                    if q1 <= 6 and q2 <= 18 and q2 >= 13: #easy and hard
                        if q1 not in history and q2 not in history:
                            return True
                elif level == 3:
                    if q1 <= 12 and q1 >= 7 and q2 >= 13: #medium and hard
                        if q1 not in history and q2 not in history:
                            return True
        elif company == 3:
            if q1 % 3 == 0 and q2 % 3 == 0: #questions from Google
                if level == 1:
                    if q1 <= 6 and q2 <= 12 and q2 >= 7: #easy and medium
                        if q1 not in history and q2 not in history:
                            return True
                elif level == 2:
                    if q1 <= 6 and q2 <= 18 and q2 >= 13: #easy and hard
                        if q1 not in history and q2 not in history:
                            return True
                elif level == 3:
                    if q1 <= 12 and q1 >= 7 and q2 >= 13: #medium and hard
                        if q1 not in history and q2 not in history:
                            return True
        elif company == 4:
            if q1 % 3 == 1 and q2 % 3 == 2 or q1 % 3 == 2 and q2 % 3 == 1: #uestions from Meta & Amazon
                if level == 1:
                    if q1 <= 6 and q2 <= 12 and q2 >= 7: #easy and medium
                        if q1 not in history and q2 not in history:
                            return True
                elif level == 2:
                    if q1 <= 6 and q2 <= 18 and q2 >= 13: #easy and hard
                        if q1 not in history and q2 not in history:
                            return True
                elif level == 3:
                    if q1 <= 12 and q1 >= 7 and q2 >= 13: #medium and hard
                        if q1 not in history and q2 not in history:
                            return True
        elif company == 5:
            if q1 % 3 == 1 and q2 % 3 == 0 or q1 % 3 == 0 and q2 % 3 == 1: #questions from Meta & Google
                if level == 1:
                    if q1 <= 6 and q2 <= 12 and q2 >= 7: #easy and medium
                        if q1 not in history and q2 not in history:
                            return True
                elif level == 2:
                    if q1 <= 6 and q2 <= 18 and q2 >= 13: #easy and hard
                        if q1 not in history and q2 not in history:
                            return True
                elif level == 3:
                    if q1 <= 12 and q1 >= 7 and q2 >= 13: #medium and hard
                        if q1 not in history and q2 not in history:
                            return True
        elif company == 6:
            if q1 % 3 == 2 and q2 % 3 == 0 or q1 % 3 == 0 and q2 % 3 == 2: #questions from Amazon & Google
                if level == 1:
                    if q1 <= 6 and q2 <= 12 and q2 >= 7: #easy and medium
                        if q1 not in history and q2 not in history:
                            return True
                elif level == 2:
                    if q1 <= 6 and q2 <= 18 and q2 >= 13: #easy and hard
                        if q1 not in history and q2 not in history:
                            return True
                elif level == 3:
                    if q1 <= 12 and q1 >= 7 and q2 >= 13: #medium and hard
                        if q1 not in history and q2 not in history:
                            return True

    problem.addConstraint(difficulty, ['q1', 'q2', 'level', 'company'])
    solutions = problem.getSolutions()
    return solutions