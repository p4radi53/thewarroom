(this.webpackJsonpthewarroom=this.webpackJsonpthewarroom||[]).push([[0],{28:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),s=n(19),o=n.n(s),r=n(7),c=n(13),l=(n(28),n(9)),h=n(10),j=n(0),m=[{title:"Home",url:"/"},{title:"Partners",url:"/partners"},{title:"Event",url:"/event"},{title:"Register",url:"/register"},{title:"FAQ",url:"/FAQ"},{title:"About Us",url:"/about"}];var d=function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=t[0],i=t[1],s=Object(h.useMediaQuery)({query:"(max-width: 1024px)"});return Object(j.jsx)("header",{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("nav",{children:[Object(j.jsx)(l.b,{to:"/",children:Object(j.jsx)("img",{src:"/logo_WR.jpg",onClick:function(){return i(!1)},alt:"Logo WARroom",className:"nav-logo"})}),s?Object(j.jsx)("div",{className:"nav-toggler",onClick:function(){return i(!n)},children:Object(j.jsx)("i",{className:n?"fas fa-times":"fas fa-bars"})}):Object(j.jsx)("div",{}),Object(j.jsx)("div",{className:"nav-collapse ".concat(n?"active":""),children:Object(j.jsxs)("ul",{className:"nav-list",children:[m.map((function(e,t){return Object(j.jsx)("li",{onClick:function(){return i(!1)},children:Object(j.jsx)(l.b,{className:"nav-link",to:e.url,children:e.title})},t)})),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://www.facebook.com/thewarroomconference",className:"nav-link",children:Object(j.jsx)("i",{className:"fab fa-facebook-square"})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://www.linkedin.com/company/the-warroom-warsaw-consulting-conference/",className:"nav-link",children:Object(j.jsx)("i",{className:"fab fa-linkedin"})})})]})})]})})})};n(34);var p=function(){return Object(j.jsx)("footer",{className:"white",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h4",{children:"The WARroom"}),Object(j.jsxs)("p",{children:["Al. Niepodleg\u0142o\u015bci 162/66b ",Object(j.jsx)("br",{}),"Warsaw, Poland ",Object(j.jsx)("br",{}),"warroom@cemsclub.pl"]}),Object(j.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 50px)",gap:".5em"},children:[Object(j.jsx)("a",{href:"https://www.facebook.com/thewarroomconference",className:"footer-link",children:Object(j.jsx)("i",{className:"fab fa-facebook-square"})}),Object(j.jsx)("a",{href:"https://www.linkedin.com/company/the-warroom-warsaw-consulting-conference/",className:"footer-link",children:Object(j.jsx)("i",{className:"fab fa-linkedin"})})]}),Object(j.jsx)("p",{className:"footer-copyright",children:"\xa9 Copyright CEMS Club Warsaw 2021"})]})})},b=(n(35),n(36),n(21)),u=n(3);n(37);var g=function(e){return Object(j.jsx)("section",{className:"intro ".concat(e.isHigh?"intro-high":""),style:{backgroundImage:"url(".concat(e.backgroundImage,")")},children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"intro-title",children:e.title}),e.subtitle?Object(j.jsx)("h2",{className:"intro-subtitle",children:e.subtitle}):null]})})};n(38),n(39);function f(e){return Object(j.jsx)("div",{className:"photo",children:Object(j.jsx)("a",{href:e.href,children:Object(j.jsx)("img",{src:e.href,alt:""})})})}var x=function(e){var t,n,a,i=e.photoGridItems,s=Object(h.useMediaQuery)({query:"(max-width:1024px"});return"logos"===e.gridType?(t="75px",n="150px",a="3em"):"photos"===e.gridType&&(t="150px",n="250px",a="0"),Object(j.jsx)("div",{className:"photogrid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(".concat(s?t:n,", 1fr))"),margin:"2em 0",gap:a},children:i.map((function(e,t){return Object(j.jsx)(f,{href:e.href,photoURL:e.photoURL},t)}))})},w=n.p+"static/media/Partners.25aa95c1.jpg",O=[{href:"/images/partners2020/Partnerzy-01.png"},{href:"/images/partners2020/Partnerzy-02.png"},{href:"/images/partners2020/Partnerzy-03.png"},{href:"/images/partners2020/Partnerzy-04.png"},{href:"/images/partners2020/Partnerzy-05.png"},{href:"/images/partners2020/Partnerzy-06.png"}];var k=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(g,{backgroundImage:w,title:"2020 Partners"}),Object(j.jsx)("section",{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h3",{className:"primary",children:"2020 Partners"}),Object(j.jsx)(x,{photoGridItems:O,gridType:"logos"})]})})]})};function v(e){return Object(j.jsxs)("div",{className:"iconfield",children:[Object(j.jsxs)("div",{className:"iconfield-wrap",children:[Object(j.jsxs)("div",{className:"iconfield-header",children:[Object(j.jsx)("i",{className:"iconfield-icon ".concat(e.icon)}),Object(j.jsx)("h4",{className:"iconfield-title",children:e.title})]}),Object(j.jsx)("p",{children:e.content})]}),e.linkURL?Object(j.jsx)("div",{className:"iconfield-link-wrapper",children:Object(j.jsx)(l.b,{to:e.linkURL,children:e.linkText})}):null]})}var y=function(e){var t=e.iconFieldsValues,n=t.length,a=Object(h.useMediaQuery)({query:"(max-width:1024px"});return Object(j.jsx)("div",{className:"iconfields",style:a?{display:"flex",flexDirection:"column"}:{display:"grid",gridTemplateColumns:"repeat(".concat(n,", 1fr)"),gap:"3em"},children:t.map((function(e,t){return Object(j.jsx)(v,{title:e.title,icon:e.icon,content:e.content,linkText:e.linkText,linkURL:e.linkURL},t)}))})};n(40);var N=function(e){return Object(j.jsx)("button",{className:"btn ".concat("btn-"+e.buttonType),href:e.buttonURL,children:e.buttonInnerText})},R=n.p+"static/media/Home.7a46416f.jpg",T=[{title:"What it is",icon:"fas fa-globe-europe",content:"The WARroom gathers CEMS MIM students from around the world to solve business case studies together, learn from consultants and exchange new ideas.",linkText:"Learn more about the event",linkURL:"/event"},{title:"How to register",icon:"fas fa-pen",content:"Grab an opportunity of gaining new skills, networking with the best companies and meeting new people. Sounds exciting?",linkText:"Learn how to register",linkURL:"/register"},{title:"Who we are",icon:"fas fa-users",content:"We are a group of students from SGH Warsaw School of Economics who are dedicated to creating a great event for our fellow CEMSies.",linkText:"Learn who we are",linkURL:"/about"}];var W=function(){var e=Object(h.useMediaQuery)({query:"(max-width: 1024px)"});return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(g,{backgroundImage:R,isHigh:!0,title:e?"WARroom 2021":"WARroom | Warsaw Consulting Conference 2021",subtitle:e?null:"November 24-26, 2021 | Warsaw School of Economics | GMT +2"}),Object(j.jsx)("section",{className:"home-cta",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h4",{style:{margin:"1em 0"},children:"Registration in September"}),Object(j.jsxs)("p",{children:["This year the WARroom Warsaw Consulting Conference will take place on 24-26 November 2021.",Object(j.jsx)("br",{}),"For more information, check out our Facebook page."]}),Object(j.jsx)(N,{buttonType:"primary",buttonInnerText:"Facebook",buttonURL:"https://www.facebook.com/thewarroomconference"})]})}),Object(j.jsx)("section",{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(y,{iconFieldsValues:T})})}),Object(j.jsx)("section",{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h3",{className:"primary",style:{textAlign:"center"},children:"2020 Partners"}),Object(j.jsx)(x,{photoGridItems:O,gridType:"logos"})]})}),Object(j.jsx)("section",{children:Object(j.jsx)("div",{className:"container"})})]})},C=(n(41),n.p+"static/media/Event.7fb3c525.jpg"),M=n.p+"static/media/CTA.384fc2e9.jpg",S=[{title:"When",icon:"fas fa-calendar-times",content:"24-26 November 2021"},{title:"Where",icon:"fas fa-map-marker-alt",content:"Warsaw School of Economics"},{title:"Who",icon:"fas fa-user",content:"CEMS MIM Students"}],A=[{title:"Case Studies",icon:"fas fa-paste",content:"The main goal of the case study is to show the students real-life business cases. Participants will solve the case under the guidance of consultants."},{title:"Mock Interview",icon:"fas fa-microphone-alt",content:"Our mock interview\u2019s aim is to give participants an occasion to gain a fine professional experience."},{title:"Rotation Dinner",icon:"fas fa-utensils",content:"We will provide you with great entertainment and icebreaking opportunities to unwind after a day full of business case studies. There will be no place for boredom."}],z=[{href:"/images/photos2019/1.jpg"},{href:"/images/photos2019/2.jpg"},{href:"/images/photos2019/3.jpg"},{href:"/images/photos2019/4.jpg"},{href:"/images/photos2019/5.jpg"},{href:"/images/photos2019/6.jpg"},{href:"/images/photos2019/7.jpg"},{href:"/images/photos2019/8.jpg"}],I=[{href:"/images/photos2020/1.png"},{href:"/images/photos2020/2.png"},{href:"/images/photos2020/3.png"},{href:"/images/photos2020/4.png"}];var L=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(g,{backgroundImage:C,title:"WARroom 2021"}),Object(j.jsx)("section",{className:"event-main",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h3",{className:"primary",children:"The Event"}),Object(j.jsxs)("div",{className:"event-paragraph",children:[Object(j.jsx)("h5",{children:"Warsaw Consulting Conference"}),Object(j.jsx)("p",{children:"... is a reputable Management Consulting Conference in Poland gathering highly-talented CEMS MIM students from leading business schools. During the event, Participants will be faced with challenging case studies as well as networking possibilities. The event offers a possibility to obtain CEMS Skill Seminars."})]}),Object(j.jsxs)("div",{className:"event-paragraph",children:[Object(j.jsx)("h5",{children:"Form of the Conference 2021"}),Object(j.jsx)("p",{children:"As everyone longs to meet new people, we strongly believe that this year's conference will be held on the spot in Warsaw. However, in the light of the COVID-19 pandemic, the event may be online. What we are certain of is that not only will participants take part in real business case studies organized by our corporate partners, but also they will have less formal occasions to interact."})]}),Object(j.jsx)(y,{iconFieldsValues:S})]})}),Object(j.jsx)("section",{className:"event-cta",style:{backgroundImage:"url(".concat(M,")")},children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h3",{className:"primary",children:"Stay in Touch"}),Object(j.jsx)("p",{children:"For up to date information follow us on social media"}),Object(j.jsx)(N,{buttonType:"secondary",buttonInnerText:"Our Facebook",buttonURL:"https://www.facebook.com/thewarroomconference"})]})}),Object(j.jsx)("section",{className:"event-description",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h3",{className:"primary",children:"How will it look like?"}),Object(j.jsx)(y,{iconFieldsValues:A})]})}),Object(j.jsx)("section",{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h3",{className:"primary",children:"The WARroom 2020 highlights"}),Object(j.jsx)(x,{photoGridItems:I,gridType:"photos"})]})}),Object(j.jsx)("section",{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h3",{className:"primary",children:"The WARroom 2019 highlights"}),Object(j.jsx)(x,{photoGridItems:z,gridType:"photos"})]})})]})},U=(n(42),n.p+"static/media/Register.f2715691.jpg");var q=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(g,{backgroundImage:U,title:"Register"}),Object(j.jsx)("section",{className:"register-cta",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("h3",{children:"Registration starts on 22 September 2021"})})}),Object(j.jsx)("section",{className:"register-description",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h3",{className:"primary",children:"The Registration Process"}),Object(j.jsx)("p",{children:"The WARroom welcomes CEMS MIM Students from all around the world. The application will be open 22 September - 4 October."}),Object(j.jsxs)("div",{className:"register-description-wrapper",children:[Object(j.jsx)("h5",{children:"How to register?"}),Object(j.jsx)("p",{children:"Submit your application by filling the form linked here once the application is open."})]}),Object(j.jsxs)("div",{className:"register-description-wrapper",children:[Object(j.jsx)("h5",{children:"Who is eligible?"}),Object(j.jsx)("p",{children:"The WARroom welcomes CEMS MIM students from all around the world."})]}),Object(j.jsxs)("div",{className:"register-description-wrapper",children:[Object(j.jsx)("h5",{children:"What is the fee to participate?"}),Object(j.jsx)("p",{children:"This year, the conference fee is 40\u20ac for only participation. The application will be open soon."})]}),Object(j.jsxs)("div",{className:"register-description-wrapper",children:[Object(j.jsx)("h5",{children:"Want to know more?"}),Object(j.jsxs)("p",{children:["Take a look at our FAQ page ",">"," ",Object(j.jsx)(l.b,{to:"/FAQ",children:'"Frequently asked quetions"'})]})]})]})})]})};n(43);function F(e){var t=Object(a.useState)(!1),n=Object(c.a)(t,2),i=n[0],s=n[1];return Object(j.jsxs)("div",{className:"faq-field",children:[Object(j.jsx)("h6",{className:"faq-question ".concat(i?"active":""),onClick:function(){return s(!i)},children:e.question}),Object(j.jsx)("hr",{className:"faq-hr"}),Object(j.jsx)("div",{className:"faq-hide ".concat(i?"active":""),children:Object(j.jsx)("p",{className:"faq-answer",children:e.answer})})]})}var E=function(e){var t=e.FAQSectionValues;return Object(j.jsx)("section",{className:"faq-section",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h3",{className:"primary",children:"The most popular questions"}),t.map((function(e,t){return Object(j.jsx)(F,{question:e.question,answer:e.answer})}))]})})},P=n.p+"static/media/FAQ.36b43e82.jpg",H=[{question:"What is the WARroom?",answer:"Warsaw Consulting Conference 2021 is one of the biggest Management Consulting Conferences in Poland focused on CEMS MIM students. The WARroom bridges the gap between theory in the classroom & companies reality by confronting students with real business case studies. The event is also an opportunity to meet potential employers and discover new career paths."},{question:"When does the WARroom take place?",answer:"The WARroom Consulting Conference 2021 begins on 24th and ends on 26th of November."},{question:"Who can participate in the WARroom?",answer:"To be eligible for participation, you must be currently enrolled in CEMS Master in International Management."},{question:"How can I apply?",answer:"You can complete the entire application process online. For more information go to the 'Register' bookmark."},{question:"How much does it cost to participate?",answer:"In 2021, the conference fee is 40\u20ac for only participation, and 100\u20ac for participation and accommodation."},{question:"Which language(s) will be used?",answer:"The conference will be held entirely in English."},{question:"How are participants chosen for the WARroom conference?",answer:"They are chosen based on their application and CV."},{question:"When will I be notified about the outcome of my application?",answer:"We aim to respond to your application as soon as possible. Due to the high volume of applicants anticipated for the WARroom conference, please allow a period of at least 2 weeks after the submission of your application."},{question:"I have been selected but I won't be able to attend, what should I do?",answer:"All participants are asked to inform the organization team as early as possible, if they are no longer able to attend. This opens up the opportunity for another student to participate instead of them. The team can be contacted at: warroom@cemsclub.pl"},{question:"Do I have to take part in the whole event?",answer:"Yes, attendance in the activities matters, as you can get CEMS Skill Seminars. Only by taking part in all case studies it is possible to fully benefit from the educational and networking potential of the event."},{question:"How can I get CEMS Skills Seminars?",answer:"To get CEMS Skill Seminars you have to attend all of the case studies - attendance will be verified."},{question:"Will there be networking events with the companies?",answer:"Of course, we are preparing for you several networking opportunities. Participants and representatives of our Partners will take part in the innovative events such as Rotation Dinner, Wine Tasting and Consulting Coffee, and will have a chance to build new exciting relationships."}];var _=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(g,{backgroundImage:P,title:"FAQ"}),Object(j.jsx)(E,{FAQSectionValues:H})]})},Q=(n(44),n.p+"static/media/About.e47691b4.jpg"),D=[{name:"Zuzanna Brzozowska",position:"Project Coordinator",linkedin:"https://www.linkedin.com/in/zuzanna-brzozowska-2a7737205/",photoURL:"/images/team2021/zuzanna_brzozowska.jpg"},{name:"Anna Rode",position:"Head of Recruitment",linkedin:"https://www.linkedin.com/in/anna-rode/",photoURL:"/images/team2021/anna_rode.jpg"},{name:"Jakub Klicki",position:"Head of Partnerships",linkedin:"https://www.linkedin.com/in/jakub-klicki/",photoURL:"/images/team2021/jakub_klicki.jpg"},{name:"Rados\u0142aw Fedak",position:"Head of Logistics",linkedin:"https://www.linkedin.com/in/rados%C5%82aw-fedak-5a1b861b8/",photoURL:"/images/team2021/radoslaw_fedak.jpg"},{name:"Dominik Mikulski",position:"Head of Entertainment",linkedin:"https://www.linkedin.com/in/dominik-mikulski-047998204/",photoURL:"/images/team2021/dominik_mikulski.jpg"},{name:"Zuzanna Dwojak",position:"Head of Marketing",linkedin:"https://www.linkedin.com/in/zuzanna-dwojak/",photoURL:"/images/team2021/zuzanna_dwojak.jpg"},{name:"Agnieszka Krakowiak",position:"Partnerships Team",linkedin:"https://www.linkedin.com/in/agnieszka-krakowiak/",photoURL:"/images/team2021/agnieszka_krakowiak.jpg"},{name:"Magdalena Nowacka",position:"Marketing Team",linkedin:"https://www.linkedin.com/in/magdalena-nowacka-868694169/",photoURL:"/images/team2021/magdalena_nowacka.jpg"},{name:"Micha\u0142 Flis",position:"Logistics Team",linkedin:"https://www.linkedin.com/in/micha%C5%82-flis-947931213/",photoURL:"/images/team2021/michal_flis.jpg"},{name:"Miko\u0142aj Hnatiuk",position:"Partnerships Team",linkedin:"https://www.linkedin.com/in/miko%C5%82aj-hnatiuk-6529b01a1/",photoURL:"/images/team2021/mikolaj_hnatiuk.jpg"},{name:"Natalia Chrapek",position:"Marketing Team",linkedin:"https://www.linkedin.com/in/natalia-chrapek-ba3409213/",photoURL:"/images/team2021/natalia_chrapek.jpg"},{name:"Tomasz Gawlikowski",position:"Partnerships Team",linkedin:"https://www.linkedin.com/in/tomasz-gawlikowski-7bb9821a2/",photoURL:"/images/team2021/tomasz_gawlikowski.jpg"},{name:"Weronika Mazur",position:"Recruitment Team",linkedin:"https://www.linkedin.com/in/weronika-mazur/",photoURL:"/images/team2021/weronika_mazur.jpg"},{name:"Wiktor Koszada",position:"Partnerships Team",linkedin:"https://www.linkedin.com/in/wiktor-koszada-bb6800203/",photoURL:"/images/team2021/wiktor_koszada.jpg"},{name:"\u0141ukasz Kajka",position:"Entertainment Team",photoURL:"/images/team2021/lukasz_kajka.jpg"}];function G(e){return Object(j.jsxs)("div",{className:"team-member",children:[Object(j.jsx)("img",{src:e.photoURL,alt:"",className:"team-member-pic"}),Object(j.jsx)("hr",{className:"team-member-hr"}),Object(j.jsx)("span",{className:"team-member-name",children:e.name}),Object(j.jsx)("span",{className:"team-member-position",children:e.position}),Object(j.jsx)("a",{href:e.linkedin,children:Object(j.jsx)("i",{className:"fa fa-linkedin"})})]})}var V=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(g,{backgroundImage:Q,title:"About Us"}),Object(j.jsx)("section",{className:"aboutus",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h3",{className:"primary",children:"Our 2021 Team"}),Object(j.jsx)("p",{children:"We are a group of students from SGH Warsaw School of Economics who are members of CEMS Club Warsaw. We are dedicated to organize an unforgettable and valuable event for our fellow CEMSies. We would like to give y ou an opportunity of gaining new skills, expanding your professional as well as personal networks."}),Object(j.jsx)("div",{className:"team-member-grid",children:D.map((function(e,t){return Object(j.jsx)(G,{name:e.name,position:e.position,linkedin:e.linkedin,photoURL:e.photoURL},t)}))})]})})]})};var K=function(){return Object(j.jsx)("section",{className:"notfound-main",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h3",{className:"primary",children:"404 Error"}),Object(j.jsx)("div",{children:Object(j.jsxs)("p",{children:["The page you're looking for doesn't exist. Please return to the ",Object(j.jsx)(l.b,{style:{textDecoration:"none",color:"black"},to:"/",children:"home page"}),"."]})})]})})};var J=function(){var e,t,n,a,i,s;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(b.a,{children:[Object(j.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),Object(j.jsx)("script",{src:"https://kit.fontawesome.com/039bb8f9f5.js",crossorigin:"anonymous"}),Object(j.jsx)("title",{children:"WARRoom Consuluting Conference"}),Object(j.jsx)("meta",{name:"description",content:"The WARroom gathers CEMS MIM students from around the world to solve business case studies together, learn from consultants and exchange new ideas."}),Object(j.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1"}),Object(j.jsx)("meta",{name:"robots",content:"index, follow"}),Object(j.jsx)("meta",{property:"og:title",content:"WARroom Conference 2021"}),Object(j.jsx)("meta",{property:"og:description",content:"The WARroom gathers CEMS MIM students from around the world to solve business case studies together, learn from consultants and exchange new ideas."}),Object(j.jsx)("meta",{property:"og:image",content:"/images/photos2019/1.jpg"}),Object(j.jsx)("meta",{property:"og:url",content:"https://thewarroom.pl"}),Object(j.jsx)("meta",{property:"og:site_name",content:"thewarroom.pl"})]}),Object(j.jsxs)(l.a,{children:[Object(j.jsxs)("main",{children:[Object(j.jsx)(d,{}),Object(j.jsxs)(u.c,{children:[Object(j.jsx)(u.a,(e={exact:!0,path:"/"},Object(r.a)(e,"exact",!0),Object(r.a)(e,"children",Object(j.jsx)(W,{})),e)),Object(j.jsx)(u.a,(t={exact:!0,path:"/partners"},Object(r.a)(t,"exact",!0),Object(r.a)(t,"children",Object(j.jsx)(k,{})),t)),Object(j.jsx)(u.a,(n={exact:!0,path:"/event"},Object(r.a)(n,"exact",!0),Object(r.a)(n,"children",Object(j.jsx)(L,{})),n)),Object(j.jsx)(u.a,(a={exact:!0,path:"/Register"},Object(r.a)(a,"exact",!0),Object(r.a)(a,"children",Object(j.jsx)(q,{})),a)),Object(j.jsx)(u.a,(i={exact:!0,path:"/FAQ"},Object(r.a)(i,"exact",!0),Object(r.a)(i,"children",Object(j.jsx)(_,{})),i)),Object(j.jsx)(u.a,(s={exact:!0,path:"/about"},Object(r.a)(s,"exact",!0),Object(r.a)(s,"children",Object(j.jsx)(V,{})),s)),Object(j.jsx)(u.a,{children:Object(j.jsx)(K,{})})]})]}),Object(j.jsx)(p,{})]})]})};o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(J,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.4ba7a249.chunk.js.map