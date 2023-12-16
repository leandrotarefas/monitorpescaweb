
import QuadroLogo from '@/components/QuadroLogo';
import QuadroResumo from '@/components/QuadroResumo';
import QuadroHistorico from '@/components/QuadroHistorico';
import QuadroCurrent from '@/components/QuadoPrecoMedio';
import QuadroPrecoMedio from '@/components/Quadro';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="z-10 max-w-full w-full items-center p-0 gap-6 font-mono text-sm lg:flex">

          <QuadroLogo logourl={"https://s3-symbol-logo.tradingview.com/jhsf-part-on-nm--big.svg"}  />

          <QuadroResumo longName={"Tarefas S/A"} symbol={"GIGA3"} />

          <QuadroHistorico title={"Ultimos 3 meses"} maxHighPrice={9.99} maxHighPriceDate={"2023-12-10T00:00:00.000"} hPercent={1.01} hPrice={2.99} hPriceNeeded={3.99} currentPrice={4.99} lPercent={5.99} lPrice={6.99} lPriceNeeded={7.99} maxLowPrice={99.99} maxLowPriceDate={"2023-12-10T00:00:00.000"}/>

          <QuadroHistorico title={"Ultimos 2 meses"} maxHighPrice={9.99} maxHighPriceDate={"2023-12-10T00:00:00.000"} hPercent={1.01} hPrice={2.99} hPriceNeeded={3.99} currentPrice={4.99} lPercent={5.99} lPrice={6.99} lPriceNeeded={7.99} maxLowPrice={99.99} maxLowPriceDate={"2023-12-10T00:00:00.000"}/>

          <QuadroHistorico title={"Ultimo mês"} maxHighPrice={9.99} maxHighPriceDate={"2023-12-10T00:00:00.000"} hPercent={1.01} hPrice={2.99} hPriceNeeded={3.99} currentPrice={4.99} lPercent={5.99} lPrice={6.99} lPriceNeeded={7.99} maxLowPrice={99.99} maxLowPriceDate={"2023-12-10T00:00:00.000"}/>
         
          <QuadroHistorico title={"Ultima semana"} maxHighPrice={9.99} maxHighPriceDate={"2023-12-10T00:00:00.000"} hPercent={1.01} hPrice={2.99} hPriceNeeded={3.99} currentPrice={4.99} lPercent={5.99} lPrice={6.99} lPriceNeeded={7.99} maxLowPrice={99.99} maxLowPriceDate={"2023-12-10T00:00:00.000"}/>

          <QuadroHistorico title={"Ontem"} maxHighPrice={9.99} maxHighPriceDate={"2023-12-10T00:00:00.000"} hPercent={1.01} hPrice={2.99} hPriceNeeded={3.99} currentPrice={4.99} lPercent={5.99} lPrice={6.99} lPriceNeeded={7.99} maxLowPrice={99.99} maxLowPriceDate={"2023-12-10T00:00:00.000"}/>

          <QuadroCurrent title={"Preço Atual"} mainValue={0.01} percentage={10.11} valueNeeded={5.99} />

          <QuadroPrecoMedio title={"Preço Médio"} hPercent={1.01} hPrice={2.99} hPriceNeeded={3.99} currentPrice={4.99} lPercent={5.99} lPrice={6.99} lPriceNeeded={7.99}/>

      </div>
      
    </main>
  )
}


