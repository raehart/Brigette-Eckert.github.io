//arrays of objects grouped by type- going to use ng-repeat to display items in list format 

var questions = {};

questions.basic = [{Q: ' Tell me about yourself.', A: ' I am a person who is super passionate about coding and technology. I am tenacious, a team player and a quick study. I enjoy solving interesting problems and creating stuff so coding has been a fun adventure.  When I am not actively coding I am often found attending one of the various local tech meetups.  I also host the local Free Code Camp Portland meetup, as a way of giving back to the community that has given me so much. '},{Q: ' How did you get into coding?', A: '   am a geek who loves technology and I enjoy making things, so coding was something I naturally wanted to try. In April 2015, I decided that I wanted to learn to make websites and so I started learning HTML and CSS online. A month or two into my coding journey I discovered Javascript and I fell in love. I love that programming languages allow me to use logic to solve problems and create almost anything I can imagine. Shortly after this I decided that I wanted to make a career out of coding and have been dedicating most all of my spare time to learning, ever since.    I love that the technology field is constantly evolving with new tools being added regularly and am looking for a position that will give me the opportunity to work on a different projects using a variety tools and using new tools when applicable. I have also been an active member of our local tech meetup scene since July 2015.   This community has been integral to my professional coding journey.   Meetup groups like Women Who Code, Mentorship Saturdays, and Free Code Camp PDX have introduced me to interesting, smart and friendly people who have been there to help me along the way.  This community taught me about impostor syndrome, (I did not realize there was a name for it when I first experienced it),  has helped me with blockers and has encouraged me to keep going even when things are frustrating.  The practice of web development and the community around it are both parts of my life that I love and will never give up.'}, {Q: 'What are your weaknesses?', A:'One of the things I have struggled with in the past is my tendency to hyper-focus on whatever project I am working on. I can become so focused on the work in front of me, that I loose sense of time and my surroundings. However in the past year I have been able to become much more aware of when I am hyper focusing and able to still concentrate intently on my work while making a point to be aware of my surroundings. '},{Q: 'What did you study in school and  why?', A:' I studied history and biology in college. I love understanding how things work and why things are they way they are. Both subjects approach this question, from different angles, in order to complete the picture.'},{Q: 'What is your ideal company?', A:'I am looking for a company with strong values that will allow me to keep learning and grow as a developer.  Values that matter to me include: a commitment to diversity/inclusion, dedication to producing high quality products, and the desire to use new resources as they become available.'}, {Q: 'What is your proudest achievement to date?', A:'In April 2015 I decided to learn how to code, and shortly after I decided that I wanted to make a career out of it. Since then I have been diligently studying code, while working a full time administrative job. While there have been hurdles, I have been persistent in my coding journey and learned more than I imagined I could have.'}, {Q: 'What would be your ideal working environment? ', A:' An ideal work environment would use the Agile methodology or a similar method. While I can work in a variety of environments I do best when I can really concentrate on the problem in front of me.  Ideally I can either retreat to a quiet area or put on noise canceling headphones and work with minimal interruptions which allows me to get in the zone and be extremely productive.  In addition having resources such as slack and regular stand-ups in order to chat about projects and problems would be ideal.'}, {Q: 'If you had to choose one, would you consider yourself a big-picture person or a detail-oriented person?  ', A:' I would say in general I am a more of a big picture person, but I think it is important to be able to see both.'}, {Q: 'What three character traits would your coworkers use to describe you? ', A:' My coworkers would describe me as intelligent, passionate and tenacious. They have seen me be persistent with and solve tough problems at work. I am one of the go-to people in my office, and when someone has a question or problem they will come to me even when it is not directly related to my position. Most of the time I am able to find a solution, or answer their question. In the rare case I cannot provide them with the correct information, after researching the issue, I send them off to someone who is able to help.'}, {Q: 'What do you think are the qualities of a good leader?', A:' To me a good leader is someone who puts their team first rather than themselves.   A good leader should communicate clearly, anticipate the needs and challenges of their team, and advocate on the behalf of their team.  Good senses of fun and humor are good bonuses.'}];

