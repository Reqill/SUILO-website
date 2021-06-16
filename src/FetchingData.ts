export const fetchJSON = async (URL: string) => {
    const res = await fetch(URL);
    return await res.json();
}

