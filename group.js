let groups = JSON.parse(localStorage.getItem("groups")) || [];

function saveStorage() {
  localStorage.setItem("groups", JSON.stringify(groups));
}

function addGroup(name) {
  name = name.trim();

  if (!name) {
    alert("Group name required");
    return false;
  }

  let exists = groups.find(g => g.name.toLowerCase() === name.toLowerCase());
  if (exists) {
    alert("Group already exists");
    return false;
  }

  groups.push({ name: name });
  saveStorage();
  return true;
}

function updateGroup(id, name) {
  name = name.trim();

  if (!name) {
    alert("Group name required");
    return false;
  }

  let exists = groups.find((g, i) =>
    g.name.toLowerCase() === name.toLowerCase() && i != id
  );

  if (exists) {
    alert("Group already exists");
    return false;
  }

  groups[id].name = name;
  saveStorage();
  return true;
}

function deleteGroup(id) {
  groups.splice(id, 1);
  saveStorage();
}

function getGroups() {
  return groups;
}