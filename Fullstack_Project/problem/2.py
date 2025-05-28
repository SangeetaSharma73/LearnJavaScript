# // Given an array of mixed-case strings, write a function that returns a new array where:
# // Strings with more uppercase letters are converted to lowercase.
# // Strings with more lowercase letters are converted to uppercase.
# // If both cases are equal, leave the string unchanged.
# // Example:
# // Input:
# // ["HeLLo", "world", "PYTHON", "JaVaScRiPt"]

# // Output:
# // ["hello", "WORLD", "python", "JaVaScRiPt"]


arr = ["HeLLo", "world", "PYTHON", "JaVaScRiPt"]

def count(str):
    s="abcdefghijklmnopqrstuvwxz"
    c=0
    for i in range(len(str)):
        if str[i] in s:
            c+=1
    return c
        
ans=[]      
    
for i in range(len(arr)):
    countSmall= count(arr[i])
    if (countSmall==len(arr[i])-countSmall):
        ans.append(arr[i])
    elif (countSmall<len(arr[i])-countSmall):
        ans.append(arr[i].lower())
    else:
        ans.append(arr[i].upper())
    
print(ans)