const average = arr => arr?.reduce((a, b) => a + b, 0) / arr?.length;

// Função para converter Unix Timestamp em Data
const convertUnixToDate = unixTimestamp => new Date(unixTimestamp * 1000);

// Função auxiliar para filtrar dados baseados em um intervalo de tempo
const filterDataByDateRange = (historicalData, days) => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - days);
    
    return historicalData?.filter(v => {        
        const date = convertUnixToDate(v.date);     
        return date >= startDate && date <= endDate;
    });
};

// Função para calcular as médias
const calculateAverages = (historicalData, days) => {
    const filteredData = filterDataByDateRange(historicalData, days);  
    const avgHigh = average(filteredData?.map(data => data.high));
    const avgLow = average(filteredData?.map(data => data.low));
    const avgOpen = average(filteredData?.map(data => data.open));
    return { avgHigh : (avgHigh)?.toFixed(2), avgLow : (avgLow)?.toFixed(2), avgOpen : (avgOpen)?.toFixed(2) };
};

// Função para encontrar os valores máximos de low e high junto com suas datas
const getMaxLowHigh = (historicalData, days) => {
    const filteredData = filterDataByDateRange(historicalData, days);

    let maxHigh = { value: 0, date: '' };
    let maxLow = { value: 9999, date: '' };

    filteredData?.forEach(data => {

        if (data.high > maxHigh.value) {
            maxHigh = { value: data.high, date: convertUnixToDate(data.date).toISOString() };
        }
        if (data.low < maxLow.value) {
            maxLow = { value: data.low, date: convertUnixToDate(data.date).toISOString() };
        }
    });

    maxHigh.value = (maxHigh.value)?.toFixed(2);
    maxLow.value = (maxLow.value)?.toFixed(2);

    return { maxHigh, maxLow };
};

const getAverages = (historicalData, days) => {
    return calculateAverages(historicalData, days);
};

// Função para calcular a porcentagem e o valor necessário para alcançar max/min
const calculateToReachMaxMin = (currentValue, maxValue, minValue) => {
    const toMaxValue = {
        percentage: ((maxValue - currentValue) / currentValue) * 100,
        valueNeeded: maxValue - currentValue
    };

    const toMinValue = {
        percentage: ((minValue - currentValue) / currentValue) * 100,
        valueNeeded: minValue - currentValue
    };

    toMaxValue.percentage = (toMaxValue.percentage)?.toFixed(2);
    toMinValue.percentage = (toMinValue.percentage)?.toFixed(2);

    toMaxValue.valueNeeded = (toMaxValue.valueNeeded)?.toFixed(2);
    toMinValue.valueNeeded = (toMinValue.valueNeeded)?.toFixed(2);

    return { toMaxValue, toMinValue };
};

module.exports = { getAverages, getMaxLowHigh, calculateToReachMaxMin };
