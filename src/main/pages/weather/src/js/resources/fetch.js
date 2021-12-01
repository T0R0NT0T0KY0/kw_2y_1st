export const fetchGet = async (url) => {
    console.log({ url }); //todo delete
    return await fetch(url)
        .then((r) => {
            console.log({ r });
            return r.json();
        })
        .then((r) => [null, r])
        .catch(e => [e, null]);
};

export default { fetchGet };
