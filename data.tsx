import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Crop, Pencil, Computer, Book, Rocket, Speech, Instagram, Facebook, PhoneCall, MessageCircle, Github, CodeXml, FileJson2, TerminalSquare, Database, Binary, Newspaper, BrainCircuit, BriefcaseBusiness } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Github size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://mx.linkedin.com/in/arthuro-dev",
    },
    {
        id: 3,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "#!",
    },

    {
        id: 4,
        logo: <Facebook size={30} strokeWidth={1} />,
        src: "#!",
    }
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <Newspaper size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BrainCircuit size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <BriefcaseBusiness size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Contact",
        icon: <PhoneCall size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Senior Backend Developer",
        subtitle: "Telasist",
        imgSrc: "https://images.squarespace-cdn.com/content/6011d06b6b9bf728c97d41c8/1612319897954-W675315063J6NIADSSBF/White-Transparent-1.png?format=1500w&content-type=image%2Fpng",
        description: "Diseño e Implementación de pipelines de CI/CD, gestionar contenedores de Docker con Kubernetes, planificar y desarrollar Aplicaciones escalables.",
        date: "Ene 2024",
    },
    {
        id: 2,
        title: "Full-Stack Developer",
        subtitle: "Rack Dev",
        imgSrc: "https://media.licdn.com/dms/image/v2/C4E0BAQHo4WmqZNa_vg/company-logo_200_200/company-logo_200_200/0/1630620094933?e=2147483647&v=beta&t=0o6MGEdZuW4m-mFXqmsgjszaBaa3lBDoNONAiDcK0DM",
        description: "Desarrollar y desplegar aplicaciones web con Django, Laravel, o Springboot, implementando buenas prácticas de desarrollo y metodología DevOps.",
        date: "Ago 2022",
    },
    {
        id: 3,
        title: "Software Engineer Trainee",
        subtitle: "CitiBanamex",
        imgSrc:"https://www.dafont.com/forum/attach/orig/6/8/688988.png?1",
        description: "Procesamiento de datos con python, limpieza, filtrado y transformación para la toma de desiciones.",
        date: "Jul 2019",
    },
    {
        id: 4,
        title: "Frelance Developer",
        subtitle: "bizcaia",
        imgSrc: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSKAR4JH7SXSw5Mtu1_i2aTBhRHj_b7amNPGOSI01GljB6iwdEm",
        description: "Desarrollo de Landing Pages publicitarias con tecnologías como React, Next JS, Angular.",
        date: "Mar 2018",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 4,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 38,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    }
];

