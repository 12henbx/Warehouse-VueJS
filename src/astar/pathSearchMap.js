var graphWithWeight = new Graph([
    [1,1,2,30],
    [0,4,1.3,0],
    [0,0,5,1]
]);
var startWithWeight = graphWithWeight.grid[0][0];
var endWithWeight = graphWithWeight.grid[1][2];
var resultWithWeight = astar.search(graphWithWeight, startWithWeight, endWithWeight);