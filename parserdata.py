import csv
with open('data.csv', 'rb') as csvfile:
	spamreader = csv.reader(csvfile, delimiter=',')
	for row in spamreader:
		print "[ {axis:'Location',value:0.%s},{axis:'Design',value:0.%s},{axis:'Tidy up',value:0.%s},{axis:'Technology',value:0.%s},{axis:'Workspace',value:0.%s},{axis:'Landscape',value:0.%s},{axis:'Access',value:0.%s},{axis:'Atention to visit',value:0.%s}]," % (row[1], row[2],row[3],row[4],row[5],row[6],row[7],row[8])
