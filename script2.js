var oil = "<h2>Oil and Filter Change</h2> Your engine oil and oil filter need to be changed regularly, because as an engine runs, tiny bits of metal, dirt, and carbon end up in the oil and can cause excessive wear on the engine. The non-synthetic oil that was traditionally used in the past always had a 3,000-mile rule of thumb, but most cars today run on synthetic, which can safely last between 5,000 and 10,000 miles between oil changes, depending on the type."
var tires = "<h2>Tires</h2> Your car's tires should be checked regularly to ensure they are in good shape: look for good tread depth across the tire and use a tire pressure gauge to avoid ensure they aren't under- or over-inflated. Having the correct amount of air pressure in your tires isn't just good practice as far as safety is concerned–it'll also ensure optimum rolling resistance which will help you save money on fuel."
var tirerotation = "<h2>Tire Rotation</h2> Tire rotation every 6,000-8,000 miles (or according to your vehicle handbook) will help to even out wear."
var airfilter = "<h2>Air Filter</h2> A clogged air filter makes it harder for your engine to breathe, and that can negatively impact performance. Changing the air filter every 15,000 to 30,000 miles is a good rule; if you park or drive in a dusty environment, change the air filter closer to 15,000 miles."
var fuelfilter = "<h2>Fuel Filter</h2> If your fuel filter gets clogged, the engine will run rough, or not at all. Manufacturer suggestions on fuel filters vary widely, but some recommend replacing your filter as early as 30,000 miles. Your best option is to ask your mechanic to perform a pressure test to determine the health of your fuel filter."
var battery = "<h2>Battery</h2> Extreme temperatures, age, and long periods of non-use affect batteries. Keep in mind that batteries are warrantied and pro-rated by time, not mileage, and are designed to wear out. Most batteries will last four or five years, which puts the average driver right around 50,000 to 60,000 miles. If you're not sure when your car battery was last replaced it's possible to have it tested to see how well it holds a charge. At the same time ensure the battery terminals are free of corrosion and dirt."
var brakefluid = "<h2>Brake Fluid</h2> Your brakes are engaged through a hydraulic system. But when the fluid in that system is contaminated by water, its boiling point is lowered, and it can turn to gas—which is compressible. This leads to a “squishy” brake pedal. To ensure that your brakes work as advertised, bleed your brake system of its fluid and replace with new brake fluid according to your vehicle’s manual. Most manufacturers recommend doing this every 20,000 to 45,000 miles. "
var brakepads = "<h2>Brake Pads</h2> Brake pads and shoes are designed to wear out, and usually make screeching noises when they need to get replaced. Have them checked on a regular basis. A good set can last up to 50,000 miles."
var brakerotors = "<h2>Brake Rotors</h2> Your brakes work by squeezing the pads against metal discs (called rotors) to slow the vehicle. Rotors get subjected to lots of heat due to the friction between them and the brake pads, and they can warp over time. You can either replace your rotors or have their surface ground down so they are smooth again at roughly 60,000 miles. Re-surfacing your rotors is the less-expensive option, but can be done only once per set. After washing your car it's good practice to go for a short drive so that the rotors can dry off to avoid any corrosion forming."
var coolant = "<h2>Coolant</h2> A mix of water and antifreeze flows through your car engine's radiator to keep it at the correct temperature. If you lose too much coolant, the engine will overheat, which can cause severe damage. Plan to replace your coolant at 60,000 miles, and make sure your mechanic flushes the entire cooling system while they’re at it."
var transmissionfluid = "<h2>Transmission Fluid</h2> Low transmission-fluid levels will cause shifting problems and can burn up the transmission. It is important to monitor your transmission fluid regularly, rather than adhere to a specific mileage marker. Healthy fluid will be pink and smell sweet, while bad transmission fluid will be darker red, or even brown, and smell burnt. Many cars will keep a transmission-fluid dipstick toward the back of the engine bay (the windshield side). However, some cars don’t have a dipstick for transmission fluid at all, and low or contaminated fluid will instead light a warning light on the dashboard—often the “check engine” light."
var hoses = "<h2>Hoses</h2> The hoses on your car carry coolant, power steering fluid, and gases for the air conditioning system. As the rubber ages, cracks can form, and a busted hose will cause trouble in a hurry, so have them checked and changed as needed, particularly as your car approaches six-figure mileage."
var powersteeringfluid = "<h2>Power Steering Fluid</h2> Low power steering fluid will cause heavy steering or excessive noise while turning the wheel. Plan to flush and replace your power steering fluid around 75,000 miles, or when problems arise."
var sparkplug = "<h2>Spark Plugs</h2> When components of your ignition system fail, you may get a “check engine” light on the dash, hard starting, or rough running. Your mechanic will be able to plug a laptop into your car to look for a “code” that will tell them what needs to be replaced. The timing depends largely on the type of spark plugs you have in your car. Most new cars use iridium or titanium spark plugs, which can sometimes last up to 100,000 miles, let alone 90,000. But be careful when it comes to this particular element of car care: Cheaper spark plugs, made of copper, are still in use and typically need to be replaced by 30,000 miles."
var timingbelt = "<h2>Timing Belt</h2> Cars that use a timing belt rather than a timing chain need to worry about this bit of maintenance. We recommend changing your belt pre-emptively between 75,000 and 90,000 miles (or when stated in your vehicle's handbook if sooner), as a belt failure can lead to catastrophic damage (and leave you stranded by the side of the road with a big auto repair bill looming). If your car uses a timing chain rather than a belt, you should still ask your mechanic to inspect it, as the links in the chain can stretch, but it should last well into six-figure mileage."

