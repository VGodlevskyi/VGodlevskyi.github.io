const putToSessionStorage = (key, value) => {
    value && sessionStorage.setItem(key, JSON.stringify(value))
};

export default putToSessionStorage;