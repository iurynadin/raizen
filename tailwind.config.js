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
            'lg': '960px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {
            colors: {
                amarelo: "#FDB515",
                cinza2: "#F4F4F4",
                cinza1: "##D6D6D6",
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
                contentsec_lg: "calc(100% - 240px)"
            },
            boxShadow: {
            },
            aspectRatio: {
            },
            backgroundImage: {
                herovideo: "url('../video/herovideo.jpg')",
                moviefilter: "url('../svgs/movie-filter.svg')",
            },
            boxShadow: {
            },
        },
    },
    plugins: [],
};
