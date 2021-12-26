const str1 = "mohamed@chaabeni-ahmed@salhi-rida@melki";

function FormatToArray(obj) {
  var arr = [];

  obj.split("-").map((obj) => {
    arr.push(obj);
  });

  return arr.map((el) => {
    return { name: el.split("@")[0], lastName: el.split("@")[1] };
  });
}

// console.log(FormatToArray(str1))

const list = [
  { name: "mohamed", note: undefined },
  { name: "safe", note: 7 },
  { name: "omar", note: 13 },
  { name: "sara", note: 18 },
];

function FormatToArray(tab) {
  return tab.map((list) => {
    return list.note < 10
      ? { name: list.name, note: list.note, mention: "passable" }
      : { name: list.name, note: list.note, mention: "bien" };
  });
}

// console.log(FormatToArray(list))

const users = [
  { name: "monjiya", comment: "j'aime ce poste <3" },
  { name: "monya", comment: "le poste est null :( " },
  { name: "carlos", comment: "salut l'algérie" },
];

function MoodDetect(list) {
  return list.map((t) => {
   
    if (t.comment.includes("<3")) {
      return { name: t.name, etat: "heureux" };
    } else if (t.comment.includes(":(")) {
      // includes traja3li boolean na3mel beha seach
      return { name: t.name, etat: "triste" };
    } else {
      return { name: t.name, etat: "neutre" };
    }

  });
}

console.log(MoodDetect(users));

// console.log(users[0].concat);