**Not present:**
- Lollo (*Sick*)
# Sprint review
#### Joseph
- **Research - EDHREC**
	- Synergy score
	- Layout
	- Code scraping 
		- Not allowed to use there code

- **Created a script**
	- On arcidec website 
		- And the linking pages
	- Gets all the links and
		- Adding my modification 
		- compile it to json

- **Created another script to work with the script above**
	- For information (Each card)
		- Name
		- Quantity 
		- Prices
		- Color ( Mana )
		- Set
		- Supertypes 
		- Subtypes
		- SaltScore
			- How salty users thinks that card is
		- CMC
			- "Converted Mana Cost"
	- This information is relevant to create an effective search function and sorting function
	- The script looks for the Commander
		- Checks Mana type
		- Sorts accordingly into folders
		- Stores that as a category 

- **Script for precons**
	- Based on date
		- This date is not accurate to the consumer as it reflects the creation date and not the release date

- **Theme Script** (*Themes are updated continuously in our list on discord*)
	- A Collection of 50+ Themes to make sorting and deck-building easier for the consumer

- **Theme.crit.json** -> For each object
![](https://i.imgur.com/hspZ4i2.png)
- Name
- Name of theme
- Criteria 
- Checks oracle text for keywords 

-  **ThemeSynergy.json**
![](https://i.imgur.com/C9ZuTWs.png)
-  Best card that has the best synergy for that theme
- For each theme there are 10 cards with the highest synergy value/score

 - **ThemeComSyn.json**
 ![](https://i.imgur.com/KguPTg6.png)
- All themes
-  Only cards that can be commanders (Generated content - Will double check)

- **Sorting script **
![](https://i.imgur.com/6MKHDym.png)
- Name
- IMG Uri
- CMC
- Oracle text
- Color ID
- Keywords

#### Emma
- A lot of work done!
	- Lacking structure in practical work because of no issues
		- Make more issues/make issues as you go
		- Its hard to keep track of what everybody is doing

- User navigation 
	- How the user would want to use the site
	- Based on ACAG standards
	- I wanted to use the user stories to set up a frame to work within. 

- Lofi 
	- Trying to adding the features in a way to follow the feedback
		- Intuitive 

- Research 
	- How to have a specific card be connected to another id to display multiple cards of the same kind
		- Different conditions 

- Hifi
	- Started working on the hifi

- Help 
	- Were do we want to display things? 
		- User Decks
		- Other User Decks (Are there other decks?)

#### Alex 
- Personas 
	- Could use feedback from the team
	- Tried to make them different but with the analysis in mind 
- Recover 
	- Still sick 

#### Dennis
- Live Doc
	- Group sessions
		- Tried to take notes and come to conclusions when working in a group 
	- Sitemap 
		- Added structure to our verbal meeting to make sure the group had all understood the same thing
	- Sprint Review and planning
		- Taking notes to act as documentation and a guide for further more specific documentation 
	- Daily stand-up
		- Added notes, progress and thought.
		- Took attendance 

- Think-tank with the group
	- API
	- Backlog
	- Structure and tech 

- Github setup
	- Back and frontend setup with dependencies and @type packages.

#### Clara
- Documentation 
	- Tried to include everything 
		- Information is scattered but i tried
	- Summary sorted by date 
- Research 
	- Where to begin? 
	- Ideas about the next steps we should follow
- Deployment worries 

# Sprint planning 

#### Hifi
- Work of Lofi and have the weekend open for voting 
	- Decks = Users decks 
		- + create new deck 
### Github
#### Branching 
- Make feature branches
- Make a broad backlog with clear feature description and user-stories 
	- This will be used as a sub-main branch to work on smaller parts of that feature
#### Initial merge
- Setup Backend with
	- Typescript
	- Jest, Supertest
	- ESLint
	- Prettier
- Setup Frontend with 
	- Typescript
	- Tailwind 
	- ESLint
	- Prettier
- Make a cheat-sheet for pull requests
	- Implement ESLint to push clean code to branches
#### Deployment 
- Setup a frontend deployment until Friday
- Setup a backend deployment 

#### EDR / DM Scheme

#### README
- Add information into our readme about use-case

#### Lollo
- Set up a financial plan for the project

#### Joseph
- **Tidy up the Theme-scripts**
	- Generated content will be tweaked
		- Redundant themes will get cut

- **Move the Data to a DB**
	- MongoDB
	- Build an API for *synergy-stuff*
		- Easy access to the information 

- **Make more Theme scripts**
	- To sorts out themes based on commander
	- Depending on theme, sort other cards to recommend

#### Emma
- Hifi
	- I will create issues after researches 
- Frontend setup
	- Setting up ESLint for React frontend

#### Alex
- Hifi

#### Dennis
- Backend setup
- Frontend setup 
- Pull request guide
- Create a guide that the team can follow regarding issue-managing 

#### Clara
- Github Branches (Feature branches)
- Update documentation 