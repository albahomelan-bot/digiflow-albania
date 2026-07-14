// DigiFlow Albania — Company Database
const companies = [
  { id:1, name:"Melia Durres Albania", sector:"hotel", location:"Plazhi San Pietro, Lalezit Bay", address:"Plazhi San Pietro, Gjiri i Lalezit, Durres", phone:"+355 52 700 000", email:"reservas.meliadurres@melia.com", website:"melia.com", siteStatus:"has", automationPotential:90, siteStructure:["Home","Rooms","Dining","Spa","Events","Gallery","Book Now","Contact"], automations:["Telegram booking confirmations","Review request automation","Guest check-in notifications","Restaurant reservation bot","Loyalty program updates"], proposal:"As the flagship 5-star resort in Durres, Melia handles hundreds of bookings daily. We propose a Telegram concierge bot that allows guests to request room service, book spa treatments, get restaurant recommendations, and receive automated check-in reminders — reducing front desk load by 40%.", services:["Telegram Bot","N8N Automation"], price:"EUR 1,200" },
  { id:2, name:"Aragosta Hotel", sector:"hotel", location:"Durres City Center, Beachfront", address:"Rruga Taulantia 71, Durres 2000", phone:"+355 68 333 7050", email:"info@aragosta-durres.al", website:"aragosta.al", siteStatus:"has", automationPotential:85, siteStructure:["Home","Rooms","Restaurant","Gallery","Location","Book Now","Contact"], automations:["Booking confirmation bot","Seasonal offers newsletter","Review collection N8N","Check-in notifications","Restaurant reservations"], proposal:"Aragosta Hotel s beachfront position makes it a summer hotspot. We can build a Telegram bot for direct booking bypassing OTA fees, automated seasonal promotions, and a review-collection workflow that boosts TripAdvisor rankings — saving 15,000+ EUR/year in OTA commissions.", services:["Telegram Bot","N8N Automation"], price:"EUR 899" },
  { id:3, name:"Adriatik Hotel BW Premier", sector:"hotel", location:"Durres Beach, Lagja 13", address:"Rruga Pavaresia, Lagja 13, Plazh, Durres 2000", phone:"+355 69 202 1778", email:"info@adriatikhotel.com", website:"adriatikhotel.com", siteStatus:"has", automationPotential:80, siteStructure:["Home","Accommodation","Spa","Restaurant","Meetings","Gallery","Contact"], automations:["Spa booking bot","Conference scheduler","Guest survey automation","Early check-in requests","Upsell notifications"], proposal:"The Adriatik Hotel spa and conference facilities are prime upsell opportunities. A Telegram bot can automatically offer spa upgrades to guests after booking, handle conference room inquiries, and send personalized dining invitations — increasing ancillary revenue by 25%.", services:["Website Redesign","Telegram Bot"], price:"EUR 1,099" },
  { id:4, name:"Grand Duka Hotel & SPA", sector:"hotel", location:"Durres City Center", address:"Rruga Egnatia, Durres 2001", phone:"+355 68 958 8888", email:"info@grandhotelduka.com", website:"grandhotelduka.com", siteStatus:"has", automationPotential:88, siteStructure:["Home","Rooms","SPA","Restaurant","Events","Gallery","Book Now"], automations:["Event booking automation","SPA scheduling bot","VIP guest recognition","Wedding inquiry handler","Corporate packages bot"], proposal:"Grand Duka is THE venue for events and weddings in Durres. We propose an N8N workflow that automatically qualifies wedding/event inquiries, sends brochures, schedules consultations, and follows up with quotes — turning every inquiry into a booked event.", services:["N8N Automation","Telegram Bot"], price:"EUR 1,400" },
  { id:5, name:"Bel Conti Hotel", sector:"hotel", location:"Durres City Center", address:"Rruga Taulantia, Durres", phone:"+355 522 61 245", email:"info@belcontihotel.com", website:"belcontihotel.com", siteStatus:"weak", automationPotential:75, siteStructure:["Home","Rooms","Facilities","Book Online","Contact"], automations:["Direct booking bot","Availability checker","Tour recommendations","Transport booking","Review requests"], proposal:"Bel Conti has a dated digital presence costing them direct bookings. A new premium website plus Telegram bot for instant room availability and booking would cut OTA dependency by 30% and create a direct communication channel with loyal guests.", services:["Premium Website","Telegram Bot"], price:"EUR 799" },
  { id:6, name:"Palace Hotel & SPA", sector:"hotel", location:"Durres Beach", address:"Rruga Pavaresia, Durres Beach", phone:"+355 52 909090", email:"info@palacehotelal.com", website:"palacehotelal.com", siteStatus:"has", automationPotential:82, siteStructure:["Home","Rooms","Pool SPA","Restaurant","Packages","Gallery","Contact"], automations:["Package promotions bot","Loyalty rewards automation","Pool reservation system","Kids activities scheduler","Local excursion booking"], proposal:"Palace Hotel all-inclusive packages are perfect for automated upselling. We will build a Telegram bot that welcomes guests, offers package upgrades, promotes pool reservations, and sends daily activity schedules — creating a 5-star digital experience from booking.", services:["Telegram Bot","N8N Automation"], price:"EUR 999" },
  { id:7, name:"Hotel Aragosta Resort Golem", sector:"hotel", location:"Golem, Durres Riviera", address:"Golem Beach, Durres", phone:"+355 69 500 1234", email:"resort@aragosta.al", website:"aragosta.al", siteStatus:"has", automationPotential:78, siteStructure:["Home","Beach Resort","Rooms","Dining","Watersports","Book Now"], automations:["Watersports booking bot","Daily specials notifications","Checkout survey N8N","Group booking handler","Weather-based promotions"], proposal:"The Golem beachfront location creates seasonal demand spikes. An automated promotion system via Telegram can send weather-triggered offers, manage group bookings, and collect post-stay feedback to improve rankings on Booking.com.", services:["N8N Automation","Telegram Bot"], price:"EUR 799" },
  { id:8, name:"AM Hotel Durres", sector:"hotel", location:"Durres City", address:"Durres City Center", phone:"+355 69 111 1111", email:"info@amhotel.al", website:"amhotel.al", siteStatus:"weak", automationPotential:70, siteStructure:["Home","Rooms","Restaurant","Contact"], automations:["Booking inquiry bot","FAQ autoresponder","Local guide sharing","Breakfast pre-order","Taxi booking automation"], proposal:"AM Hotel needs a digital upgrade. We propose a fully functional website with online booking plus a Telegram bot that handles FAQs, assists with local recommendations, and pre-takes breakfast orders — modernizing the guest experience at low cost.", services:["Premium Website","Telegram Bot"], price:"EUR 699" },
  { id:9, name:"Hotel Restorant Olti", sector:"hotel", location:"Durres Coast", address:"Rruga Curilla, Durres", phone:"+355 69 312 4500", email:"info@hotelolti.al", website:"hotelolti.al", siteStatus:"weak", automationPotential:65, siteStructure:["Home","Rooms","Seafood Restaurant","Location","Contact"], automations:["Seafood reservation bot","Catch of the day notifications","Table booking system","Romantic package promotions","Review collection"], proposal:"Hotel Olti reputation for fresh seafood is their superpower. A Daily Catch Telegram channel plus reservation bot would create a loyal community of food lovers, drive repeat visits, and position them as the number 1 seafood destination in Durres.", services:["Premium Website","Telegram Bot"], price:"EUR 599" },
  { id:10, name:"Harmonia Hotels Group", sector:"hotel", location:"Durres and Surroundings", address:"Durres Riviera, Albania", phone:"+355 52 401 000", email:"info@harmoniahotels.al", website:"harmoniahotels.al", siteStatus:"has", automationPotential:95, siteStructure:["Home","Our Hotels","Dining","Weddings","Corporate","Loyalty Program","Contact"], automations:["Multi-property Telegram bot","Cross-property upsell N8N","Loyalty points tracker","Group booking coordinator","Revenue management alerts"], proposal:"As a hotel group, Harmonia can implement a unified Telegram ecosystem — one bot for all properties that cross-sells between hotels, manages a loyalty program, and sends intelligent upsell offers based on guest history. This N8N pipeline alone could increase RevPAR by 20%.", services:["N8N Automation","Telegram Bot","Website"], price:"EUR 2,500" }
];
companies.push(
  { id:11, name:"Diamant Logistics", sector:"logistics", location:"Port of Durres Area", address:"Rruga Aleksander Goga, Durres", phone:"+355 52 219997", email:"info@diamant.com.al", website:"diamant.com.al", siteStatus:"has", automationPotential:92, siteStructure:["Home","Services","Port Handling","Warehousing","Customs","Track Shipment","Contact"], automations:["Shipment status Telegram alerts","Customs clearance notifications","Invoice auto-generation N8N","Driver dispatch bot","Client reporting automation"], proposal:"Diamant Logistics handles critical Albanian port operations. A Telegram bot for real-time shipment tracking plus an N8N pipeline that auto-generates customs documents and client invoices would reduce administrative work by 60% and position them as Albania most tech-forward logistics company.", services:["N8N Automation","Telegram Bot"], price:"EUR 1,800" },
  { id:12, name:"DyrrahSped", sector:"logistics", location:"Port of Durres", address:"Rruga Tregtare, Port Zone, Durres", phone:"+355 52 230492", email:"info@dyrrahsped.al", website:"dyrrahsped.al", siteStatus:"has", automationPotential:88, siteStructure:["Home","Freight Services","Customs","Container Tracking","News","Contact"], automations:["Container tracking bot","ETA notification system","Document request handler","Quote generation N8N","Driver assignment automation"], proposal:"DyrrahSped specializes in freight forwarding through Albania main port. We propose an N8N workflow that automatically notifies importers when their container arrives, generates customs checklists, and an instant quote bot — reducing phone calls by 70%.", services:["Telegram Bot","N8N Automation"], price:"EUR 1,500" },
  { id:13, name:"C. Steinweg Durres", sector:"logistics", location:"Durres Port Terminal", address:"Port of Durres Terminal, Durres", phone:"+355 68 2032442", email:"durres@steinweg.com", website:"steinweg.com", siteStatus:"has", automationPotential:85, siteStructure:["Home","Services","Terminals","Sustainability","Careers","Contact"], automations:["Terminal capacity alerts","Vessel arrival notifications","Cargo status updates","International client Telegram","KPI dashboard N8N"], proposal:"As a global logistics brand, Steinweg Durres needs local digital excellence. We will create an Albanian-language Telegram bot for local clients plus an N8N dashboard that syncs local operations with HQ reporting.", services:["Telegram Bot","N8N Automation"], price:"EUR 2,200" },
  { id:14, name:"Ferri Transforwarding", sector:"logistics", location:"Durres Port Zone", address:"Durres Port, Albania", phone:"+355 52 230492", email:"info@ferri-tfs.al", website:"ferri-tfs.al", siteStatus:"has", automationPotential:80, siteStructure:["Home","Road Transport","Sea Freight","Air Freight","Customs","Contact"], automations:["Multi-modal tracking bot","Trucking dispatch N8N","Quote comparison tool","Client portal notifications","Document automation"], proposal:"Ferri multi-modal transport capability is their edge. A smart Telegram bot that allows clients to get quotes for road, sea, or air freight instantly plus an N8N pipeline that coordinates between transport modes would make them the go-to choice for Albanian importers.", services:["Premium Website","Telegram Bot","N8N Automation"], price:"EUR 1,600" },
  { id:15, name:"Pelikan Transport", sector:"logistics", location:"Durres", address:"Durres, Albania", phone:"+355 68 2091880", email:"info@pelikantransport.com", website:"pelikantransport.com", siteStatus:"weak", automationPotential:75, siteStructure:["Home","Transport Services","Fleet","Tracking","Contact"], automations:["Driver location sharing bot","Delivery confirmation automation","Route optimization alerts","Client ETA notifications","Fleet management N8N"], proposal:"Pelikan fleet needs digital visibility. A Telegram bot where clients can track their shipment in real-time plus driver status updates plus automatic delivery confirmations would dramatically improve customer satisfaction and reduce call center volume by 50%.", services:["Premium Website","Telegram Bot"], price:"EUR 899" },
  { id:16, name:"Go Shipping Albania", sector:"logistics", location:"Durres Port", address:"Port of Durres, Albania", phone:"+355 68 2050127", email:"albania@goshipping.gr", website:"goshipping.gr", siteStatus:"has", automationPotential:78, siteStructure:["Home","Shipping Lines","Routes","Container Booking","News","Contact"], automations:["Container booking bot","Schedule alerts","Port congestion notifications","Freight rate updates","Document checklist automation"], proposal:"Go Shipping serves major international routes through Durres. A Telegram channel for real-time freight rates and schedule updates plus a booking bot would give them a competitive edge over larger agencies who still rely on email and phone.", services:["Telegram Bot","N8N Automation"], price:"EUR 1,100" },
  { id:17, name:"Global Shipping Shpk", sector:"logistics", location:"Durres", address:"Durres, Albania", phone:"+355 69 2032638", email:"info@globalshipping.al", website:"globalshipping.al", siteStatus:"weak", automationPotential:72, siteStructure:["Home","Services","About","Contact"], automations:["Inquiry response bot","Shipment status sharing","Quote request handler","Partner notifications","Monthly report N8N"], proposal:"Global Shipping has a minimal online presence that limits growth. A professional website overhaul plus Telegram business bot for instant quote requests would triple their lead conversion rate and attract larger corporate clients.", services:["Premium Website","Telegram Bot"], price:"EUR 799" },
  { id:18, name:"Duni Agency", sector:"logistics", location:"Port of Durres", address:"Port of Durres, Albania", phone:"+355 52 224900", email:"info@duniagency.al", website:"duniagency.al", siteStatus:"has", automationPotential:82, siteStructure:["Home","Shipping Agency","Port Services","Customs","Contact"], automations:["Vessel arrival notifications","Port agent Telegram bot","Customs document checklist","Crew change coordinator","Vessel schedule tracker"], proposal:"Duni Agency ship agency operations involve constant communication between vessel owners, captains, and port authorities. An N8N workflow plus Telegram group bot that coordinates all parties, tracks vessel ETAs, and manages documentation would save 4 plus hours per vessel call.", services:["N8N Automation","Telegram Bot"], price:"EUR 1,300" },
  { id:19, name:"Fast Agency", sector:"logistics", location:"Durres Port Zone", address:"Rruga Pavaresia, Durres", phone:"+355 52 235000", email:"info@fast-agency.al", website:"fast-agency.al", siteStatus:"weak", automationPotential:70, siteStructure:["Home","Freight","Customs Clearance","Warehousing","Contact"], automations:["Customs status bot","Warehouse inventory alerts","Client onboarding automation","Quote generator","Weekly report N8N"], proposal:"Fast Agency name says it all — they need digital systems as fast as their service. A website with live chat, a Telegram bot for customs status updates, and an N8N workflow for automated client onboarding would match their brand promise of speed.", services:["Premium Website","Telegram Bot"], price:"EUR 799" },
  { id:20, name:"Port of Durres Authority APD", sector:"logistics", location:"Port of Durres", address:"Port of Durres, Albania", phone:"+355 52 222 235", email:"apd@portidurresit.gov.al", website:"durresport.al", siteStatus:"has", automationPotential:70, siteStructure:["Home","Port Services","Vessels","Statistics","Regulations","News","Contact"], automations:["Vessel notification system","Berthing schedule bot","Port statistics dashboard","Operator communications","Emergency alerts N8N"], proposal:"The Port Authority is the hub for all maritime activity. A public Telegram channel for vessel schedules and a B2B notification system for registered operators would modernize port communications and position Durres as a smart port.", services:["Telegram Bot","N8N Automation"], price:"EUR 3,000" }
);
companies.push(
  { id:21, name:"Kruci Konstruksion", sector:"construction", location:"Durres", address:"Rruga Vath Truja 85/1, Durres", phone:"+355 68 413 3930", email:"info@krucikonstruksion.al", website:"krucikonstruksion.al", siteStatus:"has", automationPotential:78, siteStructure:["Home","Projects","Metal Structures","Services","Gallery","Contact"], automations:["Project status client bot","Tender alert notification","Material order tracker","Team scheduling N8N","Quote request handler"], proposal:"Kruci Konstruksion handles major industrial projects but manages them manually. An N8N pipeline for project status updates to clients plus a Telegram bot where clients check construction progress photos would eliminate daily status calls and position them as Albania most transparent contractor.", services:["N8N Automation","Telegram Bot"], price:"EUR 1,200" },
  { id:22, name:"Ales Construction Group", sector:"construction", location:"Durres and Tirana", address:"Teodor Keko Street, Tirana, Durres projects", phone:"+355 69 20 63 111", email:"info@ales.al", website:"ales.al", siteStatus:"has", automationPotential:88, siteStructure:["Home","Projects","Apartments","Commercial","About","News","Contact"], automations:["Apartment inquiry bot","Construction milestone alerts","Lead qualification N8N","VR tour scheduling","Payment reminder automation"], proposal:"Ales Group is one of Albania largest developers with projects in Durres. A lead qualification bot that captures buyer inquiries 24/7, schedules site visits, and tracks the sales pipeline would dramatically accelerate their Durres project sales cycle.", services:["Telegram Bot","N8N Automation"], price:"EUR 2,000" },
  { id:23, name:"Andrea Realty", sector:"realestate", location:"Durres", address:"Durres City, Albania", phone:"+355 68 380 1525", email:"almaahila@gmail.com", website:"none", siteStatus:"none", automationPotential:85, siteStructure:["Home","Buy Properties","Rent Properties","Investment","About","Contact"], automations:["Property listing bot","Buyer matching N8N","Viewing scheduler","Price alert system","Contract follow-up automation"], proposal:"Andrea Realty operates without a website — a massive missed opportunity in Durres booming property market. We will build a premium real estate website plus Telegram bot that sends personalized property matches to buyers, schedules viewings automatically, and tracks every lead.", services:["Premium Website","Telegram Bot","N8N Automation"], price:"EUR 1,100" },
  { id:24, name:"Daorsa Real Estate", sector:"realestate", location:"Durres", address:"Durres, Albania", phone:"+355 69 400 2020", email:"info@daorsa.al", website:"daorsa.al", siteStatus:"has", automationPotential:80, siteStructure:["Home","Properties","Rentals","Commercial","Blog","Contact"], automations:["New listing Telegram alerts","Price change notifications","Rental expiry reminders","Client interest tracking","Market report automation"], proposal:"Daorsa Real Estate can leverage Durres tourism boom for short-term rentals. A Telegram bot for landlords and tenants plus N8N automation for rental agreements, payment reminders, and maintenance requests would create a seamless property management experience.", services:["Telegram Bot","N8N Automation"], price:"EUR 999" },
  { id:25, name:"MEUS Real Estate", sector:"realestate", location:"Durres", address:"Durres, Albania", phone:"+355 69 500 5050", email:"info@meusrealestate.al", website:"meusrealestate.al", siteStatus:"weak", automationPotential:75, siteStructure:["Home","For Sale","For Rent","About","Contact"], automations:["Lead capture bot","Property comparison tool","Investment ROI calculator","Newsletter automation","Agent coordination N8N"], proposal:"MEUS Real Estate targets investors in Albania growing property market. A Telegram bot with an automated ROI calculator for Durres properties plus a lead nurturing N8N sequence would help them close more investment deals by educating prospects with data.", services:["Premium Website","Telegram Bot"], price:"EUR 899" },
  { id:26, name:"Xhulja Real Estate", sector:"realestate", location:"Durres", address:"Durres, Albania", phone:"+355 69 600 3030", email:"info@xhuljaimmobiliare.al", website:"xhuljarealestate.al", siteStatus:"weak", automationPotential:72, siteStructure:["Home","Properties","Services","Gallery","Contact"], automations:["Property inquiry bot","Virtual tour scheduler","Listing expiry alerts","Client follow-up N8N","Market update newsletter"], proposal:"Xhulja focuses on Durres coastal properties — prime real estate! We propose a Telegram channel for new listing alerts plus a bot for international buyers especially Italians and Germans inquiring about Albanian coastal properties.", services:["Premium Website","Telegram Bot"], price:"EUR 799" },
  { id:27, name:"AlbSteel Manufacturing", sector:"manufacturing", location:"Durres Industrial Zone", address:"Durres Industrial Zone, Albania", phone:"+355 52 300 500", email:"info@albsteel.al", website:"albsteel.al", siteStatus:"weak", automationPotential:82, siteStructure:["Home","Products","Steel Solutions","Industrial","Quote Request","Contact"], automations:["B2B quote request bot","Order tracking system","Delivery schedule alerts","Supplier coordination N8N","Quality report automation"], proposal:"AlbSteel B2B clients need real-time order tracking. An N8N pipeline that updates clients on production status plus a Telegram bot for quote requests and delivery ETAs would modernize their client relationships and give them a competitive edge.", services:["Premium Website","N8N Automation","Telegram Bot"], price:"EUR 1,400" },
  { id:28, name:"Amec.al Steel Processing", sector:"manufacturing", location:"Durres", address:"Durres Industrial Zone, Albania", phone:"+355 52 345 678", email:"info@amec.al", website:"amec.al", siteStatus:"has", automationPotential:75, siteStructure:["Home","Services","Projects","Equipment","Contact"], automations:["Project inquiry bot","Technical spec sender","Timeline tracker N8N","Sub-contractor coordination","Inspection scheduling"], proposal:"Amec specializes in precision mechanical construction. A Telegram bot for technical inquiries plus an N8N workflow that automatically matches client requirements with available equipment and generates preliminary quotes would accelerate their B2B sales process.", services:["Telegram Bot","N8N Automation"], price:"EUR 1,100" },
  { id:29, name:"Albel SA Packaging", sector:"manufacturing", location:"Durres", address:"Durres Industrial Zone, Albania", phone:"+355 52 400 100", email:"info@albel.al", website:"albel.al", siteStatus:"has", automationPotential:70, siteStructure:["Home","Products","Industrial","Trading","Distribution","Contact"], automations:["Order tracking bot","Stock level alerts","Delivery confirmation N8N","B2B client portal","Invoice automation"], proposal:"Albel plastic packaging business depends on repeat B2B orders. An automated order management system via Telegram plus N8N stock alerts that notify clients when their preferred products are available would increase order frequency and reduce churn.", services:["Telegram Bot","N8N Automation"], price:"EUR 999" },
  { id:30, name:"Pastarella Restaurant", sector:"restaurant", location:"Durres City", address:"Rruga Taulantia, Durres 2003", phone:"+355 69 400 5500", email:"info@pastarella.al", website:"pastarella.al", siteStatus:"weak", automationPotential:80, siteStructure:["Home","Menu","Reservations","Events","Gallery","Contact"], automations:["Table reservation bot","Daily specials broadcast","Takeaway order system","Loyalty program N8N","Event booking automation"], proposal:"Pastarella is a popular Durres dining spot that could double revenue with digital ordering. A Telegram bot for table reservations plus takeaway orders plus a loyalty card system would create a steady stream of repeat customers and eliminate phone booking chaos during peak hours.", services:["Premium Website","Telegram Bot"], price:"EUR 699" }
);
companies.push(
  { id:31, name:"2 Kitarrat Arome Deti", sector:"restaurant", location:"Rruga Curilla, Durres", address:"Rruga Curilla, Durres", phone:"+355 69 333 2200", email:"kitarrat@gmail.com", website:"none", siteStatus:"none", automationPotential:75, siteStructure:["Home","Seafood Menu","Live Music","Events","Gallery","Reservations","Contact"], automations:["Live music event notifications","Table reservation bot","Birthday celebration offers","Seasonal menu announcements","Customer review requests"], proposal:"2 Kitarrat is a beloved seafood restaurant with live music. We propose a website plus Telegram channel for event announcements plus a reservation bot that also collects birthdays for personalized celebration offers.", services:["Premium Website","Telegram Bot"], price:"EUR 599" },
  { id:32, name:"UMA Food and Drinks", sector:"restaurant", location:"Durres Seashore", address:"Near the seashore, Durres", phone:"+355 69 444 3300", email:"info@umafood.al", website:"umafood.al", siteStatus:"has", automationPotential:78, siteStructure:["Home","Menu","Bar","Events","Gallery","Contact"], automations:["Happy hour notifications","Event RSVP bot","Cocktail of the day broadcast","Group booking handler","Review request automation"], proposal:"UMA Food and Drinks is perfectly positioned for the beach crowd. A Telegram channel broadcasting daily specials, happy hour deals, and event announcements would create a loyal following. Add a group booking bot for summer parties and watch revenue multiply.", services:["Telegram Bot","N8N Automation"], price:"EUR 599" },
  { id:33, name:"Restorant Skampa", sector:"restaurant", location:"Durres Old Bazaar", address:"Rruga Tregtare, Durres", phone:"+355 52 222 100", email:"skampa@gmail.com", website:"none", siteStatus:"none", automationPotential:70, siteStructure:["Home","Traditional Menu","History","Gallery","Reservations","Contact"], automations:["Reservation system bot","Traditional dishes showcase","Tourist information sender","Group dining coordinator","Feedback collection N8N"], proposal:"Restorant Skampa serves traditional Albanian cuisine near the historic bazaar — a tourist magnet. A website with Google Maps integration plus Telegram bot for reservations and menu previews in Albanian, English, Italian would capture international tourist traffic.", services:["Premium Website","Telegram Bot"], price:"EUR 649" },
  { id:34, name:"Riviera Beach Restaurant", sector:"restaurant", location:"Durres Beach", address:"Durres Beach Road, Albania", phone:"+355 69 555 4400", email:"riviera@durres.al", website:"none", siteStatus:"none", automationPotential:72, siteStructure:["Home","Grill Menu","Beach Tables","Events","Gallery","Book a Table"], automations:["Beach table reservation bot","Sunset dinner promotions","Summer event calendar","Weather-triggered offers","Customer loyalty N8N"], proposal:"A beach restaurant without a website in 2025 is like a ship without a sail! We will create a stunning visual website plus a Telegram bot for beach table reservations with automatic weather-triggered promotions on sunny days.", services:["Premium Website","Telegram Bot"], price:"EUR 699" },
  { id:35, name:"Restaurant Port View", sector:"restaurant", location:"Durres Port Area", address:"Near Port of Durres, Albania", phone:"+355 52 230 100", email:"portview@gmail.com", website:"none", siteStatus:"none", automationPotential:68, siteStructure:["Home","Menu","Port View Terrace","Business Lunches","Contact"], automations:["Business lunch booking bot","Corporate catering handler","Daily menu broadcast","Logistics worker loyalty card","Invoice generation N8N"], proposal:"Port View serves the logistics professionals working at Durres Port — a captive corporate audience. A Telegram bot for advance lunch orders, corporate catering packages, and monthly invoice automation would make them number 1 for port business lunches.", services:["Premium Website","Telegram Bot"], price:"EUR 649" },
  { id:36, name:"Pizzeria Napoli Durres", sector:"restaurant", location:"Durres City", address:"Rruga Pavaresia, Durres", phone:"+355 69 600 7700", email:"napoli@durres.al", website:"none", siteStatus:"none", automationPotential:82, siteStructure:["Home","Pizza Menu","Delivery","Promotions","Franchise","Contact"], automations:["Online order Telegram bot","Delivery tracking system","Weekly deals broadcast","Loyalty pizza card N8N","Franchise inquiry handler"], proposal:"Pizza delivery in Durres is done by phone — a massive inefficiency. A Telegram ordering bot with live delivery tracking plus weekly deal broadcasts would immediately increase order volume by 40% and reduce order errors. The loyalty card system creates powerful retention.", services:["Premium Website","Telegram Bot","N8N Automation"], price:"EUR 799" },
  { id:37, name:"Tivari Attorneys at Law", sector:"legal", location:"Durres City Center", address:"Sulejman Kadiu St No.2, Durres", phone:"+355 68 405 5889", email:"info@studioligjore.al", website:"lawfirmalbania.com", siteStatus:"has", automationPotential:72, siteStructure:["Home","Practice Areas","Team","Cases","Publications","Contact"], automations:["Client intake bot","Case status updates","Consultation scheduler","Document request handler","Deadline reminder N8N"], proposal:"Tivari Law Firm handles complex business and international law cases. A Telegram client portal where clients check case status plus a Calendly-style consultation scheduler via N8N would significantly improve client satisfaction and free lawyers from administrative calls.", services:["Telegram Bot","N8N Automation"], price:"EUR 899" },
  { id:38, name:"Studio Ligjore Cipi", sector:"legal", location:"Durres", address:"Durres, Albania", phone:"+355 69 204 2124", email:"info@studioligjorecipi.al", website:"studioligjorecipi.al", siteStatus:"has", automationPotential:65, siteStructure:["Home","Services","Team","Contact"], automations:["Initial consultation bot","Document checklist sender","Appointment scheduler","Case update notifications","Legal FAQ autoresponder"], proposal:"Studio Ligjore Cipi can attract more clients with an automated intake process. A Telegram bot that qualifies potential clients asking about case type, urgency, budget and schedules initial consultations automatically would turn their website into a 24/7 client acquisition machine.", services:["Telegram Bot","N8N Automation"], price:"EUR 799" },
  { id:39, name:"Petani Law Firm", sector:"legal", location:"Durres and Tirana", address:"Durres, Albania", phone:"+355 69 300 4400", email:"info@petanilawfirm.com", website:"petanilawfirm.com", siteStatus:"has", automationPotential:68, siteStructure:["Home","Business Law","Tax Law","International Law","Team","Contact"], automations:["Business registration guide bot","Tax deadline reminders","International client portal","Case intake automation","Monthly legal updates newsletter"], proposal:"Petani specializes in business and international law — ideal for foreign investors in Albania. A Telegram bot in English and Italian that guides foreign entrepreneurs through Albanian business registration plus an N8N newsletter with regulatory updates would make them THE gateway for international business.", services:["Telegram Bot","N8N Automation"], price:"EUR 999" },
  { id:40, name:"American Medical Center Durres", sector:"medical", location:"Durres City", address:"Rruga Ahmet Ramzoti, Durres", phone:"+355 52 222 333", email:"info@spitaliamerikan.com", website:"spitaliamerikan.com", siteStatus:"has", automationPotential:85, siteStructure:["Home","Departments","Doctors","Services","Appointments","Emergency","Contact"], automations:["Appointment booking bot","Test results notification","Medication reminder N8N","Doctor availability checker","Patient feedback collection"], proposal:"American Medical Center is Durres premium healthcare provider. A Telegram appointment bot that shows real-time doctor availability, sends test result notifications, and delivers post-visit care instructions would revolutionize patient experience and reduce no-show rates by 30%.", services:["Telegram Bot","N8N Automation"], price:"EUR 1,500" }
);
companies.push(
  { id:41, name:"Durres Dental Clinic", sector:"medical", location:"Durres", address:"Rruga Anastas Durrsaku, Durres", phone:"+355 68 405 0506", email:"info@durresdentalclinic.com", website:"durresdentalclinic.com", siteStatus:"has", automationPotential:80, siteStructure:["Home","Services","Doctors","Before After","Prices","Book Appointment","Contact"], automations:["Appointment reminder bot","Treatment follow-up N8N","Before/after gallery sender","Dental tourism packages","Annual check-up reminders"], proposal:"Dental tourism is booming in Albania. Durres Dental Clinic should attract Italian, Greek, and German patients seeking affordable quality dental care. A multilingual Telegram bot plus N8N automation for treatment packages and follow-up care would make them a dental tourism leader.", services:["Premium Website","Telegram Bot","N8N Automation"], price:"EUR 1,299" },
  { id:42, name:"Clinic Dentaland", sector:"medical", location:"Durres", address:"Rruga Pavaresia 13, Durres", phone:"+355 69 912 0000", email:"info@dentaland.al", website:"dentaland.al", siteStatus:"has", automationPotential:75, siteStructure:["Home","Treatments","Team","Prices","Gallery","Book Now","Contact"], automations:["Appointment scheduling bot","Treatment plan sender","Payment plan information","Referral program N8N","Reminder sequence automation"], proposal:"Dentaland has an excellent location and competitive prices. A Telegram bot for instant appointment booking plus an automated referral program recommend a friend get a discount implemented via N8N would rapidly grow their patient base through word-of-mouth.", services:["Telegram Bot","N8N Automation"], price:"EUR 899" },
  { id:43, name:"Techi Albania", sector:"it", location:"Durres", address:"L.14, Rr. Bajram Tusha, Durres", phone:"+355 69 432 5942", email:"info@techi.al", website:"techi.al", siteStatus:"has", automationPotential:88, siteStructure:["Home","IT Services","Web Dev","Security","Support","Blog","Contact"], automations:["IT support ticket bot","Service status page N8N","Client onboarding automation","Tech news newsletter","SLA monitoring alerts"], proposal:"Techi Albania offers IT services but could automate their own operations first. A Telegram support ticket system plus N8N SLA monitoring dashboard plus automated client reporting would showcase their capabilities while improving internal efficiency.", services:["Telegram Bot","N8N Automation"], price:"EUR 1,200" },
  { id:44, name:"TechAlb Digital", sector:"it", location:"Durres", address:"Grigor Durrsaku Street, Durres", phone:"+355 69 520 2052", email:"info@techalb.al", website:"techalb.al", siteStatus:"has", automationPotential:85, siteStructure:["Home","Web Design","Digital Marketing","SEO","Contact"], automations:["Lead qualification bot","Project status tracker","Client reporting automation","Social media post scheduler","SEO alert notifications"], proposal:"TechAlb is our direct peer — a collaboration opportunity. We offer specialized N8N integration for their clients plus Telegram bot development as a white-label service. Together we can offer the most complete digital solution in Albania.", services:["N8N Integration","White-Label Telegram Bot"], price:"Partnership" },
  { id:45, name:"IT Durres", sector:"it", location:"Durres", address:"Durres, Albania", phone:"+355 52 400 200", email:"info@itdurres.com", website:"itdurres.com", siteStatus:"has", automationPotential:80, siteStructure:["Home","Web Development","IT Support","Digital Marketing","Portfolio","Contact"], automations:["Project inquiry bot","Portfolio showcase automation","Client feedback N8N","Tech tips newsletter","Support ticket system"], proposal:"IT Durres can differentiate by adding automation services to their portfolio. We propose joint service delivery: they provide development, we provide N8N automation and Telegram bots. A formal partnership would let both companies offer complete digital transformation.", services:["Partnership Proposal","Joint Services"], price:"Partnership" },
  { id:46, name:"Metanow Digital Agency", sector:"it", location:"Durres and Tirana", address:"Durres, Albania", phone:"+355 69 700 8800", email:"info@metanow.al", website:"metanow.al", siteStatus:"has", automationPotential:90, siteStructure:["Home","Odoo ERP","Digital Marketing","Web Dev","About","Blog","Contact"], automations:["Odoo-Telegram integration","CRM automation N8N","Lead scoring system","ERP notifications bot","Client dashboard automation"], proposal:"Metanow is an Odoo ERP partner with significant technical depth. We propose building an Odoo-Telegram connector via N8N integration that their clients can use — a unique product in the Albanian market that could generate SaaS revenue for both companies.", services:["Odoo-Telegram Connector","N8N Integration"], price:"EUR 2,000+" },
  { id:47, name:"Bulloneria Durres", sector:"manufacturing", location:"Durres Industrial Zone", address:"Durres Industrial Zone, Albania", phone:"+355 52 450 300", email:"info@bulloneria.al", website:"bulloneria.al", siteStatus:"weak", automationPotential:70, siteStructure:["Home","Products","Industrial Fasteners","Catalog Download","Contact"], automations:["Product catalog bot","Stock availability checker","B2B order tracking","Bulk order quote N8N","Distributor portal notifications"], proposal:"Bulloneria supplies fasteners to Durres construction boom. A Telegram bot where construction companies check stock availability and place bulk orders plus an N8N inventory alert system would make them the fastest supplier in Albania.", services:["Premium Website","Telegram Bot"], price:"EUR 799" },
  { id:48, name:"Italinox Shqiperia", sector:"manufacturing", location:"Durres", address:"Durres Industrial Zone, Albania", phone:"+355 52 480 200", email:"info@italinox-shqiperia.al", website:"italinox-shqiperia.al", siteStatus:"weak", automationPotential:72, siteStructure:["Home","Stainless Steel Products","Custom Fabrication","Projects","Contact"], automations:["Custom order configurator bot","Project status updates","Technical spec sender","Italian-Albanian client bot","Quality certificate sender"], proposal:"Italinox bridges Italian expertise with Albanian manufacturing. A bilingual Italian and Albanian Telegram bot for Italian clients plus custom fabrication order tracking via N8N would strengthen their Italian business relationships and attract more cross-border projects.", services:["Premium Website","Telegram Bot"], price:"EUR 899" },
  { id:49, name:"Edipack Industrial Packaging", sector:"manufacturing", location:"Durres", address:"Durres Industrial Zone, Albania", phone:"+355 52 460 400", email:"info@edipack.al", website:"edipack.al", siteStatus:"weak", automationPotential:68, siteStructure:["Home","Packaging Solutions","Custom Orders","Sustainability","Contact"], automations:["Custom order request bot","Production timeline tracker","Quality control notifications","Repeat order automation N8N","Eco-packaging calculator"], proposal:"Edipack industrial packaging clients are large companies with recurring needs. An automated reorder reminder system via Telegram plus an N8N workflow for custom order management would increase client retention significantly.", services:["Telegram Bot","N8N Automation"], price:"EUR 899" },
  { id:50, name:"Dalerio Consulting SEO BPO", sector:"it", location:"Durres", address:"Durres, Albania", phone:"+355 69 800 9900", email:"info@dalerio.al", website:"dalerio.al", siteStatus:"has", automationPotential:92, siteStructure:["Home","SEO Services","BPO","Digital Marketing","Case Studies","Blog","Contact"], automations:["SEO report automation N8N","Client ranking alerts","Lead generation bot","Content calendar automation","ROI reporting dashboard"], proposal:"Dalerio is an international SEO and BPO firm — a sophisticated potential client. We propose building their N8N automation stack: automated SEO reporting, client ranking alerts via Telegram, and a lead generation bot for their BPO services. This would save their team 20 plus hours per week.", services:["N8N Automation","Telegram Bot"], price:"EUR 1,500" }
);

