l = list(map(int, input().split()))

for i in range(len(l)-1):
    if l[i+1] > l[i]:
        print(l[i+1], end=" ")