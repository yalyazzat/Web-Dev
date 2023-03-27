l = list(map(int, input().split()))

# m = -100000000
# pos = 0

# for i in range(len(l)):
#     if l[i] > m:
#         m = l[i]
#         pos = i

# print(m, pos)

max_value = max(l)
max_index = l.index(max_value)

print(max_value, max_index)