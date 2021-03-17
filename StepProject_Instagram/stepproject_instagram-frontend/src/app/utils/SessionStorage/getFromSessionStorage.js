const getFromSessionStorage = (key, init) => {
    return JSON.parse(sessionStorage.getItem(key)) || init
};

export default getFromSessionStorage;