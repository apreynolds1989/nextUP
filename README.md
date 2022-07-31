# nextUP (game-tracker-v2)

---

_Please note that this program is still under development and may not work as expected_<br>
[nextUP](https://apreynolds1989.github.io/nextUP/)

### What is it?

---

nextUP, formly known as game-tracker, is a program used to track how many games every active player in the NHL will play in the given week (running from Monday to Sunday), as well as their Off-Day Games (Monday, Wednesday, Friday, Sunday). The website also tracks a wide variety of stats so that it is all available in one place when you are trying to decide which players you want to add to your fantasy team for the current week. I have made extensive use of the undocumented NHL API thanks in large part to [Drew Hynes](https://gitlab.com/dword4/nhlapi) for his attempt at documenting the API.

This updated version of game-tracker has been rebuilt using React.

### Why Make it?

---

I play a lot of fantasy hockey and my gameplan every week is to review the NHL schedule, see which teams are playing the most games that week and which teams are playing the most games on Off Days, and then I add the players from those teams that I think will be the most effective for me that week. My strategy in fantasy hockey is simply to have more players playing games every week than my opponent. This strategy has led to four first place finishes, four second place finishes and multiple third place finishes in recent years (and that doesn't include being in first place in one pool and second place in another when the 2020 fantasy season was cancelled due to COVID!). Now that I have pumped my tires a little bit, back to the program. I have always thought it would be great to have a program that would do the work for me, so I decided to build it myself!

### What's Next?

---

Currently the program loads very slowly as it makes over 800 seperate calls to the NHL API. As far as I can tell, there is no way to get a full list of active players from a single call. I would like to implement a database that collects the information in one place and calls the API repeatedly to keep it up to date and then call all of that into the program in a single call.

I would also like to implement a part of the Yahoo Fantasy Sports API to provide the % Owned in fantasy leagues number. Right now every single player in the league is listed even though a large portion of them won't be available in any fantasy league.

I am also planning to implement the schedule for the given week into the program

### Built With

---

-   [Drew Hynes - Documenting NHL API](https://gitlab.com/dword4/nhlapi)<br>
-   [create-react-app](https://create-react-app.dev/)
-   [MUI](https://mui.com/)
-   [react router](https://v5.reactrouter.com/web/guides/quick-start)
