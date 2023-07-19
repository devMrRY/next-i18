let langConfig = {
    "en-US": {
        name: "this is name",
        description: "this is some description"
    },
    "fr": {
        name: "c'est le nom",
        description: "ceci est une description"
    },
}

export const getLocale = (lang) => {
    return langConfig[lang];
}