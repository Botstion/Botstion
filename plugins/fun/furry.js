const Discord = require("discord.js");
const seed = require("../../util/seedprng");
const begin = [
    "Let's take a look here...",
    "You think you're furry? We'll see about that...",
    "Diagnosing...",
    "Let me take a closer look at you...",
    "Let's see here...",
    "To fur, or not to fur...",
    "Are those scales I see?",
    "What's beneath that skin of yours, huh?",
    "Zooming in, and...",
    "Look a bit closer, and...",
    "Detection in progress...",
    "Scanning...",
    "Let's just jump right into it.",
    "What's this...?",
    "Hmmmm... :thinking:"
];
const reaction = [
    "Oh dear.. It's worse than I thought.",
    "Hm. Seems legit.",
    "Alright then..",
    "Ah, I see!",
    "Beep.. Beep.. Beep-beep-beep-beep-beep-beep!",
    "Mhm..",
    "OwO?",
    "UwU!",
    "Oof, oh boy.",
    "Just as I thought..",
    "Huh.",
    "Well, that's not good.",
    "A decent diagnosis..",
    "Now check that out..",
    "Woah!",
    "Well then..",
    "Yikes.",
    "Oop!",
    "Uh oh."
];
const announce = [
    "Seems like",
    "According to this,",
    "If you look here,",
    "Erm,",
    "Uhh,",
    "Yeah, so",
    "Diagnosis:",
    "Look,",
    "Sorry to say this, but",
    "Awesome,",
    "This could be good or bad depending on how you look at it, but",
    "According to my calculations,",
    "The Furdar™️ states that",
    "Result:",
    "Yep,",
    "Mhm, says right here",
    "Sooooo..",
    "Didn't expect this one. Seems"
];
const fursonapfx = [
    "Your government assigned fursona would be ",
    "If you had a fursona, I think it'd be",
    "Your 'spirit animal' is",
    "Need fursona ideas? Try making",
    "I think this animal would suit you nicely..",
    "And check this out, I've determined that your animal is",
    "The Furdar™️ also says that your fursona might be",
    "By the way, your fursona could be",
    "Fursona:"
];
const fursonaadj = [
    "a hot",
    "a hunky",
    "an idiot",
    "a confused",
    "a primal",
    "a cute",
    "a caring",
    "a thoughtless",
    "a venomous",
    "a famous",
    "a gay",
    "a worthless",
    "a popular",
    "a cautious",
    "a wise",
    "a violent",
    "an abusive",
    "a suspicious",
    "a vulgar",
    "a giant",
    "a tall",
    "a tiny",
    "a short",
    "a adorable",
    "a flirtatious",
    "an ugly",
    "a curvy",
    "a courageous",
    "a mute",
    "a shaky",
    "a young",
    "a proud",
    "a lame",
    "a joyous",
    "a weak",
    "a strong",
    "a competitive",
    "a icy",
    "a cold",
    "an unforgiving",
    "a rough",
    "a classy",
    "a tasteful",
    "a ludicrous",
    "a malicious",
    "a therapeutic",
    "an inflatable",
    "a hungry",
    "a cruel",
    "a widely-known",
    "a ",
    "a magical",
    "an obedient",
    "a functional",
    "an enchanting",
    "a noisy",
    "a dazzling",
    "a comfortable",
    "a harmonious",
    "a discordant",
    "a tender",
    "a loving",
    "an affectionate",
    "a romantic",
    "a plain",
    "a lonely",
    "an omniscient",
    "a hesitant",
    "an aloof",
    "an electrical",
    "an ill-informed",
    "an innocent",
    "a capable",
    "a weary",
    "a bizarre",
    "an unhinged",
    "an unkempt",
    "an easy-to-fluster",
    "a trustworthy",
    "a clueless",
    "a hardworking",
    "a carefree",
    "a calm",
    "a comforting",
    "a helpful",
    "a useless",
    "a powerless",
    "a powerful",
    "a sexy",
    "a peculiar",
    "a shapeshifting",
    "a wonderful",
    "a lore-heavy",
    "an edgy",
    "a vampiric"
];
const fursonas = [
    "wolf",
    "arctic wolf",
    "dog",
    "puma",
    "housecat",
    "sergal",
    "protogen",
    "hobkin",
    "maned wolf",
    "arctic fox",
    "dingo",
    "armadillo",
    "giraffe",
    "dragon",
    "dinosaur",
    "shark",
    "lion",
    "kitsune",
    "unicorn",
    "horse",
    "otter",
    "rabbit",
    "raccoon",
    "leopard",
    "coyote",
    "skunk",
    "bat",
    "cheetah",
    "kangaroo",
    "koala",
    "sloth",
    "werewolf",
    "ferret",
    "hyena",
    "red panda",
    "panda",
    "gorilla",
    "monkey",
    "bird",
    "rat",
    "mouse",
    "bear",
    "lynx",
    "orca",
    "jackal",
    "squirrel",
    "crab",
    "raven",
    "crow",
    "bull",
    "cow",
    "sheep",
    "pig",
    "phoenix",
    "spider",
    "snake",
    "axolotl",
    "kobold",
    "fennec fox",
    "red fox",
    "penguin",
    "pangolin",
    "aardvark",
    "bulldog",
    "owl",
    "wildcat",
    "crocodile",
    "alligator",
    "duck",
    "dragonfly",
    "flamingo",
    "hamster",
    "guinea pig",
    "honeybee",
    "iguana",
    "chameleon",
    "frog",
    "seal",
    "zebra",
    "goat"
];
const fursonadesc = [
    "'s hated by many.",
    "'s loved by all.",
    " easily makes friends.",
    " has a passion for the arts.",
    " loves music.",
    " has a love for digital art.",
    " loves technology and the benefits it brings.",
    " despises technology.",
    " hates themself.",
    "'d rather be sleeping.",
    " wishes the world was a better place.",
    " runs a bakery.",
    " makes bank off of their job.",
    " genuinely loves everybody.",
    " gets around.",
    "'s personality is defined by BuzzFeed tests.",
    " has a fursona of their own. Weird, I know.",
    " runs an ice cream store.",
    " draws lewd art for a living.",
    " gives guitar lessons.",
    " has a pilot's license.",
    "'s hacked into the government on a few occasions.",
    " hosts a moderately successful podcast on Spotify.",
    " wants to die. Pull through, man. It'll be alright in the end.",
    " got lost in a hedge maze for hours once.",
    " only passes gas when it's most inconvenient.",
    "'s a college student.",
    " can't stop looking at themselves in the mirror.",
    " is a prime suspect for an unsolved murder case that began back in 1987.",
    "'s constantly horny on main, much to their friends' dismay.",
    " loves paws, possibly a bit too much.",
    " is a bit too interested in their friends' maws.",
    " hasn't slept in three months.",
    " makes cereal with the milk first.",
    " opens soda cans with their teeth.",
    "'s impressively good at digital design.",
    " has strong opinions about everything.",
    "'s too gay for this world.",
    " goes camping on the weekends.",
    " loves to birdwatch.",
    "'s prepared for every possible scenario.",
    " follows every law to a tee.",
    " breaks an astounding amount of laws every day.",
    " hates the police.",
    "'s extremely fashionable.",
    " you can find in the back alley near your local 7/11.",
    "'s just a big softie.",
    " hides their true feelings.",
    " would like to cuddle.",
    " dreams about cheese every night.",
    " ONLY communicates in morse code. Nothing more.",
    "'s an amazing singer.",
    " gives the most satisfying hugs in the world.",
    " has a dark sense of humor.",
    " scrolls Twitter all day, whilst also wishing they weren't.",
    " is a famous internet micro-celebrity.",
    " can't sleep without a night-light.",
    " takes everything a bit too seriously.",
    "'s a bit too trusting for their own good.",
    " practices the dark arts.",
    " had a near death experience, and swears that they saw Satan himself.",
    "'s a bit of a sussy baka.",
    " has a day job as a programmer.",
    " just can't stop smiling.",
    " loves everything and anything.",
    " leaves a positive impact on everyone's lives.",
    " pirates Adobe products.",
    " smokes weed on the daily.",
    " always gets perfect rolls on any die.",
    " has worryingly low standards for hygiene.",
    "'d kiss you on the spot, if you asked.",
    " always follows their heart, for better or for worse.",
    "'s pretty hopeless.",
    " can't go into caves in Minecraft, even on Peaceful difficulty.",
    " owns thousands of Steam games, yet plays none.",
    " couldn't be bothered to show up today.",
    " manages to bring out the best in everyone.",
    " easily submits to anyone.",
    " loves internet drama.",
    " can't keep a secret.",
    " behaves very inappropriately in public.",
    " can't keep their pants on. Sheesh.",
    " COULD kill you.. but won't.",
    " has an unhealthy obsession with knives.",
    " sleeps with their anime body pillow at night.",
    " goes out on dates with their waifu pillow.",
    " works out so much they'd be considered bara.",
    " doesn't care for deep relationships.",
    " spends so much on commissions they can't pay rent.",
    " commited tax evasion five years ago, and still hasn't been caught.",
    " has zero idea how to do their taxes correctly.",
    "'s dominant aura can bring someone to their knees in an instant.",
    " is frequently described as 'a menace to society.'",
    " is probably a danger to anybody nearby.",
    "'s so stupid it's charming.",
    "'ll likely be involved in an insurance scam.",
    " has the Beiber Fever.",
    " you should probably stay away from.",
    " makes smoothies for a living.",
    " only plays Roblox.",
    " lives in a box.",
    " wears a top hat all the time.",
    " works at Target.",
    " works at Walmart.",
    " works in food service.",
    " can make a damn good pizza.",
    " has skills they don't show off that much.",
    "'s a weeb.",
    " thinks they live in a simulation.",
    "'s obsessed with VR.",
    " can't be seen in mirrors.",
    " loves to watch horror movies.",
    " hates it when people chew loudly.",
    " hates the government.",
    " just can't seem to make enemies.",
    " makes enemies left and right.",
    " has low self-esteem."
];

