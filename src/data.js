const data =[
    {
        id : 1,
        name :"Agra",
        info: "Agra is a city where the prefect romantic allure can be found. The land to the Taj Mahal, the Symbol of Love and one of the Seven Wonders of the World, makes the air of Agra full of love and romance. While the Legacy of Mughal Empire just didn’t gave Taj Mahal to this romantic land but many other mesmerizing attractions worth exploring as well.",
        image:"https://www.holidify.com/images/bgImages/INDIA.jpg",
        price: " 9,634" ,
    },
    {
        id:2,
        name:"Jaipur",
        info:"Jaipur is the capital of India's Rajasthan state. It evokes the royal family that once ruled the region and that, in 1727, founded what is now called the Old City, or “Pink City” for its trademark building color. At the center of its stately street grid (notable in India) stands the opulent, colonnaded City Palace complex. With gardens, courtyards and museums, part of it is still a royal residence",
        image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/d3/a8/57/images-30-largejpg.jpg?w=700&h=-1&s=1",
        price:" 9,685",
    },
    {
        id:3,
        name:"Goa",
        info:"Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area's tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda",
        image:"https://www.holidify.com/images/compressed/3201.jpg",
        price:"9,200",

    },
    {
        id:4,
        name:"Varanasi",
        info:"Varanasi is a city in the northern Indian state of Uttar Pradesh dating to the 11th century B.C. Regarded as the spiritual capital of India, the city draws Hindu pilgrims who bathe in the Ganges River's sacred waters and perform funeral rites. Along the city's winding streets are some 2,000 temples, including Kashi Vishwanath, the “Golden Temple,” dedicated to the Hindu god Shiva",
        image:"https://siaphotography.in/assets/img/blog/blog-1367647725.jpg",
        price:"3,000",

    },
    {
        id:5,
        name:"Darjeeling",
        info:"Darjeeling is a town in India's West Bengal state, in the Himalayan foothills. Once a summer resort for the British Raj elite, it remains the terminus of the narrow-gauge Darjeeling Himalayan Railway, or “Toy Train,” completed in 1881. It's famed for the distinctive black tea grown on plantations that dot its surrounding slopes. Its backdrop is Mt. Kanchenjunga, among the world's highest peaks",
        image:"https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2021/07/Darjeeling2.jpg?w=800&ssl=1",
        price:"7,500",
    },
    {
        id:6,
        name:"Jaisalmer",
        info:"Jaisalmer is a former medieval trading center and a princely state in the western Indian state of Rajasthan, in the heart of the Thar Desert. Known as the Golden City,   it's distinguished by its yellow sandstone architecture. Dominating the skyline is Jaisalmer Fort, a sprawling hilltop citadel buttressed by 99 bastions. Behind its massive walls stand the ornate Maharaja's Palace and intricately carved Jain temples",
        image:"https://assets.cntraveller.in/photos/61fa8ece2a4c3abc8e111e1d/16:9/w_960,c_limit/bada%20bagh%20lead.jpg",
        price:"8,890",
    },
    {
        id:7,
        name:"Kochi",
        info:"Kochi (also known as Cochin) is a city in southwest India's coastal Kerala state. It has been a port since 1341, when a flood carved out its harbor and opened it to Arab, Chinese and European merchants. Sites reflecting those influences include Fort Kochi, a settlement with tiled colonial bungalows and diverse houses of worship. Cantilevered Chinese fishing nets, typical of Kochi, have been in use for centuries.",
        image:"https://cdn.thecodehelp.in/Kochi.jpeg",
        price:"9,000",
    },
    {
        id:8,
        name:"Tawang",
        info:"When it comes to hill stations in India, you’re spoilt for choice. While most flock to Leh — Ladakh’s picture-perfect capital —  Tawang, a little Himalayan town tucked away in Arunachal Pradesh near the Bhutanese border, is the real big hitter. Known for its 400-year-old monastery (the second largest in the world, after Potala Palace), it’s a window into Tibetan spirituality and, as the birthplace of the sixth Dalai Lama, one of the most important Buddhist sites in the world. Plus, you’ll find exceptionally talented artisans as well as some seriously exhilarating treks; adventure junkies will cherish the 360-degree views of the Himalayas from Gorichen Peak.",
        image:"https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2022/04/Tawang-india-guesthouse-alamy-2AJEGND.jpeg?resize=1536,1024",
        price:"6,500",
    },
    {
        id:9,
        name:"Manali",
        info:"With spectacular valleys, breathtaking views, snowcapped mountains, and lush forests of oak, deodar, and pine, Manali is a magical hill station at the northern end of Kullu valley in Himachal Pradesh. Gifted to the world by the mighty Himalayas, it is known to be one of the most popular destinations for Honeymooners. Manali offers magnificent views of the Pir Panjal and the Dhauladhar ranges, covered in a thick blanket of snow for most of the year.",
        image:"https://www.holidify.com/images/bgImages/MANALI.jpg",
        price:"9,000"
    },
    {
        id:10,
        name:"Srinagar",
        info:"Famously known as 'Heaven on Earth, Srinagar is located in the union territory of Jammu & Kashmir, on the banks of river Jhelum. Srinagar is known for the stationary houseboats and gondola-type rowboats- Shikaras on Dal Lake. Adorned with tranquil Dal Lake & Nigeen Lake, Srinagar is the dream destination for honeymoon and family holidays",
        image:"https://www.holidify.com/images/compressed/1825.jpg?v=1.1",
        price:"4,090"

    },
    {
        id:11,
        name:"Andaman",
        info:"Replete with turquoise blue water beaches and a bit of history, Andaman & Nicobar Islands is a little slice of paradise tucked around 1,400 km away from the east coast of mainland India. Port Blair, the capital of this union territory, has a major airport and seaport connected with the rest of the country and with various tourist islands via multiple daily ferries. Havelock and Neil Islands are popular among tourists for their white sandy beaches and excellent diving options.",
        image:"https://www.holidify.com/images/bgImages/ANDAMAN-NICOBAR-ISLANDS.jpg",
        price:"20,000"
    },
    {
        id:12,
        name:"Munnar",
        info:"Famous for the tea estates, greenery, winding roads, blanket of mist, and viewpoints, Munnar is a hill station in Kerala, located in the Idukki district. Lying in the Western Ghats at 1600 metres, it is one of the most sought after and visited travel destinations globally, especially popular amongst honeymooners.",
        image:"https://www.holidify.com/images/cmsuploads/compressed/Munnar_hillstation_kerala_20190207123437jpg",
        price:"10,200"
    },
    {
        id:13,
        name:"Alleppey",
        info:"Officially called Alappuzha, Alleppey is known for its network of canals and lagoons with beautiful backwaters and the houseboats offering overnight stays. Located in the southern part of Kerala, the coastline of Alleppey offers some of the best beaches with water sports during the dry season. Coupled with other beautiful places in Kerala like Munnar and Thekkady, Alleppey is often considered for a honeymoon or for a great family vacation.",
        image:"https://www.holidify.com/images/bgImages/ALLEPPEY.jpg",
        price:"9,000"
    },
    {
        id:14,
        name:"Rishikesh",
        info:"Located in the foothills of the Himalayas along the convergence of Ganga and Chandrabhaga River, Rishikesh is a small town in the Dehradun district, located close to Haridwar in Uttarakhand. Rishikesh (also called as Hrishikesh) is known for its adventure activities, ancient temples, popular cafes and as the Yoga Capital of the World. Gateway to Garhwal Himalayas, Rishikesh is also a pilgrimage town and one of the holiest places for Hindus.",
        image:"https://www.holidify.com/images/bgImages/RISHIKESH.jpg",
        price:"5,000"
    },
    {
        id:15,
        name:"Gangtok",
        info:"Incredibly alluring, pleasantly boisterous and wreathed in clouds - Gangtok, the capital of Sikkim, is one of the most popular hill stations in India. Lying at the height of 1650 m above sea level, the town during its bright sunny days offers spectacular views of Mt. Kanchenjunga. Gangtok is a base for adventure enthusiasts comprising of trekkers and campers to the Himalayan mountain ranges. Dzongri Trek, Varsey/Barsey Trek, and Tholung Trek are among the most popular treks departing from Gangtok",
        image:"https://www.holidify.com/images/cmsuploads/compressed/BabaMandirlongshot_20180417231321.jpg",
        price:"10,000"
    },
    {

        id:16,
        name:"Ooty",
        info:"Nestled amidst Nilgiri hills, Ooty, also known as Udagamandalam, is a hill station in Tamil Nadu which serves as a top-rated tourist destination. Once regarded as the summer headquarters of the East India Company, the Queen of the hills is a picturesque getaway",
        image:"https://www.holidify.com/images/cmsuploads/compressed/avalanche_20190306161921.jpg",
        price:"12,000"    
    },
    {
        id:17,
        name:"Lonavala",
        info:"Situated in the Sahyadri range of the Western Ghats close to Pune and Mumbai, Lonavala is the most visited hill station in Maharashtra and the place to be during monsoons. With lots of waterfalls, lakes and hills around, it is a popular destination for camping, trekking and other adventure sports.",
        image:"https://www.holidify.com/images/cmsuploads/compressed/AambyValleyCity02-AM_20180308155925.jpg",
        price:"7,000" 
    },
    {
        id:18,
        name:"Lakshadweep ",
        info:"Formerly known as Laccadive Islands, Lakshadweep translates to 'one hundred thousand islands' in Malayalam. Home to a few of the most beautiful and exotic islands and beaches of India, Lakshadweep lies 400km off the southwest coast of the Arabian Sea. The smallest union territory of India has only 36 islands having a total area of 32 sq. kilometres. It's made up of 12 atolls, 3 reefs and 5 submerged banks out of which ten Islands are inhabited.",
        image:"https://www.holidify.com/images/bgImages/LAKSHADWEEP-ISLANDS.jpg",
        price:"20,000" 
    },
    {
        id:19,
        name:"Mcleodganj",
        info:"Mcleodganj, Himachal Pradesh is one of the most popular tourist destinations for it's tibetan culture, nature treks, greenery, ancient temples & monasteries, and british influence. Located in the Kangra district, it's on the outskirts of Dharamshala.",
        image:"https://www.holidify.com/images/cmsuploads/compressed/MCLEODGANJ_20190306132759.jpg",
        price:"6,000" 
    },
    {
        id:20,
        name:"Shimla",
        info:"Shimla is the capital of Himachal Pradesh and a popular hill-station among Indian families and honeymooners. Situated at the height of 2200m, it was the summer capital of British India. The hill station still retains its old-world charm with beautiful colonial architecture, pedestrian-friendly Mall Road and the ridge lined up with multiple shops, cafes and restaurants.",
        image:"https://www.holidify.com/images/compressed/1907.jpg",
        price:"9,000" 
    },
    {
        id:21,
        name:"Mussoorie",
        info:"Mussoorie is one of the most popular hill stations located at a distance of 290 km from Delhi in the Dehradun district of Uttarakhand. With a backdrop of the Shivalik range of Himalayas and doon valley, Mussoorie, also known as Queen of The Hills, stands at an altitude of 7000 feet above sea level. With a cool and pleasant climate throughout the year, Mussoorie was once the British summer capital.",
        image:"https://www.holidify.com/images/compressed/dest_wiki_11019.jpg",
        price:"4,000" 
    },
    {
        id:22,
        name:"Mount Abu",
        info:"The only hill station of Rajasthan, Mount Abu is located in the Aravali range. The most important attraction, however, are undoubtedly the Dilwara temples, which is one of the most stunning pieces of architecture in the country.  Travellers can enjoy calm and relaxed boating in Nakki Lake, and a view of the sunset from the vista points. The restaurants and eateries around the lake are great places to eat local food and chill. The highest peak of the Aravali Range - Guru Shikhar also lies in Mt. Abu. Mount Abu Forest Sanctuary with an abundance of flora and fauna is also a highlight.",
        image:"https://www.holidify.com/images/cmsuploads/compressed/Mount_abu_scenery_20190207160659jpg",
        price:"6,500" 
    },
    {
        id:23,
        name:"Amarnath",
        info:"Amarnath, located in union territory of Jammu and Kashmir is one of the most important pilgrimage in India for the worshippers of Lord Shiva. The Amarnath cave has an enshrined Shivaling formed naturally with ice, which resembles Lord Shiva.",
        image:"https://www.holidify.com/images/compressed/2063.jpg?v=1.1",
        price:"7,500" 
    },
    {
        id:24,
        name:"Wayanad Tourism",
        info:"Replete with waterfalls, historical caves, comfortable resorts and homestays, Wayanad in Kerala is famous for its spice plantations and wildlife. Walking through the sprawling spice plantations, trekking to the pre-historic caves and experiencing a resort holiday are one of the many things you can do to get a taste of Wayanad.",
        image:"https://www.holidify.com/images/bgImages/WAYANAD.jpg",
        price:"7,000" 
    },
    {
        id:25,
        name:"Pondicherry",
        info:"Pondicherry, officially known as Puducherry, and commonly referred to as just Pondy, is one of the seven Union Territories of India which is bounded by the southern state of Tamil Nadu. This former French colony is a perfect amalgamation of the traditional Indian sensibilities and French architecture, making it a dreamy escape that offers the best of both worlds.",
        image:"https://www.holidify.com/images/compressed/dest_wiki_13009.jpg",
        price:"15,000" 

    },
    {
        id:26,
        name:"Alibaug",
        info:"Alibaug (also spelled as Alibag) is a small coastal town in the Konkan region of Maharashtra, known for its beaches, villas, and beautiful scenery. Alibag is very popular as a weekend getaway from the cities of Mumbai and Pune. ",
        image:"https://www.holidify.com/images/bgImages/ALIBAG.jpg",
        price:"7,800" 

    },
    {
        id:27,
        name:"Vaishno Devi",
        info:"Vaishno Devi is a temple town that's home to the famous Vaishno Devi Mandir. Located in Trikuta hills, 13 kms from Katra (in the union territory of Jammu and Kashmir); this renowned shrine allures millions of devotees from all over the world.  Popularly known as Mata Rani, Vaishnavi and Trikuta, Vaishno Devi is a manifestation of the Hindu Goddess Durga. It is believed that during the pooja and aarti, Goddesses arrive at the Holy cave to pay their respect to Mata Rani. Devotees believe the goddess herself calls the devotees to reach here.",
        image:"https://www.holidify.com/images/bgImages/VAISHNO-DEVI.jpg",
        price:"6,500"  
    },
    {
        id:28,
        name:"Kasol",
        info:"Kasol is a quaint little village in Himachal situated along the banks of the river Parvati. Commonly known as the 'Amsterdam of India', Kasol is a tourist attraction that is rapidly gaining fame as a popular hub for trekkers, backpackers, and nature lovers. The valley is situated 23 kms from Bhuntar and next to the religious town of Manikaran and is one of the best places in the country just to sit back and chill in the panorama of snow-clad mountains, pine trees and serene river",
        image:"https://www.holidify.com/images/bgImages/KASOL.jpg",
        price:"6,205" 
    },
    {
        id:29,
        name:"Mathura",
        info:"One of Hinduism's seven sacred cities, Mathura is the birthplace of the very beloved Lord Krishna. Located in the state of Uttar Pradesh, Mathura and Vrindavan are often considered twin cities (located only 10km away from each other). Mathura is a small town dotted with temples from various ages and attracts a horde of pilgrims from all over the world. ",
        image:"https://www.holidify.com/images/compressed/dest_wiki_9929.jpg",
        price:"4,500"  
    },
    {
        id:30,
        name:"Coimbatore",
        info:"Often termed as 'Manchester of South India', Coimbatore, the second-largest city in Tamil Nadu, photographically situated on the banks of River Noyyal. Coimbatore, also known as Kovai, is a welcoming area with the backdrop of hustle-bustle and charm of activity and industry.",
        image:"https://www.holidify.com/images/bgImages/COIMBATORE.jpg",
        price:"5,000" 
    }

    
]

export  default data;