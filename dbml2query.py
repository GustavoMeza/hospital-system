#!/usr/bin/env python

import re
import sys
import numpy as np

dbml_path = sys.argv[1];

with open(dbml_path, 'r') as f:
    dbml = f.read();

dbml_words = dbml.split()

def build_crud(table, columns, dtypes, autoinc):
    cols = [ column for column in columns if column not in autoinc ]
    csv_cols = ','.join(cols)
    csv_qm = ','.join(np.full(len(cols), '?'))
    sql = f'INSERT INTO {table} ({csv_cols}) VALUES ({csv_qm});'
    print(f'sql = "{sql}";')
    vals = ','.join([ f'obj["{col}"]' for col in cols ])
    print(f'vals = "[vals]";')

state=0
for word in dbml_words:
    if state == 0:
        if word == 'Enum': state=10
        elif word == 'Table': state=20
        else: state = -1
    elif state == 10:
        state=11
    elif state == 11:
        if word == '{': state = 12
        else: state = -1
    elif state == 12:
        if word == '}': state = 0
    elif state == 20:
        state=21
        table=word
        columns=[]
        dtypes=[]
        autoinc=[]
    elif state == 21:
        if word == '{': state = 22
        else: state = -1
    elif state == 22:
        if word == '}':
            state = 0
            build_crud(table, columns, dtypes, autoinc)
        elif word[0] == '[': state = 25
        else:
            state = 23
            columns.append(word)
    elif state == 23:
        state = 22
        dtypes.append(word)
    if state == 25:
        if word[len(word)-1] == ']': state=22
