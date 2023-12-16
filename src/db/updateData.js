import StockModel from '@/db/StockModel';

async function updateDataFromAPI() {
    try {
        const randomValue = Math.random();
        await StockModel.updateOne({ _id: "GIGA" }, { data: { value: randomValue } }, { upsert: true });
        console.log('Dados atualizados com sucesso.');
    } catch (error) {
        console.error('Erro ao atualizar os dados:', error);
    }
}

export default updateDataFromAPI;
