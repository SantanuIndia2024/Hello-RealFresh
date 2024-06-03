var url1 = window.location.href;

const links={
	'':'https://www.instacart.com/',
'Aldi':'https://www.instacart.com/store/aldi/',
'Ralphs':'https://www.instacart.com/store/ralphs/',
'Costco':'https://www.instacart.com/store/costco/',
'Smart-Final':'https://www.instacart.com/store/smart-final/',
'Sprouts':'https://www.instacart.com/store/sprouts/',
'Target':'https://www.instacart.com/store/target/',
'Walmart':'https://www.instacart.com/store/walmart/',
'Restaurant-Depot':'https://www.instacart.com/store/restaurant-depot/',
'Staples':'https://www.instacart.com/store/staples/',
'Costco-Business-Center':'https://www.instacart.com/store/costco-business-center/',
'Vons':'https://www.instacart.com/store/vons/',
'Ralphs-Delivery-Now':'https://www.instacart.com/store/ralphs-delivery-now/',
'Pavilions':'https://www.instacart.com/store/pavilions/',
'Gelsons':'https://www.instacart.com/store/gelsons/',
'Cvs':'https://www.instacart.com/store/cvs/',
'Walgreens':'https://www.instacart.com/store/walgreens/',
'Total-Wine-More':'https://www.instacart.com/store/total-wine-more/',
'Office-Depot-Officemax':'https://www.instacart.com/store/office-depot-officemax/',
'Sams-Club':'https://www.instacart.com/store/sams-club/',
'Sprouts-Express':'https://www.instacart.com/store/sprouts-express/',
'Bristol-Farms':'https://www.instacart.com/store/bristol-farms/',
'Best-Buy':'https://www.instacart.com/store/best-buy/',
'Lazy-Acres-Express-Lane':'https://www.instacart.com/store/lazy-acres-express-lane/',
'Bevmo':'https://www.instacart.com/store/bevmo/',
'Albertsons':'https://www.instacart.com/store/albertsons/',
'Food-4-Less-Kroger':'https://www.instacart.com/store/food-4-less-kroger/',
'Michaels':'https://www.instacart.com/store/michaels/',
'The-Home-Depot':'https://www.instacart.com/store/the-home-depot/',
'Sephora':'https://www.instacart.com/store/sephora/',
'Lowes-Home-Improvement':'https://www.instacart.com/store/lowes-home-improvement/',
'Food4Less-Delivery-Now':'https://www.instacart.com/store/food4less-delivery-now/',
'Target-Fast-Delivery':'https://www.instacart.com/store/target-fast-delivery/',
'Mission-Wine-Spirits':'https://www.instacart.com/store/mission-wine-spirits/',
'Seafood-City-Supermarket':'https://www.instacart.com/store/seafood-city-supermarket/',
'Erewhon':'https://www.instacart.com/store/erewhon/',
'Fresco-Community-Market':'https://www.instacart.com/store/fresco-community-market/',
'Rite-Aid':'https://www.instacart.com/store/rite-aid/',
'Lazy-Acres':'https://www.instacart.com/store/lazy-acres/',
'Vitamin-Shoppe':'https://www.instacart.com/store/vitamin-shoppe/',
'Lassens-Natural-Foods-Vitamins':'https://www.instacart.com/store/lassens-natural-foods-vitamins/',
'Family-Dollar':'https://www.instacart.com/store/family-dollar/',
'99-Ranch-Market':'https://www.instacart.com/store/99-ranch-market/',
'Five-Below':'https://www.instacart.com/store/five-below/',
'Dicks-Sporting-Goods':'https://www.instacart.com/store/dicks-sporting-goods/',
'Tokyo-Central':'https://www.instacart.com/store/tokyo-central/',
'The-Container-Store':'https://www.instacart.com/store/the-container-store/',
'Stater-Bros':'https://www.instacart.com/store/stater-bros/',
'Hmart':'https://www.instacart.com/store/hmart/',
'Northgate-Market':'https://www.instacart.com/store/northgate-market/',
'Bath-And-Body-Works':'https://www.instacart.com/store/bath-and-body-works/',
'Marukai-Market':'https://www.instacart.com/store/marukai-market/',
'168-Market':'https://www.instacart.com/store/168-market/',
'R-Ranch-Markets':'https://www.instacart.com/store/r-ranch-markets/',
'Yucca-Supermarket':'https://www.instacart.com/store/yucca-supermarket/',
'Cravings-By-99-Ranch-Market':'https://www.instacart.com/store/cravings-by-99-ranch-market/',
'Grocery-Outlet':'https://www.instacart.com/store/grocery-outlet/',
'Mel-Rose-Wine-Spirits':'https://www.instacart.com/store/mel-rose-wine-spirits/',
'Quicklly-Grocery':'https://www.instacart.com/store/quicklly-grocery/',
'Baja-Ranch-Supermarket':'https://www.instacart.com/store/baja-ranch-supermarket/',
'Pressed':'https://www.instacart.com/store/pressed/',
'Cardenas-Marketplace':'https://www.instacart.com/store/cardenas-marketplace/',
'Earthwise-Pet':'https://www.instacart.com/store/earthwise-pet/',
'Everytable':'https://www.instacart.com/store/everytable/',
'Super-A-Food':'https://www.instacart.com/store/super-a-food/',
'Adams-Liquor-Bottle-Shop':'https://www.instacart.com/store/adams-liquor-bottle-shop/',
'Kiehls-Us':'https://www.instacart.com/store/kiehls-us/',
'Camping-World':'https://www.instacart.com/store/camping-world/',
'Finish-Line':'https://www.instacart.com/store/finish-line/',
'Jd-Sports':'https://www.instacart.com/store/jd-sports/',
'Pico-Liquor':'https://www.instacart.com/store/pico-liquor/',
'Valley-Market-And-Liquor':'https://www.instacart.com/store/valley-market-and-liquor/',
'Pet-Food-Express':'https://www.instacart.com/store/pet-food-express/',
'At-Home':'https://www.instacart.com/store/at-home/',
'Sally-Beauty':'https://www.instacart.com/store/sally-beauty/',
'Western-Kosher':'https://www.instacart.com/store/western-kosher/',
'Robert-Burns-Wines':'https://www.instacart.com/store/robert-burns-wines/',
'Cork-Runner-Wine-Spirits':'https://www.instacart.com/store/cork-runner-wine-spirits/',
'Petsmart':'https://www.instacart.com/store/petsmart/',
'Kohls':'https://www.instacart.com/store/kohls/',
'Golf-Galaxy':'https://www.instacart.com/store/golf-galaxy/',
'Vegan-Popup-By-Xmarket':'https://www.instacart.com/store/vegan-popup-by-xmarket/',
'Newport-Wine-Spirits':'https://www.instacart.com/store/newport-wine-spirits/',
'Mitsuwa-Marketplace':'https://www.instacart.com/store/mitsuwa-marketplace/',
'Livonia-Glatt-Market':'https://www.instacart.com/store/livonia-glatt-market/',
'Co-Opportunity':'https://www.instacart.com/store/co-opportunity/',
'Valley-Marketplace':'https://www.instacart.com/store/valley-marketplace/',
'Bristol-Farms-Fast':'https://www.instacart.com/store/bristol-farms-fast/',
'Healthy-Spot':'https://www.instacart.com/store/healthy-spot/',
'Big-Lots':'https://www.instacart.com/store/big-lots/',
'Superior-Grocers':'https://www.instacart.com/store/superior-grocers/',
'Vicente-Foods':'https://www.instacart.com/store/vicente-foods/',
'The-Wine-Shop':'https://www.instacart.com/store/the-wine-shop/',
'Super-Sal':'https://www.instacart.com/store/super-sal/',
'The-Market-By-Superior':'https://www.instacart.com/store/the-market-by-superior/',
'Eataly':'https://www.instacart.com/store/eataly/',
'Mothers-Market':'https://www.instacart.com/store/mothers-market/',
'Wholesome-Choice-Market':'https://www.instacart.com/store/wholesome-choice-market/',
'Jetro':'https://www.instacart.com/store/jetro/',
'El-Super':'https://www.instacart.com/store/el-super/',
'Super-King':'https://www.instacart.com/store/super-king/',
'Extra-Mile':'https://www.instacart.com/store/extra-mile/',
'H-S':'https://www.instacart.com/store/h-s/',
'Diamond-Fresh-Farmers-Market':'https://www.instacart.com/store/diamond-fresh-farmers-market/',
'Altayebat-Market':'https://www.instacart.com/store/altayebat-market/',
'Fresh-Choice-Marketplace':'https://www.instacart.com/store/fresh-choice-marketplace/',
'Harvest-Fresh-Market':'https://www.instacart.com/store/harvest-fresh-market/',
'Hawaii-Supermarket':'https://www.instacart.com/store/hawaii-supermarket/',
'Dollar-Tree':'https://www.instacart.com/store/dollar-tree/',
'Green-Farm-Market':'https://www.instacart.com/store/green-farm-market/',
' 711':'https://www.instacart.com/store/711/',
'Aldi-Express':'https://www.instacart.com/store/aldi-express/',
'Petco':'https://www.instacart.com/store/petco/',
'Vallarta-Supermarkets':'https://www.instacart.com/store/vallarta-supermarkets/',
'Grow':'https://www.instacart.com/store/grow'
};

