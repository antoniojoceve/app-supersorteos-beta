window.onload = () => {
  const params = new URLSearchParams(window.location.search);
  const pdfId = params.get("pdfId");


  console.log("PDF URL:", pdfUrl);

  const btn = document.getElementById("btnPdf");

  if (!btn) {
    console.error("❌ Botón btnPdf no existe en el DOM");
    return;
  }

  if (!pdfId) {
  console.warn("⚠️ No llegó el ID del PDF");
  return;
}


  btn.style.display = "inline-block";

  btn.onclick = () => {
  const downloadUrl =
    "https://script.google.com/macros/s/AKfycbzAyxS9xOHd0xA4ks5rN3u9Ka_vDej4V79l5zP7e2xQL1mVVtGz5ph_8QZKiEfHbG7M/exec?download=" +
    encodeURIComponent(pdfId);

  window.location.href = downloadUrl;
};

};
