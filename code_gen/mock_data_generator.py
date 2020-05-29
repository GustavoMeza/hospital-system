#!/usr/bin/env python

import re
import sys
import numpy as np
import random
import requests
import schema_interpreter

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

[enums, tables] = schema_interpreter.interpret()

for table in tables:
    build_table(table['table'], table['cols'], table['dtypes'])