// ============================================================
// UI LOGIC
// ============================================================
let filteredCompanies = [...companies];

function getSectorBadgeClass(s) {
  const m={hotel:'badge-hotel',logistics:'badge-logistics',construction:'badge-construction',restaurant:'badge-restaurant',legal:'badge-legal',medical:'badge-medical',realestate:'badge-realestate',it:'badge-it',manufacturing:'badge-manufacturing'};
  return m[s]||'badge-it';
}
function getSectorLabel(s) {
  const m={hotel:'Hotel',logistics:'Logistics',construction:'Construction',restaurant:'Restaurant',legal:'Legal',medical:'Medical',realestate:'Real Estate',it:'IT',manufacturing:'Manufacturing'};
  return m[s]||s;
}
function getSiteStatusBadge(st) {
  if(st==='has')return '<span class="site-badge site-has">Full Site</span>';
  if(st==='weak')return '<span class="site-badge site-weak">Basic</span>';
  return '<span class="site-badge site-none">No Site</span>';
}

function renderTable() {
  const tbody=document.getElementById('companies-tbody');
  tbody.innerHTML=filteredCompanies.map(c=>`
    <tr>
      <td class="col-num" style="color:var(--text-muted);font-weight:600;">${c.id}</td>
      <td class="col-name" title="${c.name}"><strong>${c.name}</strong></td>
      <td class="col-sector"><span class="sector-badge ${getSectorBadgeClass(c.sector)}">${getSectorLabel(c.sector)}</span></td>
      <td class="col-location" style="color:var(--text-muted);" title="${c.location}">${c.location}</td>
      <td class="col-phone"><a href="tel:${c.phone.replace(/\s/g,'')}" style="color:var(--accent-3);">${c.phone}</a></td>
      <td class="col-email">${c.email!=='none'?`<a href="mailto:${c.email}" style="color:var(--accent);">${c.email}</a>`:'—'}</td>
      <td class="col-site">${c.website!=='none'?`<a href="https://${c.website}" target="_blank" style="color:var(--accent-3);">${c.website}</a>`:'—'}</td>
      <td class="col-status">${getSiteStatusBadge(c.siteStatus)}</td>
      <td class="col-potential">
        <div class="potential-bar"><div class="potential-fill" style="width:${c.automationPotential}%"></div></div>
        <span class="potential-label">${c.automationPotential}%</span>
      </td>
      <td class="col-action"><button class="table-action-btn" onclick="openModal(${c.id})">Proposal</button></td>
    </tr>`).join('');

}

