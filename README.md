
# Ping Pong Pairs Generator
This project is the technical exercise for the end of the **Coding Fellowship** with **DevelopMe Summer 2019.**

I will demonstrating my technical abilities in **written code**. It is also an opportunity to demonstrate my **technical thinking** and **communication skills.**

## The brief

The exercise is to create a tool which randomly creates pairings for a table tennis tournament bracket from a list of names collected from the user.

It is up to me how I implement this, with JavaScript, React, or PHP, as a web page, or as an app.


## Getting Started

view the live app here: [View my app ](https://sashalawrence.github.io/pingpong-app/)

<br>

*Alternatively:*

To get started, please clone the repository and install the prerequisites listed below.

### Prerequisites

Node Package Manager

The latest version of npm can be downloaded here - 

https://www.npmjs.com/get-npm

You will also need a web browser to view the project. e.g. Google Chrome -

https://www.google.com/chrome/index.html

Once you have both of these installed on your system, continue on to the next step.

### Clone the repro from Github

1.  Under my repository name, click  **Clone or download**.
    
    ![Clone or download button](https://help.github.com/assets/images/help/repository/clone-repo-clone-url-button.png)
    
2.  clone the repository using SSH,  **Use SSH** and copy the URL
   ![Clone URL button](https://help.github.com/assets/images/help/repository/https-url-clone.png)
    
3.  Open  **Terminal.**
    
4.  Change the current working directory to the location where you want the cloned directory to be made.
    
5.  Type  `git clone`, and then paste the URL you copied in Step 2.
    
    ```shell
    $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
    ```
    
6.  Press  **Enter**. Your local clone will be created.
    
    ```shell
    $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
    > Cloning into `Spoon-Knife`...
    > remote: Counting objects: 10, done.
    > remote: Compressing objects: 100% (8/8), done.
    > remove: Total 10 (delta 1), reused 10 (delta 1)
    > Unpacking objects: 100% (10/10), done.
    ```
7.  Locate the cloned git repository folder in your terminal and run npm
    
    ```shell
    $ cd (the newly cloned folder on your computer)
    $ npm install
    $ npm start
    ```
8.  open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Skills Used
React, Redux, JSX, JavaScript, HTML, CSS (CSS-in-JS), Bootstrap 4, Git Version Management / Branches, Wireframes, Illustrator, Photoshop, Google Fonts.

I decided to use React and Redux for this challenge as it implements a lot of what I have learnt over the past 12 weeks, I needed more practise building a React app.


## Wireframes:
I used [MockFlow](https://mockflow.com//)to create initial wireframes for the design of my app, I started with the **mobile first** and then designed the desktop version. 

### Mobile wireframe:
![ping-pong-wireframes-mobile](https://user-images.githubusercontent.com/51890290/65816537-d7c82a00-e1f4-11e9-861a-6f0dd0c8e4d5.png)

### Desktop wireframe:
![ping-pong-wireframes-desktop](https://user-images.githubusercontent.com/51890290/65816553-fcbc9d00-e1f4-11e9-9cda-e9ec81df18b0.png)

## Component Structure
After the wireframes I set about working out the structure of Components in my app:
```bash
├── ...
├── Components
│   ├── App                    # container for my components
│
│   ├── Header                 # stateless Header component with logo/header
│
│   ├── Forms                  # user input of players name
│   ├── Player                 # players name outputed as a Player list
│
│   ├── Match                 
│   ├── Pairs
│   ├── Pair
│   ├── Name                   # outputs as a table with name vs name
└── 
```
State Management
I installed **Redux** and **React-Redux** and used these to keep track of our state. 
* set up **initial state**
* created the **reducer**
* created a **store** (which passes it my reducer and the initial state)
* subscribed to the store and dispatched actions to store using event handlers.
```bash
├── ...
├── Data              
│   ├── actions            
│       ├── state           # newPlayer, deletePlayer and newMatch actions 
│   ├── functions
│       ├── divide          # divides players in pairs
│       ├── shuffle         # shuffle function
│   ├── initial             # set up inital state of players and matches arrays
│   ├── reducer             # newPlayer, deletePlayer and NewMatch reducers
│   └── store               # created store - passed in intial and reducer
└── ...
```
I broke down my app into 3 parts to get each stage working:

**User input**
* input of players name in the Forms component when the Add button is click and it stores the name in state

**Players List**
* Players components outputs the newPlayer as a list  - added a deletePlayer function

**Match Table**
* on clicking the "create tournament" checks the names are even and runs the newMatch reducer 
* newMatch uses the players name array with the shuffle and divide Functions 
* outputs the pairs as a table

## Mobile Screenshot
Added custom media queries for responsive designs on different viewing formats:

![Screenshot 2019-09-29 at 18 11 00](https://user-images.githubusercontent.com/51890290/65835981-f6a5e980-e2e4-11e9-9e76-58c3f742591c.png)

## Smaller Screen Mobile Screenshot
![Screenshot 2019-09-29 at 18 11 18](https://user-images.githubusercontent.com/51890290/65835991-0f160400-e2e5-11e9-98a3-e147d77199dc.png)

## Desktop Screenshot
![Screenshot 2019-09-29 at 18 10 03](https://user-images.githubusercontent.com/51890290/65835994-20f7a700-e2e5-11e9-9eaf-98d1516da607.png)


## Colour Palette
![palette](https://user-images.githubusercontent.com/51890290/65817316-8b351c80-e1fd-11e9-8e87-748842ddcbb4.png)

Here is the colour palette I created for my website using [Coolors](https://coolors.co/20615b-dece9c-4f4f4f-383d41-dc3545/), the logo in my website is licenced from [Adobe Stock Images](https://stock.adobe.com/uk/images/vector-set-of-ping-pong-logos-emblems-and-design-elements/135296103/) - I tweaked the design and added colour to it using Illustator.

## Future work

* **Form validation** -  at the moment you can enter anything as a name even an empty space
* **SASS and gulp** - I used CSS-in-JS but would of liked to implement SASS and GULP to neaten up my CSS
* I used bootstrap for quicker styling - would be nice to create a custom CSS in the future
*  **Stretch Goals** - be able to **edit the name** and **add scores** so you can generate a tournament bracket structure
