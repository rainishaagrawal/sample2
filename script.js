const CORRECT_PASSCODE = "1111";
let enteredCode = "";
const WELCOME_MESSAGE = "happy birthday ! click next to checkout";
const lettersContent = { 1: { title: "bhai", body: "be happy" },
 2: { title: "Our Memories", body: "sweet memories" },
  3: { title: "A Secret", body: "you'r important to me"  } };

// Enter key support
document.addEventListener('keydown', (e) => { 
    if(e.key === 'Enter') {
        const passcodePage = document.getElementById('page-passcode');
        if(!passcodePage.classList.contains('hidden-page')) checkPasscode();
    } 
});

function pressKey(num) { if (enteredCode.length < 4) { enteredCode += num; updateBoxes(); } }
function clearCode() { enteredCode = ""; updateBoxes(); }
function updateBoxes() { for (let i = 0; i < 4; i++) { const box = document.getElementById(`box-${i}`); if (box) box.innerText = (i < enteredCode.length) ? enteredCode[i] : ""; } }
function checkPasscode() { if (enteredCode === CORRECT_PASSCODE) { document.getElementById('page-passcode').classList.add('hidden-page'); document.getElementById('passcode-bg-img').classList.add('hidden-page'); document.getElementById('welcome-bg-img').classList.remove('hidden-page'); document.getElementById('page-welcome').classList.remove('hidden-page'); startTyping(); } else { alert("Wrong Passcode!"); } clearCode(); }
function startTyping() { const textElement = document.getElementById('typing-text'); const nextBtn = document.getElementById('next-btn'); textElement.innerHTML = ""; nextBtn.classList.add('hidden-page'); let i = 0; function type() { if (i < WELCOME_MESSAGE.length) { textElement.innerHTML += WELCOME_MESSAGE.charAt(i); i++; setTimeout(type, 40); } else { nextBtn.classList.remove('hidden-page'); } } type(); }
function goToLetters() { document.getElementById('page-welcome').classList.add('hidden-page'); document.getElementById('welcome-bg-img').classList.add('hidden-page'); document.getElementById('letters-bg-img').classList.remove('hidden-page'); document.getElementById('page-letters').classList.remove('hidden-page'); }
function openLetter(id) { document.getElementById('page-letters').classList.add('hidden-page'); document.getElementById('letter-title').innerText = lettersContent[id].title; document.getElementById('letter-content').innerText = lettersContent[id].body; document.getElementById('page-open-letter').classList.remove('hidden-page'); }
function closeLetter() { document.getElementById('page-open-letter').classList.add('hidden-page'); document.getElementById('page-letters').classList.remove('hidden-page'); }
function goToNextPage() { document.getElementById('page-letters').classList.add('hidden-page'); document.getElementById('page-next').classList.remove('hidden-page'); }
function goToFinalPage() { document.getElementById('page-next').classList.add('hidden-page'); document.getElementById('page-proposal').classList.remove('hidden-page'); }

function showResponse(answer) { 
    const msg = document.getElementById('response-message'); 
    if (answer === 'yes') { 
        msg.innerText = "Yay! Thank you so much! You made my day!"; 
        document.getElementById('no-btn').style.display = "none"; 
    } 
}

function moveNoButton() { 
    const btn = document.getElementById('no-btn'); 
    // Button ko relative rakhein taaki wo container ke andar rahe
    btn.style.position = "relative"; 
    
    // Movement ko control kiya gaya hai taaki wo kam jhatke se hile[cite: 3]
    const x = (Math.random() - 0.8) * 250; 
    const y = (Math.random() - 0.8) * 250; 
    
    btn.style.left = x + "px"; 
    btn.style.top = y + "px"; 
}
// (Baki functions wahi rehne dein)