window.addEventListener('load', ()=> {

    const inputVal = localStorage.getItem('INPUTVAL');

    if (inputVal < 10000){
        document.getElementById('information').innerHTML = oil;
        document.getElementById('information2').innerHTML = tirerotation;

    }
    else if (inputVal >= 10000 && inputVal < 30000){
        document.getElementById('information').innerHTML = oil;
        document.getElementById('information2').innerHTML = tires;
        document.getElementById('information3').innerHTML = airfilter;
        document.getElementById('information4').innerHTML = fuelfilter;
    }
    else if (inputVal >= 30000 && inputVal < 45000){
        document.getElementById('information').innerHTML = oil;
        document.getElementById('information2').innerHTML = tires;
        document.getElementById('information3').innerHTML = airfilter;
        document.getElementById('information4').innerHTML = fuelfilter;
        document.getElementById('information5').innerHTML = brakefluid;

    }
    else if (inputVal >= 30000 && inputVal < 60000){
        document.getElementById('information').innerHTML = oil;
        document.getElementById('information2').innerHTML = tires;
        document.getElementById('information3').innerHTML = airfilter;
        document.getElementById('information4').innerHTML = fuelfilter;
        document.getElementById('information5').innerHTML = brakefluid;
        document.getElementById('information6').innerHTML = battery;
    }
    else if (inputVal >= 60000 && inputVal < 90000){
        document.getElementById('information').innerHTML = oil;
        document.getElementById('information2').innerHTML = tires;
        document.getElementById('information3').innerHTML = airfilter;
        document.getElementById('information4').innerHTML = fuelfilter;
        document.getElementById('information5').innerHTML = brakefluid;
        document.getElementById('information6').innerHTML = battery;
        document.getElementById('information7').innerHTML = brakepads;
        document.getElementById('information8').innerHTML = brakerotors;
        document.getElementById('information9').innerHTML = coolant;
        document.getElementById('information10').innerHTML = transmissionfluid;
    }
    else if (inputVal >= 90000 && inputVal <= 999999){
        document.getElementById('information').innerHTML = oil;
        document.getElementById('information2').innerHTML = tires;
        document.getElementById('information3').innerHTML = airfilter;
        document.getElementById('information4').innerHTML = fuelfilter;
        document.getElementById('information5').innerHTML = brakefluid;
        document.getElementById('information6').innerHTML = battery;
        document.getElementById('information7').innerHTML = brakepads;
        document.getElementById('information8').innerHTML = brakerotors;
        document.getElementById('information9').innerHTML = coolant;
        document.getElementById('information10').innerHTML = transmissionfluid;
        document.getElementById('information11').innerHTML = hoses;
        document.getElementById('information12').innerHTML = powersteeringfluid;
        document.getElementById('information13').innerHTML = sparkplug;
        document.getElementById('information14').innerHTML = timingbelt;

    }
})