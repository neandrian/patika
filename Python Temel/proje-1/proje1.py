# flatten function
def flatten(x, arr = []):
  for i in x:
    if isinstance(i, list):
      flatten(i, arr)
    else:
      arr.append(i)
  return arr

l = [[1,'a',['cat'],2],[[[3]],'dog'],4,5]

print(flatten(l))

# reverse function
def reverseList(x):
 x = x[::-1]
 x = [i[::-1] for i in x]
 return x

l1=[[1, 2], [3, 4], [5, 6, 7]]
print(reverseList(l1))