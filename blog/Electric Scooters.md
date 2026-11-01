### First Steps
![](_resources/Electric%20Scooters/838aaf62d40ac62f99816a97c0fd64c5_MD5.jpeg)
(Photo by: Official NXT/Boardwalk Page)

I am personally an avid fan of electric vehicles, and so evidently one of the first things I bought with larger paychecks was an NXT Voltaris Pro S v1. We bought earlier this year, and continue to use it for errands still for family and loved ones.

### The v2
Naturally, upon hearing about the new NXT Voltaris Pro S v2 which had 200km of range (an upped battery from 72v 68ah to 72v 78ah), I jumped the gun and bought one.

This is how it looks now.
![](_resources/Electric%20Scooters/a168dc25b1e1e7c8b0a64e2d74b01a8e_MD5.jpeg)

Each panel slapped on this thing gives off 30W. All run in parallel so that a shaded one panel doesn't cripple the entire array. 

On a full sunny day, each one would in theory net you a ~2 charge. 5 of them like in the photo should net you 10%. Drive to work, and by the time you go home, you'd be back to full charge. Easy peasy right?

### WRONG
There were a bunch of issues (or trade-offs depending on how you look at it) with the setup above

EVs are by design heavier than traditional ones. The Voltaris Pro S v1 for instance is already heavier than a typical Yamaha Mio Gear. The Voltaris Pro S v2  with a larger battery pack underneath the floorboard, and so this was already heavy stock.


