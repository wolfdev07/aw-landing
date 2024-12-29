import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Crop, Pencil, Computer, Book, Rocket, Speech, Instagram, Facebook, PhoneCall, MessageCircle, Github } from "lucide-react";

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
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
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
        icon: <Crop />,
        title: "Backend",
        description: "Desarrollo en distintitas arquitecturas, especialista en Microservicios y MVC",
        img: [
            "https://www.python.org/static/community_logos/python-logo-master-v3-TM-flattened.png",
            "https://www.tutofox.com/wp-content/uploads/2023/04/drf-logo2.png",
            "https://media.licdn.com/dms/image/v2/C4E12AQHLrixLtKBLiw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1636571568950?e=2147483647&v=beta&t=PYGAQcP_EAryhqTnojfvgp6nBlClRnoggyAmZCZoYT0"
        ]
    },
    {
        icon: <Pencil />,
        title: "Java",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Angular",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "C++",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
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