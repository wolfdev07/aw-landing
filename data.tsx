import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Crop, Pencil, Computer, Book, Rocket, Speech, Instagram, Facebook, PhoneCall, MessageCircle, Github, CodeXml, FileJson2, TerminalSquare, Database, Binary, Newspaper, BrainCircuit, BriefcaseBusiness } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/wolfdev07",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://mx.linkedin.com/in/arthuro-dev",
    },
    {
        id: 3,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/arturo.victoria/profilecard/?igsh=Y3pxeTl4dnRwMnM0",
    },

    {
        id: 4,
        logo: <Facebook size={30} strokeWidth={1} />,
        src: "https://www.facebook.com/ArthurWolfDev/",
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
        link: "https://wa.me/5216871348593",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Senior Backend Developer",
        subtitle: "Telasist",
        imgSrc: "/telasist-logo.png",
        description: "Diseño e Implementación de pipelines de CI/CD, gestionar contenedores de Docker con Kubernetes, planificar y desarrollar Aplicaciones escalables.",
        date: "Ene 2024",
    },
    {
        id: 2,
        title: "Full-Stack Developer",
        subtitle: "Rack Dev",
        imgSrc: "/rackdev-logo.jpeg",
        description: "Desarrollar y desplegar aplicaciones web con Django, Laravel, o Springboot, implementando buenas prácticas de desarrollo y metodología DevOps.",
        date: "Ago 2022",
    },
    {
        id: 3,
        title: "Software Engineer Trainee",
        subtitle: "CitiBanamex",
        imgSrc:"/citibanamex-logo.png",
        description: "Procesamiento de datos con python, limpieza, filtrado y transformación para la toma de desiciones.",
        date: "Jul 2019",
    },
    {
        id: 4,
        title: "Frelance Developer",
        subtitle: "bizcaia",
        imgSrc: "/bizcaia-logo.png",
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
            "/python_logo.png",
            "/java_logo.png",
            "/django_logo.png",
            "/drf_logo.png",
            "/fastapi_logo.png",
            "/serverless_logo.png",
            "/flask_logo.png",
            "/springboot_logo.png"
        ]
    },
    {
        icon: <Rocket />,
        title: "DevOps",
        description: "Domino profesionalmente herramientas de Integración y Despliegue Continuo, como Docker, Kubernetes, Jenkins. Así mismo como Soluciones de servicios en la Nube.",
        img: [
            "/docker_logo.png",
            "/git_logo.png",
            "/kubernetes_logo.png",
            "/jenkins_logo.png",
            "/gpc_logo.png",
            "/aws_logo.png",
            "/firebase_logo.png",
            "/redhat_logo.png"
        ]
    },
    {
        icon: <CodeXml />,
        title: "Frontend",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario, con frameworks como Angular, o librerías como React.",
        img: [
            "/js_logo.png",
            "/ts_logo.png",
            "/angular_logo.png",
            "/react_logo.png",
            "/html_logo.png",
            "/css_logo.png",
            "/css_fw_logo.png",
            "/node_logo.png"
        ]
    },
    {
        icon: <Database />,
        title: "Bases de Datos",
        description: "Como desarrollador, trabajo día con dia con diferentes Sistemas de Gestión, SQL y No Sql, principalmente con PostgreSQL, MySQL y MongoDB.",
        img: [
            "/psql_logo.png",
            "/mysql_logo.png",
            "/mongodb_logo.png",
            "/mariadb_logo.png",
        ]
    },
    {
        icon: <Binary />,
        title: "Compilación",
        description: "Aunque principalmente uso Lenguajes de Alto nivel interpretados, también domino Lenguajes de Bajo nivel y herramientas de Compilación multiplataforma",
        img: [
            "/cpp_logo.png",
            "/qt_logo.png",
            "/dart_logo.png",
            "/flutter_logo.png",
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