questions.behavioral =[{Q: ' Tell me about a time when you had to make a quick decision.', A:' As a Resident Assistant in college, one my tasks was to deal with emergencies in the building. One such occurrence was the threat of alcohol poisoning. If a student had had too much to drink I had to decide if medical treatment was necessary or if the student needed a friend to watch over them. In such situations that require immediate action, it is import to think quickly, analyze your options and follow through.'}, {Q: "Tell me a time when you had to challenge someone's idea. What was the reaction, who did you challenge?", A:" As a Resident Assistant I had a couple of students kidnap other student's teddy bear and hang it in a noose. Rather than reprimanding my students, I used this as a teaching moment. I challenged their idea of humor  and explained the history behind it to show them why it was wrong. Due to our positive relationship and the method in which I communicated with them, they took it well and apologized to the other student. In addition at hackathons, and in pair programming situations, I discuss ideas and implementation, with my teammates. It is never hostile but we do have to collaborate and decided on best course of action which often results in a better product than any one individual would have come up with on their own. In these situation I think it is important to challenge the idea and not the person. Also I often like to say something along the lines of, that is a good idea but this is better, in a calm tone which makes the other person more willing to listen. Listening and communicating are key to resolving differences and when I use such techniques I find it leads to very productive talks."}, {Q: 'Tell me about a time when you have helped someone or corrected someone who was doing the wrong thing.', A:' In a situation where someone has done something wrong I treat it as a teaching moment, rather than reprimanding the person. Code is constantly evolving and there is too much information for anyone person to know it all. I attend several tech meetups in the Portland including weekly informal study sessions. At these events, we chat about code and discuss any difficulties we are running into. At these meetups I have been able to introduce people to new coding tools or explain ones they had some trouble understanding. I love being able to teach  and learn from other coders.'}, {Q: 'Tell me about a time when you were a leader.', A: 'In my time as a Resident Assistant one of my main duties was to create a safe and welcoming environment for students.  I would occasionally have to educate people on diversity topics to understand why actions could be hurtful to other students. For example one time some students stole a teddy bear from one student and hung it in a noose in the door way.  I  had a conversation with those students about racial history and lynching in order to educate them, after that they students apologized sincerely to the students and became better hallmates.  I also mediated roommate conflicts when needed and referred residents to campus resources when needed.   Due to this experience I am confident in my ability to work in teams,  help support a diverse environment and able to help team mates work through conflicts. '}, {Q: 'How well do you handle stress?', A:'I currently work in a very high stress environment (we have approximately a turn over rate of one person per week, and I been there 4 years) so I am used to dealing with stress. I run to keep sane.'}];

questions.carrer = [{Q: ' What are your future career goals?', A:'In the near future I would like to learn more back end skills and move into fullstack development. I think it is important as a coder to understand both the front and back ends of an application, to be able to see the big picture and communicate with your team.   In the long term I would I like to break into educational technology and learn more about AI/machine learning.'}, {Q: 'How do you want to improve yourself in the next year?', A:'One of the many things I love about this field is that it critical to never stop learning.   I am currently working on learning Python and would like to have a solid fountain in it in the next year.  I also plan on getting more acquainted with several libraries and frameworks including: NodeJS, Angular2, and D3.  Last but not least I would like to contribute more to open source projects.' }];
 
questions.technical = [{Q: " Which programming languages / CMSes have you used or studied?", A: "I am a lifelong learner which is one of the reasons I love web development.  There is also some new language, framework or other skill to learn.  I am most familiar with JavaScript which has given me a really strong foundation in front end development and the core principles of development.   I am familiar with multiple JavaScript frameworks, have experience pulling data from APIs and templating.   I have played around with Python and Django CMS, as well as Drupal and PHP.  Due to my strong foundations in Javascript I pick up other coding languages pretty quickly. In addition, I have been studying Dev ops and the Lamp Stack lately.   It is a very complex topic but I am grasping the basics, and am working on deploying some of my projects to a variety of platforms including Panethon, Heroku and Digital Ocean.", Q: 'What is your preferred IDE and Why?', A:'I currently use Jetbrains IDEs: Pycharm, Phpstorm, and Webstorm. I like the features such as build tools, color coding, emmet shortcuts and project storage.'}, {Q: 'What do you when you get stuck on a problem?', A:"When I get stuck on a problem I follow free code camp's mantra 'read-search-ask'.   The first places I check are the documentation and stack overflow. If I cannot find the answer there, I will go the problem and check other relevant resources.  If I cannot make any progress in a reasonable amount of time I will ask a fellow coder or teammate for help."}];

questions.fun = [{Q: " What makes you burst with geeky excitement?", A: " I am a huge geek and passionate about lots of things.  Besides coding, some of my passions include animals, sci-fi and gaming I have a cat, named Nikola, who I will gladly tell anyone who will listen all about, and I love bonding over pet pictures.  I saw star wars on TV when I was six for the first time and thought it was the greatest movie ever.  I have been a sci-fi geek since then.  I love playing games, both board games and video games.  Video games are what first got me into web development, I have no desire to work in the game development industry but simple game development or making game mods is something I’d like to pursue in the future.", Q: 'How do you like your coffee?', A:'Strong and with cream. It is Portland so of course I am a bit of a coffee snob and prefer it fresh.'}, {Q: 'What is the last book you read?  ', A: "You can find me on goodreads"}, {Q: 'What is the best movie you have seen in the last year?', A:'  I really enjoyed Star Wars The Force Awakens.  I saw saw Star Wars for the first time when I was six years old and I have been a fan ever since.  The Force Awakens passes the Bechdel Test which is awesome.'}, {Q: 'What would you do if you won the lottery? ', A:'First of all I would be very surprised and a little suspicious since I do not play the the lottery. However I would pay off my student, invest most of it and take a trip overseas'}];

