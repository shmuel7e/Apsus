'use strict'
import storageService from '../../services/storageService.js'
import eventBusService from "../../services/eventBusService.js";


let gIsDateSortedUp = false;
let gEmails = [

    {
        from: 'GarGaMel',
        subject: 'Ani Sone DarDasim!',
        body: ' La la lala lala, sing a happy song! La la lala lala, this is so wrong! "Oh, I\'\m Papa Smurf. I\'\m the head of a small group of blue people, and live in the forest with 99 sons and one daughter! Nothing weird about that, no no, totally normal!" "And I\'\m Smurfette! And I think I\'\m so pretty! And I betrayed Gargamel, and I don\'\t even care! And everything is just sunshine and rainbows!"... But all of that is about to change!',
        isRead: false,
        isStarred: false,
        isSent: false,
        isTrash: false,
        sentAt: Date.now(),
        replys: [],
        id: 1
    },
    {
        from: 'Eric Thomas',
        subject: 'When you want to succeed as bad as you want to breathe, then you’ll be successful.',
        body: 'Pain is temporary. It may last for a minute, or an hour or a day, or even a year. But eventually, it will subside. And something else takes its place. If I quit, however, it will last forever.',
        isRead: true,
        isStarred: true,
        isSent: false,
        isTrash: false,
        sentAt: Date.now() - 3600000,
        replys: [],
        id: 2
    },
    {
        from: 'Sheldon',
        subject: 'Bazinga!',
        body: 'Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors.',
        isRead: true,
        isStarred: true,
        isSent: false,
        isTrash: false,
        sentAt: Date.now() - 39325237,
        replys: [],
        id: 3
    },
    {
        from: 'Darth Vader',
        subject: 'I am your father!',
        body: 'I find your lack of faith disturbing..',
        isRead: false,
        isStarred: true,
        isSent: false,
        isTrash: false,
        sentAt: Date.now() - 1111112,
        replys: [],
        id: 4
    },
    {
        from: 'Steve Jobs',
        subject: 'I LOVE APPLES :O',
        body: 'Your time is limited, so don\'\t waste it living someone else\'\s life. Don\'\t be trapped by dogma \–\ which is living with the results of other people\'\s thinking.',
        isRead: true,
        isStarred: false,
        isSent: false,
        isTrash: false,
        sentAt: Date.now() - 1111111111,
        replys: [],
        id: 5
    },
    {
        from: 'Conor McGregor',
        subject: 'fuuuuk yo Mon ',
        body: 'There’s no talent here, this is hard work. This is an obsession. Talent does not exist, we are all human beings. You could be anyone if you put in the time. You will reach the top, and that’s that. I am not talented, I am obsessed',
        isRead: false,
        isStarred: false,
        isSent: false,
        isTrash: false,
        sentAt: Date.now() - 124124124,
        replys: [],
        id: 6
    },
    {
        from: 'Bob Marley',
        subject: 'get up stand up',
        body: 'Only once in your life, I truly believe, you find someone who can completely turn your world around. You tell them things that you’ve never shared with another soul and they absorb everything you say and actually want to hear more. You share hopes for the future, dreams that will never come true, goals that were never achieved and the many disappointments life has thrown at you. When something wonderful happens, you can’t wait to tell them about it, knowing they will share in your excitement. They are not embarrassed to cry with you when you are hurting or laugh with you when you make a fool of yourself. Never do they hurt your feelings or make you feel like you are not good enough, but rather they build you up and show you the things about yourself that make you special and even beautiful. There is never any pressure, jealousy or competition but only a quiet calmness when they are around. You can be yourself and not worry about what they will think of you because they love you for who you are. The things that seem insignificant to most people such as a note, song or walk become invaluable treasures kept safe in your heart to cherish forever. Memories of your childhood come back and are so clear and vivid it’s like being young again. Colours seem brighter and more brilliant. Laughter seems part of daily life where before it was infrequent or didn’t exist at all. A phone call or two during the day helps to get you through a long day’s work and always brings a smile to your face. In their presence, there’s no need for continuous conversation, but you find you’re quite content in just having them nearby. Things that never interested you before become fascinating because you know they are important to this person who is so special to you. You think of this person on every occasion and in everything you do. Simple things bring them to mind like a pale blue sky, gentle wind or even a storm cloud on the horizon. You open your heart knowing that there’s a chance it may be broken one day and in opening your heart, you experience a love and joy that you never dreamed possible. You find that being vulnerable is the only way to allow your heart to feel true pleasure that’s so real it scares you. You find strength in knowing you have a true friend and possibly a soul mate who will remain loyal to the end. Life seems completely different, exciting and worthwhile. Your only hope and security is in knowing that they are a part of your life.',
        isRead: false,
        isStarred: false,
        isSent: false,
        isTrash: false,
        sentAt: Date.now() - 124214214214,
        replys: [],
        id: 7
    },
    {
        from: 'Joey',
        subject: 'How you doin?',
        body: 'JOEY DOESNT SHARE FOOD !!!!!!!!!!!!!!!!!!!!!!!!!',
        isRead: false,
        isStarred: true,
        isSent: false,
        isTrash: false,
        sentAt: Date.now() - 2903497809324,
        replys: [],
        id: 8
    },

    {
        from: 'Pikachu',
        subject: 'Pik Pikachu',
        body: 'Pika Pika',
        isRead: false,
        isStarred: false,
        isSent: false,
        isTrash: false,
        sentAt: Date.now() - 43257325,
        replys: [],
        id: 9
    },
    {
        from: 'Rick',
        subject: 'I DONT GIVE A F***!!!',
        body: 'Listen, Morty, I hate to break it to you, but what people call “love” is just a chemical reaction that compels animals to breed. It hits hard, Morty, then it slowly fades, leaving you stranded in a failing marriage',
        isRead: false,
        isStarred: false,
        isSent: false,
        isTrash: false,
        sentAt: Date.now() - 10000000000,
        replys: [],
        id: 10
    },

    {
        from: 'Talmashiah',
        subject: 'Talmashiah invited you to Talmashiah/Appsus',
        body: 'You can accept or decline this invitation. You can also head over to https://github.com/Talmashiah/Appsus to check out the repository or visit @Talmashiah to learn a bit more about them Note: This invitation was intended for shmuel7e@gmail.com. If you were not expecting this invitation, you can ignore this email. If @Talmashiah is sending you too many emails, you can block them or report abuse..',
        isRead: false,
        isStarred: false,
        isSent: false,
        isTrash: false,
        sentAt: new Date('June 1, 2019 00:11:22 GMT+00:00').getTime(),
        replys: [],
        id: 11
    },
    {
        from: 'RiotGames',
        subject: 'Puki - Weve Updated our Privacy Notice and Terms of Service',
        body: "We\’\re updating our legal documents next month to prepare for Riot’s new games! To keep things simple, we’ll have a single Terms of Service (what we used to call the Terms of Use) and Privacy Notice (what we used to call the Privacy Policy) for all our games. These new documents are very similar to what we already have now. You can review both of these documents on our website: ",
        isRead: true,
        isStarred: false,
        isSent: false,
        isTrash: false,
        sentAt: new Date('January 12, 2019 00:37:22 GMT+00:00').getTime(),
        replys: [],
        id: 12
    },
    {
        from: 'Steam',
        subject: '12 items from your Steam wishlist are on sale',
        body: 'Specific pricing and discounts may be subject to change. Please check the Steam store page for details. You are receiving this email because the above items are on your Steam Wishlist',
        isRead: true,
        isStarred: false,
        isSent: false,
        isTrash: false,
        sentAt: new Date('April 12, 2019 00:54:22 GMT+00:00').getTime(),
        replys: [],
        id: 13
    },
    {
        from: 'HackerRank',
        subject: 'Reminder: You’re invited to be part of the 2019 State of the Developer Survey',
        body: 'Hi, Thank you for being part of the HackerRank community of over 7 million developers! We just launched our 3rd annual survey on the state of developer skills and we’d love your input. What’s the best place for developers to learn new skills and what new skills are they learning? What are the most in demand skills that employers are looking for in 2020? These are the questions we’re trying to answer to share with our community.',
        isRead: false,
        isStarred: false,
        isSent: false,
        isTrash: false,
        sentAt: new Date('January 27, 2019 00:14:22 GMT+00:00').getTime(),
        replys: [],
        id: 14
    },
    {
        from: 'Shuki',
        subject: 'on boots, my boss, and sending emails',
        body: 'This isnt a Cyber Monday email Normally, I would send you an email today with a deal you ‘cannot miss’. You see, I plan my email campaigns on monday.com. I map all the steps needed on my board, and follow the plan until you receive this Cyber Monday email. The thing is, monday.com is really good for organizing projects, so you end up delivering what you need on time. My Cyber Monday campaign was ready two weeks ago. I mentioned @Roy (my boss) in an update on my board, to share the plan with him. He replied “Pauline, let’s not do Cyber Monday. Instead of a time-limited discount, let’s offer time. We can’t expect anyone to buy business software within 24 hours.” I think he’s right. Let’s use Cyber Monday for what it was traditionally – a time for shopping for that great pair of jeans you’ve been eyeing up or a present for your bae. Well talk business tomorrow Today, I’m buying the boots of my dreams.Pauline',
        isRead: false,
        isStarred: false,
        isSent: false,
        isTrash: false,
        sentAt: new Date('July 17, 2019 00:39:22 GMT+00:00').getTime(),
        replys: [],
        id: 15

    },
    {
        from: 'iHerb',
        subject: 'Product Review for Order #410107347-0',
        body: 'How have you been enjoying your recent purchase? When you’ve got a few minutes to spare, how about writing a review? Your experience can be a big help to other customers.',
        isRead: false,
        isStarred: false,
        isSent: false,
        isTrash: false,
        sentAt: new Date('Febuary 7, 2019 00:17:22 GMT+00:00').getTime(),
        replys: [],
        id: 16
    },
    {
        from: 'Bitdefender',
        subject: 'Bitdefender Antivirus Plus 2020',
        body: 'Thank you for choosing Bitdefender! Lets take a moment to set up Bitdefender Antivirus Plus 2020 on your devices. First, click on the Activate Subscription button below to link it to your Bitdefender Central account. In case you dont have an account, please create one here. Protect your devices with one account Bitdefender Central lets you remotely manage, secure, and optimize your Bitdefender-protected devices. You can use a single account to manage your subscription for one or more devices. You can manage your security from your mobile device. Anytime. Anywhere. Bitdefender Central is a companion app that empowers you to remotely manage security on your Bitdefender-protected devices directly from your smartphone. If you have any questions, you will most likely find your answers here, or you can contact our support team 24/7. It\'\s great having you on board!The Bitdefender Team',
        isRead: true,
        isStarred: false,
        isSent: false,
        isTrash: false,
        sentAt: new Date('October 12, 2019 00:14:38 GMT+00:00').getTime(),
        replys: [],
        id: 17
    },

    {
        from: 'Instagram',
        subject: 'New login to Instagram from Chrome on Windows',
        body: 'We Noticed a New Login, shmuel7_e We noticed a login from a device you don\'\t usually use.',
        isRead: false,
        isStarred: false,
        isSent: false,
        isTrash: false,
        sentAt: new Date('December 16, 2019 00:19:38 GMT+00:00').getTime(),
        replys: [],
        id: 18

    },
    {
        from: 'Talmashiah',
        subject: 'What a douchbag',
        body: 'shmuel you are a douchbag',
        isRead: false,
        isStarred: true,
        isSent: false,
        isTrash: false,
        sentAt: new Date('December 24, 2019 00:11:38 GMT+00:00').getTime(),
        replys: [],
        id: 19,
    },
    {
        from: 'Lorem',
        subject: 'lorem ipsum dolor sit amet',
        body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure ad magni ratione consequatur explicabo enim. Eos, aperiam mollitia. Perferendis enim similique inventore quidem earum provident laboriosam minus, molestiae atque.',
        isRead: false,
        isStarred: false,
        isSent: false,
        isTrash: false,
        sentAt: new Date('December 26, 2019 00:12:38 GMT+00:00').getTime(),
        replys: [],
        id: 20

    },
    {
        from: 'We miss you',
        subject: 'Hi Shmuel!',
        body: 'We noticed that you haven\'\t visited us for over 1 month. Your friends on Wireclub miss you.We hope to see you soon. The Wireclub Team',
        isRead: false,
        isStarred: false,
        isSent: false,
        isTrash: false,
        sentAt: new Date('April 3, 2019 00:16:38 GMT+00:00').getTime(),
        replys: [],
        id: 21

    },
    {
        from: 'Discord',
        subject: 'Hey Shmuel',
        body: ' Thanks for taking the time to check out Discord\!\ The best relationships in our lives were built around playing games. Memories of staying up late playing Warcraft 3 with friends or sharing creations in The Sims mean so much to us. Discord\'\s free voice and text chat is about making it easier for you to spend time with the people you care about, create these memories, and land a headshot or two..',
        isRead: false,
        isStarred: false,
        isSent: false,
        isTrash: false,
        sentAt: Date.now() - 1000000,
        replys: [],
        id: 22

    },
    {
        from: 'Instagram',
        subject: 'Come Back And Grow Your Instagram account',
        body: 'Hi There, Thanks for your recent visit to Mr. Insta. We are the Internet\'\s leading provider of quality Instagram marketing services, and our results will start appearing in',
        isRead: false,
        isStarred: false,
        isSent: false,
        isTrash: false,
        sentAt: Date.now() - 10000,
        replys: [],
        id: 23

    },
    {
        from: 'Ulysses',
        subject: 'Soaring through all the galaxies',
        body: ' Ulysses, Ulysses — Soaring through all the galaxies. In search of Earth, flying in to the night. Ulysses, Ulysses — Fighting evil and tyranny, with all his power, and with all of his might. Ulysses — no-one else can do the things you do. Ulysses — like a bolt of thunder from the blue. Ulysses — always fighting all the evil forces bringing peace and justice to all. Hong Kong Phooey, number one super guy. Hong Kong Phooey, quicker than the human eye. He\’\s got style, a groovy style, and a car that just won\’\t stop. When the going gets tough, he\’\s really rough, with a Hong Kong Phooey chop \(Hi-Ya!)\. Hong Kong Phooey, number one super guy. Hong Kong Phooey, quicker than the human eye. Hong Kong Phooey, he\’\s fan-riffic\!\ Mutley, you snickering, floppy eared hound. When courage is needed, you’re never around. Those medals you wear on your moth-eaten chest should be there for bungling at which you are best. So, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon. Howwww! Nab him, jab him, tab him, grab him, stop that pigeon now.',
        isRead: false,
        isStarred: false,
        isSent: false,
        isTrash: false,
        sentAt: new Date('March 20, 2019 00:21:38 GMT+00:00').getTime(),
        replys: [],
        id: 24

    },
    {
        from: 'Thundercats',
        subject: 'Thundercats are loose',
        body: 'Thundercats are on the move, Thundercats are loose. Feel the magic, hear the roar, Thundercats are loose. Thunder, thunder, thunder, Thundercats! Thunder, thunder, thunder, Thundercats! Thunder, thunder, thunder, Thundercats! Thunder, thunder, thunder, Thundercats! Thundercats!  I never spend much time in school but I taught ladies plenty. It’s true I hire my body out for pay, hey hey. I’ve gotten burned over Cheryl Tiegs, blown up for Raquel Welch. But when I end up in the hay it’s only hay, hey hey. I might jump an open drawbridge, or Tarzan from a vine. ’Cause I’m the unknown stuntman that makes Eastwood look so fine.',
        isRead: false,
        isStarred: false,
        isSent: false,
        isTrash: false,
        sentAt: new Date('September 27, 2018 00:20:18 GMT+00:00').getTime(),
        replys: [],
        id: 25

    },
    {
        from: 'Puki',
        subject: 'Hong Kong Phooey',
        body: ' Hong Kong Phooey, number one super guy. Hong Kong Phooey, quicker than the human eye. He’s got style, a groovy style, and a car that just won’t stop. When the going gets tough, he’s really rough, with a Hong Kong Phooey chop (Hi-Ya!). Hong Kong Phooey, number one super guy. Hong Kong Phooey, quicker than the human eye. Hong Kong Phooey, he’s fan-riffic! There’s a voice that keeps on calling me. Down the road, that’s where I’ll always be. Every stop I make, I make a new friend. Can’t stay for long, just turn around and I’m gone again. Maybe tomorrow, I’ll want to settle down, Until tomorrow, I’ll just keep moving on.',
        isRead: false,
        isStarred: false,
        isSent: false,
        isTrash: true,
        sentAt: new Date('August 20, 2019 00:20:18 GMT+00:00').getTime(),
        replys: [],
        id: 26

    },
    {
        from: 'Cat',
        subject: 'Meow',
        body: ' Top Cat! The most effectual Top Cat! Who’s intellectual close friends get to call him T.C., providing it’s with dignity. Top Cat! The indisputable leader of the gang. He’s the boss, he’s a pip, he’s the championship. He’s the most tip top, Top Cat.',
        isRead: false,
        isStarred: false,
        isSent: false,
        isTrash: false,
        sentAt: Date.now() - 10000,
        replys: [],
        id: 27

    },
    {
        from: 'Linkedin',
        subject: 'SW Application Engineer',
        body: 'Linux at SolarEdge Technologies and 9 other jobs for you LinkedIn Ireland Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2. LinkedIn is a registered business name of LinkedIn Ireland Unlimited Company. LinkedIn and the LinkedIn logo are registered trademarks of LinkedIn.',
        isRead: false,
        isStarred: false,
        isSent: false,
        isTrash: false,
        sentAt: new Date('July 20, 69 00:20:18 GMT+00:00').getTime(),
        replys: [],
        id: 28
    },
    {
        from: 'Avocode',
        subject: 'Zuzana from Avocode',
        body: 'Hello shmuel, We’re so glad to have you! My name is Zuzana, and over the next few days, I will be helping you to get started faster. With the Starter plan, you can collaborate with as many people as you like on up to 3 design projects.For the next 14 days of free trial, you have a chance to see for yourself how Avocode will help you and your team optimise design coding and handoff.',
        isRead: true,
        isStarred: true,
        isSent: false,
        isTrash: false,
        sentAt: new Date('July 20, 89 00:20:18 GMT+00:00').getTime(),
        replys: [],
        id: 29
    },
    {
        from: 'GitHub',
        subject: ' A personal access token has been added to your account',
        body: 'Hey shmuel73 A personal access token (git: https://github.com/ on DESKTOP-NMB15QA at 03-Dec-2019 10:32) with gist and repo scopes was recently added to your account. Visit https://github.com/settings/tokens for more information.',
        isRead: false,
        isStarred: false,
        isSent: false,
        isTrash: false,
        sentAt: Date.now() - 100000,
        replys: [],
        id: 30,
    },
    {
        from: 'Shmuel',
        subject: ' I WILL KILL YOU TAL !!!!!!!!!!!!!',
        body: 'tal I\'\m gonna find you and then I\'\m gonna kill you ',
        isRead: false,
        isStarred: false,
        isSent: true,
        isTrash: false,
        sentAt: Date.now() - 100000,
        replys: [],
        id: 32,
    }

]

