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

output_path = sys.argv[2]

def to_camel(snake_str):
    components = snake_str.split('_')
    return components[0] + ''.join(x.title() for x in components[1:])

def parse_template(tables):
    def foreach_table(match):
        inner = match.group(1)
        parsed_tables = []
        for table in tables:
            name = table['table']
            name_camel = to_camel(name)
            parsed_table = inner
            parsed_table = parsed_table.replace('^name', name_camel)
            parsed_tables.append(parsed_table)
        ans = '\n'.join(parsed_tables)
        return ans
    parsed = re.sub('@table{(.*?)}', foreach_table, template)
    
    with open(output_path,'w') as f:
        f.write(parsed)
    

[enums, tables] = schema_interpreter.interpret()
parse_template(tables)
