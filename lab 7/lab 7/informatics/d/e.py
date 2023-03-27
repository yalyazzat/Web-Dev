l = list(map(int, input().split()))

for i in range(len(l)-1):
    if ((l[i] > 0 and l[i+1] > 0) or (l[i] < 0 and l[i+1] < 0)):
        print(l[i], end=" ")
        print(l[i+1])
        exit()