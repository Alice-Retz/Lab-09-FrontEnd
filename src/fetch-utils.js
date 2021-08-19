const URL = 'https://floating-tundra-37035.herokuapp.com/';

export const getAnimals = async () => {
    const resp = await fetch(`${URL}animals`);
    const data = await resp.json();
    console.log(data);
    return data;
};

export const getAnimal = async(id) => {
    const resp = await fetch(`${URL}animals/${id}`);
    const data = await resp.json();
    return data;
};

export const getBuildings = async () => {
    const resp = await fetch(`${URL}buildings`);
    const data = await resp.json();
    return data;
};

export const updateAnimal = async (animalObject) => {
    const resp = await fetch(`${URL}animals/${animalObject.id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(animalObject),
    });
    const data = await resp.json();
    return data;
};

export const createAnimal = async (animalObject) => {
    const resp = await fetch(`${URL}animals/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(animalObject),
    });
    const data = await resp.json();
    return data;
};