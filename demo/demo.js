/* Generate random colors for logo, generate random company names. Because I love wasting my time*/

const colors = [
  '#E2E8F0', '#FEB2B2', '#FBD38D', '#FAF089', '#9AE6B4', '#81E6D9', '#90CDF4', 
  '#A3BFFA', '#D6BCFA', '#FBB6CE', '#2C7A7B', '#4C51BF', '#FFFFF0', '#FFF5F7'
]

const logoSize = 72

const logo = `
  <?xml version="1.0" encoding="iso-8859-1"?>
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 503.6 503.6" style="enable-background:new 0 0 503.6 503.6;" xml:space="preserve" width="${logoSize}" height="${logoSize}">
  <polygon style="fill:${randomColor()}" points="459.4,373.2 251.4,495.6 43.4,373.2 43.4,130 251.4,7.6 459.4,130 "/>
  <polygon style="fill:${randomColor()}" points="251.4,495.6 460.2,374.8 251.4,254.8 42.6,374.8 "/>
  <polyline style="fill:#FFFFFF" points="43.4,371.6 43.4,130 254.6,6.8 "/>
  <polyline style="fill:${randomColor()}" points="249.8,7.6 459.4,130 459.4,373.2 249,495.6 "/>
  <polygon style="fill:${randomColor()}" points="251.4,254.8 251.4,495.6 460.2,374.8 "/>
  <polyline style="fill:${randomColor()}" points="459.4,131.6 459.4,373.2 248.2,496.4 "/>
  <polygon style="fill:${randomColor()}" points="354.6,312.4 249,495.6 460.2,374.8 "/>
  <g>
    <path style="fill:#1A202C;" d="M251.4,503.6c-1.6,0-2.4,0-4-0.8L37.8,380.4c-2.4-1.6-2.4-4-2.4-7.2V130c0-3.2,0-5.6,2.4-7.2
      L248.2,1.2c2.4-1.6,4.8-1.6,8,0l209.6,121.6c2.4,1.6,2.4,4,2.4,7.2v244c0,3.2,0,5.6-2.4,7.2L254.6,502
      C253.8,502.8,253,503.6,251.4,503.6z M51.4,369.2l200,117.6l200-117.6V134l-200-116.8L51.4,134V369.2z"/>
    <path style="fill:#1A202C;" d="M460.2,377.2c-1.6,0-4.8,0-5.6-0.8L251.4,259.6L46.6,378c-4,2.4-4,0-6.4-4s-0.8-10.4,2.4-12.8
      l204.8-117.6c2.4-1.6,5.6-1.6,8,0L460.2,362c4,2.4,6.4,6.4,4,10.4C462.6,374,462.6,377.2,460.2,377.2z"/>
  </g>
  <g>
    <path style="fill:#1A202C;" d="M251.4,259.6c-4.8,0-8-3.2-8-8V12.4c0-4.8,3.2-8,8-8c4.8,0,8,3.2,8,8v239.2
      C259.4,256.4,256.2,259.6,251.4,259.6z"/>
    <path style="fill:#1A202C;" d="M251.4,258.8c-1.6,0-2.4,0-4-0.8l-204-117.6c-4-2.4-6.4-8.8-4-12.8c2.4-4,6.4-4,10.4-2.4L251.4,242
      l203.2-117.6c4-2.4,8,0,9.6,3.2c2.4,4-0.8,9.6-4.8,12L255.4,258C253.8,258.8,253,258.8,251.4,258.8z"/>
  </g>
  <path style="fill:#1A202C;" d="M251.4,497.2c-4.8,0-8-3.2-8-8V250c0-4.8,3.2-8,8-8c4.8,0,8,3.2,8,8v239.2
    C259.4,493.2,256.2,497.2,251.4,497.2z"/>
  </svg>
`

function randomColor(){
  randomNumber = Math.floor((Math.random() * colors.length))
  newColor = colors[randomNumber]
  return newColor
}

const adjectives = [
  'beautiful', 'brave', 'busy', 'calm', 'careless', 'clever', 'clumsy', 
  'curious', 'dedicated', 'delightful', 'fabulous', 'fancy', 'fierce', 
  'friendly','generous', 'gentle', 'glamorous', 'gorgeous', 'handsome', 
  'hasty', 'hopeful', 'jolly', 'joyful', 'lively', 'loyal', 'marvelous', 
  'mighty', 'naughty', 'nimble', 'petite', 'polite', 'proud', 'silly', 
  'sleepy', 'thankful', 'tricky','wise', 'wonderful'
]

const animals = [
  'ostrich', 'whale', 'hedgehog', 'lemur', 'possum', 'raccoon', 
  'rhinoceros', 'skunk', 'squirrel', 'tortoise', 'wallaby', 'zebra'
]

const randomAdjective = Math.floor((Math.random() * adjectives.length))
const randomAnimal = Math.floor((Math.random() * animals.length))

document.getElementById("logo").innerHTML = logo
document.getElementById("company").innerHTML = `
  <h2>${adjectives[randomAdjective]} ${animals[randomAnimal]}<h2>
  <h4>enterprises</h4>
`