export const serviceData = [
    {
        icon: <TerminalSquare />,
        title: "Backend",
        description: "Me especializo en el Desarrollo Backend, utilizando lenguajes como Python, Java, y Typescript en arquitecturas de Microservicios, MVC y Serverless",
        img: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxb_ziv1Tae54z-Buz6NOwQwKBGE8oJ-KwEQ&s",
            "https://1000marcas.net/wp-content/uploads/2020/11/Java-logo.jpg",
            "https://1000marcas.net/wp-content/uploads/2021/06/Django-Logo.png",
            "https://storage.caktusgroup.com/media/blog-images/drf-logo2.png",
            "https://media.licdn.com/dms/image/v2/C4E12AQHLrixLtKBLiw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1636571568950?e=2147483647&v=beta&t=PYGAQcP_EAryhqTnojfvgp6nBlClRnoggyAmZCZoYT0",
            "https://assets.serverless-extras.com/website/general/social-card-serverless-company.png",
            "https://raw.githubusercontent.com/tankala/learn-pip-trends/main/docs/assets/images/getting-started/django-fastapi-flask/flask.png",
            "https://statics.cdn.200lab.io/2024/11/spring-boot-la-gi.png"
        ]
    },
    {
        icon: <Rocket />,
        title: "DevOps",
        description: "Domino profesionalmente herramientas de Integración y Despliegue Continuo, como Docker, Kubernetes, Jenkins. Así mismo como Soluciones de servicios en la Nube.",
        img: [
            "https://www.cloudadmins.org/content/images/size/w600/2020/08/DockerLogo.png",
            "https://blog.facialix.com/wp-content/uploads/2024/03/git-curso-gratuito.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMZGpjv5tQFQjFkuTvaYk93wP_KrEaVrtubi5PipmdjjRh4nogahR2VbJ051fX6S4RU8k&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgr4GaQ79t_0EzVgnJA2BDkalwpHEoWW5LDQ&s",
            "https://developers.google.com/static/edu/images/logo_cloudx.png?hl=es-419",
            "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSb35b91Iz-4QSQy1taHISSPy1-uMx457v7Tnkli05w4J6o38yP",
            "https://i0.wp.com/davidcanton.net/wp-content/uploads/2024/09/social.png?fit=1024,512&ssl=1",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRk2_lkmclBAlnUf0WF1JVlElU99menp3dpw&s"
        ]
    },
    {
        icon: <CodeXml />,
        title: "Frontend",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario, con frameworks como Angular, o librerías como React.",
        img: [
            "https://cms-assets.tutsplus.com/cdn-cgi/image/width=360/uploads/users/34/posts/26177/preview_image/javascript-wide-retina-preview.png",
            "https://miro.medium.com/v2/resize:fit:1400/0*cy5S4LnOIInTBXed.png",
            "https://logowik.com/content/uploads/images/angular-new6082.logowik.com.webp",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGoEJqEcRvH5wpoQ_aCe54kWDLf68kTvxTmfo47CGUPiuNObM5KOonaieZfoHgeZAhO7o&usqp=CAU",
            "https://i.blogs.es/f5962d/html5/650_1200.webp",
            "https://allvectorlogo.com/img/2016/04/css3-logo.png",
            "https://miro.medium.com/v2/resize:fit:1074/0*bKtPaB7Wx8Mlhlas.png",
            "https://delta-dev-software.fr/wp-content/uploads/2024/02/nodejs.jpg"
        ]
    },
    {
        icon: <Database />,
        title: "Bases de Datos",
        description: "Como desarrollador, trabajo día con dia con diferentes Sistemas de Gestión, SQL y No Sql, principalmente con PostgreSQL, MySQL y MongoDB.",
        img: [
            "https://i.ytimg.com/vi/DfXV4gUetsQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB9rYpko-l_9F73ENO8ROFBQpsWbw",
            "https://www.jesusamieiro.com/wp-content/uploads/2019/10/mysql-logo-1440w.jpg",
            "https://ih1.redbubble.net/image.1912832468.7679/st,small,507x507-pad,600x600,f8f8f8.jpg",
            "https://seekvectorlogo.net/wp-content/uploads/2020/02/mariadb-vector-logo.png",
        ]
    },
    {
        icon: <Binary />,
        title: "Compilación",
        description: "Aunque principalmente uso Lenguajes de Alto nivel interpretados, también domino Lenguajes de Bajo nivel y herramientas de Compilación multiplataforma",
        img: [
            "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/6f/75/dc/6f75dc8f-aa0c-57fb-d2ea-043b536f881c/AppIcon-1x_U007emarketing-0-7-0-0-85-220-0.png/1200x630wa.png",
            "https://qt-wiki-uploads.s3.amazonaws.com/images/thumb/4/4f/Qt-logo-medium.png/300px-Qt-logo-medium.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYeuoFw6cvaWahH7ieyQP69rDXzw_9HWpnrKJQD4t_ktYgoPdO",
            "https://images.seeklogo.com/logo-png/34/1/flutter-logo-png_seeklogo-349577.png?v=1957363170977474520",
        ]
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Serverless Api",
        image: "/aws-serverless.png",
        urlGithub: "https://github.com/wolfdev07/costumer-crud-lambda",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Inmobilandia webApp",
        image: "/inmobilandia-web.png",
        urlGithub: "#!",
        urlDemo: "https://inmobilandia.web.app/",
    },
    {
        id: 3,
        title: "Dashboard webApp",
        image: "/partners.png",
        urlGithub: "#!",
        urlDemo: "https://partners-inmobilandia.web.app/landing",
    },
    {
        id: 4,
        title: "App Clima",
        image: "/app-clima.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "C++ Tetris",
        image: "/tetris-cpp.png",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];