const foodItems = [
    // Vegetables
    "sweet potatoes","red onion","baby lettuce","diced chicken thighs","black beans","mushroom","ground turkey","scallions","ground beef","chicken cutlets","chicken breast","chopped chicken breast","green bell pepper","red bell pepper","yellow bell pepper","bell pepper","carrot", "broccoli", "spinach", "potato", "tomato", "onion", "garlic", "pepper", "cabbage", "lettuce", "cucumber", "zucchini", "eggplant", "cauliflower", "mushroom", "peas", "green beans", "corn", "kale", "sweet potato", "radish", "turnip", "beetroot", "asparagus", "brussels sprouts", "celery", "chard", "leek", "pumpkin", "squash", "artichoke", "bok choy", "collard greens", "fennel", "okra", "parsnip", "shallot", "scallion",

    // Fruits
    "apple", "banana", "orange", "grape", "pineapple", "mango", "strawberry", "blueberry", "raspberry", "blackberry", "watermelon", "cantaloupe", "honeydew", "cherry", "peach", "plum", "nectarine", "kiwi", "papaya", "pomegranate", "pear", "apricot", "fig", "grapefruit", "lemon", "lime", "tangerine", "mandarin", "coconut", "date", "dragon fruit", "guava", "jackfruit", "lychee", "passion fruit", "persimmon", "quince", "starfruit",

    // Proteins
    "egg", "beef", "chicken", "pork", "lamb", "turkey", "duck", "shrimp", "fish", "salmon", "tuna", "cod", "trout", "crab", "lobster", "scallop", "mussels", "clams", "octopus", "squid", "tofu", "tempeh", "lentils", "chickpeas", "beans", "peas", "edamame", "quinoa", "nuts", "seeds", "peanut", "almond", "walnut", "cashew", "pistachio", "sunflower seed", "pumpkin seed", "chia seed", "hemp seed", "soybean",

    // Cereals
    "oats", "barley", "cornflakes", "rice krispies", "wheat flakes", "millet", "sorghum", "quinoa", "buckwheat", "amaranth", "bulgur", "farro", "spelt", "teff", "triticale", "rye", "kamut", "freekeh", "couscous",

    // Milk products
    "milk", "cheese", "butter", "yogurt", "cream", "sour cream", "cottage cheese", "cream cheese", "ice cream", "buttermilk", "kefir", "ghee", "whey", "ricotta", "mozzarella", "cheddar", "parmesan", "gouda", "feta", "brie", "camembert", "swiss cheese", "blue cheese", "halloumi",

    // Rice/Wheat items
    "rice", "brown rice", "white rice", "basmati rice", "jasmine rice", "wild rice", "arborio rice", "sushi rice", "noodles", "spaghetti", "fettuccine", "penne", "macaroni", "lasagna", "bread", "bagel", "bun", "roll", "pita", "naan", "tortilla", "chapati", "roti", "pasta", "pizza", "muffin", "croissant", "donut", "biscuit", "scone", "ciabatta", "baguette", "brioche", "focaccia", "sourdough"
];
const pantryItems = [
    // Spices
    "basil","italian seasoning","cilantro","sesame seeds","sunflower seeds","ground cumin", "bay leaf", "black pepper", "cayenne pepper", "chili powder", "cinnamon", "clove", "coriander", "cumin", "curry powder", "dill", "fennel", "garlic powder", "ginger", "nutmeg", "oregano", "paprika", "parsley", "rosemary", "saffron", "sage", "tarragon", "thyme", "turmeric", "vanilla", "mustard seed", "anise", "cardamom", "caraway", "cinnamon stick", "fenugreek", "mace", "marjoram", "star anise", "sumac", "white pepper", "chili flakes", "asafoetida",

    // Sauces
    "soy sauce", "tomato sauce", "barbecue sauce", "hot sauce", "teriyaki sauce", "hoisin sauce", "worcestershire sauce", "fish sauce", "pesto", "salsa", "tzatziki", "guacamole", "ketchup", "mayonnaise", "mustard", "tartar sauce", "chimichurri", "buffalo sauce", "ranch dressing", "caesar dressing", "vinaigrette", "honey mustard", "sriracha", "marinara sauce", "alfredo sauce", "bolognese sauce", "bechamel sauce", "hollandaise sauce",

    // Concentrates
    "tomato paste", "lemon juice concentrate", "orange juice concentrate", "beef bouillon", "chicken bouillon", "vegetable bouillon", "miso paste", "coconut milk powder", "tamarind paste", "vanilla extract", "almond extract", "maple extract", "mint extract", "lime juice concentrate", "apple juice concentrate",

    // Food Liquid Items
    "olive oil","cooking oil", "vegetable oil", "canola oil", "coconut oil", "sesame oil", "peanut oil", "sunflower oil", "grapeseed oil", "vinegar", "apple cider vinegar", "balsamic vinegar", "white vinegar", "red wine vinegar", "rice vinegar", "fish sauce", "soy sauce", "worcestershire sauce", "syrup", "honey", "molasses", "corn syrup", "maple syrup", "agave nectar", "almond milk", "soy milk", "coconut milk", "rice milk", "oat milk",

    // Other Powder Items
    "flour", "sugar", "salt", "baking powder", "baking soda", "cocoa powder", "powdered sugar", "cornstarch", "gelatin", "agar agar", "yeast", "protein powder", "matcha powder", "instant coffee", "dry milk powder", "custard powder", "curry powder", "paprika", "cinnamon", "garlic powder", "onion powder", "ginger powder", "mustard powder", "chili powder", "five spice powder", "cumin powder", "clove powder", "nutmeg powder", "tamarind powder", "turmeric powder"
];

