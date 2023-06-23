const { runRobot, randomRobot, routeRobot } = require("./runRobotFunctions");
const  VillageState  = require("./villageState");


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

runRobot(VillageState.random(), routeRobot,mailRoute);