function renderProposals() {
  const grid=document.getElementById('proposals-grid');
  grid.innerHTML=companies.map(c=>`
    <div class="proposal-card" onclick="openModal(${c.id})" id="pc${c.id}">
      <div class="proposal-num">#${String(c.id).padStart(2,'0')}</div>
      <div class="proposal-company">${c.name}</div>
      <div class="proposal-sector">${getSectorLabel(c.sector)} · ${c.location}</div>
      <div class="proposal-teaser">${c.proposal}</div>
      <div class="proposal-tags">${c.services.map(s=>`<span class="proposal-tag">${s}</span>`).join('')}</div>
      <div class="proposal-price">${c.price}</div>
      <button class="proposal-view-btn">View Full Proposal</button>
    </div>`).join('');
}

function openModal(id) {
  const c=companies.find(x=>x.id===id);
  if(!c)return;
  document.getElementById('modal-content').innerHTML=`
    <div class="modal-header">
      <div class="modal-company-name">${c.name}</div>
      <div class="modal-sector">${getSectorLabel(c.sector)} · ${c.location}</div>
    </div>
    <div class="modal-contacts">
      <div class="modal-contact-item"><div class="modal-contact-label">Address</div><div class="modal-contact-value">${c.address}</div></div>
      <div class="modal-contact-item"><div class="modal-contact-label">Phone</div><div class="modal-contact-value"><a href="tel:${c.phone.replace(/\s/g,'')}">${c.phone}</a></div></div>
      <div class="modal-contact-item"><div class="modal-contact-label">Email</div><div class="modal-contact-value">${c.email!=='none'?`<a href="mailto:${c.email}">${c.email}</a>`:'—'}</div></div>
      <div class="modal-contact-item"><div class="modal-contact-label">Website</div><div class="modal-contact-value">${c.website!=='none'?`<a href="https://${c.website}" target="_blank">${c.website}</a>`:'No website yet'}</div></div>
    </div>
    <div class="modal-section-title">Our Proposal</div>
    <div class="modal-proposal-text">${c.proposal}</div>
    <div class="modal-section-title">Recommended Website Structure</div>
    <div class="modal-site-pages">${c.siteStructure.map(p=>`<span class="modal-site-page">${p}</span>`).join('')}</div>
    <div class="modal-automations">
      <div class="modal-section-title">Telegram and N8N Automations</div>
      <div class="modal-automation-list">${c.automations.map(a=>`<div class="modal-automation-item"><span class="auto-icon">⚡</span>${a}</div>`).join('')}</div>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem;flex-wrap:wrap;gap:1rem;">
      <div><span style="color:var(--text-muted);font-size:0.85rem;">Investment</span><div style="font-family:'Space Grotesk',sans-serif;font-size:1.8rem;font-weight:800;color:var(--accent);">${c.price}</div></div>
      <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">${c.services.map(s=>`<span class="proposal-tag">${s}</span>`).join('')}</div>
    </div>
    <button class="modal-cta" onclick="contactCompany('${c.name}')">Send This Proposal via Telegram</button>`;
  document.getElementById('modal-overlay').classList.add('active');
  document.body.style.overflow='hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
  document.body.style.overflow='';
}

