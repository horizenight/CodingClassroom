# CodeClassroom Video-Editor-Classroom SPA application
Link for the Application 🖐️ [here](https://www.codingclassroom.live/).


YT video of working project 📹 [here](https://www.youtube.com/watch?v=_5j5SvJh5UE)


The pandemic has been a challenge for all of us and since we didn’t get to meet our friends like the pre-covid days, we devised new ways of keeping contact with them. Being a coder, what’s better than having coding sessions with our friends/peers/random folks alongside chatting, talking and even sharing our screens to resolve each others' doubts, all on a single platform.
</br>

Not Only this there are platforms that allows multiple users to create a meeting, voice/video calling and join the conversation to discuss any topics.
The problem with these platforms that users who enter the conversation late are not able to catch up what's going on.

---

## 🍾 Installation using command Line


```
git clone https://github.com/horizenight/Electorthon4.0\

npm install

npm run start
```
**NOTE** - You will `.env` file to make API request. 


## 🐊 Technology's Used
1. [React.JS](https://reactjs.org/) - Front End JS Library.
2. [Twilio API](https://www.twilio.com/docs/usage/api) - Used for establishing an WEB-RTC between nodes.
3. [Symbl.io](https://github.com/) - Used for creating Transcripts of voice during Video Conference.
4. [Firestore Authen](https://firebase.google.com/) - Used in classroom for Organized rooms and valid users.
5. [Rapid API](https://rapidapi.com/judge0-official/api/judge0-ce) - API fetching using [Axios]() for code Compilation and Questions
6. [MaterialUI](https://mui.com/) - Ui library for clean and modern look to Web Application
7. [Netlify](https://www.netlify.com/) - Deployment of this project is done throught Netlify.
8. [Cockroach DB](https://www.cockroachlabs.com/) - Used for fetching question of DSA with answers on editor page.
9. [SASS](https://sass-lang.com/) - Preporcessor for CSS for less compilation during Runtime.
10. [Express.JS](https://www.expressjs.com/) - used for Server creation on [NODE>JS](https://nodejs.org/)
11. [Godaddy](https://godaddy.com/) -  domain providing client

## ⚙ What it does
**CodeClassroom** is a web platform that allows multiple users to enter the call and even enables you to code with your friends or random folks while you all are in a meeting; allowing you to chat, talk and even share your screen with them.
As you land on the website, you get an option to  join classroom or join the room direct or practice your coding skills on editor. 

While in **code editor**

on the left hand side, you get a bunch of random questions to practice on. While on the right side, there is an editor to write your code on. Here, you can select your preferred coding language from the dropdown list. Then after you have written your code, you can check if the provided input gives a desired output by clicking on the provided Run Compile button.But what if you have a doubt or want to crosscheck your answer with that of your mates or just simply want to chit chat while you code? Dont worry! In the top section, you have button to start a meet with your friends.

While in **Classroom** 

You first have to login through GoogleAuth and after that you in the classroom you get 
the room cards so that your classes and rooms could be maintained.

While in **meeting** 

When the host starts the call/meeting, the platform will start to save the live transcript and it allows any users who enter the call late to be able to see the transcript of previous conversation

## 💪 Challenges we ran into

- The main challenge which we came into is implementing the feature of storing past transcript enabled for all users means if someone enters in between the meeting then they can see previous conversation through transcript.
-Since we spent so much time implementing multiple APIs, we do not have enough time to host the platform online;
-We faced an issue while setting up a custom route for the IDE api call  ;
- How to make state synchronous in React;
- Had difficulty in using Cockroach Db , So Had to Drop That;


## Screenshot of Working Application
1. ![image](https://user-images.githubusercontent.com/68412756/154853188-0fc00d5f-03b2-446e-821e-35e7a9ec56d1.png)


3. ![image](https://user-images.githubusercontent.com/68412756/154853234-35af4ee9-1bf7-4c53-9b6e-5c4dcf9bc4b8.png)


5. ![image](https://user-images.githubusercontent.com/68412756/154853627-84acabe4-cb86-4dd1-acde-528d345938c0.png)


7. ![image](https://user-images.githubusercontent.com/68412756/154853596-054ddb25-8342-4304-8ac4-aa5e9b4b6c22.png)


9. ![image](https://user-images.githubusercontent.com/68412756/154853641-74120aca-9aaf-4ead-93e4-6440292d7505.png)


## Contributors
1. [Pranjal Goyal](https://github.com/Pranjal7852)
2. [KShitij Roodkee](https://github.com/horizenight)


