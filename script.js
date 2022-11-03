// =====Practice=====
// const goldStars = new Array(50).fill("🌟").join("")

// console.log(goldStars)

// ===== PRACTICE 4 =====

const friendlyAliens = new Array(50).fill('👽').map(function(alien) {
  return `<div class="box">${alien}</div>`
}).join('')

document.getElementById('aliens').innerHTML = friendlyAliens



