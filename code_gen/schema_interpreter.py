def interpret():
    dbml_path = 'schema.dbml';
    
    with open(dbml_path, 'r') as f:
        dbml = f.read();
    
    enums = {}
    tables = []
    state=0
    for word in dbml.split():
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
                enums[enum]=vals
            else: vals.append(word)
        elif state == 20:
            state=21
            table=word
            cols=[]
            dtypes=[]
        elif state == 21:
            if word == '{': state = 22
            else: state = -1
        elif state == 22:
            if word == '}':
                state = 0
                tables.append({
                    "table": table,
                    "cols": cols,
                    "dtypes": dtypes,
                })
            elif word[0] == '[': state = 25
            else:
                state = 23
                cols.append(word)
        elif state == 23:
            state = 22
            dtypes.append(word)
        if state == 25:
            if word[len(word)-1] == ']':
                if '.' in word:
                    dtypes[-1]='ref.'+word[:-1]
                state=22
    
    return enums, tables
