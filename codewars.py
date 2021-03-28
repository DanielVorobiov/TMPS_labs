
from abc import ABC, abstractmethod
root = 'Desktop'

files = [
    'meetings/2021-01-12/notes.txt',
    'meetings/2020_calendar.xlsx',
    'meetings/2021-01-12/report.pdf',
    'misc/photos/forest_20130430.jpg',
    'misc/photos/sunset_20130412.jpg',
    'scripts/tree.py',
    'meetings/2021-01-24/report.pdf',
]


class Component:
    def __init__(self, name):
        self.name = name

    def display(self, level=0):
        pass


class Folder(Component):
    def __init__(self, name):
        self.components = []
        super().__init__(name)

    def display(self, level):
        spaces = "| "
        print(spaces * (level-1) + '├──' + self.name)
        for component in self.components:
            component.display(level + 1)

    def addComponent(self, component):
        if component not in self.components:
            self.components.append(component)


class File(Component):
    def __init__(self, name):
        super().__init__(name)

    def display(self, level):

        spaces = " "
        print("|" + " |" * (level-2) + spaces * (level-1) + '├──' + self.name)


paths = []

for file in files:
    elements = file.split("/")
    paths.append(elements)


pathsDictionary = {}
pathsNamesDirectory = {}

unique = []
for path in paths:
    for element in path:
        if element not in unique:
            unique.append(element)

temp = unique


def createComponent(path):
    if "." in path:
        return(File(path))
    else:
        return(Folder(path))


for i, unique in zip(range(1, len(unique)+1), unique):
    pathsDictionary[str(i)] = createComponent(unique)
    pathsNamesDirectory[str(i)] = pathsDictionary[str(i)].name


for path in paths:
    if len(path) > 2:
        for key in pathsNamesDirectory:
            if path[-3] == pathsNamesDirectory[key]:
                for key1 in pathsNamesDirectory:
                    if path[-2] == pathsNamesDirectory[key1]:
                        pathsDictionary[key].addComponent(
                            pathsDictionary[key1])
                        for key2 in pathsNamesDirectory:
                            if path[-1] == pathsNamesDirectory[key2]:
                                pathsDictionary[key1].addComponent(
                                    pathsDictionary[key2])

    else:
        for key in pathsNamesDirectory:
            if path[-2] == pathsNamesDirectory[key]:
                for key1 in pathsNamesDirectory:
                    if path[-1] == pathsNamesDirectory[key1]:
                        pathsDictionary[key].addComponent(
                            pathsDictionary[key1])


print(root)
pathsDictionary["1"].display(1)
pathsDictionary["6"].display(1)
pathsDictionary["10"].display(1)

# pathsDictionary["1"][-3].display(1)
# pathsDictionary["3"][-3].display(1)


# folder1_1 = Folder("meetings")
# folder1_2 = Folder("misc")
# folder1_3 = Folder("scripts")

# folder2_1 = Folder("2021-01-12")
# folder2_2 = Folder("2021-01-14")
# file2_1 = File("2020_calendar.xlsx")

# file2_5 = File("notes.txt")
# file2_6 = File("report.pdf")
# folder2_1.addComponent(file2_5)
# folder2_1.addComponent(file2_6)
# folder2_2.addComponent(file2_6)

# folder2_3 = Folder("photos")

# folder1_1.addComponent(folder2_1)
# folder1_1.addComponent(folder2_2)
# folder1_1.addComponent(file2_1)

# folder1_2.addComponent(folder2_3)

# file2_2 = File("sunset_20130412.jpg")
# file2_3 = File("forest_20130430.jpg")

# folder2_3.addComponent(file2_2)
# folder2_3.addComponent(file2_3)

# file2_4 = File("tree.py")

# folder1_3.addComponent(file2_4)

# print(root)
# folder1_1.display(1)
# folder1_2.display(1)
# folder1_3.display(1)
