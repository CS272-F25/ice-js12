const route = [
  { x: 0, y: 0 },
  { x: 10, y: 5 },
  { x: 4, y: 3 },
  { x: 1, y: 1 },
  { x: 7, y: 2 },
];

function calcManhattanDist(pointA, pointB) {
  const diffX = Math.abs(pointA.x - pointB.x);
  const diffY = Math.abs(pointA.y - pointB.y);
  return diffX + diffY;
}

function calcEuclideanDist(pointA, pointB) {
  const diffXSquared = (pointA.x - pointB.x) ** 2;
  const diffYSquared = (pointA.y - pointB.y) ** 2;
  return Math.sqrt(diffXSquared + diffYSquared);
}

function calcHaversineDist(pointA, pointB) {
  // do haversine calculation...
}

function calcRouteDist(pointList, distanceFunc) {
  let routeDist = 0;
  for (let i = 1; i < pointList.length; i++) {
    const pointA = pointList[i - 1];
    const pointB = pointList[i];
    routeDist += distanceFunc(pointA, pointB);
  }
  return routeDist;
}

const routeDist = calcRouteDist(route, calcManhattanDist);
console.log(routeDist);