function refresh(){
	if(JSON.parse(localStorage.getItem('grocerypricehistory'))===null){
		grocerypricehistory={};
	}else{
		grocerypricehistory= JSON.parse(localStorage.getItem('grocerypricehistory'));
	}

	if(url1.includes('indiansupermarkt.de/')&& !url1.includes('indiansupermarkt.de/cart')){    //check if new price already displayed
		if(document.getElementsByClassName('pricehistory')[0]===undefined)
		{	productcard = document.getElementsByClassName('product-card__info');
			//if not available then set the price
			Array.from(productcard).forEach((e)=>{
				if(e.getElementsByClassName('product-card__availability')[0]===undefined)
				{
					name1 = e.getElementsByClassName('product-card__name')[0].innerText;
					
					if(grocerypricehistory[name1]===undefined){
						e.style.color='green';
						text1=e.getElementsByClassName('product-card__price')[0].innerText;
						splitter =text1.indexOf('€');
						grocerypricehistory[name1]=Number(text1.slice(splitter+1,splitter+6).replace(/,/g,'.').replace(/\n/g,''));
					}else{
						text2=e.getElementsByClassName('product-card__price')[0].innerText;
						splitter =text2.indexOf('€');
						text2price=Number(text2.slice(splitter+1,splitter+6).replace(/,/g,'.').replace(/\n/g,''));
						if(grocerypricehistory[name1]<text2price)
						{	if(e.getElementsByClassName('oldprice')[0]===undefined)
							{
								e.style.color='red';
								oldprice = document.createElement('span');
								oldprice.classList.add('oldprice');
								oldprice.style.color='white';
								oldprice.style.background='darkgreen';
								oldprice.style.padding="2px";	
								oldprice.textContent="increased "+Math.floor(text2price*100/grocerypricehistory[name1]-100)+"% from €"+grocerypricehistory[name1];
								e.getElementsByClassName('product-card__price')[0].appendChild(oldprice);
							}
						}else{
							e.style.color='green';
							grocerypricehistory[name1]=Number(text2.slice(splitter+1,splitter+6).replace(/,/g,'.').replace(/\n/g,''));
						}
					}
				}
			});
			localStorage.setItem('grocerypricehistory',JSON.stringify(grocerypricehistory));
			//check if available and change color with data
			if(document.getElementsByClassName('notificationpromo1')[0]===undefined)
			{
				notificationpromo1= document.createElement('div');
				notificationpromo1.textContent="price changes updated";
				notificationpromo1.classList.add('notificationpromo1');
				document.getElementById('NotificationPromo').appendChild(notificationpromo1);
				notificationpromo1.style="color:green; background:rgb(232,247, 233);text-align:center";
			}
		}
		  
	}else if(url1.includes('indiansupermarkt.de/cart')){
		cartpricelist= document.getElementsByClassName('cart__row responsive-table__row');
	
		Array.from(cartpricelist).forEach((e)=>{
			if(e.getElementsByClassName('cart__cell--total')[0]!==undefined){
				name1 = e.getElementsByTagName('td')[1].getElementsByTagName('a')[0].innerText;
				if(grocerypricehistory[name1]!==undefined){
					text2=e.getElementsByClassName('cart__item-total')[0].innerText;
					splitter =text2.indexOf('€');
					text2price=Number(text2.slice(splitter+1,splitter+6).replace(/,/g,'.').replace(/\n/g,''));

					if(grocerypricehistory[name1]<text2price)
						{	if(e.getElementsByClassName('oldprice')[0]===undefined)
							{	var grocery1=name1;
								e.style.color='red';
								quantity=e.getElementsByClassName('cart__cell--quantity')[0].getElementsByTagName('input')[0].value;
								linebreak=document.createElement('br');
								oldprice = document.createElement('span');
								oldprice.classList.add('oldprice');
								oldprice.style.color='green';	
								oldprice.textContent="increased "+Math.floor((text2price/quantity)*100/grocerypricehistory[name1]-100)+"% from €"+grocerypricehistory[name1];
								e.getElementsByClassName('cart__item-total')[0].parentElement.appendChild(linebreak);
								e.getElementsByClassName('cart__item-total')[0].parentElement.appendChild(oldprice);

								store1=document.createElement('a');
								store1.href='https://zorastore.eu/search?q='+grocery1;
								store1.target='_blank';
								store1.classList.add('otherstore');
								store2=document.createElement('a');
								store2.href='https://tsfoods.de/index.php?controller=search&s='+grocery1.replace(/ /g,'+').replace(/[()]/g,'').slice(0,20);
								store2.target='_blank';
								store2.classList.add('otherstore');

								store3=document.createElement('a');
								store3.href='https://wolt.com/en/search?q='+grocery1.slice(0,grocery1.indexOf(' '))+'&target=items';
								store3.target='_blank';
								store3.classList.add('otherstore');
								
								store4=document.createElement('a');
								store4.href='https://www.rewe.de/suche/produkte?search='+grocery1.slice(0,grocery1.indexOf(' '));
								store4.target='_blank';
								store4.classList.add('otherstore');

								store5=document.createElement('a');
								store5.href='https://www.goflink.com/de-DE/shop/search/?q='+grocery1.slice(0,grocery1.indexOf(' '));
								store5.target='_blank';
								store5.classList.add('otherstore');

								store6=document.createElement('a');
								store6.href='https://www.ubereats.com/de/search?searchType=GLOBAL_SEARCH&vertical=SHOP&q='+grocery1.replace(/ /g,'+').replace(/[()]/g,'').slice(0,20);
								store6.target='_blank';
								store6.classList.add('otherstore');

								e.getElementsByTagName('td')[1].appendChild(store1);
								e.getElementsByTagName('td')[1].appendChild(store2);
								e.getElementsByTagName('td')[1].appendChild(store3);
								e.getElementsByTagName('td')[1].appendChild(store4);
								e.getElementsByTagName('td')[1].appendChild(store5);
								e.getElementsByTagName('td')[1].appendChild(store6);

								searchother=document.createElement('button');
								searchother.classList.add('searchother');
								searchother.textContent='Search other stores';
								e.getElementsByTagName('td')[1].appendChild(searchother);
								searchother.addEventListener('click',(g)=>{
									g.preventDefault();
									Array.from(e.getElementsByClassName('otherstore')).forEach((f)=>{
										f.click();
									})
								});

							}
						}else{
							if(e.getElementsByClassName('otherstore')[0]===undefined)
							{
								var grocery1=name1;
								quantity=e.getElementsByClassName('cart__cell--quantity')[0].getElementsByTagName('input')[0].value;
									
								store1=document.createElement('a');
								store1.href='https://zorastore.eu/search?q='+grocery1;
								store1.target='_blank';
								store1.classList.add('otherstore');

								store2=document.createElement('a');
								store2.href='https://tsfoods.de/index.php?controller=search&s='+grocery1.replace(/ /g,'+').replace(/[()]/g,'').slice(0,20);
								store2.target='_blank';
								store2.classList.add('otherstore');

								store3=document.createElement('a');
								store3.href='https://wolt.com/en/search?q='+grocery1.slice(0,grocery1.indexOf(' '))+'&target=items';
								store3.target='_blank';
								store3.classList.add('otherstore');
								
								store4=document.createElement('a');
								store4.href='https://www.rewe.de/suche/produkte?search='+grocery1.slice(0,grocery1.indexOf(' '));
								store4.target='_blank';
								store4.classList.add('otherstore');

								store5=document.createElement('a');
								store5.href='https://www.goflink.com/de-DE/shop/search/?q='+grocery1.slice(0,grocery1.indexOf(' '));
								store5.target='_blank';
								store5.classList.add('otherstore');

								store6=document.createElement('a');
								store6.href='https://www.ubereats.com/de/search?searchType=GLOBAL_SEARCH&vertical=SHOP&q='+grocery1.slice(0,grocery1.indexOf(' '));
								store6.target='_blank';
								store6.classList.add('otherstore');

								e.getElementsByTagName('td')[1].appendChild(store1);
								e.getElementsByTagName('td')[1].appendChild(store2);
								e.getElementsByTagName('td')[1].appendChild(store3);
								e.getElementsByTagName('td')[1].appendChild(store4);
								e.getElementsByTagName('td')[1].appendChild(store5);
								e.getElementsByTagName('td')[1].appendChild(store6);

								searchother=document.createElement('button');
								searchother.classList.add('searchother');
								searchother.textContent='Search other stores';
								e.getElementsByTagName('td')[1].appendChild(searchother);
								searchother.addEventListener('click',(g)=>{
									g.preventDefault();
									Array.from(e.getElementsByClassName('otherstore')).forEach((f)=>{
										f.click();
									})
								});
							}
							e.style.color='green';
							grocerypricehistory[name1]=Number(text2.slice(splitter+1,splitter+6).replace(/,/g,'.').replace(/\n/g,''));
						}
					

				}

			}

		});
		localStorage.setItem('grocerypricehistory',JSON.stringify(grocerypricehistory));

	} 
}
refresh();

