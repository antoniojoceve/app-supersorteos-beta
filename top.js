function renderTop(data) {
  const body = document.getElementById("topBody");
  body.innerHTML = "";

  if (!data || !data.length) {
    body.innerHTML = "<tr><td colspan='3'>Sin datos</td></tr>";
    return;
  }

  data
    .sort((a, b) => b.tickets - a.tickets) // ordenar por tickets
    .slice(0, 5) // 🏆 TOP 5
    .forEach((u, i) => {
      const nombreAnonimo = u.nombre.split(" ")[0] + " ⭐";

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="rank">${i + 1}</td>
        <td>${nombreAnonimo}</td>
        <td>${u.tickets}</td>
      `;
      body.appendChild(tr);
    });
}

// 🔁 Auto refresco cada 30 segundos
setInterval(() => location.reload(), 30000);
