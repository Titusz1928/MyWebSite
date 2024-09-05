import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectList:Project[]=[]/*= [
    {
      id: 1,
      title: "IP Mobile Application",
      shortdescription:"Part of a group project involving a webclient, mobile client, server, database, and wearable hardware that sends data to the server. ",
      description: "I developed this application as part of a more complex project. Our 8-person team created a real-time medical monitoring system. The main architectural components included a server, a database, sensors, a web application, and a mobile application. The system can handle multiple users with different roles, such as doctors, patients, and administrators. My role was to develop the mobile application, including both frontend and backend, which needed to communicate with the server. In addition to basic functions such as registration, login, and information display, the app features a nearly real-time chat.",
      image: "assets/projects/IP.png",
      link: "https://github.com/Titusz1928/IP_MobileAppFinal.git",
      maintag: "Mobile",
      tags: ["Java", "Android Studio", "Group","MySql","Arduino","Python","Flask"],
      images: [],
      latestUpdate: new Date(2024, 5, 1),
    },
    {
      id: 2,
      title: "Syncretic project 2",
      shortdescription:"Control of Arduino board and circuit from a website",
      description: "A very interesting project which I plan to continue in the future. So far I have an arduino circuit, a python flask server which runs on the local network, and a Java SpringBoot client. I can turn on and off a led, get the temperature, set an interval when the led should turn on and off and store messages in the EEPROM of the Arduino, in total 1MB, I created an algorithm which if there is no free space finds the oldest message and overwrites it. Apart form this I have a sensor which if detects a rising water level sends an email. Because of this I had to add a secondary execution thread on the python server which detects if the water level sensor writes on the serial monitor or not. In the future I want to add a way to store images on the arduino, the limited space will make it very challenging. ",
      image: "assets/projects/ps2.png",
      link: "https://github.com/Titusz1928/PS2N.git",
      maintag: "Web",
      tags: ["Java","SpringBoot", "Python", "Flask", "Arduino", "C++","Concurrent Programming"],
      images: ['assets/projects/ps2.png','assets/projects/ps2-2.PNG','assets/projects/ps2-3.PNG','assets/projects/ps2-4.PNG'],
      latestUpdate: new Date(2024, 4, 21),
    },
    {
      id: 3,
      title: "TCP Network Project",
      shortdescription:"Multithreaded server capable of handling multiple clients, basic communication and commands",
      description: "I created this project as part of my Computer Networks class, I had to create a client-server application with the TCP protocol, the client must had a way to specify the interval in which the server responded. It started out difficult and boring but soon I really started to get into it and added things which the project didnt even require, and also multiple threads for each client that connected. I also wanted to test out if I can communicate from different devices on the same network adn discovered the android application \"Termux\" which is a Linux terminal for Android.",
      image: "assets/projects/rc.png",
      link: "https://github.com/Titusz1928/Proiect-RC.git",
      maintag: "Networks",
      tags: ["C", "Linux", "TCP", "Concurrent Programming"],
      images: [],
      latestUpdate: new Date(2024, 3, 24),
    },
    {
      id: 4,
      title: "Chat Mobile Application",
      shortdescription:"Basic Mobile chat application with flask server and databse.",
      description: "Alternative version of IP Mobile App where I implemented a better chat, I communicate with an API Python Flask server with http requests, (a better way would be Web Sockets but I didnt know how), the server then handles the data and stores it in a database. Its not really real time but acceptable, users can communicate with other users, see their chat history, the date when it got sent, a next step would be adding notifications.",
      image: "assets/projects/IPa.png",
      link:'https://github.com/Titusz1928/IP_mobileApp.git',
      maintag: "Mobile",
      tags: ["Java", "Android Studio", "Python", "Flask", "MySql"],
      images: [],
      latestUpdate: new Date(2024, 5, 1),
    },
    {
      id: 5,
      title: "Angular Application",
      shortdescription:"I tested out how to create an Angular app",
      description: "This is my first web application made with angular, I tested out a lot of things with it, I deployed it on Netlify too so it needed to be static. You can see it here: https://dainty-begonia-a5dbd3.netlify.app/login (you need to log in with admin@gmail.com & admin)",
      image: "assets/projects/ang1.png",
      link:'https://github.com/Titusz1928/hotelinventoryApp.git',
      maintag: "Web",
      tags: ["Angular", "Typescript"],
      images: [],
      latestUpdate: new Date(2024, 5, 25),
    },
    {
      id: 6,
      title: "Angular Personal Website",
      shortdescription:"The result of this project was the website that you are on right now",
      description: "I created this website mainly because I didnt have a website before and also to see what projects I have done. At first I wanted to create it in Python or Java but later I learned that its more difficult to deploy them and for a personal website a static website is ok too.",
      image: "assets/projects/ang2.png",
      link:'https://github.com/Titusz1928/MyWebSite.git',
      maintag: "Web",
      tags: ["Angular", "Typescript"],
      images: [],
      latestUpdate: new Date(2024, 5, 29),
    },
    {
      id: 7,
      title: "Money Project",
      shortdescription:"Expense management app, actually useful",
      description: "I made this python program to keep track of how much money I have, it looks up the actual conversion rates and keeps track of my expenditures and income for each month",
      image: "assets/projects/mon.png",
      link:'',
      maintag: "Program",
      tags: ["Python"],
      images: [],
      latestUpdate: new Date(2023, 5, 1),
    },
    {
      id: 8,
      title: "Plane game 2",
      shortdescription:"This is a simple game I made as a project in high school, we had to use the not very well known programming language, Pascal",
      description: "This is a simple game I made as a project in high school, we had to use the not very well known programming language, Pascal. It is quite complex because I didnt use a database so I had to create very elaborate ways to use txt files,  the game has a multi-user system, statistics about each user, in game currency, multiple maps and vehicles, and multiple selectable languages in the settings. Its not very fun but I play it once in a while.",
      image: "assets/projects/pg2-1.PNG",
      link:'',
      maintag: "Game",
      tags: ["Pascal"],
      images: ['assets/projects/pg2-1.PNG','assets/projects/pg2-2.PNG','assets/projects/pg2-3.PNG'],
      latestUpdate: new Date(2021, 4, 26),
    },
    {
      id: 9,
      title: "24 hour clock",
      shortdescription:"This is a 24 hour clock made in assembly, it is actually not as complicated as it seems",
      description: "This is a project made for my Embedded Systems (Sisteme Incorporate) class, I already knew from the start this will be a difficult subject so I made sure to pay attention from the start and it paid off because while other classmates struggled I could finish it with relative ease, The hardest part was converting the hour digit from hexadecimal to decimal and adjusting its value based on the adjacent digit. If the adjacent digit is 0 or 1, the hour digit increases normally from 1 to 9. However, if the adjacent digit is 2, the hour digit stops at 3.",
      image: "assets/projects/assem.png",
      link:'',
      maintag: "Program",
      tags: ["Assembly","Keil uVision5","Proteus"],
      images: ["assets/projects/assem.png","assets/projects/prote.png"],
      latestUpdate: new Date(2024, 0, 21),
    },
    {
      id: 10,
      title: "Syncretic Project 1",
      shortdescription:"Control and regulation of temperature with an arduino board, the menu is located in the board itself, I utilized a PID regulator",
      description: "This was my first project involving an Arduino, it controls and regulates a light bulb which generates heat with a lm35 temperature sensor. I can set the desired temperature from the menu and it will reach it eventually, the menu is located in the board itself, I utilized a PID regulator",
      image: "assets/projects/ps1.png",
      link:'',
      maintag: "Circuit",
      tags: ["C++","Arduino"],
      images: [],
      latestUpdate: new Date(2024, 0, 11),
    },
    {
      id: 11,
      title: "Website with database",
      shortdescription:"Very simple website made with php, which makes operations on a database",
      description: "This was my first attempt at getting back into web projects, because at the start of university I only worked with console C, C++ projects and C# projects. I have everything that a database managment system needs, adding, updating, deleting and searching. I used wampserver and an sql terminal, and I wrote the php files in Notepad++.",
      image: "assets/projects/pai-1.png",
      link:'',
      maintag: "Web",
      tags: ["Php","SQL"],
      images: ["assets/projects/pai-1.png","assets/projects/pai-2.png","assets/projects/pai-3.png"],
      latestUpdate: new Date(2023, 11, 13),
    },
    {
      id: 12,
      title: "License Plate recognition",
      shortdescription:"Machine learning project, part of the course \"Machine Learning Track - Real-time vehicle license plate number detection",
      description: "We made this application as part of the course \"Machine Learning Track - Real-time vehicle license plate number detection\", by Veoneer. This program,  with the help of the yolo and easyocr libraries, first finds on an image the area where a license plate could be located, and then it reads the letters and symbols from that area. It introuced me to machine learning and very helpful python libraries.",
      image: "assets/projects/lpr.PNG",
      link:'',
      maintag: "Program",
      tags: ["Python","EasyOCR","YOLO"],
      images: [],
      latestUpdate: new Date(2023, 4, 15),
    },
    {
      id: 13,
      title: "Cake Maker",
      shortdescription:"This was my first OOP project, its not much but it was a valuable experience",
      description: "This is a simple C++ program, it has a menu, and a carousel where the already made items are. The user can ask for products and they will either be provided from the carousel if they already exist or they will get created in the time that is specified on the menu, if the carousel gets empty it automaticallt refills with randomized items.",
      image: "assets/projects/cm-2.png",
      link:'',
      maintag: "Program",
      tags: ["C++","OOP"],
      images: ["assets/projects/cm-2.png","assets/projects/cm-3.png"],
      latestUpdate: new Date(2022, 11, 23),
    },
    {
      id: 14,
      title: "3D engine",
      shortdescription:"Project from youtube video, very complicated",
      description: "To be honest I didnt make this, but I plan to develop my own 3d raycast engine, I still included here because I gained a lot by even making it work on my own PC",
      image: "assets/projects/3d.png",
      link:'https://www.youtube.com/watch?v=fSjc8vLMg8c',
      maintag: "Program",
      tags: ["C","SDL2"],
      images: [],
      latestUpdate: new Date(2024, 5, 5),
    },
    {
      id: 15,
      title: "Arduino Visualizer",
      shortdescription:"Project for displaying data from the eeprom of an arduino in a graphical format. You can create images, save and edit them and upload them to your arduino.",
      description: "When working on my second syncretic project we had as a requirement to save messages to the eeprom of an arduino, and then I got the idea to save other data such as images on it. It eventually became another project. First I created the operations needed to save and upload data to an arduino, these needed both the Arduino to execute a script and for a python script to run. Then I combined these into a full web project with the help of flask, adn also added a way to create images, display, save and edit them. For more information on how you can try out this follow the link below.",
      image: "assets/projects/aiv-1.png",
      link:'https://github.com/Titusz1928/ArduinoVisualizer',
      maintag: "Web",
      tags: ["Python","Flask","Arduino"],
      images: ["assets/projects/aiv-1.png","assets/projects/aiv-2.png"],
      latestUpdate: new Date(2024, 6, 4),
    },
    {
      id: 16,
      title: "Food app",
      shortdescription:"This angular website is useful for deciding what food to make,this was the first time i used a database for a static website.",
      description: "Lately I have been creating a lot of website so I think this will be the last for a few months but this one is actually useful. With this website I can store what foods I ate and it can help me decide what I have not eaten in a long time. I used Angular again, and for the data storage I used Supabase which is practically a databaset that I can communicate with as an API.",
      image: "assets/projects/fda-1.png",
      link:'https://github.com/Titusz1928/foodApp',
      maintag: "Web",
      tags: ["Angular","Supabase"],
      images: ["assets/projects/fda-1.png","assets/projects/fda-2.png","assets/projects/fda-3.png"],
      latestUpdate: new Date(2024, 6, 13),
    },{
      id: 17,
      title: "Networking Project",
      shortdescription: "I was working on this project during my internship at Savnet Academy",
      description: "This project involved creating a physical network, firstly my team, consisting of 6 people, configured the network devices. These were 4 routers, 4 switches, and a multilayer switch. We implemented VLANs and DHCP to generate ip addresses for the end-devices. We also set up ACL, and NAT to provide a basic network security. After this we connected our network to a virtual network with GNS3 and connected to theinternet so that our devices would be accessible wireless. After this we tested and implemented security against various attacks, Network scanning, Dos, Mitm and also tried out more dangerous attacks with malware and ransomware. We could even access the camera of the victim. I really enjoyed working on this project and my knowledge about networking greatly increased.",
      image:"assets/projects/nwp1.png",
      link:'https://github.com/Titusz1928/Savnet_network_proiect',
      maintag:"Network",
      tags:["Network","Group","GNS3"],
      images:[],
      latestUpdate: new Date(2024,8,4),
    }
  ];*/

  getAllProjects(){
    console.log("WARNING");
    return this.projectList;
  }

  getProjectById(id: number): Observable<any> {
    console.log("WARNING");
    const project = this.projectList.find(project => project.id === id);
    return of(project);
  }
}