function hfinfo(){
	if(url1.includes('https://hfresh.info/us-en/shopping-list')&& document.getElementsByClassName('groceryitems')[0]===undefined){
		shoppinglistitems= document.querySelectorAll('section.card')[1].getElementsByTagName('table');
		var pantryitemslist=[];
		var groceryitemslist=[];
		var otheritemslist=[];
		Array.from(shoppinglistitems).forEach((e)=>{
			counter=0;
			foodItems.forEach((f)=>{
				if(e.innerText.toLowerCase().includes(f)){
					groceryitemslist.push(e);
					counter++;
				}
			});
			pantryItems.forEach((f)=>{
				if(e.innerText.toLowerCase().includes(f)){
					pantryitemslist.push(e);
					counter++;
				}
			});
			if(counter==0){
				otheritemslist.push(e);
			}

		});

		Array.from(shoppinglistitems).forEach((a)=>{a.remove();});
		
		tableparent= document.querySelectorAll('section.card')[1].firstChild.nextSibling;
		x=document.createElement('div');
		x.textContent='Grocery Items';
		tableparent.appendChild(x);
		x.classList.add('groceryitems');
		
		groceryitemslist.forEach((b)=>{
			tableparent.appendChild(b);
		});
		y=document.createElement('div');
		y.textContent='Pantry Items';
		tableparent.appendChild(y);
		y.classList.add('pantryitems');
		pantryitemslist.forEach((b)=>{
			tableparent.appendChild(b);
		});

	}
}
function addtocart(){
	if(localStorage.getItem('hfshoppinglist')===null){
		shoppinglist={};
	}else{
		shoppinglist=JSON.parse(localStorage.getItem('hfshoppinglist'));
	}

	recipename=document.getElementsByClassName('web-1ajpcja')[0].innerText;

	if(shoppinglist[recipename]===undefined){
		fullrecipelink=document.querySelectorAll('div.web-1svqq9 a.sc-9394dad-0.dIJNPL')[0].href;

		ingredientlist=[];
		ingredienthtml=document.querySelectorAll('div.web-1iuj5ih span.web-12wkbvj');
		Array.from(ingredienthtml).forEach((e)=>{
			ingredientlist.push(e.innerText);
		});
		shoppinglist[recipename]=[ingredientlist,fullrecipelink];
	}
	localStorage.setItem('hfshoppinglist',JSON.stringify(shoppinglist));
}
function removefromcart(){
	if(localStorage.getItem('hfshoppinglist')===null){
		shoppinglist={};
	}else{
		shoppinglist=JSON.parse(localStorage.getItem('hfshoppinglist'));
	}

	recipename=document.getElementsByClassName('web-1ajpcja')[0].innerText;

	if(shoppinglist[recipename]!==undefined){
		
		delete shoppinglist[recipename];
	}
	localStorage.setItem('hfshoppinglist',JSON.stringify(shoppinglist));
}