const pick = (array, number) => array[number % array.length] || array[0];

let overrides = {};
try {
    overrides = require("../../config/gaydar.js");
} catch (e) {}
module.exports = {
    name: "Furrydar",
    author: "Taylor Robinson, Noble & theLMGN",
    version: 1,
    description: "owu whats this?",
    commands: [{
        name: "furry",
        usage: "user user=<@158311402677731328>",
        description: "Are you an UwU fuwwy wuwwy or just a normie? (by Taylor & Noble)",
        /**
        * @param {Discord.Client} c Client
        * @param {Discord.Message} m Invoking message
        * @param {Array} a Arguments
        */
        category: "Fun",
        execute: async(c, m, a) => {
            let member = a.user;
            if (member.bot) {
                return m.reply({ embed: new Discord.MessageEmbed()
                    .setAuthor("That's a protogen.", "https://cdn.discordapp.com/attachments/423185454582464512/425761155940745239/emote.png")
                    .setColor("#ff3860")
                    .setFooter("Furdar doesn't work on protogens, sorry.") });
            }

            let results = [];
            let seeded = seed(member.id + "uwu");
            let percent = Math.floor(((seeded / 4294967296) * 106) - 4);
            console.log(percent);
            let random = Math.floor(Math.random() * 70000000);
            if (percent <= 6) results.push("Congrats, you're a bonafide normie.", "Oh relax, that's nothing.");
            if (percent < 10 && percent >= 7) results.push("D'awww, so close to the big boy double digits!");
            if (percent <= 10) results.push("Barely even furry, but still a little furry. You'll survive.");
            if (percent <= 50) results.push("I've seen far worse.", "There's a bit of fur in there. You should be able to lead a normal life, if you're careful..", "Not hugely furry, but not exactly normie either. What'll become of this is up to you.");
            if (percent < 50 && percent >= 45) results.push("You're on thin ice. A few percent more, and you'll fall into a downward spiral of furriness.");
            if (percent < 53 && percent >= 48) results.push("You're at the point of no return. Just accept your fate now, it'll go down easier.");
            if (percent >= 50 && percent < 55) results.push("Just barely past the point of no return. So sorry for your loss.");
            if (percent >= 50 && percent < 60) results.push("You've already passed the point of no return. It only gets worse from here.");
            if (percent > 60) results.push("I bet you say 'UwU' and 'OwO' ironically. Better be careful, because it'll be unironic soon enough.", "I bet your Twitter likes are full of paws, you degenerate.", "Hope you weren't thinking otherwise, because you're basically immersed in the fandom at this point.");
            if (percent > 75) results.push("I bet you own clothes by Hyena Agenda.", "Are you wagging your tail right now? I bet you are...", "Been to any conventions lately? I see that little blep on your face, don't lie to me.");

            if (percent == 66) results.push("Y'know, one extra six and that'd be the Devil's number!", "Almost 666. True degenerate you are.");
            if (percent == 69) results.push("Obligatory number joke here.", "Heh.");
            if (percent >= 100) results.push("Congrats. You're the pinnacle of everything furry. You love hugs and cuddles. You have a fursona, and all the art that comes with it. You're a full, bonafide, degenerate. Welcome to the club! 😊", "Congrats. You're the pinnacle of everything furry. You love hugs and cuddles. You have a fursona, and all the art that comes with it. You're a full, bonafide, degenerate. Welcome to the club! 😊", "Congrats. You're the pinnacle of everything furry. You love hugs and cuddles. You have a fursona, and all the art that comes with it. You're a full, bonafide, degenerate. Welcome to the club! 😊");
            if (percent >= 101) { percent = 621; results = ["Oh.. Y.. Y-You're not the pure type, are you!"]; }
            if (percent == -1) results = ["Uh, what does that mean?"];
            if (percent <= -2) { percent = 2147483647; results = ["oh, no, the furdar is going haywire.. Try again, maybe?", "Hm. Okay. Your presence is sending the furdar into orbit. I'm gonna have to ask you to leave.", "you broke the furdar. I.. don't know what this entails. Uhm.. Good luck..?"]; }
            return m.reply(new Discord.MessageEmbed()
                .setAuthor("Furdar", "https://de.brammer.biz/asset/medium/52/3_/b13e133450f9bc36643e738e018fa29d.png")
                .setColor("#3273dc")
                .setTitle(pick(begin, random))
                .setDescription(
                    `${pick(reaction, random)}
                    ${pick(announce, random)} ${member.toString()} is **${percent}%** furry. ${pick(results, random)}`
                )
                .addField(pick(fursonapfx, random), pick(fursonaadj, seeded) + " " + pick(fursonas, seeded) + " who" + pick(fursonadesc, seeded)));
        }
    }]
};

