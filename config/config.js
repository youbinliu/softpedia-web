var express = require('express')

exports.appSet = function(app){
    app.set('showStackError',true)   
    app.use(express.favicon());
    app.engine('.html', require('ejs').__express);
    app.set('views', app.root+'/web/views');
    app.set('view engine', 'html');
    

    app.use(express.static(app.root + '/public'));
    app.use(express.logger(':method :url :status'))    
    
    app.use(express.bodyParser())

    app.use(express.methodOverride())

    
    app.use(app.router)
    
    app.use(function(err,req,res,next){
        if(~err.message.indexOf('not found'))return next()
        console.error(err.stack)
        res.status(500).send('500');
    })

    app.use(function(req,res,next){
        res.status(404).send('404')
    })
    
    app.set('showStackError',false)
}

exports.settings  {
    db:'mongodb://localhost/softpedia',
    port:8000    
}

exports.updateConfig = { 
    
    menu : [
        {
            name:'WINDOWS',url:'http://win.softpedia.com/',rss:'http://www.softpedia.com/backend.xml',
            cate:[
                {
                    name:'Antivirus',url:'http://www.softpedia.com/get/Antivirus/',rss:'http://www.softpedia.com/rss/1.xml'
                },
                {
                    name:'Authoring tools',url:'http://www.softpedia.com/get/Authoring-tools/',rss:'http://www.softpedia.com/rss/19.xml',
                },
                {
                    name:'CD/DVD Tools',url:'http://www.softpedia.com/get/CD-DVD-Tools/',rss:'http://www.softpedia.com/rss/3.xml',
                },
                {
                    name:'Compression tools',url:'http://www.softpedia.com/get/Compression-tools/',rss:'http://www.softpedia.com/rss/2.xml',
                },
                {
                    name:'Desktop Enhancements',url:'http://www.softpedia.com/get/Desktop-Enhancements/',rss:'http://www.softpedia.com/rss/23.xml',
                },
                {
                    name:'File managers',url:'http://www.softpedia.com/get/File-managers/',rss:'http://www.softpedia.com/rss/22.xml',
                },
                {
                    name:'Internet',url:'http://www.softpedia.com/get/Internet/',rss:'http://www.softpedia.com/rss/28.xml',
                },
                {
                    name:'IPOD TOOLS',url:'http://www.softpedia.com/get/IPOD-TOOLS/',rss:'http://www.softpedia.com/rss/163.xml',
                },
                {
                    name:'Mobile Phone Tools',url:'http://www.softpedia.com/get/Mobile-Phone-Tools/',rss:'http://www.softpedia.com/rss/168.xml',
                },
                {
                    name:'Multimedia',url:'http://www.softpedia.com/get/Multimedia/',rss:'http://www.softpedia.com/rss/58.xml',
                },
                {
                    name:'Network Tools',url:'http://www.softpedia.com/get/Network-Tools/',rss:'http://www.softpedia.com/rss/182.xml',
                },
                {
                    name:'Office tools',url:'http://www.softpedia.com/get/Office-tools/',rss:'http://www.softpedia.com/rss/8.xml',
                },
                {
                    name:'Others',url:'http://www.softpedia.com/get/Others/',rss:'http://www.softpedia.com/rss/106.xml',
                },
                {
                    name:'PORTABLE SOFTWARE',url:'http://www.softpedia.com/get/PORTABLE-SOFTWARE/',rss:'http://www.softpedia.com/rss/223.xml',
                },
                {
                    name:'Programming',url:'http://www.softpedia.com/get/Programming/',rss:'http://www.softpedia.com/rss/12.xml',
                },
                {
                    name:'Science / CAD',url:'http://www.softpedia.com/get/Science-CAD/',rss:'http://www.softpedia.com/rss/111.xml',
                },
                {
                    name:'Security',url:'http://www.softpedia.com/get/Security/',rss:'http://www.softpedia.com/rss/94.xml',
                },
                {
                    name:'System',url:'http://www.softpedia.com/get/System/',rss:'http://www.softpedia.com/rss/89.xml',
                },
                 {
                    name:'Tweak',url:'http://www.softpedia.com/get/Tweak/',rss:'http://www.softpedia.com/rss/80.xml',
                },
                 {
                    name:'UNIX',url:'http://www.softpedia.com/get/UNIX/',rss:'http://www.softpedia.com/rss/147.xml',
                },
                 {
                    name:'Windows Widgets',url:'http://www.softpedia.com/get/Windows-Widgets/',rss:'http://www.softpedia.com/rss/204.xml',
                }                
            ]
        },
        {
            name:'GAMES',url:'http://games.softpedia.com/',rss:'http://games.softpedia.com/backend.xml',
            cate:[
                {
                    name:'Cheat / Solutions',url:'http://games.softpedia.com/get/Cheat-Solutions/',rss:'http://games.softpedia.com/rss/7.xml',
                },
                {
                    name:'Emu',url:'http://games.softpedia.com/get/Emu/',rss:'http://games.softpedia.com/rss/5.xml',
                },
                {
                    name:'Freeware Games',url:'http://games.softpedia.com/get/Freeware-Games/',rss:'http://games.softpedia.com/rss/1.xml',
                },
                {
                    name:'Games Demo',url:'http://games.softpedia.com/get/Games-Demo/',rss:'http://games.softpedia.com/rss/3.xml',
                },
                {
                    name:'Maps',url:'http://games.softpedia.com/get/Maps/',rss:'http://games.softpedia.com/rss/10.xml',
                },
                {
                    name:'Mods/Addons',url:'http://games.softpedia.com/get/Mods-Addons/',rss:'http://games.softpedia.com/rss/9.xml',
                },
                {
                    name:'Online Games Clients',url:'http://games.softpedia.com/get/Online-Games-Clients/',rss:'http://games.softpedia.com/rss/11.xml',
                },
                {
                    name:'Patch',url:'http://games.softpedia.com/get/Patch/',rss:'http://games.softpedia.com/rss/6.xml',
                },
                {
                    name:'Server',url:'http://games.softpedia.com/get/SERVER/',rss:'http://games.softpedia.com/rss/12.xml',
                },
                {
                    name:'Shareware Games',url:'http://games.softpedia.com/get/Shareware-Games/',rss:'http://games.softpedia.com/rss/2.xml',
                },
                 {
                    name:'Trailer',url:'http://games.softpedia.com/get/Trailer/',rss:'http://games.softpedia.com/rss/8.xml',
                },
                 {
                    name:'Tools',url:'http://games.softpedia.com/get/Tools/',rss:'http://games.softpedia.com/rss/4.xml',
                },
            ]
        },
        {
            name:'DRIVERS',url:'http://drivers.softpedia.com/',rss:'http://drivers.softpedia.com/backend.xml',
            cate:[
                {
                    name:'BIOS',url:'http://drivers.softpedia.com/get/BIOS/',rss:'http://drivers.softpedia.com/rss/37.xml'
                },
                {
                    name:'BLUETOOTH',url:'http://drivers.softpedia.com/get/BLUETOOTH/',rss:'http://drivers.softpedia.com/rss/492.xml'
                },
                {
                    name:'CARD READERS',url:'http://drivers.softpedia.com/get/CARD-READERS/',rss:'http://drivers.softpedia.com/rss/257.xml'
                },
                {
                    name:'DVD / Blu-Ray / Media Players',url:'http://drivers.softpedia.com/get/DVD-BluRay-Media-Players/',rss:'http://drivers.softpedia.com/rss/538.xml'
                },
                {
                    name:'FIRMWARE',url:'http://drivers.softpedia.com/get/FIRMWARE/',rss:'http://drivers.softpedia.com/rss/130.xml'
                },
                {
                    name:'GRAPHICS BOARD',url:'http://drivers.softpedia.com/get/GRAPHICS-BOARD/',rss:'http://drivers.softpedia.com/rss/2.xml'
                },
                {
                    name:'HDD / SSD / NAS / USB Flash',url:'http://drivers.softpedia.com/get/HDD-SSD-NAS-USB-Flash/',rss:'http://drivers.softpedia.com/rss/344.xml'
                },
                {
                    name:'JOYSTICK, GAMEPAD, WHEELS AND TABLETS',url:'http://drivers.softpedia.com/get/JOYSTICK-GAMEPAD-WHEELS-and-TABLETS/',rss:'http://drivers.softpedia.com/rss/490.xml'
                },
                {
                    name:'KEYBOARD AND MOUSE',url:'http://drivers.softpedia.com/get/KEYBOARD-and-MOUSE/',rss:'http://drivers.softpedia.com/rss/201.xml'
                },
                {
                    name:'MOBILES',url:'http://drivers.softpedia.com/get/MOBILES/',rss:'http://drivers.softpedia.com/rss/491.xml'
                },
                {
                    name:'MODEM',url:'http://drivers.softpedia.com/get/MODEM/',rss:'http://drivers.softpedia.com/rss/369.xml'
                },
                {
                    name:'MONITOR',url:'http://drivers.softpedia.com/get/MONITOR/',rss:'http://drivers.softpedia.com/rss/223.xml'
                },
                {
                    name:'MOTHERBOARD',url:'http://drivers.softpedia.com/get/MOTHERBOARD/',rss:'http://drivers.softpedia.com/rss/73.xml'
                },
                {
                    name:'NETWORK CARD',url:'http://drivers.softpedia.com/get/NETWORK-CARD/',rss:'http://drivers.softpedia.com/rss/185.xml'
                },
                {
                    name:'OTHER DRIVERS/TOOLS',url:'http://drivers.softpedia.com/get/Other-DRIVERS-TOOLS/',rss:'http://drivers.softpedia.com/rss/270.xml'
                },
                {
                    name:'PRINTER',url:'http://drivers.softpedia.com/get/PRINTER/',rss:'http://drivers.softpedia.com/rss/475.xml'
                },
                {
                    name:'SCANNER / DIGITAL CAMERA / WEBCAM /CAMCORDER',url:'http://drivers.softpedia.com/get/SCANNER-Digital-CAMERA-WEBCAM/',rss:'http://drivers.softpedia.com/rss/79.xml'
                },
                {
                    name:'SOUND CARD',url:'http://drivers.softpedia.com/get/SOUND-CARD/',rss:'http://drivers.softpedia.com/rss/156.xml'
                },
                {
                    name:'TV / HDTV / Projectors',url:'http://drivers.softpedia.com/get/TV-HDTV-Projectors/',rss:'http://drivers.softpedia.com/rss/385.xml'
                },
                {
                    name:'TV TUNER & CO',url:'http://drivers.softpedia.com/get/TV-Tuner-Co/',rss:'http://drivers.softpedia.com/rss/251.xml'
                }
            ]
        },
        {
            name:'MAC',url:'http://mac.softpedia.com/',rss:'http://mac.softpedia.com/backend.xml',
            cate:[
                {
                    name:'Antivirus',url:'http://mac.softpedia.com/get/Antivirus/',rss:'http://mac.softpedia.com/rss/212.xml'
                },
                {
                    name:'Audio',url:'http://mac.softpedia.com/get/Audio/',rss:'http://mac.softpedia.com/rss/161.xml'
                },
                {
                    name:'Automator Actions & Workflows',url:'http://mac.softpedia.com/get/Automator-Actions---Workflows/',rss:'http://mac.softpedia.com/rss/240.xml'
                },
                {
                    name:'Business',url:'http://mac.softpedia.com/get/Business/',rss:'http://mac.softpedia.com/rss/162.xml'
                },
                {
                    name:'Communications',url:'http://mac.softpedia.com/get/Communications/',rss:'http://mac.softpedia.com/rss/214.xml'
                },
                {
                    name:'Compression Tools',url:'http://mac.softpedia.com/get/Compression-Tools/',rss:'http://mac.softpedia.com/rss/213.xml'
                },
                {
                    name:'Dashboard Widgets',url:'http://mac.softpedia.com/get/Dashboard-Widgets/',rss:'http://mac.softpedia.com/rss/216.xml'
                },
                {
                    name:'Desktop',url:'http://mac.softpedia.com/get/Wallpapers/',rss:'http://mac.softpedia.com/rss/182.xml'
                },
                {
                    name:'Developer Tools',url:'http://mac.softpedia.com/get/Developer-Tools/',rss:'http://mac.softpedia.com/rss/163.xml'
                },
                {
                    name:'Development',url:'http://mac.softpedia.com/get/Development/',rss:'http://mac.softpedia.com/rss/185.xml'
                },
                {
                    name:'Drivers',url:'http://mac.softpedia.com/get/Drivers/',rss:'http://mac.softpedia.com/rss/164.xml'
                },
                {
                    name:'DTP/Prepress',url:'http://mac.softpedia.com/get/DTP-Prepress/',rss:'http://mac.softpedia.com/rss/165.xml'
                },
                {
                    name:'Educational',url:'http://mac.softpedia.com/get/Educational/',rss:'http://mac.softpedia.com/rss/166.xml'
                },
                {
                    name:'Finance',url:'http://mac.softpedia.com/get/Finance/',rss:'http://mac.softpedia.com/rss/167.xml'
                },
                {
                    name:'Font Tools',url:'http://mac.softpedia.com/get/Font-Tools/',rss:'http://mac.softpedia.com/rss/168.xml'
                },
                {
                    name:'Games',url:'http://mac.softpedia.com/get/Games/',rss:'http://mac.softpedia.com/rss/169.xml'
                },
                {
                    name:'Graphics',url:'http://mac.softpedia.com/get/Graphics/',rss:'http://mac.softpedia.com/rss/170.xml'
                },
                {
                    name:'HTML Tools',url:'http://mac.softpedia.com/get/HTML-Tools/',rss:'http://mac.softpedia.com/rss/171.xml'
                },
                {
                    name:'Internet Utilities',url:'http://mac.softpedia.com/get/Internet-Utilities/',rss:'http://mac.softpedia.com/rss/172.xml'
                },
                {
                    name:'iPhone Applications',url:'http://mac.softpedia.com/get/iPhone-Applications/',rss:'http://mac.softpedia.com/rss/243.xml'
                },
                {
                    name:'iPod Tools',url:'http://mac.softpedia.com/get/iPod-Tools/',rss:'http://mac.softpedia.com/rss/184.xml'
                },
                {
                    name:'Math/Scientific',url:'http://mac.softpedia.com/get/Math-Scientific/',rss:'http://mac.softpedia.com/rss/173.xml'
                },
                {
                    name:'Multimedia',url:'http://mac.softpedia.com/get/Multimedia/',rss:'http://mac.softpedia.com/rss/174.xml'
                },
                {
                    name:'Network/Admin',url:'http://mac.softpedia.com/get/Network-Admin/',rss:'http://mac.softpedia.com/rss/175.xml'
                },
                {
                    name:'Screensavers',url:'http://mac.softpedia.com/get/Screensavers/',rss:'http://mac.softpedia.com/rss/176.xml'
                },
                {
                    name:'Security',url:'http://mac.softpedia.com/get/Security/',rss:'http://mac.softpedia.com/rss/177.xml'
                },
                {
                    name:'Spotlight Plugins & Utilities',url:'http://mac.softpedia.com/get/Spotlight-Plugins---Utilities/',rss:'http://mac.softpedia.com/rss/241.xml'
                },
                {
                    name:'System Utilities',url:'http://mac.softpedia.com/get/System-Utilities/',rss:'http://mac.softpedia.com/rss/178.xml'
                },
                {
                    name:'Utilities',url:'http://mac.softpedia.com/get/Utilities/',rss:'http://mac.softpedia.com/rss/179.xml'
                },
                {
                    name:'Video',url:'http://mac.softpedia.com/get/Video/',rss:'http://mac.softpedia.com/rss/181.xml'
                },
                {
                    name:'Word Processing',url:'http://mac.softpedia.com/get/Word-Processing/',rss:'http://mac.softpedia.com/rss/180.xml'
                }
            ]
        },
        {
            name:'LINUX',url:'http://linux.softpedia.com/',rss:'http://linux.softpedia.com/backend.xml',
            cate:[
                {
                    name:'Adaptive Technologies',url:'http://linux.softpedia.com/get/Adaptive-Technologies/',rss:'http://linux.softpedia.com/rss/168.xml'
                },
                {
                    name:'Adobe AIR Apps',url:'http://linux.softpedia.com/get/Adobe-AIR-Apps/',rss:'http://linux.softpedia.com/rss/311.xml'
                },
                {
                    name:'Artistic Software',url:'http://linux.softpedia.com/get/Artistic-Software/',rss:'http://linux.softpedia.com/rss/169.xml'
                },
                {
                    name:'Communications',url:'http://linux.softpedia.com/get/Communications/',rss:'http://linux.softpedia.com/rss/170.xml'
                },{
                    name:'Database',url:'http://linux.softpedia.com/get/Database/',rss:'http://linux.softpedia.com/rss/180.xml'
                },
                {
                    name:'Desktop Environment',url:'http://linux.softpedia.com/get/Desktop-Environment/',rss:'http://linux.softpedia.com/rss/188.xml'
                },
                {
                    name:'Documentation',url:'http://linux.softpedia.com/get/Documentation/',rss:'http://linux.softpedia.com/rss/192.xml'
                },
                {
                    name:'Education',url:'http://linux.softpedia.com/get/Education/',rss:'http://linux.softpedia.com/rss/193.xml'
                },
                {
                    name:'Games',url:'http://linux.softpedia.com/get/GAMES-ENTERTAINMENT/',rss:'http://linux.softpedia.com/rss/266.xml'
                },
                {
                    name:'Home Automation',url:'http://linux.softpedia.com/get/Automation/',rss:'http://linux.softpedia.com/rss/194.xml'
                },
                {
                    name:'Information Management',url:'http://linux.softpedia.com/get/Information-Management/',rss:'http://linux.softpedia.com/rss/195.xml'
                },
                {
                    name:'Internet',url:'http://linux.softpedia.com/get/Internet/',rss:'http://linux.softpedia.com/rss/196.xml'
                },{
                    name:'Multimedia',url:'http://linux.softpedia.com/get/Multimedia/',rss:'http://linux.softpedia.com/rss/202.xml'
                },
                {
                    name:'Office',url:'http://linux.softpedia.com/get/Office/',rss:'http://linux.softpedia.com/rss/207.xml'
                },
                {
                    name:'Printing',url:'http://linux.softpedia.com/get/Printing/',rss:'http://linux.softpedia.com/rss/213.xml'
                },
                {
                    name:'Programming',url:'http://linux.softpedia.com/get/Programming/',rss:'http://linux.softpedia.com/rss/216.xml'
                },
                {
                    name:'Religion',url:'http://linux.softpedia.com/get/Religion/',rss:'http://linux.softpedia.com/rss/302.xml'
                },
                {
                    name:'Science',url:'http://linux.softpedia.com/get/Science/',rss:'http://linux.softpedia.com/rss/214.xml'
                },
                {
                    name:'Science and Engineering',url:'http://linux.softpedia.com/get/Science-and-Engineering/',rss:'http://linux.softpedia.com/rss/289.xml'
                },
                {
                    name:'Security',url:'http://linux.softpedia.com/get/Security/',rss:'http://linux.softpedia.com/rss/215.xml'
                },
                {
                    name:'System',url:'http://linux.softpedia.com/get/System/',rss:'http://linux.softpedia.com/rss/233.xml'
                },
                {
                    name:'Terminals',url:'http://linux.softpedia.com/get/Terminals/',rss:'http://linux.softpedia.com/rss/255.xml'
                },
                {
                    name:'Text Editing&Processing',url:'http://linux.softpedia.com/get/Text-Editing-Processing/',rss:'http://linux.softpedia.com/rss/256.xml'
                },
                {
                    name:'Utilities',url:'http://linux.softpedia.com/get/Utilities/',rss:'http://linux.softpedia.com/rss/264.xml'
                },
            ]
        },
        {
            name:'SCRIPT',url:'http://webscripts.softpedia.com/',rss:'http://webscripts.softpedia.com/backend.xml',
            cate:[
                {
                    name:'Ad Management',url:'http://webscripts.softpedia.com/cat/Ad-Management-list-22-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/22.xml'
                },
                {
                    name:'Affiliate Programs',url:'http://webscripts.softpedia.com/cat/Affiliate-Programs-list-71-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/71.xml'
                },
                {
                    name:'AJAX',url:'http://webscripts.softpedia.com/cat/AJAX-list-401-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/401.xml'
                },
                {
                    name:'Auctions',url:'http://webscripts.softpedia.com/cat/Auctions-list-73-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/73.xml'
                },
                {
                    name:'Authentication',url:'http://webscripts.softpedia.com/cat/Authentication-list-72-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/72.xml'
                },
                {
                    name:'Blog',url:'http://webscripts.softpedia.com/cat/Blog-list-23-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/23.xml'
                },
                {
                    name:'Bookmark Management',url:'http://webscripts.softpedia.com/cat/Bookmark-Management-list-24-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/24.xml'
                },
                {
                    name:'Calculator',url:'http://webscripts.softpedia.com/cat/Calculator-js-list-100-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/100.xml'
                },
                {
                    name:'Calendar Systems',url:'http://webscripts.softpedia.com/cat/Calendar-Systems-list-70-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/70.xml'
                },
                {
                    name:'Chat Scripts',url:'http://webscripts.softpedia.com/cat/Chat-Scripts-list-25-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/25.xml'
                },
                {
                    name:'Click Tracking',url:'http://webscripts.softpedia.com/cat/Click-Tracking-list-19-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/19.xml'
                },
                {
                    name:'Communication Tools',url:'http://webscripts.softpedia.com/cat/Communication-Tools-list-26-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/26.xml'
                },
                {
                    name:'Content Management',url:'http://webscripts.softpedia.com/cat/Content-Management-list-27-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/27.xml'
                },
                {
                    name:'Customer support',url:'http://webscripts.softpedia.com/cat/Customer-support-list-28-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/28.xml'
                },
                {
                    name:'Database Tools',url:'http://webscripts.softpedia.com/cat/Database-Tools-list-29-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/29.xml'
                },
                {
                    name:'Development Tools',url:'http://webscripts.softpedia.com/cat/Development-Scripts-js-list-112-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/112.xml'
                },
                {
                    name:'Discussion Boards',url:'http://webscripts.softpedia.com/cat/Discussion-Boards-list-30-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/30.xml'
                },
                {
                    name:'E-Commerce',url:'http://webscripts.softpedia.com/cat/E-Commerce-list-21-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/21.xml'
                },
                {
                    name:'Email Systems',url:'http://webscripts.softpedia.com/cat/Email-Systems-list-31-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/31.xml'
                },
                {
                    name:'FAQ and Knowledgebase',url:'http://webscripts.softpedia.com/cat/FAQ-and-Knowledgebase-list-32-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/32.xml'
                },
                {
                    name:'File Management',url:'http://webscripts.softpedia.com/cat/File-Management-Perl-list-212-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/212.xml'
                },
                {
                    name:'Flash Components',url:'http://webscripts.softpedia.com/cat/Flash-Components-list-145-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/145.xml'
                },
                {
                    name:'Form Processors',url:'http://webscripts.softpedia.com/cat/Form-Processors-list-33-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/33.xml'
                },
                {
                    name:'Forms and Controls',url:'http://webscripts.softpedia.com/cat/Forms-and-Controls-C-C-list-154-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/154.xml'
                },
                {
                    name:'Games',url:'http://webscripts.softpedia.com/cat/Games-list-76-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/76.xml'
                },
                {
                    name:'Graphics and Multimedia',url:'http://webscripts.softpedia.com/cat/Multimedia-list-41-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/41.xml'
                },
                {
                    name:'Graphs and Charts',url:'http://webscripts.softpedia.com/cat/Graphs-and-Charts-list-34-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/34.xml'
                },
                {
                    name:'GuestBooks',url:'http://webscripts.softpedia.com/cat/GuestBooks-list-35-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/35.xml'
                },
                {
                    name:'Image Galleries',url:'http://webscripts.softpedia.com/cat/Image-Galleries-list-36-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/36.xml'
                },
                {
                    name:'Internet, Browsers and Tools',url:'http://webscripts.softpedia.com/cat/Internet-Browsers-C-C-list-147-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/147.xml'
                },
                {
                    name:'Link Indexing',url:'http://webscripts.softpedia.com/cat/Link-Indeing-list-37-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/37.xml'
                },
                {
                    name:'Mailing List Managers',url:'http://webscripts.softpedia.com/cat/Mailing-List-Managers-list-38-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/38.xml'
                },
                {
                    name:'Match Making',url:'http://webscripts.softpedia.com/cat/Match-Making-list-39-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/39.xml'
                },
                {
                    name:'Miscellaneous',url:'http://webscripts.softpedia.com/cat/Miscellaneous-list-75-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/75.xml'
                },
                {
                    name:'Modal Windows',url:'http://webscripts.softpedia.com/cat/Modal-Windows-list-416-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/416.xml'
                },
                {
                    name:'Modules',url:'http://webscripts.softpedia.com/cat/Modules-list-79-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/79.xml'
                },
                {
                    name:'Multi-Level Marketing',url:'http://webscripts.softpedia.com/cat/Multi-Level-Marketing-list-40-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/40.xml'
                },
                {
                    name:'Networking Tools',url:'http://webscripts.softpedia.com/cat/Networking-Tools-list-42-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/42.xml'
                },
                {
                    name:'News Publishing',url:'http://webscripts.softpedia.com/cat/News-Publishing-list-43-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/43.xml'
                },
                {
                    name:'Organizers',url:'http://webscripts.softpedia.com/cat/Organizers-list-44-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/44.xml'
                },
                {
                    name:'PHP Classes',url:'http://webscripts.softpedia.com/cat/PHP-Clases-list-94-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/94.xml'
                },
                {
                    name:'Polls and Voting',url:'http://webscripts.softpedia.com/cat/Polls-and-Voting-list-18-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/18.xml'
                },
                {
                    name:'Portal Systems',url:'http://webscripts.softpedia.com/cat/Portal-Systems-list-46-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/46.xml'
                },
                {
                    name:'Programming Methods and Algorithms',url:'http://webscripts.softpedia.com/cat/Programming-Methods-and-Algorithms-Python-list-336-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/336.xml'
                },
                {
                    name:'Quiz',url:'http://webscripts.softpedia.com/cat/Quizz-list-74-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/74.xml'
                },
                {
                    name:'Real Estate',url:'http://webscripts.softpedia.com/cat/Real-Estate-list-47-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/47.xml'
                },
                {
                    name:'Scientific/Engineering',url:'http://webscripts.softpedia.com/cat/Scientific-Engineering-Ruby-list-301-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/301.xml'
                },
                {
                    name:'Search Engines',url:'http://webscripts.softpedia.com/cat/Search-Engines-list-48-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/48.xml'
                },
                {
                    name:'Security Systems',url:'http://webscripts.softpedia.com/cat/Security-Systems-list-49-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/49.xml'
                },
                {
                    name:'Server Management',url:'http://webscripts.softpedia.com/cat/Server-Management-list-50-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/50.xml'
                },
                {
                    name:'Snippets',url:'http://webscripts.softpedia.com/cat/Snippets-list-89-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/89.xml'
                },
                {
                    name:'Text Management',url:'http://webscripts.softpedia.com/cat/Text-Management-list-88-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/88.xml'
                },
                {
                    name:'Top Sites',url:'http://webscripts.softpedia.com/cat/Top-Sites-list-52-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/52.xml'
                },
                {
                    name:'Web Hosting Tools',url:'http://webscripts.softpedia.com/cat/Web-Hosting-Tools-list-54-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/54.xml'
                },
                {
                    name:'Web Traffic Analysis',url:'http://webscripts.softpedia.com/cat/Web-Traffic-Analysis-list-55-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/55.xml'
                },
                {
                    name:'Wikis',url:'http://webscripts.softpedia.com/cat/Wikis-list-56-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/56.xml'
                },
                {
                    name:'WordPress Plugins',url:'http://webscripts.softpedia.com/cat/WordPress-Plugins-list-397-1-0-0.html',rss:''
                },
                {
                    name:'WYSIWYG Editors',url:'http://webscripts.softpedia.com/cat/WYSIWYG-Editors-list-57-1-0-0.html',rss:'http://webscripts.softpedia.com/rss/57.xml'
                }
            ]
        },
        {
            name:'HANDLELD',url:'http://handheld.softpedia.com/',rss:'http://handheld.softpedia.com/backend-software.xml',
            cate:[
                {
                    name:'Business',url:'http://handheld.softpedia.com/get/Business/',rss:'http://handheld.softpedia.com/rss/1.xml'
                },
                {
                    name:'Desktop and Shell',url:'http://handheld.softpedia.com/get/Desktop-and-Shell/',rss:'http://handheld.softpedia.com/rss/101.xml'
                },
                {
                    name:'Developer Tools',url:'http://handheld.softpedia.com/get/Developer-Tools/',rss:'http://handheld.softpedia.com/rss/17.xml'
                },
                {
                    name:'Documents / E-Books',url:'http://handheld.softpedia.com/get/Documents-E-Books/',rss:'http://handheld.softpedia.com/rss/79.xml'
                },
                {
                    name:'Educational',url:'http://handheld.softpedia.com/get/Educational/',rss:'http://handheld.softpedia.com/rss/19.xml'
                },
                {
                    name:'Finance',url:'http://handheld.softpedia.com/get/Finance/',rss:'http://handheld.softpedia.com/rss/36.xml'
                },
                {
                    name:'Games',url:'http://handheld.softpedia.com/get/Games/',rss:'http://handheld.softpedia.com/rss/42.xml'
                },
                {
                    name:'Graphics',url:'http://handheld.softpedia.com/get/Graphics/',rss:'http://handheld.softpedia.com/rss/59.xml'
                },
                {
                    name:'Health',url:'http://handheld.softpedia.com/get/Health/',rss:'http://handheld.softpedia.com/rss/116.xml'
                },
                {
                    name:'HOBBIES',url:'http://handheld.softpedia.com/get/Science/',rss:'http://handheld.softpedia.com/rss/93.xml'
                },
                {
                    name:'Internet Utilities',url:'http://handheld.softpedia.com/get/Internet-Utilities/',rss:'http://handheld.softpedia.com/rss/80.xml'
                },
                {
                    name:'Multimedia',url:'http://handheld.softpedia.com/get/Multimedia-Graphics/',rss:'http://handheld.softpedia.com/rss/68.xml'
                },
                {
                    name:'Quiz',url:'http://handheld.softpedia.com/get/Quiz/',rss:'http://handheld.softpedia.com/rss/97.xml'
                },
                {
                    name:'Security',url:'http://handheld.softpedia.com/get/Security/',rss:'http://handheld.softpedia.com/rss/86.xml'
                },
                {
                    name:'System Utilities',url:'http://handheld.softpedia.com/get/System-Utilities/',rss:'http://handheld.softpedia.com/rss/99.xml'
                },
                {
                    name:'Travel',url:'http://handheld.softpedia.com/get/Travel/',rss:'http://handheld.softpedia.com/rss/71.xml'
                },
                {
                    name:'Word Processing/Text Tools',url:'http://handheld.softpedia.com/get/Word-Processing-Text-Tools/',rss:'http://handheld.softpedia.com/rss/63.xml'
                }
            ]
        }
    ]
}
