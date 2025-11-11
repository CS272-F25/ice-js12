const route = [
  { x: 0, y: 0 },
  { x: 10, y: 5 },
  { x: 4, y: 3 },
  { x: 1, y: 1 },
  { x: 7, y: 2 },
];

function calcRouteDist(pointList, distanceFormula) {
  let routeDist = 0;
  for (let i = 1; i < pointList.length; i++) {
    const pointA = pointList[i - 1];
    const pointB = pointList[i];
    if (distanceFormula === "manhattan") {
      const diffX = Math.abs(pointA.x - pointB.x);
      const diffY = Math.abs(pointA.y - pointB.y);
      routeDist += diffX + diffY;
    } else if (distanceFormula === "euclidean") {
      const diffXSquared = (pointA.x - pointB.x) ** 2;
      const diffYSquared = (pointA.y - pointB.y) ** 2;
      routeDist += Math.sqrt(diffXSquared + diffYSquared);
    } else if (distanceFormula === "haversine") {
      // do haversine calculation...
    }
  }
  return routeDist;
}

const routeDist = calcRouteDist(route, "manhattan");
console.log(routeDist);
