n = input()
s = 0

for i in range(len(n)-1, -1, -1):
    s += (2**(len(n)-i-1) * int(n[i]))

print(s)