#CDSx_questions.json testing module
import json

test = [1,2,3]

with open(r"cdsx_questions.json", 'r', encoding='utf8') as q:
    questions = json.load(q)


q.close()