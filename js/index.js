function load() {
    const splashes = ["Haha Funny Splash Text", "404 Error", "Why are you even reading this?..",
                     "Meow Meow", "Daw1d dev is cool ong", "Website made by Simpfey", "Join Our Discord Server!",
                     "@Daw1ddevv on YouTube!", "Website may contain nuts!", "Not on steam!", "Roblox", 
                     "Also try Minecraft!", "sqrt(-1) love you!", "Don't pick your nose!", 
                     "Your gateway to the ultimate gaming universe", "Why are you still here?",
                     "I'm not paid to do this website",
                     "Daw1d pls hire me I need money for my family to live, I have 3 kids and a wife"];

    const elem = document.getElementById("Splash");
    elem.innerText = splashes[Math.floor(Math.random() * splashes.length)];

    const CustomSplashes = ["Fun Fact: Daw1dDevv favorite color is purple",
                            "Fun Fact: Daw1dDevv's favorite food is cheeseburgers",
                            "Tip: If you're interested enough, go play our games!",
                            "Fun Fact: This site was made under 7 hours",
                            "Fact: Daw1dDevv is the lead developer of the Daw1d Studios on Roblox!",
                            "There are currently two games that are being updated/worked on!",
                            "Fun Fact: I forgor",
                            "Uhhh, It''s just a website okay...",
                            "Join our Discord Server for more information!",
                            "Check my youtube channel for the latest soundtracks & related game content!",
                            "Have a nice day!"];

    const Facts = document.getElementById("Quotes");
    Facts.innerText = CustomSplashes[Math.floor(Math.random() * CustomSplashes.length)];

    if (elem.innerText == "Also try Minecraft!") {
        elem.className = "splash-minecraft";
    }
}