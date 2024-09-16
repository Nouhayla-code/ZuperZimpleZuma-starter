import SimpleLinkedList from "./simplelinkedlist.js";

export { init, getFirstBall, getCannonBall, getNextBall, loadCannon, addRandomBall };

const list = new SimpleLinkedList();

function init() {
  console.log("Model init");
}

function dump() {
  let node = list.head;
  let output = "";
  while (node != null) {
    output += '"' + node.data + node.id + '"';
    output += " -> ";

    node = node.next;
  }
  output += "null";
  console.log(output);
}

// **** WRAPPERS ****
function addRandomBall() {
  list.add(randomBall());
}

function addBall(ball) {
  list.add(ball);
}

function removeBall(index) {
  list.remove(index);
}

function getFirstBall() {
  return list.head;
}

function getNextBall(node) {
  return node.next;
}
function insertBallAfter(data, node) {
  return list.insertAfter(data, node);
}

function numberOfBalls() {
  return list.size();
}

// **** CANNON ****
let cannonBall;

function loadCannon() {
  cannonBall = randomBall();
}

function getCannonBall() {
  return cannonBall;
}

// **** MATCHES ****

function checkMatches(node) {
  const matches = [];

  matches.push(node);
  let lookat = node;

  //find matches før node
  while (lookat != list.head && lookat.prev.data == node.data) {
    matches.push(lookat.prev);
    lookat = lookat.prev;
  }
  lookat = node;
  while (lookat != list.tail && lookat.next.data == node.data) {
    matches.push(lookat.next);
    lookat = lookat.next;
  }

  if (matches.length > 2) {
    for (let index = 0; index < matches.length; index++) {
      const element = array[index];
    }
  }

  return matches;
  //find matches efter node
}

function removeMatches() {
  for( matches )
}

// **** BALLS ****

const balls = ["🔴", "🔵", "🟡", "🟢"];

function randomBall() {
  return balls[Math.floor(Math.random() * balls.length)];
}

function red() {
  return balls[0];
}

function blue() {
  return balls[1];
}

function yellow() {
  return balls[2];
}

function green() {
  return balls[3];
}

//debugger;