export default {
    getEmails,
    getEmailById,
    deleteEmail,
    toggleRead,
    toggleUnRead,
    toggleStar,
    gIsDateSortedUp,
    getRandomId,
    sendEmail,
    unreadMailCount,
    removeEmail,
    unToggleTrash,
    replyEmail,
}



function getEmails(filterBy) {
    if (storageService.load('emails')) {
        gEmails = storageService.load('emails');
    } else {
        storageService.store('emails', gEmails);
    }

    if (filterBy === 'All') filterBy = null;

    if (!filterBy) {
        let copyEmails = JSON.parse(JSON.stringify(gEmails));
        let sortedEmails = copyEmails.filter(email => !email.isTrash);
        let filteredEmails = sortedEmails.sort((emailA, emailB) => (emailA.sentAt > emailB.sentAt) ? -1 : 1);
        return Promise.resolve(filteredEmails);
    }

    if (filterBy === 'Trash') {
        const filteredEmails = gEmails.filter(email => email.isTrash);
        return Promise.resolve([...filteredEmails]);
    }

    if (filterBy === 'Sent') {
        let filteredEmails = gEmails.filter(email => email.isSent);
        const sortedEmails = filteredEmails.filter(email => !email.isTrash);
        return Promise.resolve([...sortedEmails]);
    }

    if (filterBy === 'Read') {
        let filteredEmails = gEmails.filter(email => email.isRead);
        const sortedEmails = filteredEmails.filter(email => !email.isTrash);
        return Promise.resolve([...sortedEmails]);
    }

    if (filterBy === 'Unread') {
        let filteredEmails = gEmails.filter(email => !email.isRead);
        const sortedEmails = filteredEmails.filter(email => !email.isTrash);
        return Promise.resolve([...sortedEmails]);
    }

    if (filterBy === 'Starred') {
        let filteredEmails = gEmails.filter(email => email.isStarred);
        const sortedEmails = filteredEmails.filter(email => !email.isTrash);
        return Promise.resolve([...sortedEmails]);
    }

    if (filterBy === 'Unstarred') {
        let filteredEmails = gEmails.filter(email => !email.isStarred);
        const sortedEmails = filteredEmails.filter(email => !email.isTrash);
        return Promise.resolve([...sortedEmails]);
    }

    if (filterBy === 'Date') {
        if (!gIsDateSortedUp) {
            gIsDateSortedUp = !gIsDateSortedUp;
            let copyEmails = JSON.parse(JSON.stringify(gEmails));
            let filteredEmails = copyEmails.filter(email => !email.isTrash);
            const sortedEmails = filteredEmails.sort((emailA, emailB) => (emailA.sentAt > emailB.sentAt) ? 1 : -1)
            return Promise.resolve(sortedEmails);
        }
        if (gIsDateSortedUp) {
            gIsDateSortedUp = !gIsDateSortedUp;
            let copyEmails = JSON.parse(JSON.stringify(gEmails));
            let filteredEmails = copyEmails.filter(email => !email.isTrash);
            const sortedEmails = filteredEmails.sort((emailA, emailB) => (emailA.sentAt > emailB.sentAt) ? -1 : 1)
            return Promise.resolve(sortedEmails);
        }

    }

    let sortedEmails = gEmails.filter(email => !email.isTrash)
    const filteredEmails = sortedEmails.filter(email => email.subject.toLowerCase().includes(filterBy.name.toLowerCase())
        || email.body.toLowerCase().includes(filterBy.name.toLowerCase())
        || email.from.toLowerCase().includes(filterBy.name.toLowerCase()));

    return Promise.resolve([...filteredEmails]);
}