function addtocartbutton(buttontext){
	
	x=document.getElementsByClassName('web-i2y57x')[0];
	if(x.getElementsByClassName('addtocartbutton')[0]===undefined && x.getElementsByClassName('removefromcartbutton')[0]===undefined)
	{

		y=document.createElement('a');
		x.appendChild(y);
		if(buttontext=='Add'){
			y.innerText="Add to Cart";
			y.classList.add('addtocartbutton');
			
		}else if(buttonText=='Remove'){
			y.innerText="Remove";
			y.classList.add('removefromcartbutton');
			

		}
		y.addEventListener('click',(e)=>{
			e.stopPropagation();
			if(y.innerText=="Add to Cart"){
				addtocart();
				y.innerText="Added";
				setTimeout(()=>{
					y.innerText="Remove";
					y.classList.remove('addtocartbutton');
					y.classList.add('removefromcartbutton');
				},1000);
			}else{
				removefromcart();
				
				y.innerText="Removed";
				setTimeout(()=>{
					y.innerText="Add to Cart";
					y.classList.remove('removefromcartbutton');
					y.classList.add('addtocartbutton');
				},1000);

			}
			if(document.getElementsByClassName('cartpage1')[0]!==undefined){
				document.getElementsByClassName('refreshcartbutton')[0].click();
			}
			
			
		});
	}
}

