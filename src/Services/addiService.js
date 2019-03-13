export const getUserScore =  (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ score: Math.floor(Math.random() * (+100 - +0)) });
        }, 1000);
    });
};