function getEmailById(emailId) {
    if (storageService.load('emails')) gEmails = storageService.load('emails');
    const email = gEmails.find(email => email.id == emailId);
    return Promise.resolve(email);
}

function deleteEmail(email) {
    if (email.isTrash) return;
    let copyEmail = JSON.parse(JSON.stringify(email))
    copyEmail.isTrash = true;
    gEmails = gEmails.map(email => copyEmail.id === email.id ? copyEmail : email);
    storageService.store('emails', gEmails);
    return Promise.resolve(copyEmail);
}

function removeEmail(email) {
    gEmails = gEmails.filter((currEmail) => currEmail.id !== email.id);
    storageService.store('emails', gEmails);
    return Promise.resolve(gEmails);
}


function toggleRead(email) {
    if (email.isRead) return;
    let copyEmail = JSON.parse(JSON.stringify(email))
    copyEmail.isRead = !copyEmail.isRead;
    gEmails = gEmails.map(email => copyEmail.id === email.id ? copyEmail : email);
    storageService.store('emails', gEmails);
    return Promise.resolve(copyEmail);

}

function toggleUnRead(email) {
    let copyEmail = JSON.parse(JSON.stringify(email));
    copyEmail.isRead = !copyEmail.isRead;
    gEmails = gEmails.map(email => copyEmail.id === email.id ? copyEmail : email);
    storageService.store('emails', gEmails);
    return Promise.resolve(copyEmail);
}

