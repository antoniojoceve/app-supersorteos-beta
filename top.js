window.renderTop = renderTop;
console.log("renderTop cargado");

function renderTop(data) {
  const body = document.getElementById("topBody");
  body.innerHTML = "";

  const lista = Array.isArray(data) ? data : data.usuarios;

  if (!lista || !lista.length) {
    body.innerHTML = "<tr><td colspan='3'>Sin datos</td></tr>";
    return;
  }

  lista
    .sort((a, b) => b.tickets - a.tickets)
    .slice(0, 5)
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


// 🔁 Auto refresco cada 30s
setInterval(() => location.reload(), 30000);