function createbuylink(createlinks){
	selectedstore=document.getElementsByClassName('selectElement')[0].value;
	
	linkparent=document.getElementsByClassName('ingredientsincart');
	if(linkparent[0]!==undefined){
		Array.from(linkparent).forEach((e)=>{
			
					if(e.getElementsByClassName('buylink')[0]===undefined){
						buylink=document.createElement('a');
						
						if(selectedstore==''){
							buylink.href='';
							buylink.classList.add('disabled');
						}else{
							buylink.href=links[selectedstore]+'s?k='+e.innerText;

							buylink.classList.remove('disabled');
						}
						buylink.setAttribute('alt',e.innerText);

						buylink.target='_blank';
						buylink.textContent='Buy';
						buylink.classList.add('buylink');
						e.appendChild(buylink);
				
					}else{
						buylink=e.getElementsByClassName('buylink')[0];
						if(selectedstore==''){
							buylink.href='';
							buylink.classList.add('disabled');
							
						}else{

							buylink.href=links[selectedstore]+'s?k='+buylink.getAttribute('alt');
							buylink.classList.remove('disabled');
							
						}

					}
			
		});
	}

	//buyall link
	titleparent=document.getElementsByClassName('carttitle');
	if(titleparent[0]!==undefined){
		Array.from(titleparent).forEach((e)=>{
				if(e.firstChild.innerText!=="Selected Recipes"){
					if(e.getElementsByClassName('buyalllink')[0]===undefined){
						buyalllink=document.createElement('a');
						buyalllink.textContent="Buy All";
						buyalllink.classList.add('buyalllink');
						e.appendChild(buyalllink);
						childlinks=e.parentElement.getElementsByClassName('buylink');
						buyalllink.addEventListener('click',(event)=>{
							currentelement=event.target;
							Array.from(currentelement.parentElement.parentElement.getElementsByClassName('buylink')).forEach((e)=>{
								e.click();
							});
						});
					}
					if(selectedstore==''){

						e.getElementsByClassName('buyalllink')[0].style.display='none';
					}else{
						e.getElementsByClassName('buyalllink')[0].style.display='block';
					}
					
				}
			
		//ifselectedstoreis'' then disablebutton else enable button
		});
		
	}
	if(selectedstore==''){
		document.getElementsByClassName('storecontainer')[0].firstChild.style.background="yellow";
		document.getElementsByClassName('storecontainer')[0].firstChild.innerText="Select nearby Store";
	}else{
		document.getElementsByClassName('storecontainer')[0].firstChild.style.background="white";
		document.getElementsByClassName('storecontainer')[0].firstChild.innerText="";
	}
}
function refreshcart(){
	document.getElementsByClassName('shoppingcartbutton')[0].click();
	setTimeout(()=>{
		document.getElementsByClassName('shoppingcartbutton')[0].click();
	},200);
}

