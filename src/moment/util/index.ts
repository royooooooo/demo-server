export const generateID = () => Math.floor(10000000000 + Math.random() * 90000000000).toString();

export const generateCreateDate = () => new Date().toDateString();