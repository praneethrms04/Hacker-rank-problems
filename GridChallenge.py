def gridChallenge(grid):
    for i in range(len(grid[0])):
        for j in range(len(grid)-1):
            if ord(grid[j][i]) > ord(grid[j+1][i]):
                return "NO"
    return "YES"        
        
print(gridChallenge(["ebacd", "fghij", "olmkn", "trpqs", "xywuv"]))
        

