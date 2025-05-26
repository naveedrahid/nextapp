const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

export const connectionStr = `mongodb+srv://${username}:${password}@cluster0.8c0zb3x.mongodb.net/nextAppDb?retryWrites=true&w=majority&appName=Cluster0`;
