export const getDateTime = () => new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') 
