
const quotes=[
'Why did the biryani go to therapy? It had too many layers to peel.',
'How did the dosa become so successful? It was on a roll!',
'What did the samosa say to the chutney at the party? "You complete me!"',
'Why did the paneer tikka get promoted? It was grilling it at work.',
'Whats a dals favorite workout? The pulse!',
'Why did the jalebi go to school? To become well-rounded.',
'How does the pakora stay cool in summer? It takes a dip in mint chutney.',
'What did the roti say to the curry? "You are my butter half!"',
'Why did the lassi blush? Because it saw the curry!',
'Why was the naan always calm? It knew how to stay buttered up.',
'Why did the korma join the debate team? It loved to spice things up.',
'Whats the biryanis favorite type of movie? A layer cake!',
'How did the idli propose to the sambar? "You make my life complete!"',
'Why was the chole jealous of the rajma? Because rajma was always the life of the party!',
'How did the kheer win the competition? It was the sweetest of all.',
'Why did the poha go to the beach? To find some chill(i) time.',
'What did the pav bhaji say to the misal pav? "Lets spice up our lives together!"',
'Why was the aloo paratha always confident? It was stuffed with goodness.',
'How did the rasgulla handle stress? It stayed soaked in sweetness.',
'Why did the upma get a standing ovation? It always knew how to stir up a crowd!',
'Why did the butter chicken go to the party? To add some spice to the night!',
'What did the kachori say to the jalebi? "You twist me right round, baby!"',
'Why did the vada pav get an award? It was a real street-food star!',
'How did the palak paneer become so famous? It had a lot of green credentials!',
'What did the rasam say to the sambar? "You always warm my heart!"',
'Why was the bhindi masala always calm? It didnt want to be in a pickle.',
'What did the bhel puri say after the joke? "That was really corny!"',
'Why did the fish curry get a promotion? It was swimming in success!',
'What did the kheer say to the gulab jamun at the dessert table? "Youre my sugar rush!"',
'Why did the chaat feel proud? Because it had all the right tang!',
'How did the aloo tikki become a detective? It knew how to fry out the truth.',
'Why was the masala chai always invited to meetings? It knew how to brew ideas!',
'What did the dhokla say to the thepla? "Youre my roll model!"',
'Why did the poori go to the beach? To catch some sun and puff up!',
'What did the pav bhaji say to the pani puri? "Were a match made in Mumbai!"',
'Why did the rajma chawal always get the job done? It had beans of steel!',
'What did the halwa say to the ladoo? "You make my life sweet!"',
'Why did the biryani get a second helping? It was rice and shine time!',
'What did the sevai say to the upma? "You noodle your way into my heart!"',
'Why was the paneer butter masala always happy? It was rich in flavor and friends!'
];

const urls={
    "hfus":['https://www.hellofresh.com/menus','assets/usflag.svg'],
    "hfgb":['https://www.hellofresh.co.uk/menus','assets/ukflag.svg'],
    "hfde":['https://www.hellofresh.de/menus','assets/deflag.svg'],
    "hfir":['https://www.hellofresh.ir/menus','assets/irflag.svg'],
    "hfca":['https://www.hellofresh.ca/menus','assets/caflag.svg'],
    "hffr":['https://www.hellofresh.fr/menus','assets/frflag.svg'],
    "hfnl":['https://www.hellofresh.nl/menus','assets/nlflag.svg'],
    "hfau":['https://www.hellofresh.com.au/menus','assets/auflag.svg'],
    "hfit":['https://www.hellofresh.it/menus','assets/itflag.svg']
};

document.getElementsByClassName('quote1')[0].textContent=quotes[Math.floor(Math.random()*quotes.length)];
if(Math.random()>.5){
    document.getElementsByClassName('pincrx')[0].style.display="block";
    document.getElementsByClassName('pincrx')[0].textContent = "Pin the extension for best experience";
    document.getElementsByClassName('pincrx1')[0].style.display="block";
    setTimeout(()=>{
        document.getElementsByClassName('pincrx')[0].style.display="none";
        document.getElementsByClassName('pincrx1')[0].style.display="none";
    },15000);
}

    var links=document.querySelectorAll('div.hf');
    Array.from(links).forEach((e)=>{
        var imageurl=urls[e.getAttribute('id')][1];
        e.addEventListener('click',(event)=>{
            chrome.tabs.create({url:event.target.getAttribute('alt')});
        });
        
    });













