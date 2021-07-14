import csv
import json

input_path = 'data/members.csv'
output_path = '../data/members.json'
data = {}
data_list = []

with open(input_path, encoding="utf8") as cvsFile:
  csvReader = csv.DictReader(cvsFile)
  for row in csvReader:
    if row["role"] != "":
      print("--------")
      data_list.insert(len(data_list),row)
      print(data_list)

print(data_list)

data["members"] = data_list

with open(output_path, 'w') as jsonFile:
  jsonFile.write(json.dumps(data, indent=4))