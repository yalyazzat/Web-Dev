def minimum(l):
    m = 100000
    for i in l:
        if i < m:
            m = i
    return m

l = list(map(int, input().split()))
print(minimum(l))