function generate() {
  const text = document.getElementById('inputText').value;
  const outputEl = document.getElementById('output');
  const match = text.match(/(\d+)\s*-\s*(\d+)/);

  if (!match) {
    outputEl.textContent = 'Tidak ditemukan pola X-Y.';
    return;
  }

  const start = parseInt(match[1]);
  const end = parseInt(match[2]);
  let result = '';

  for (let i = start; i <= end; i++) {
    result += text.replace(match[0], i) + '\n';
  }

  outputEl.textContent = result.trim();
}

function copyToClipboard() {
  const outputText = document.getElementById('output').textContent;
  if (!outputText) return;

  navigator.clipboard.writeText(outputText)
    .then(() => alert('Hasil berhasil disalin!'))
    .catch(err => alert('Gagal menyalin teks: ' + err));
}
