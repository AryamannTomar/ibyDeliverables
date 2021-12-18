const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/News', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

const seedProducts = [
        {
            description: 'Our CTO,Yasuhiro Nose was selected "CTO of the year" at TechCrunch Japan.',
            date: '2021.12.02',
            category: 'awards',
            url: 'https://prtimes.jp/main/html/rd/p/000000032.000066162.html'
        },
        {
            description: '[Japan-India collaboration] MOU concluded with Indian Institute of Technology Hyderabad. Promoting joint research and co-creation in the fields of image, sound, psychology, and design.',
            date: '2021.11.29',
            category: 'events',
            url: 'https://prtimes.jp/main/html/rd/p/000000029.000066162.html'
        },
        {
            description: 'Won at CIC Pitch in CIC Tokyo 1 year anniversary event.',
            date: '2021.10.21',
            category: 'awards',
            url: ''
        },
        {
            description: 'Selected as 「J-Startup」,support program of Ministry of Economic,Trade and Industry.',
            date: '2021.10.20',
            category: 'awards',
            url: 'https://prtimes.jp/main/html/rd/p/000000028.000066162.html?fbclid=IwAR3ODwXDuqhzbtKrduMnPFO81D08iY5bciZSP4pC2Dgs3UlNgqiQrdVGRIs'
        },
        {
            description: 'Featured in Times of India about our collaboration with Mr.Anand Kumar.',
            date: '2021.10.11',
            category: 'news',
            url: 'https://timesofindia.indiatimes.com/world/rest-of-world/super-30s-anand-kumar-joins-hands-with-online-japanese-initiative-to-redefine-school-education/articleshow/86935443.cms'
        },
        {
            description: 'Selected Global TOP100 of Entrepreneurship World Cup from 100,000 companies in 200 countries.',
            date: '2021.10.11',
            category: 'awards',
            url: 'https://prtimes.jp/main/html/rd/p/000000026.000066162.html'
        },
        {
            description: 'Featured in Asahi about our collaboration with IIT.',
            date: '2021.10.06',
            category: 'news',
            url: 'https://www.asahi.com/articles/DA3S15067130.html'
        },
        {
            description: 'Selected Finalists of Digital HR Competition 2021.',
            date: '2021.10.06',
            category: 'awards',
            url: 'https://prtimes.jp/main/html/rd/p/000000024.000066162.html'
        },
        {
            description: 'Founded I\'mbesideyou India Private Limited.',
            date: '2021.09.28',
            category: 'founded',
            url: 'https://prtimes.jp/main/html/rd/p/000000025.000066162.html'
        },
        {
            description: 'Selected X-Pitch Global TOP150 Semi-Finalist.',
            date: '2021.09.17',
            category: 'awards',
            url: ''
        },
        {
            description: 'Certified ISMS(ISO27001) authentication.',
            date: '2021.09.13',
            category: 'certified',
            url: 'https://re-how.net/all/1379269/'
        },
        {
            description: 'Selected extraordinarily 100 startups by TOYO KEZAI.',
            date: '2021.08.30',
            category: 'awards',
            url: 'https://toyokeizai.net/articles/-/451286?display=b'
        },
        {
            description: 'Selected for Japan\'s Ministry of Economy,Trade and Industry\'s grant project "Tobidase Japan".',
            date: '2021.08.16',
            category: 'awards',
            url: 'https://www.icnet.co.jp/tobidase-japan/'
        },
        {
            description: 'Won at Entrepreneurship World Cup the Japan Final.',
            date: '2021.07.27',
            category: 'awards',
            url: 'https://entrepreneurshipworldcup.com/'
        },
        {
            description: 'Feautured in Nikkei about "UNION OF EMOTIONS".',
            date: '2021.07.21',
            category: 'news',
            url: 'https://www.nikkei.com/article/DGXZQOUC203CG0Q1A720C2000000/'
        },
        {
            description: 'Feautured in Nikkei about 100 patents.',
            date: '2021.07.20',
            category: 'services',
            url: 'https://www.nikkei.com/article/DGXZQOUC144RF0U1A610C2000000/'
        },
        {
            description: '"UNION OF EMOTIONS" to deliver cheers from all over the world to athletes online on the opening day of the world\'s most attractive sporting event.',
            date: '2021.07.19',
            category: 'awards',
            url: 'https://prtimes.jp/main/html/rd/p/000000018.000066162.html'
        },
        {
            description: 'Won 1st prize at Asian qualifying of SDGs Business Contests 2021',
            date: '2021.07.18',
            category: 'awards',
            url: 'https://sih.world/2021sihbc'
        },
        {
            description: 'Got 2nd place at UnicornBattleAsia.',
            date: '2021.07.15',
            category: 'news',
            url: 'https://prtimes.jp/main/action.php?run=html&page=releasedetail&company_id=66162&release_id=17&owner=1'
        },
        {
            description: 'Featured in Nikkei Business Daily about Mental Health.',
            date: '2021.07.15',
            category: 'news',
            url: ''
        },
        {
            description: 'Selected 5 finalists of startup pitch contest at "monosugoi" venture summit.',
            date: '2021.07.16',
            category: 'events',
            url: 'https://prtimes.jp/main/html/rd/p/000000017.000066162.html'
        },
        {
            description: 'Speeced at JETRO JAPAN DAY 2021 KICKOFF Seminar.',
            date: '2021.07.08',
            category: 'events',
            url: ''
        },
        {
            description: 'Speeched about open innovation with AstraZeneca.',
            date: '2021.07.08',
            category: 'events',
            url: 'https://www.facebook.com/100000691138329/posts/4649389851760673/?d='
        },
        {
            description: 'Selected top10 finalists of Unicorn Battle Asia.',
            date: '2021.07.06',
            category: 'events',
            url: 'https://battle.startup.network/events/433699/'
        },
        {
            description: 'Our services are specially featured in NHK TV Program.',
            date: '2021.06.29',
            category: 'broadcast',
            url: 'https://datazoo.jp/n/AI%E3%81%8C%E8%A7%A3%E6%9E%90+%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E3%81%AE%E5%8B%95%E7%94%BB%E3%81%8B%E3%82%89%E6%84%9F%E6%83%85%E3%82%92%E8%AA%AD%E3%81%BF%E8%A7%A3%E3%81%8F/18765854'
        },
        {
            description: 'Applied 100 Patents globally.',
            date: '2021.06.23',
            category: 'patents',
            url: 'https://prtimes.jp/main/html/rd/p/000000016.000066162.html'
        },
        {
            description: 'Establishment of new welfare system for employee according to after COVID-19 era.',
            date: '2021.06.03',
            category: 'welfare',
            url: 'https://prtimes.jp/main/html/rd/p/000000015.000066162.html'
        },
        {
            description: 'Selected by AI.accelerator 16th and pitch on the demo day.',
            date: '2021.06.02',
            category: 'awards',
            url: 'https://ainow.ai/2021/05/07/255113/'
        },
        {
            description: 'Featured in Diamond online about Mental Health,India.',
            date: '2021.05.06',
            category: 'news',
            url: 'https://diamond.jp/articles/-/269814'
        },
        {
            description: '730 students of IIT(Indian Institute of Technology) applied internship of I\'mbesideyou Inc., and carefully selected members start internship.',
            date: '2021.05.01',
            category: 'events',
            url: 'https://prtimes.jp/main/html/rd/p/000000013.000066162.html?fbclid=IwAR30dX1bcox8NY3lE6PEIyllfBfDCcyHzV0ceHkmB42HM5ZJ2rhDhQ4FvCc'
        },
        {
            description: 'Mr.Anand Kumar, founder of SUPER30 promised he will supply his online lesson data to I\'mbesideyou Inc.',
            date: '2021.04.22',
            category: 'events',
            url: 'https://prtimes.jp/main/html/rd/p/000000014.000066162.html'
        },
        {
            description: 'Selected for the Tokyo Metropolitan Government\'s grant project "Innovation Creation Project for New Demand".',
            date: '2021.03.22',
            category: 'awards',
            url: 'https://prtimes.jp/main/html/rd/p/000000012.000066162.html'
        },
        {
            description: 'Exhibit at LearnIT, online event of BETT',
            date: '2021.03.12',
            category: 'events',
            url: 'https://learnit.world/hostedleadersprogramme'
        },
        {
            description: 'Exhibit at SXSW2021',
            date: '2021.03.11',
            category: 'events',
            url: 'https://online.sxswedu.com/event/sxsw-edu-online/exhibitor/RXhoaWJpdG9yXzI4Njk0OQ%3D%3D'
        },
        {
            description: 'Selected for the Hamamatsu City Fund Support Project, we will promote well-being by observing mental health conditions.',
            date: '2021.03.10',
            category: 'awards',
            url: 'https://prtimes.jp/main/html/rd/p/000000009.000066162.html'
        },
        {
            description: 'Featured in Nikkei Business as the "CORONA NATIVE COMPANY".',
            date: '2021.03.08',
            category: 'articles',
            url: 'https://business.nikkei.com/atcl/NBD/19/00117/00141/'
        },
        {
            description: 'Participated in the SCI TECH held at Indian Institute of Technology Hyderabad as the only one Japanese enterprise.',
            date: '2021.03.07',
            category: 'events',
            url: 'https://scitechweek.tech/startupvisit.html'
        },
        {
            description: 'Participated in the pitch panel discussion of the J-TECH STARTUP SUMMIT.（Pitch/Panel discussion)',
            date: '2021.02.24',
            category: 'events',
            url: 'https://www.youtube.com/watch?v=uR48Mb5QLpo'
        },
        {
            description: 'Participated in the Japan Habba Tech Fair in Bangalore, India.',
            date: '2021.02.20',
            category: 'events',
            url: 'https://www.youtube.com/watch?v=3M1xHMsl2Ik'
        },
        {
            description: 'The interviewed article as the nominated enterprise of J-TECH STARTUP was published by Japan Management Association (JMA).',
            date: '2021.02.16',
            category: 'articles',
            url: 'https://jma-garage.com/interview/imbesideyou/'
        },
        {
            description: 'Selected at the final pitch session of MIRAI 2021.',
            date: '2021.02.10',
            category: 'awards',
            url: 'https://mirai.ventures/2021sp/'
        },
        {
            description: 'Featured in Pivot Tokyo about our participation in the Web Summit 2020.',
            date: '2021.02.01',
            category: 'articles',
            url: 'https://pivot-tokyo.com/en/interview/ws20interview_imbesideyou/'
        },
        {
            description: 'The interviewed article was published in Dempa Shimbun.',
            date: '2021.01.27',
            category: 'articles',
            url: 'https://dempa-digital.com/article/159982'
        },
        {
            description: 'Exhibit at CES2021',
            date: '2021.01.15',
            category: 'events',
            url: 'https://www.jetro.go.jp/en/events/ces2021/im_beside_you.html'
        },
        {
            description: 'Selected as the participant of the 4th Incubator Programme organized by NTT DOCOMO Ventures, Inc.',
            date: '2021.01.15',
            category: 'awards',
            url: 'https://www.nttdocomo-v.com/news/l1hdjah18r/'
        },
        {
            description: 'Participated in the online Luncheon Symposium of “Learning of Tomorrow”.（First half/Second half)',
            date: '2021.01.13',
            category: 'events',
            url: 'https://lot.or.jp/project/3927/'
        },
        {
            description: 'Exhibit at b8ta in Tokyo',
            date: '2021.01.08',
            category: 'events',
            url: 'https://prtimes.jp/main/html/rd/p/000000010.000027388.html'
        },
        {
            description: 'Featured in the Nihon Keizai Shimbun about funding and overseas expansion.',
            date: '2021.01.04',
            category: 'news',
            url: 'https://www.nikkei.com/article/DGXZQODZ23CJH0T21C20A2000000/'
        },
        {
            description: 'Completes a seed round of 115 million yen in funding.',
            date: '2020.01.04',
            category: 'funding',
            url: 'https://prtimes.jp/main/html/rd/p/000000004.000066162.html'
        },
        {
            description: 'Selected for "J-TECH STARTUP 2020", an award for Japan\'s leading technology venture companies.',
            date: '2020.12.22',
            category: 'awards',
            url: 'https://prtimes.jp/main/html/rd/p/000000003.000066162.html'
        },
        {
            description: 'Exhibit at Europe\'s largest technology conference Web summit',
            date: '2020.12.02',
            category: 'events',
            url: 'https://websummit.com/startups/featured-startups?query=I%27m%20beside%20you&page=1&configure[hitsPerPage]=50&configure[tagFilters][0]=ws20'
        },
        {
            description: 'ting the New Normal selected from among 7,500 companies at Slingshot 2020 in Singapore.',
            date: '2020.11.29',
            category: 'awards',
            url: 'https://prtimes.jp/main/html/rd/p/000000002.000066162.html'
        },
        {
            description: 'Selected as one of 8 finalists out of 250 companies at StartupGoGo! and won 3 awards: Microsoft Award, Toppan Printing Award, and Mitani Sangyo Award (most awards)',
            date: '2020.11.26',
            category: 'awards',
            url: 'https://prtimes.jp/main/html/rd/p/000000005.000066162.html'
        },
        {
            description: 'Selected for "101 Japanese Startups Founded in 2020 to Invest in" by Startup Pill',
            date: '2020.11.26',
            category: 'awards',
            url: 'https://startupill.com/101-japanese-startups-founded-in-2020-to-invest-in/'
        },
        {
            description: 'Selected for the Innovation for New Normal from Shibuya, promoted by Shibuya City',
            date: '2020.11.17',
            category: 'awards',
            url: 'https://www.shibukei.com/headline/15472/?fbclid=IwAR1pCFkLEHpkO_6ZDyMvjDZ00--ZMRcaX3Y7oea2SFRK2S6wzV-kJ3gedaA'
        },
        {
            description: 'Selected as a Top 20 finalist in the Creating the New Normal category from 7,500 companies at Slingshot 2020 in Singapore',
            date: '2020.11.09',
            category: 'awards',
            url: 'https://slingshot.agorize.com/en/challenges/2020-edition?lang=en'
        },
        {
            description: 'Won third place of the GESA 2020 The Global EdTech Startups Awards semifinal in Japan',
            date: '2020.11.05',
            category: 'awards',
            url: 'https://www.globaledtechawards.org/'
        },
        {
            description: 'Selected for "QWS Challenge #03" organized by SHIBUYA QWS (Shibuya QWS)',
            date: '2020.10.31',
            category: 'awards',
            url: 'https://shibuya-qws.com/project/Imbesideyou'
        },
        {
            description: 'Press release_ Banzan ltd, a provider of online tutor Megastar and other services, introduces I\'m beside you, an AI-based video analytics service to help children achieve their goals in online tutoring services',
            date: '2020.10.22',
            category: 'launch',
            url: 'https://prtimes.jp/main/html/rd/p/000000001.000066162.html'
        },
        {
            description: 'An interview with CEO Kamiya was posted in the Japanese media "Founders guide".',
            date: '2020.10.15',
            category: 'interview',
            url: 'https://sogyotecho.jp/parallelwork/'
        },
        {
            description: 'An interview with CEO Kamiya was posted in the Japanese media "StartupTimes".',
            date: '2020.10.14',
            category: 'interview',
            url: 'https://startuptimes.jp/2020/10/14/212513/'
        }
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })