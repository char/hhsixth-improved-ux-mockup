const backgrounds = []

for (let i = 1; i <= 10; i++) {
    backgrounds.push("copyrighted_assets/backgrounds/" + i + ".jpg")
}

function backgroundFade() {
    let background = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    document.querySelector(".App").style.backgroundImage = `url(${background})`;
}

export default backgroundFade;