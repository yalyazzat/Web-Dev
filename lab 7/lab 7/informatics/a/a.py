a = int(input())
b = int(input())

if a < 0 or b < 0:
    print("The length of sides can`t be negative")
else:
    print((a**2 + b**2)**0.5)