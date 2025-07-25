// Mapping คีย์บอร์ดจาก EN → TH
const keyboardMap = {
    '1': 'ๅ', '!': '+', '2': '/', '@': '๑', '3': '-', '#': '๒', '4': 'ภ', '$': '๓',
    '5': 'ถ', '%': '๔', '6': 'ุ', '^': 'ู', '7': 'ึ', '&': '฿', '8': 'ค', '*': '๕',
    '9': 'ต', '(': '๖', '0': 'จ', ')': '๗', '-': 'ข', '_': '๘', '=': 'ช', '+': '๙',
    'q': 'ๆ', 'Q': '๐', 'w': 'ไ', 'W': '"', 'e': 'ำ', 'E': 'ฎ', 'r': 'พ', 'R': 'ฑ',
    't': 'ะ', 'T': 'ธ', 'y': 'ั', 'Y': 'ํ', 'u': 'ี', 'U': '๊', 'i': 'ร', 'I': 'ณ',
    'o': 'น', 'O': 'ฯ', 'p': 'ย', 'P': 'ญ', '[': 'บ', '{': 'ฐ', ']': 'ล', '}': ',',
    '\\': 'ฃ', '|': 'ฅ', 'a': 'ฟ', 'A': 'ฤ', 's': 'ห', 'S': 'ฆ', 'd': 'ก', 'D': 'ฏ',
    'f': 'ด', 'F': 'โ', 'g': 'เ', 'G': 'ฌ', 'h': '้', 'H': '็', 'j': '่', 'J': '๋',
    'k': 'า', 'K': 'ษ', 'l': 'ส', 'L': 'ศ', ';': 'ว', ':': 'ซ', "'": 'ง', '"': '.',
    'z': 'ผ', 'Z': '(', 'x': 'ป', 'X': ')', 'c': 'แ', 'C': 'ฉ', 'v': 'อ', 'V': 'ฮ',
    'b': 'ิ', 'B': 'ฺ', 'n': 'ื', 'N': '์', 'm': 'ท', 'M': '?', ',': 'ม', '<': 'ฒ',
    '.': 'ใ', '>': 'ฬ', '/': 'ฝ', '?': 'ฦ', ' ': ' '
};

function convertText() {
    const inputText = document.getElementById('inputText').value;
    const resultContainer = document.getElementById('resultContainer');
    const resultText = document.getElementById('resultText');

    if (!inputText.trim()) {
        resultText.textContent = 'กรุณาใส่ข้อความที่ต้องการแปลง';
        resultContainer.classList.remove('has-content');
        return;
    }

    let convertedText = '';
    for (let char of inputText) {
        convertedText += keyboardMap[char] || char;
    }

    resultText.textContent = convertedText;
    resultContainer.classList.add('has-content');
}

function copyResult() {
    const resultText = document.getElementById('resultText').textContent;
    if (
        resultText &&
        resultText !== 'กดปุ่ม "แปลงข้อความ" เพื่อดูผลลัพธ์' &&
        resultText !== 'กรุณาใส่ข้อความที่ต้องการแปลง'
    ) {
        navigator.clipboard.writeText(resultText).then(() => {
            const copyBtn = document.querySelector('.copy-btn');
            const originalText = copyBtn.textContent;
            copyBtn.textContent = '✅ คัดลอกแล้ว!';
            copyBtn.style.background = '#28a745';
            setTimeout(() => {
                copyBtn.textContent = originalText;
                copyBtn.style.background = '#6c757d';
            }, 2000);
        }).catch(() => {
            alert('ไม่สามารถคัดลอกได้ กรุณาคัดลอกด้วยตนเอง');
        });
    }
}

// กด Enter เพื่อแปลงข้อความ
document.getElementById('inputText').addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        convertText();
    }
});

// Auto-resize textarea
document.getElementById('inputText').addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 200) + 'px';
});
