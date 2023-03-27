x = int(input())

cnt = 0

for i in range(1, int(x**0.5)):
    if x % i == 0:
        cnt += 1

cnt *= 2

if x**0.5 == round(x**0.5):
    cnt += 1

print(cnt)