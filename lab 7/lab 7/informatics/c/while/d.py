n = int(input())

i = 0

while 2**i <= n:
    if 2**i == n:
        print("YES")
        exit()
    i += 1
print("NO")