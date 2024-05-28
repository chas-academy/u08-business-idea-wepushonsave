**Not present:**

# Sprint Review

## Goals

- [x] _"Have something to show PO and CTO"_
- [x] _"Deploy the frontend"_
- [x] - Deploy the backend

## Features

### File structure

##### Frontend

- Well structured and intuitive

### Profile

##### Frontend

- Still in progress
- Dropdown-sidebar done

##### Backend

- Working on tokens for login
  - Continue on the login-branch

## Community page

##### Frontend

- Deploying today
- Styling it today

##### Backend

- Dependent on user-data from backend
  - This will be put on hold for the time being

## Login

- Not merged with main
- Not tested

##### Frontend

- Styling is missing, but the rest is done

##### Backend

- Tokens are missing, but the rest is done.
  - "Tokens are given when a user logged in" -> redirect to login on register

## Register

- Not merged with main
- Not tested

##### Frontend

- Styling is missing, but the rest is done

## MTG Documentation

##### Frontend

- Some styling is missing (colors)
- One page left (mostly Copy paste)
  - Might be done today (adding images)

## Navbar

- Design is done
- Still missing href-links

## Work Documentation

- All good

## Card

##### Frontend

- Mostly done
- First draft of the design is done
  - Some issues with position of the navbar

##### Backend

# Sprint Planning

## Goals

_Being able to register and login as a user, view profile information and user lists_
_Users should be able to navigate on the page using the navbar_
_Users can search for specific cards by name_
_Users want to be able to filter cards by specific information and attributes_
_Features should be visible for a logged in user._
_Create a UI shell for the `Deck Builder` interface_
_First draft of the MTGTombAPI should be implemented_

## Git Workflow

- [ ] Images and commands for how to correctly push and merge with main. @Dennis & @Joseph

## Features

### Home page - @Emma

- [ ] Welcome image - @Emma

### Community page - @Emma

- [ ] Backend for community page - @Emma

### Search - @Dennis

- [ ] Create the UI for the home-page search - @Dennis
- [ ] Make it possible to search for specific cards by name -@Dennis

### Filter - @Open

- [ ] Make a list of the filters we need for this feature
- [ ] Create the UI for the home-page filter
- [ ] Make it possible to filer specific card by attributes

### Single card - @Dennis

- [ ] Fix navbar issue - @Dennis
- [ ] Finish UI for card details - @Dennis

### Documentation - @Alex

- [ ] Create the collapsible sidebar for documentation - @Alex
  - [ ] Mobile
  - [ ] Desktop

### Navbar

- [ ] Link `documentation` page to the navbar - @Alex
- [ ] Link `decks` page to the navbar - @Emma
- [ ] Link `profile` page to the navbar - @Clara
- [ ] Link `community` page to the navbar - @Emma
- [ ] Link `home` page to the navbar - @Emma
- [ ] Link `login` page to the navbar - @Lollo
- [ ] Link `register` page to the navbar - @Lollo

### Deck builder

- [ ] UI for deck builder - @Emma
- [ ] API request and connection -@Joseph

### Login / Register - @Lollo

- [ ] Finish Login / Register so that users can log in - @Lollo

### Profile - @Clara

- [ ] Create middleware for users - @Clara
- [ ] Create the UI for the profile - @Clara
- [ ] Create the backend - @Clara

### Lists

- [ ] Create CRUD for user lists - @Lollo
- [ ] Create UI for lists - @Emma