function toggleStar(email) {
    let copyEmail = JSON.parse(JSON.stringify(email));
    copyEmail.isStarred = !copyEmail.isStarred;
    gEmails = gEmails.map(email => copyEmail.id === email.id ? copyEmail : email);
    storageService.store('emails', gEmails);
    return Promise.resolve(copyEmail);
}

function unToggleTrash(email) {
    let copyEmail = JSON.parse(JSON.stringify(email));
    copyEmail.isTrash = false;
    gEmails = gEmails.map(email => copyEmail.id === email.id ? copyEmail : email);
    storageService.store('emails', gEmails);
    return Promise.resolve(copyEmail);
}


function getRandomId(max) {
    return Math.floor(Math.random() * max);
}

function sendEmail(email) {
    gEmails.push(email);
    storageService.store('emails', gEmails);
    eventBusService.emit('emailAdded');
    return Promise.resolve(gEmails);
}

function unreadMailCount() {
    let count = gEmails.filter(function (email) { return !email.isRead; }).length;
    if (!count) return 0;
    return count;
}


function replyEmail(reply, email) {
    let copyEmail = JSON.parse(JSON.stringify(email));
    copyEmail.replys.push(reply);
    gEmails = gEmails.map(email => copyEmail.id === email.id ? copyEmail : email);
    storageService.store('emails', gEmails);
    return Promise.resolve(copyEmail);
}