const { mailRoute } = require("./mailRoute");
const {
  runRobot,
  randomRobot,
  routeRobot,
  goalOrientedRobot,
  compareRobots,
} = require("./runRobotFunctions");
const VillageState = require("./villageState");

// let first = new VillageState(
//     "Post Office",
//     [{place: "Post Office", address: "Alice's House"}]
//     );
//     let next = first.move("Alice's House");
//     console.log(next.place);
//     // → Alice's House
//     console.log(next.parcels);
//     // → []
//     console.log(first.place);
//     // → Post Office

// runRobot(VillageState.random(), randomRobot);
let initialVIllageState = VillageState.random(100);
let robots = [
  { name: " randomRobot", robot: randomRobot },
  { name: " goalOrientedRobot", robot: goalOrientedRobot },
  { name: " routeRobot", robot: routeRobot },
];

// runRobot(VillageState.random(), goalOrientedRobot,mailRoute);
compareRobots(initialVIllageState, robots, mailRoute);
