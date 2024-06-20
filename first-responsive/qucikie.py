mylist = ["Ved", "_v", "#Gerund", "Lor", "Gen", "#flora"]

char = "#"
# Removing characters with # in the start

for items in mylist:
    if items[0] == "#":
        mylist.remove(items)

print(mylist)