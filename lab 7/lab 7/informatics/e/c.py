def xor(l):
    return l[0]^l[1]

l = list(map(int, input().split()))

print(xor(l))