![](_resources/Electric%20Scooters/679d66ad9542e06007b6442dd4451210_MD5.jpeg)
(Photo by: [ECOPower Store Lazada](https://www.lazada.com.ph/products/i5160441572-s30581128636.html))

Each panel I added in weighed 2.2kg, totaling 11kg for 5 (not accounting for mounting). 

This meant that parking my motorcycle with the side stand in soft terrain was a no-go. The center stand was also impossible to get propped up due to the added weight.

In the end, I took out most of the panels, and opted for a single one on the top box for a lightweight approach.

### The Good
![700](_resources/Electric%20Scooters/6c8cd1be9e32c244efbeaba6b65819a3_MD5.jpeg)
A round trip drive from Iponan to the Cagayan de Oro city center clocks out at around 14% battery usage, or 0.79kWh. This equates to 14.1 PHP assuming 14.85 PHP per kWh. This doesn't include ~2% I get for free per day from one 30W panel at the back.

Electric scooters are far more efficient than anything else right now, even compared to electric cars. You're not lugging around a metal chassis with air-conditioning after all.

### Comparisons/Context

| Vehicle / Model                                                     | Classification                    | Battery / Driving Range | Price Range (PHP)   |
| ------------------------------------------------------------------- | --------------------------------- | ----------------------- | ------------------- |
| **[NXT Voltaris Pro S V2](https://nxtebike.com.ph/)**               | Electric Maxi Scooter             | **170 – 200 km**        | ₱135,000 – ₱140,000 |
| **[NXT Storm XRE](https://nxtebike.com.ph/products/storm-xre)**     | High-Performance E-Motorcycle     | **200 – 250 km**        | ₱216,599            |
| **[Wuling Macaron (170km variant)](https://wulingph.com/macaron/)** | Mini Electric Car (M1 Class)      | **170 km**              | ₱600,000 – ₱699,000 |
| Typical Lazada 500W E-Bike                                          | Budget Electric Bicycle / Scooter | **40 – 60 km**          | ₱9,500 – ₱15        |
(Disclaimer: Scraped from online sites via Gemini)


On the far low-end of the budget range, you may get more bang-for-buck with electric pedal bicycles. They're also significantly cheaper , but as per LTO regulations, those are highway-restricted. 

L3 e-scooters like the Voltaris Pro S or the NXT Storm XR have no such issues, and have actual license plates.

On the far-high end, there are electric vehicles for city travel. There are other models not listed in that quick table I jimmied up that would let you travel farther (within 1M-3M price range).

I've gone through all of these from E-bike to E-scooter to EV, this should hopefully help you decide what to pick.


### Limits
Back to my motorcycle now!

![](_resources/Electric%20Scooters/d7fd7cd1fff93e38432cf9cbeb055181_MD5.jpeg)
You're obviously not doing a one-day Davao trip on this thing, or even electric vehicles in general around or below the 2M PHP price-range, and so adopting EVs on the low-end of the price range requires you to change your trips up a bit.

The 590km example above might also be longer in reality with range calculations, as steeper slopes will use up more juice. So on the lower-end of the price range, one-day EV trips are still impossible.

### Stops
Stops are absolutely necessary. Range-wise for obvious reasons of course. You will have to look for Airbnb units, hotels, or inns that will let you charge. Charging times usually hover around 2-8 hours, depending on how much you've travelled. 

The likely thing you'd have to do is to stop, charge, and rest/sleep at wherever you land, planning where long before your battery runs dry.

In the context of that Cagayan de Oro to Davao route, this would mean stopping and sleeping 3/4 times to charge, and so this may be a deal-breaker for some people.


### Uphill
Say you slapped on a generator on your electric scooter or low-end EV.
^another blog post on this coming soon

Range is no longer an issue, sure, but there's more factors at play that you might not be aware of.

#### Motor

![](_resources/Electric%20Scooters/d63fbdfd6b8b9caf26e23955ffba0a6e_MD5.jpeg)
(Photo by: [EV Infrastructure News)](https://www.evinfrastructurenews.com/ev-technology/electric-vehicle-ev-motors-technology-guide)

EVs are powered by electric motors. They're just like gasoline engines, but with their own quirks.

These are notoriously hard to cool due to air gaps in between the stator and the rotor. 

I'm certainly not going to go lecture you on putting ferrofluid to improve cooling, or with that needing periodic maintenance to replace it (you can look that up on your own, there's AI out there), but point being, there is heat buildup and it will heat up faster than you cool it when driving uphill.

This normally isn't an issue for shorter trips or elevations that need less than 30 minutes to get to the top, but at longer ones, you will likely encounter issues.

#### Motor Controller
You can't just drive an electric motor straight off the battery, and so you need a controller. 

Well, you certainly can if you ask AI, it'll tell you about how that'll go (badly).

(Disclaimer: I'm not an electrician, so take this layman's explanation with a grain of salt)
A motor takes in 3-phase power, and so to make it spin, you'll have to send power in phase A, then B, then C, and again. This makes the motor spin, sort of like three electric hands pushing a wheel.

A motor can take in a mix of high voltage/low amperage or low voltage/high amperage depending on what's needed.

Starting from stand-still or driving at lower speeds may warrant low voltage/high amperage. To get you moving, the controller might take your battery's 72V and step it down inside the motor phases to something like 36V while cranking the current up to a massive 150A just to generate raw torque.

Higher speeds may warrant high voltage/high amperage, or high voltage/low amperage. Once you are cruising at top speed on flat ground, the controller unleashes the full 72V but drops the current down to around 30A.

The controller gets hot doing these voltage/amperage conversions, your electric motor hub does too.

TLDR: Going up? low speed, high amps, hot. Drive up too long? Forced shutdown prevent overheat.


(Disclaimer: I haven't done the thought experiment below yet)

Now, back to that CDO-Davao trip, let's say you drive uphill for an hour or 100km with the same motorcycle I have (Voltaris Pro S v2). You will run into thermal throttling. You may notice the controller slowing down initially, then it finally stops. You see a red warning on the dash.

And so you stop beside the road for 30 minutes to let things cool down. You drive again for another 100km, hot, stop again. Drive, hot, stop, and so on.

This doesn't include you needing to stop for charging, and might be a gross overestimation, but the fact is that if you drive uphill for long enough, you will get shut down.


### End
This post isn't to necessarily ward you off from buying EVs, or stopping you from driving one you already own for long trips.

But this should give you a good idea on what things might shut down on you first, or what might break, so that you have a better understanding the next time you do decide to do a lengthy trip on your EV.




