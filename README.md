# Instructions

- Run npm install in root directory
- Ensure you have your twitter API keys and secrets set up or change the name of the sample.env => .env

```JavaScript
## What the response from the server should look like
{ message: "Server is running on ${PORT, default is 4000}" }
```

- Use an API client like Postman to test endpoints
- For the assignment, the following two objectives were completed:

## Show which hashtags were recently used by a user

- **get("/hashtags")**: Will look threough the user's 20 most recent tweets and pull the hashtags from them.

```JavaScript
## What the body of the request should look like when looking for a users mentions
{"search_term": "@nba"}

## What the body of the response should look like
{
    "message": [
        "NBAAllStar",
        "GLeagueIgnite",
        "PhantomCam",
        "WeAreTheValley",
        "NBAAllStar",
        "PhantomCam",
        "AllFly",
        "AllFly",
        "NBAFantasy",
        "PhantomCam"
    ]
}
```

## Find the last 5 mentions of a user or hashtag

- **get("/mentions")**: Will look for the most recent mentions of a hashtag or user

```JavaScript
## What the body of the request should look like when looking for a users mentions
{"search_term": "@nba"}

## What the body of the response should look like
{
    "message": [
        "RT @daledits: VAMOS COMEÇAR A SEMANA COM SAUDADE? \n\n🦖DeMar DeRozan e Kyle Lowry! \n\n🔴Que saudade desses dois! Época boa demais, ta maluco.…",
        "RT @NBA: ▪️ Hornets follow incredible comeback W\n▪️ Washington: Career-high 42 PTS \n▪️ Lillard: 30+ PTS in 5 of last 7 games\n\n@hornets vs.…",
        "RT @NBA: 📸 @Giannis_An34's slam and reax from EVERY ANGLE!\n\n36 PTS | 17 in 4Q | 5 straight @Bucks Ws https://t.co/CStltDT8ng",
        "RT @NBA: 👑🎯🚨\n\nLBJ from DEEP at the buzzer to cap off the @Lakers 73-point 1st half on ESPN. https://t.co/9ixJciJbEv",
        "@ledisneymouse69 @NBA Rent free"
    ]
}
```

```JavaScript
## What the body of the request should look like when looking for a hashtags mentions
{"search_term": "#nba"}

## What the body of the response should look like
{
    "message": [
        "RT @EmilioPicks: 100 ❤️ y les dejo Free Pick\n150 RT 🔁 y les regalo el asegurado #NBA de hoy\n\nVamos a cerrar la primera mitad de temporada c…",
        "NBA Schedule Notes - 3/1/21 by @CK_013 #NBA #DFS - https://t.co/FvO4P6Yzet https://t.co/eFsBJk4MwJ",
        "RT @PropBetGuy: #NBA   weekly recap:\n\nW1:  25-17 +6.1u ✅\nW2:  12-7 +3.9u ✅\nW3:  12-5 +7.1u ✅\nW4:  9-10 -1.9u ❌\nW5:  15-3 +11.9u ✅\nW6:  10-6…",
        "LA Lakers 80s &amp; Jack Nicholson.\n•\n#NBA #LA #Lakers https://t.co/gNAH2pyHyR",
        "RT @EmilioPicks: 100 ❤️ y les dejo Free Pick\n150 RT 🔁 y les regalo el asegurado #NBA de hoy\n\nVamos a cerrar la primera mitad de temporada c…"
    ]
}
```
