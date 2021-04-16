import {faDesktop} from '@fortawesome/free-solid-svg-icons';
import {faAppStoreIos, faGooglePlay, faYoutube, faGithub} from '@fortawesome/free-brands-svg-icons';

type ButtonType = {
    text: string,
    icon: any,
    url?: string,
}

export type ProjectType = {
    title: string,
    subtitle: string,
    description: string,
    cover: string,
    preview?: boolean,
    buttons?: Array<ButtonType>
}

export default [
    {
        title: "TradeCast TV",
        subtitle: "APP | (internship) TradeCast B.V",
        description: "TradeCast provides the techniques and software to start your online tv channel. With TradeCast anyone can start their own tv channel for an affordable price. At TradeCast I assisted in developing Android and iOS apps.",
        cover: "/projects/TC.png",
        buttons: [
            {
                text: 'Website',
                icon: faDesktop,
                url: "https://tradecast.tv/"
            },
            {
                text: 'Android',
                icon: faGooglePlay,
                url: "https://play.google.com/store/apps/details?id=eu.tradecast.tradecasttv"
            },
            {
                text: "iOS",
                icon: faAppStoreIos,
                url: "https://apps.apple.com/nl/app/tradecast-tv/id1045905936"
            }
        ]
    }, 
    {
        title: "Phantune",
        subtitle: "Single Page App",
        description: "Phantune is a project that I started in 2016 to learn more about the techniques behind streaming audio. This project is inspired by music streaming services like Spotify and Soundcloud.",
        cover: "/projects/phantune.png",
        buttons: [
            {
                text: 'Website',
                icon: faDesktop,
                url: "https://play.phantune.com"
            },
        ],
    },
    {
        title: "Unnamed travel project",
        subtitle: "Single Page App (WIP)",
        description: "A travel based single page application.",
        cover: "/projects/travel.png",
    },
    {
        title: "100 Thieves app",
        subtitle: "APP (WIP)",
        description: "React Native app created based on the 100 Thieves website. The app is built to maintain my react native skills and experiment with new techniques. The app is no way affiliated with 100 Thieves.",
        cover: "/projects/thieves.png",
        buttons: [
            {
                text: 'GitHub',
                icon: faGithub,
                url: "https://github.com/gwesseling/100-Thieves",
            }
        ]
    },
    {
        title: "Teamtrees tree counter",
        subtitle: "Single Page App",
        description: "A website that counts the amount of trees planted by the Arbor Day Foundation.",
        cover: "/projects/teamtrees.png",
        buttons: [
            {
                text: 'Website',
                icon: faDesktop,
                url: "https://teamtrees.gwesseling.nl/"
            },
            {
                text: 'GitHub',
                icon: faGithub,
                url: "https://github.com/gwesseling/Teamtrees",
            }
        ]
    },
    {
        title: "Line-following robot",
        subtitle: "Robot (arduino) | Team Project | College project (Windesheim)",
        description: "A robot that can follow a black line.",
        cover: "/projects/robot.jpg",
        buttons: [
            {
                text: "Watch video",
                icon: faYoutube,
                url: "https://www.youtube.com/watch?v=6_ZGwLHD72o"
            }
        ]
    },
    {
        title: "Warehouse robot",
        subtitle: "Robot (arduino) | Team Project | College project (Windesheim)",
        description: "A robot that can pick orders and put them in the right box using algorithms (Nearest Neighbour, Branch and Bound and Best Fit) to solve TSP (Travelling Salesman Problem) and BPP (Bin Packing Problem).",
        cover: "/projects/robot.jpg",
        buttons: [
            {
                text: "Watch video",
                icon: faYoutube,
                url: "https://www.youtube.com/watch?v=0n_dJSFxwV0",
            }
        ]
    },
    {
        title: "Gamesive",
        subtitle: "Electron app (currently on hold)",
        description: "A gamestore front-end inspired by stores like Steam and the Epic Game Store.",
        cover: "/projects/gamesive.jpg",
        images: [
            '/projects/game/home.png',
            '/projects/game/home1.png',
            '/projects/game/library.png',
            '/projects/game/profile.png',
            '/projects/game/game.png',
            '/projects/game/company.png',
        ],
        preview: true,
    },
    {
        title: "Baymax",
        subtitle: "Design",
        description: "Healthcare AI based on Big Hero Six's Baymax. This design is no way affiliated with Disney.",
        cover: "/projects/baymax.png",
        images: [
            '/projects/baymax/baymax.png',
            '/projects/baymax/heart.png',
            '/projects/baymax/information.png',
            '/projects/baymax/search.png',
            '/projects/baymax/doctors.png',
            '/projects/baymax/video.png',
        ],
        preview: true,
    },
    {
        title: "Overwatch League website redesign",
        subtitle: "Design",
        description: "A redesign of the Overwatch League website. This design is no way affiliated with Overwatch.",
        cover: "/projects/overwatch.png",
        images: [
            '/projects/ow/ow1.png',
            '/projects/ow/ow2.png',
            '/projects/ow/ow3.png',
            '/projects/ow/ow4.png',
            '/projects/ow/full.png',
        ],
        preview: true,
    }
]; 