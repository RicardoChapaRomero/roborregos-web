import csv
import json

input_path = 'data/projects.csv'
output_path = '../data/projects.json'
data = {}

data["main"] = []
data["carrousel"] = []
data["other"] = []

with open(input_path, encoding="utf8") as cvsFile:
  csvReader = csv.DictReader(cvsFile)
  for row in csvReader:
    print("--------")
    priority = int(row["priority"])
    if priority == 1000:
      data["other"].append(row)
    else:
      while len(data["carrousel"])-1 < priority:
        data["carrousel"].append([])
      data["carrousel"][priority].append(row)
    print(row)

data["main"] = data["carrousel"].pop(0)

with open(output_path, 'w') as jsonFile:
  jsonFile.write(json.dumps(data, indent=4))