function contactCompany(name) {
  const msg=encodeURIComponent(`Hello DigiFlow Albania! I am interested in a proposal for ${name}. Please contact me.`);
  window.open(`https://t.me/DigiFlowAlbania?text=${msg}`,'_blank');
}

document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f=btn.dataset.filter;
    filteredCompanies=f==='all'?[...companies]:companies.filter(c=>c.sector===f);
    renderTable();
  });
});

document.getElementById('company-search').addEventListener('input',e=>{
  const q=e.target.value.toLowerCase();
  const af=document.querySelector('.filter-btn.active').dataset.filter;
  const base=af==='all'?companies:companies.filter(c=>c.sector===af);
  filteredCompanies=base.filter(c=>c.name.toLowerCase().includes(q)||c.sector.toLowerCase().includes(q)||c.location.toLowerCase().includes(q));
  renderTable();
});

document.getElementById('modal-close').addEventListener('click',closeModal);
document.getElementById('modal-overlay').addEventListener('click',e=>{if(e.target===document.getElementById('modal-overlay'))closeModal();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});

window.addEventListener('scroll',()=>{
  const n=document.getElementById('navbar');
  window.scrollY>50?n.classList.add('scrolled'):n.classList.remove('scrolled');
});

document.getElementById('contact-form').addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('form-name').value;
  const company=document.getElementById('form-company').value;
  const service=document.getElementById('form-service').value;
  const message=document.getElementById('form-message').value;
  const msg=encodeURIComponent(`Hi DigiFlow Albania!\nName: ${name}\nCompany: ${company}\nService: ${service}\nMessage: ${message}`);
  window.open(`https://t.me/DigiFlowAlbania?text=${msg}`,'_blank');
});

