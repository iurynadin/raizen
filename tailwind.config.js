module.exports = {
    content: ["./pages/*.{html,js}"],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
            },
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1020px',
            'xl': '1214px',
            '2xl': '1536px',
        },
        extend: {
            colors: {
                amarelo: "#FDB515",
                cinza2: "#F4F4F4",
                cinza1: "#D6D6D6",
                cinza0: "#6E6E6E",
                cinzatxt: "#58595B",
                cyan: "#05C3DE",
                verde1: "#6FAC46",
                verde2: "#B4CD00",
                laranja: "#F57920",
                rosa: "#EA368E",
                roxo: "#781E77",
            },
            fontFamily: {
                din: ["DIN-regular"],
                din_ultralight: ["DIN-ultralight"],
                din_light: ["DIN-light"],
                din_medium: ["DIN-medium"],
                din_bold: ["DIN-bold"],
            },
            width: {
                contentsec_xl: "calc(100% - 240px)",
                secondary_xs: "calc(100% - 8px)",
                secondary_md: "calc(100% - 20px)",
            },
            height: {
                hexagdestaque: "calc(100vh + 60px)",
            },
            translate: {
                secondaryout: "calc((100vh + 500px) * -1)",
            },
            boxShadow: {
            },
            aspectRatio: {
                ratiodestaque: "163 / 115",
                mapa: "160 / 93",
            },
            backgroundImage: {
                heromobile: "url('../imgs/bg-hero-mobile.jpg')",
                herovideo: "url('../video/herovideo.jpg')",
                moviefilter: "url('../svgs/movie-filter.svg')",
                destaquesafra: "url('../imgs/bg-destaquesafra.jpg')",
                hexagcontent: "url('../svgs/hexag-safracontent.svg')",
                mensagem: "url('../imgs/bg-mensagem.jpg')",
                maparoxo: "url('../imgs/mapa-roxo.jpg')",
                modelounico: "url('../imgs/bg-modelounico.jpg')",
                modelounicomobile: "url('../imgs/bg-munico-mobile.jpg')",
                tarjacontrole: "url('../imgs/bg-tarjacontrole.jpg')",
                proposta: "url('../svgs/bg-proposta.svg')",
                propostaMobile: "url('../svgs/proposta-mobile.svg')",
                hexagono1: "url('../svgs/hexagono-01-mobile.svg')",
            },
            boxShadow: {
            },
        },
    },
    plugins: [],
};
