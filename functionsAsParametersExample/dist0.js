const route = [
  { x: 0, y: 0 },
  { x: 10, y: 5 },
  { x: 4, y: 3 },
  { x: 1, y: 1 },
  { x: 7, y: 2 },
];

function calcRouteDist(pointList) {
  let routeDist = 0;
  for (let i = 1; i < pointList.length; i++) {
    const pointA = pointList[i - 1];
    const pointB = pointList[i];
    const diffX = Math.abs(pointA.x - pointB.x);
    const diffY = Math.abs(pointA.y - pointB.y);
    routeDist += diffX + diffY;
  }
  return routeDist;
}

const routeDist = calcRouteDist(route);
console.log(routeDist);
