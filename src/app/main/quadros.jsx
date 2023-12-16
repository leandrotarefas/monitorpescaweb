import Averages from "@/services/average";

import QuadroLogo from "@/components/QuadroLogo";
import QuadroResumo from "@/components/QuadroResumo";

import Quadro from "@/components/Quadro";
import QuadoPrecoMedio from "@/components/QuadoPrecoMedio";
import QuadroHistorico from "@/components/QuadroHistorico";
import SetMealIcon from "@mui/icons-material/SetMeal";
import PhishingIcon from "@mui/icons-material/Phishing";

function buildStockLineData(
  {
    updatedAt,
    logourl,
    symbol,
    longName,
    regularMarketPrice,
    regularMarketDayHigh,
    regularMarketDayLow,
    historicalDataPrice,
  },
  periods
) {
  //media de dados de hoje
  const dadosAtuais = Averages.calculateToReachMaxMin(
    regularMarketPrice,
    regularMarketDayHigh,
    regularMarketDayLow
  );

  //media de dados de ontem
  const ontem = historicalDataPrice[historicalDataPrice.length - 2];
  const dadosDeOntem = Averages.calculateToReachMaxMin(
    ontem.close,
    ontem.high,
    ontem.low
  );

  //media semana : 6 dias
  const dadosDeUmaSemana = Averages.getAverages(historicalDataPrice, 6);
  const mediaAtualDeUmaSemana = Averages.calculateToReachMaxMin(
    regularMarketPrice,
    dadosDeUmaSemana.avgOpen,
    dadosDeUmaSemana.avgOpen
  );

  //media historica com base em quantidade de dias  : QTD_DIAS
  const historico = [];

  for (const period of periods) {
    const dadosHistoricos = Averages.getAverages(historicalDataPrice, period);
    const mediaDadosHistoricos = Averages.calculateToReachMaxMin(
      dadosHistoricos.avgOpen,
      dadosHistoricos.avgHigh,
      dadosHistoricos.avgLow
    );

    const maiorAltaBaixaDoHistorico = Averages.getMaxLowHigh(
      historicalDataPrice,
      period
    );

    historico.push({
      periodo: period,
      dadosHistoricos,
      mediaDadosHistoricos,
      maiorAltaBaixaDoHistorico,
    });
  }

  return (
    <>
      <QuadroLogo logourl={logourl} />

      <QuadroResumo longName={longName} symbol={symbol} dateTime={updatedAt} />

      {historico.map((item, index) => (
        <QuadroHistorico
          key={index}
          title={`Média ${item.periodo} dias`}
          maxHighPrice={item.maiorAltaBaixaDoHistorico.maxHigh.value}
          maxHighPriceDate={item.maiorAltaBaixaDoHistorico.maxHigh.date}
          hPercent={item.mediaDadosHistoricos.toMaxValue.percentage}
          hPrice={item.dadosHistoricos.avgHigh}
          hPriceNeeded={item.mediaDadosHistoricos.toMaxValue.valueNeeded}
          currentPrice={item.dadosHistoricos.avgOpen}
          lPercent={item.mediaDadosHistoricos.toMinValue.percentage}
          lPrice={item.dadosHistoricos.avgLow}
          lPriceNeeded={item.mediaDadosHistoricos.toMinValue.valueNeeded}
          maxLowPrice={item.maiorAltaBaixaDoHistorico.maxLow.value}
          maxLowPriceDate={item.maiorAltaBaixaDoHistorico.maxLow.date}
        />
      ))}

      {/* queda de 2% ou mais comparado ao preco atual 'flag'*/}
      <Quadro
        title={"Preço Anterior"}
        hPercent={dadosDeOntem.toMaxValue.percentage}
        hPrice={ontem.high}
        hPriceNeeded={dadosDeOntem.toMaxValue.valueNeeded}
        currentPrice={ontem.close}
        lPercent={dadosDeOntem.toMinValue.percentage}
        lPrice={ontem.low}
        lPriceNeeded={dadosDeOntem.toMinValue.valueNeeded}
        percentVar={
          ((regularMarketPrice - ontem.close) / regularMarketPrice) * 100
        }
        flag={
          ((regularMarketPrice - ontem.close) / regularMarketPrice) * 100 <= -2.0
        }
        Ricon={SetMealIcon}
        showricon={regularMarketPrice < dadosDeUmaSemana.avgOpen}  
      />

      {/* preço atual menor que a media da semana ativa a 'flag'*/}
      <Quadro
        title={"Preço de Atual"}
        hPercent={dadosAtuais.toMaxValue.percentage}
        hPrice={regularMarketDayHigh}
        hPriceNeeded={dadosAtuais.toMaxValue.valueNeeded}
        currentPrice={regularMarketPrice}
        lPercent={dadosAtuais.toMinValue.percentage}
        lPrice={regularMarketDayLow}
        lPriceNeeded={dadosAtuais.toMinValue.valueNeeded}
        flag={regularMarketPrice < dadosDeUmaSemana.avgOpen}
        Licon={PhishingIcon}
        showlicon={regularMarketPrice < dadosDeUmaSemana.avgOpen}
      />

      <QuadoPrecoMedio
        title={"Preço Médio"}
        mainValue={dadosDeUmaSemana.avgOpen}
        percentage={mediaAtualDeUmaSemana.toMaxValue.percentage}
        valueNeeded={mediaAtualDeUmaSemana.toMaxValue.valueNeeded}
      />
    </>
  );
}

export default function StockLine({ params, periods }) {
  return buildStockLineData(params, periods);
}