function cartdisplay(){
	cartpage=document.getElementsByClassName('cartpage1')[0];
	
	if(cartpage===undefined){
		shoppingcart= JSON.parse(localStorage.getItem('hfshoppinglist'));

		//createcartpage
		cartpage1=document.createElement('div');
		cartpage1.classList.add('cartpage1');

		//header
		cartheader=document.createElement('div');
		cartheader.classList.add('cartheader1');
		cartheader.textContent="Shopping Cart";

		refreshcartbutton=document.createElement('img');
		url2=chrome.runtime.getURL('assets/refresh_icon.png');
		refreshcartbutton.src=url2;
		refreshcartbutton.classList.add('refreshcartbutton');
		refreshcartbutton.addEventListener('click',()=>{
			refreshcart();
		});

		cartheader.appendChild(refreshcartbutton);
		cartpage1.appendChild(cartheader);
		
		//storecontainer
		storecontainer=document.createElement('div');
		storecontainer.classList.add('storecontainer');
		storecontainer.innerHTML="<span style='padding:5px 0px 5px 0px'></span>";
		cartpage1.appendChild(storecontainer);

		//stores
		selectElement = document.createElement('select');
		selectElement.classList.add('selectElement');
		storecontainer.appendChild(selectElement);
            
		// Loop through the options array and create <option> elements
		Object.keys(links).forEach(optionText => {
			const optionElement = document.createElement('option');
			optionElement.classList.add('option1')
			optionElement.value = optionText; // Set the value attribute
			optionElement.textContent = optionText; // Set the displayed text
			selectElement.appendChild(optionElement); // Add the option to the select
		});
		if(selectElement.value==''){
			selectElement.parentElement.firstChild.style.background="yellow";
			selectElement.parentElement.firstChild.innerText="Select Store";
			selectElement.parentElement.firstChild.style.marginRight="5px";

		}else{
			selectElement.parentElement.firstChild.style.background="white";
			selectElement.parentElement.firstChild.innerText="";
		}

		//select element event listener
		selectElement.addEventListener('change',()=>{
			createbuylink(false);
		});
		//cta
		cartctacontainer=document.createElement('div');
		cartctacontainer.classList.add('cartctacontainer');

		//recipes
		recipeitems1=document.createElement('div');
		recipetitle=document.createElement('div');
		recipetitle.innerHTML="<span class='cartrecipetitleinner'>Selected Recipes</span><span class='clearrecipes'>Clear</span>";
		recipetitle.classList.add('carttitle');
		recipeitems1.appendChild(recipetitle);
		recipeitems1.classList.add('recipeitems1');
		



		//grocery
		groceryitems1=document.createElement('div');
		grocerytitle=document.createElement('div');
		grocerytitle.innerHTML="<span class='carttitleinner'>Grocery Items</span>";
		grocerytitle.classList.add('carttitle');
		groceryitems1.appendChild(grocerytitle);
		groceryitems1.classList.add('groceryitems1');
		//pantry
		pantryitems1=document.createElement('div');
		pantrytitle=document.createElement('div');
		pantrytitle.classList.add('carttitle');
		pantrytitle.innerHTML="<span class='carttitleinner'>Pantry Items</span>";
		pantryitems1.appendChild(pantrytitle);
		pantryitems1.classList.add('pantryitems1');
		//others
		otheritems1=document.createElement('div');
		othertitle=document.createElement('div');
		othertitle.classList.add('carttitle');
		othertitle.innerHTML="<span class='carttitleinner'>Other Items</span>";
		otheritems1.appendChild(othertitle);
		otheritems1.classList.add('otheritems1');

		spiceblend=document.createElement('a');
		spiceblend.classList.add('spiceblend');
		spiceblend.textContent="Spice Blends";
		spiceblend.href="https://i.imgur.com/Bv3JZgx.png";
		spiceblend.setAttribute('target','_blank');
		spiceblend.innerHTML="Spice Blends";


		cartcontents=document.createElement('div');
		cartcontents.classList.add('cartcontents')
		cartpage1.appendChild(cartcontents);

		cartcontents.appendChild(recipeitems1);
		cartcontents.appendChild(groceryitems1);
		cartcontents.appendChild(pantryitems1);
		cartcontents.appendChild(otheritems1);
		cartcontents.appendChild(spiceblend);
		cartpage1.appendChild(cartctacontainer);

		
		

		document.getElementsByClassName('web-jzsp47')[0].appendChild(cartpage1);
		//clear cart function
		
		
		document.getElementsByClassName('clearrecipes')[0].addEventListener('click',()=>{
			localStorage.setItem('hfshoppinglist',JSON.stringify({}));
			refreshcart();
		});
		

		
		//recipenames
		recipes2= Object.entries(shoppingcart);
		recipes2.forEach((g)=>{
			recipename2=document.createElement('div');
			recipename2.innerHTML="<a target='_blank' href="+g[1][1]+">"+g[0]+"</a>";
			
			recipename2.classList.add('recipenameincart');

			removerecipe=document.createElement('span');
			removerecipe.textContent="x";
			removerecipe.classList.add('removerecipe');
			removerecipe.addEventListener('click',()=>{
				tempshoppingcart= JSON.parse(localStorage.getItem('hfshoppinglist'));
				recipename3=removerecipe.parentElement.firstChild.innerText;
				delete tempshoppingcart[recipename3];
				localStorage.setItem('hfshoppinglist',JSON.stringify(tempshoppingcart));
				refreshcart();
				return ;
			});
			recipename2.appendChild(removerecipe);

			document.getElementsByClassName('recipeitems1')[0].appendChild(recipename2);
			
		});

		groceryset= new Set();
		pantryset=new Set();
		otherset=new Set();
		shoppingcart= JSON.parse(localStorage.getItem('hfshoppinglist'));
		Object.entries(shoppingcart).forEach((h)=>{
			h[1][0].forEach((i)=>{
				if(foodItems.includes(i.toLowerCase())){
					//enter in grocery
					groceryset.add(i);
					// groceryname2=document.createElement('div');
					// groceryname2.textContent=i;
					// groceryname2.classList.add('grocerynameincart');
					// document.getElementsByClassName('groceryitems1')[0].appendChild(groceryname2);
				}else if(pantryItems.includes(i.toLowerCase())){
					//enter in pantry
					pantryset.add(i);
					// pantryname2=document.createElement('div');
					// pantryname2.textContent=i;
					// pantryname2.classList.add('pantrynameincart');
					// document.getElementsByClassName('pantryitems1')[0].appendChild(pantryname2);
				}else{
					//enter in others
					otherset.add(i);
					// othername2=document.createElement('div');
					// othername2.textContent=i;
					// othername2.classList.add('othernameincart');
					// document.getElementsByClassName('otheritems1')[0].appendChild(othername2);
				}
			});
		});
		
		groceryset.forEach((i)=>{
			groceryname2=document.createElement('div');
			groceryname2.textContent=i;
			groceryname2.classList.add('grocerynameincart');
			groceryname2.classList.add('ingredientsincart');

			document.getElementsByClassName('groceryitems1')[0].appendChild(groceryname2);
		});
		pantryset.forEach((i)=>{
			pantryname2=document.createElement('div');
			pantryname2.textContent=i;
			pantryname2.classList.add('pantrynameincart');
			pantryname2.classList.add('ingredientsincart');

			document.getElementsByClassName('pantryitems1')[0].appendChild(pantryname2);
		});
		otherset.forEach((i)=>{
			othername2=document.createElement('div');
			othername2.textContent=i;
			othername2.classList.add('othernameincart');
			othername2.classList.add('ingredientsincart');

			document.getElementsByClassName('otheritems1')[0].appendChild(othername2);

		});
		//createbuylink
	

	}
	createbuylink(true);
	//togglecartdisplay
	if(cartpage!=undefined){
		if(cartpage.style.display=='none'){
			cartpage.style.display='block';
		}else{
			cartpage.remove();
		}
	}
}

