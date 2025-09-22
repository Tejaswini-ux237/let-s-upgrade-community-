// Fetch and display clubs
async function fetchClubs() {
  const response = await fetch("http://localhost:3000/api/clubs");
  const clubs = await response.json();
  const list = document.getElementById("club-list");
  list.innerHTML = "";
  clubs.forEach(club => {
    const li = document.createElement("li");
    li.textContent = `${club.name}: ${club.description}`;
    list.appendChild(li);
  });
}

document.getElementById("club-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("club-name").value;
  const description = document.getElementById("club-description").value;

  await fetch("http://localhost:3000/api/clubs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, description })
  });

  document.getElementById("club-name").value = "";
  document.getElementById("club-description").value = "";
  fetchClubs();
});

// Load clubs on page load
fetchClubs();
