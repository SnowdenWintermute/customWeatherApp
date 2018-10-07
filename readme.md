## Weather of the Future

### Welcome to "Weather of the Future", an openweathermap API app.

TECHNOLOGIES USED:
- HTML
- CSS
- JavaScript ES6

HOW TO BUILD AND RUN:
Because this project uses basic technologies it
should run by simply launching index.html in a modern browser.
For location services to work, make sure you are visiting the
secure (https) version of the page when viewing on an external host.

COMPATIBILITY:
I have tested this app on the following browsers:
- Firefox 62.0.3 or newer
- Mobile Firefox
- Google Chrome 69.0.3 or newer
- Mobile Chrome
- Safari 12
- Mobile Safari
- Samsung Internet 7.4.00.70 or newer

THOUGHT PROCESS:
The first thing I had to do was get the data from the API, so I had to learn how to
make an AJAX call. I remembered doing this for a little project on
freeCodeCamp so I went back and looked at that code. It was done in jQuery,
which I haven't used since my early days learning and I wanted to stay away from
it if I could. I searched YouTube and the videos I saw mainly used jQuery as well.
I found a great video by Brad Traversy that explained nicely how to do it in plain JS.
I followed his example to get the weather data object.

Next, I wanted to make a search bar at the top. I mocked up a basic one just to work
with for the time being. My plan was to take the value property of the form fields and
use a template string to put in the URL of my API calls.

Once the API call was successful I wanted to make some divs appear with the data for the five
day forecast. I looked at accuweather.com to see what their divs looked like. I used a for
loop to create the divs and fill them with info. In the divs I wanted to show the high and
low temperatures for each day, so I wrote a function to loop through all the weather reports
and find the highest and lowest temperatures in each date.

Because the data from the API was not necessarily in an easy to read format, I made a
function to parse the data and do things like get the weekday name from dates, and a few
other niceties. It also got the icons to show by using a template string to put the icon
data into a URL. It was around this time I started to notice that the icons were showing
night-time even though it was day!

The way I was getting the date was wrong. I was using string.slice() to get
the date that was returned by the API, which was in UTC. Instead, what I needed to do was
use a function to get the date from the unix UTC timestamp. By using the built-in Date object
I was able to get a date that was in the correct time zone.

After that was resolved, I started to make the hourly section. The idea was that when a
user wanted more detailed info on a certain day's weather, they could click a button
and a new section would appear with hourly info. This section was again made with a
loop to create each hour's div and give it info from the API.

Once I had the basic functionality handled I started to focus on making the CSS look
better. I used color.adobe.com to find nice color schemes and combined two that I liked.
Using flexbox I arranged the elements, making sure to test it in the mobile view
as well in the Firefox developer tools. Finally I added some shadow to the search bar
and buttons, and made the shadow change when these elements were focused.

One other piece of functionality that I wanted was location search. I recalled doing
this in the old project that I did on freeCodeCamp. A YouTuber named Dylan Israel had
a video about how to do this. I also read about it a bit on stackoverflow.

This is when I started to test my app on github pages and my personal site. The location
was not working, even though it worked locally. I read a bit and learned that I needed
to use https links for the API and visit the app's page itself using https, rather than http, or
the location wouldn't work. I changed all the links to https.

There were other bumps in the road, but eventually I got to the point where I could
say I was pretty much done. From there, I spent some time cleaning up the CSS and
JavaScript, adding comments and removing or rearranging things.

Later that night I showed the finished product to my friend, who had some suggestions.
The next day I had some spare time so I went about trying to implement one of his ideas,
which was making six days display if the data was spread across six days, which it usually
was. While trying to implement this I realized I was calling functions over and over
unnecessarily. I was able to reduce this by storing the results of the functions in variables, then using the variables.

TRADEOFFS:
- Animations vs efficiency
  - I am a big fan of speed. I usually turn off animations in
   any application that gives me the option to do so. There is a minor
   fade in/out animation when focusing the search fields and buttons.
- Location Icon
  - I wanted to use the font-awesome icon that looks like a
  target on google maps, but it was for paid users only.

WHAT I MIGHT ADD:
- Loading gifs for if the API calls take a while
- The ability to search by state/province
- Wind direction icons
- Color themes based on current weather
- Use a different API that has all hours, not just every three
