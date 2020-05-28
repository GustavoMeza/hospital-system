#!/usr/bin/env python

import re
import sys
import numpy as np
import random
import requests

word_site = 'http://www.desiquintans.com/downloads/nounlist/nounlist.txt'

response = requests.get(word_site)
WORDS = response.text.split()

def random_date():
    year = random.randrange(1900, 2019)
    month = random.randrange(1,12)
    day = random.randrange(1,28)
    return "{0:04d}-{1:02d}-{2:02d}".format(year, month, day)

def random_time():
    hour = random.randrange(24)
    minute = random.randrange(60)
    seconds = random.randrange(60)
    return "{0:02d}-{1:02d}-{2:02d}".format(hour, minute, seconds)

def random_datetime():
    return random_date()+" "+random_time()

dbml_path = sys.argv[1];

with open(dbml_path, 'r') as f:
    dbml = f.read();

dbml_words = dbml.split()

enums = {}
def build_enum(enum, vals):
    enums[enum] = vals

def build_table(table, cols, dtypes):
    csv_cols = ','.join(cols)
    for i in range(10):
        vals = []
        for dtype in dtypes:
            if dtype == 'varchar':
                vals.append('"'+random.choice(WORDS)+'"')
            elif dtype == 'int':
                vals.append(str(random.randrange(1,1000000)))
            elif dtype == 'date':
                vals.append('"'+random_date()+'"')
            elif dtype == 'datetime':
                vals.append('"'+random_datetime()+'"')
            elif dtype in enums:
                vals.append('"'+random.choice(enums[dtype])+'"')
            elif 'ref' in dtype:
                payload = dtype.split('.')
                vals.append('(SELECT '+payload[2]+' FROM '+payload[1]+' ORDER BY RAND() LIMIT 1)')
            else:
                print("Error: "+dtype+" not found")
        csv_vals = ','.join(vals)
        sql = f'INSERT INTO {table} ({csv_cols}) VALUES ({csv_vals});'
        print(sql+"\n")
    print("\n\n")

state=0
for word in dbml_words:
    if state == 0:
        if word == 'Enum': state=10
        elif word == 'Table': state=20
        else: state = -1
    elif state == 10:
        state=11
        enum=word
        vals=[]
    elif state == 11:
        if word == '{': state = 12
        else: state = -1
    elif state == 12:
        if word == '}':
            state = 0
            build_enum(enum, vals)
        else: vals.append(word)
    elif state == 20:
        state=21
        table=word
        columns=[]
        dtypes=[]
    elif state == 21:
        if word == '{': state = 22
        else: state = -1
    elif state == 22:
        if word == '}':
            state = 0
            build_table(table, columns, dtypes)
        elif word[0] == '[': state = 25
        else:
            state = 23
            columns.append(word)
    elif state == 23:
        state = 22
        dtypes.append(word)
    if state == 25:
        if word[len(word)-1] == ']':
            if '.' in word:
                dtypes[-1]='ref.'+word[:-1]
            state=22
