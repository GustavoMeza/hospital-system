#!/usr/bin/env python

import re
import sys
import numpy as np
import random
import requests
import schema_interpreter

template_path = sys.argv[1]
with open(template_path, 'r') as f:
    template = f.read()

output_dir = sys.argv[2]

def to_camel(snake_str):
    components = snake_str.split('_')
    return components[0] + ''.join(x.title() for x in components[1:])

def parse_template(table, cols, dtypes):
    trivial_cols = ['id']
    cols = [ col for col in cols if col not in trivial_cols]
    table_camel = to_camel(table)
    parsed = template
    parsed = parsed.replace('$table', table)
    parsed = parsed.replace('^table', table_camel)

    def foreach_col(match):
        inner = match.group(1)
        parsed_cols = []
        for col in cols:
            col_camel = to_camel(col)
            parsed_col = inner
            parsed_col = parsed_col.replace('$name', col)
            parsed_col = parsed_col.replace('^name', col_camel)
            parsed_cols.append(parsed_col)
        ans = ', '.join(parsed_cols)
        return ans

    parsed = re.sub('@col{(.*?)}', foreach_col, parsed)
    output_path = f"{output_dir}/{table_camel}.js"
    with open(output_path,'w') as f:
        f.write(parsed)
    

[enums, tables] = schema_interpreter.interpret()

for table in tables:
    parse_template(table['table'], table['cols'], table['dtypes'])
