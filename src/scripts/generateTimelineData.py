import csv
import json

input_path = 'data/timeline.csv'
output_path = '../data/timeline.json'
data = {}
data_list = []
years = []

with open(input_path, encoding="utf8") as cvsFile:
  csvReader = csv.DictReader(cvsFile)
  for row in csvReader:
    print("--------")
    data_list.insert(len(data_list),row)
    if row["year"] not in years:
      years.append(row["year"])
    print(data_list)

print(data_list)

data["events"] = data_list
data["years"] = years

with open(output_path, 'w') as jsonFile:
  jsonFile.write(json.dumps(data, indent=4))