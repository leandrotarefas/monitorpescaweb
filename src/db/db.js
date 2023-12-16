import { connect } from 'mongoose';

async function connectDB() {
    const username = 'admin';
    const password = 'senha';
    const mongoDBUri = `mongodb://${username}:${password}@localhost:27017/brapistock?authSource=admin`;

    try {
        await connect(mongoDBUri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Conectado ao MongoDB com sucesso!');
    } catch (error) {
        console.error('Erro de conexão com MongoDB:', error);
        throw error;
    }
}

export default connectDB;