function hf(){
	if(url1.includes('https://www.hellofresh.com/menus')||url1.includes('https://www.hellofresh.co.uk/menus')||url1.includes('https://www.hellofresh.ca/menus')||url1.includes('https://www.hellofresh.ie/menus')||url1.includes('https://www.hellofresh.de/menus')||url1.includes('https://www.hellofresh.nl/menus')||url1.includes('https://www.hellofresh.fr/menus')||url1.includes('https://www.hellofresh.it/menus')||url1.includes('https://www.hellofresh.com.au/menus')){
		cards=document.querySelectorAll('div.web-26xi0f div.web-ae9qeg');
		
		if(localStorage.getItem('hfshoppinglist')===null){
			shoppinglist={};
		}else{
			shoppinglist=JSON.parse(localStorage.getItem('hfshoppinglist'));
		}

		Array.from(cards).forEach((e)=>{
			if(e.getElementsByClassName('detailsbutton')[0]===undefined){
				x=document.createElement('a');
				if(e.parentElement.parentElement.getElementsByClassName('web-1urjace')[0]!==undefined)
				{recipename1=e.parentElement.parentElement.getElementsByClassName('web-1urjace')[0].innerText;}
				else{recipename1=e.parentElement.parentElement.getElementsByClassName('web-l7ncql')[0].innerText;}
				
				if(shoppinglist[recipename1]===undefined)
				{x.innerText='Add';}
				else{
					x.innerText='Remove';
					x.classList.add('clickedaddtocart');
					e.parentElement.parentElement.style="background:rgb(210 228 176);"
					//x.parentElement.parentElement.style.backgroundColor="rgb(219,255, 212)";
				}
				x.classList.add('detailsbutton');
				e.appendChild(x);
				e.style="display:flex;justify-content:space-between;width:100%;max-width:100%";
				e.parentElement.style="display:flex;justify-content:space-between;width:100%;max-width:100%";
				x.addEventListener('click',(f)=>{
					
					if(x.innerText=='Add'){
						setTimeout(()=>{addtocartbutton('Add');},1000);
					}else if(x.innerText=='Remove'){
						setTimeout(()=>{addtocartbutton('Remove');},1000);
					}
				});

			}
		});

		Array.from(document.getElementsByClassName('web-14r5vtb')).forEach((x)=>{
			x.addEventListener('click',()=>{
				if(x.getElementsByClassName('detailsbutton')[0].innerText=="Add"){
					setTimeout(()=>{addtocartbutton('Add');},1000);
				}else{
					setTimeout(()=>{addtocartbutton('Remove');},1000);
				}
			});
			
		});

		if(document.getElementsByClassName('refreshpagebutton')[0]===undefined){
			refreshparent=document.getElementsByClassName('web-jzsp47')[0];
			refreshpagebutton=document.createElement('div');
			refreshpagebutton.classList.add('refreshpagebutton');
			refreshparent.appendChild(refreshpagebutton);
			//refreshpagebutton.src=url2;

			refreshpagebutton.textContent="Refresh Page";
			refreshpagebutton.addEventListener('click',()=>{
				location.reload();
			});

		}
		
		if(document.getElementsByClassName('shoppingcartbutton')[0]===undefined){
			cartparent=document.getElementsByClassName('web-jzsp47')[0];
			shoppingcartbutton=document.createElement('img');
			url3=chrome.runtime.getURL('assets/cart_transparent.png');
			shoppingcartbutton.classList.add('shoppingcartbutton');
			shoppingcartbutton.src=url3;

			cartparent.appendChild(shoppingcartbutton);
			// if(Object.keys(shoppinglist).length==0){
			// 	shoppingcartbutton.textContent="Show Cart ";
			// }else{
			// 	shoppingcartbutton.textContent="Show Cart ( "+Object.keys(shoppinglist).length+" )";
			// }
			shoppingcartbutton.parentElement.style="flex-direction:row;";
			shoppingcartbutton.addEventListener('click',()=>{
				// if(shoppingcartbutton.textContent.includes("Show Cart")){

				// 	shoppingcartbutton.innerText="Hide Cart";
				// }else{
				// 	if(Object.keys(shoppinglist).length==0){
				// 	shoppingcartbutton.textContent="Show Cart ";
				// 	}else{
				// 		shoppingcartbutton.textContent="Show Cart ( "+Object.keys(shoppinglist).length+" )";
				// 	}
				// }

				cartdisplay();
			});
		}
	}
}
hf();

const priceinterval = setInterval(()=>{
	refresh(); 
	hfinfo();
	hf();
},5000);


    