const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)';}});
},{threshold:0.05});

renderTable();
renderProposals();

setTimeout(()=>{
  document.querySelectorAll('.service-card,.step,.proposal-card').forEach(el=>{
    el.style.opacity='0';el.style.transform='translateY(30px)';el.style.transition='opacity 0.5s ease,transform 0.5s ease';obs.observe(el);
  });
},100);

console.log('DigiFlow Albania — 50 companies loaded!');

// ============================================================
// LANGUAGE SWITCHER + SCROLL TO TOP
// ============================================================

const translations = {
  en: {
    nav_services: "Services", nav_companies: "50 Companies", nav_proposals: "Proposals",
    nav_contact: "Contact", nav_cta: "Get Started",
    hero_badge: "🇦🇱 Durres, Albania · Digital Agency",
    hero_title: "We Build", hero_title_accent: "Premium Websites",
    hero_title2: "& Automate Your Business",
    hero_sub: "Transform your Durres business with a stunning website + Telegram bot automation powered by no-code N8N workflows. Zero technical skills required.",
    btn_proposals: "View Proposals", btn_companies: "50 Companies Database",
    stat1: "Companies Analyzed", stat2: "Industries Covered", stat3: "Revenue Growth"
  },
  uk: {
    nav_services: "Послуги", nav_companies: "50 Компаній", nav_proposals: "Пропозиції",
    nav_contact: "Контакт", nav_cta: "Почати",
    hero_badge: "🇦🇱 Дуррес, Албанія · Digital Agency",
    hero_title: "Ми Будуємо", hero_title_accent: "Преміум Сайти",
    hero_title2: "та Автоматизуємо Бізнес",
    hero_sub: "Трансформуйте свій бізнес у Дурресі за допомогою сайту + Telegram-бота на основі no-code платформи N8N. Без технічних навичок.",
    btn_proposals: "Переглянути Пропозиції", btn_companies: "База 50 Компаній",
    stat1: "Проаналізовано Компаній", stat2: "Охоплено Галузей", stat3: "Зростання Доходу"
  },
  al: {
    nav_services: "Shërbime", nav_companies: "50 Kompani", nav_proposals: "Propozime",
    nav_contact: "Kontakt", nav_cta: "Fillo Tani",
    hero_badge: "🇦🇱 Durrës, Shqipëri · Agenci Dixhitale",
    hero_title: "Ne Ndërtojmë", hero_title_accent: "Faqe Premium",
    hero_title2: "& Automatizojmë Biznesin Tuaj",
    hero_sub: "Transformoni biznesin tuaj në Durrës me një faqe interneti + bot Telegram të automatizuar nga platforma no-code N8N. Zero njohuri teknike të nevojshme.",
    btn_proposals: "Shiko Propozimet", btn_companies: "Baza 50 Kompanive",
    stat1: "Kompani të Analizuara", stat2: "Industri të Mbuluara", stat3: "Rritje e të Ardhurave"
  }
};

