n = int(input())

i = 1

while i <= n:
    if i**0.5 == round(i**0.5):
        print(i)
    i += 1