import { Paper } from "@mui/material";
import Divider from "@mui/material/Divider";

const Quadro = ({
  title,
  hPercent,
  hPrice,
  hPriceNeeded,
  currentPrice,
  lPercent,
  lPrice,
  lPriceNeeded,
  flag = false,
  percentVar,
  Licon,
  Ricon,
  showlicon,
  showricon,
}) => {
  return (
    <Paper elevation={5} className="w-56 h-48">
      <div>
        <div className="flex flex-nowrap justify-center p-1">
          <p className="text-[14px] ">{title}</p>
        </div>

        <Divider />

        <div className="flex flex-nowrap justify-between p-1 bg-orange-200">
          <p className="text-[12px]">{hPercent}%</p>
          <p className="text-[12px]">{hPrice.toFixed(2)}</p>
          <p className="text-[12px]">{hPriceNeeded}</p>
        </div>

        <Divider />

        <div className={ `flex flex-nowrap justify-between p-1 pt-3 pb-3 ${flag ? 'bg-green-300' : 'bg-white'}`}>
          {showlicon ? <Licon /> : <p className="text-xl">-</p>}
          <p className='text-xl'>{currentPrice.toFixed(2)}</p>
          {showricon ? <Ricon /> : <p className="text-xl">-</p>}
        </div>

        <Divider />

        <div className="flex flex-nowrap justify-between p-1 bg-orange-200">
          <p className="text-[12px]">{lPercent}%</p>
          <p className="text-[12px]">{lPrice.toFixed(2)}</p>
          <p className="text-[12px]">{lPriceNeeded}</p>
        </div>

        <Divider />

        {percentVar && (
          <div className="flex flex-nowrap justify-between p-1">
            <p className="text-[12px]">Variação</p>
            <p className="text-[16px] font-bold">{percentVar.toFixed(2)}%</p>
          </div>
        )}
      </div>
    </Paper>
  );
};

export default Quadro;