let currentLang = 'en';

function applyTranslation(lang) {
  const t = translations[lang];
  if (!t) return;
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  // Update search placeholder
  const search = document.getElementById('company-search');
  if (search) {
    if (lang === 'uk') search.placeholder = 'Пошук за назвою, сектором або локацією...';
    else if (lang === 'al') search.placeholder = 'Kërko sipas kompanisë, sektorit ose vendndodhjes...';
    else search.placeholder = 'Search by company, sector, or location...';
  }
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyTranslation(btn.dataset.lang);
  });
});

// SCROLL TO TOP
const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) scrollTopBtn.classList.add('visible');
  else scrollTopBtn.classList.remove('visible');
}, { passive: true });

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================================
// THEME SWITCHER
// ============================================================
const themes = { dark: '', black: 'theme-black', light: 'theme-light' };
document.querySelectorAll('.theme-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const t = btn.dataset.theme;
    document.body.classList.remove('theme-black', 'theme-light');
    if (themes[t]) document.body.classList.add(themes[t]);
    localStorage.setItem('digiflow-theme', t);
  });
});
// Restore saved theme
const savedTheme = localStorage.getItem('digiflow-theme');
if (savedTheme && savedTheme !== 'dark') {
  document.body.classList.add(themes[savedTheme]);
  document.querySelectorAll('.theme-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.theme === savedTheme);
  });
}
