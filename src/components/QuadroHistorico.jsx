import { Paper } from "@mui/material";
import Divider from "@mui/material/Divider";

const QuadroHistorico = ({   title,  maxHighPrice,  maxHighPriceDate,  hPercent,  hPrice,  hPriceNeeded,  currentPrice,  lPercent,  lPrice,  lPriceNeeded,  maxLowPrice,  maxLowPriceDate }) => {

  return (
 
    <Paper className="w-56 h-62">

      <div className="flex flex-nowrap justify-center p-1">
        <p className="text-[14px] ">
          {title}
        </p>
      </div>

      <Divider />

      <div className="flex flex-nowrap justify-between p-1 bg-slate-200 ">
        <p className="text-[12px]">+</p>
        <p className="text-[12px]">
          {maxHighPrice}
        </p>
        <p className="text-[12px]">
          {maxHighPriceDate?.substr(0, 10)}
        </p>
      </div>

      <Divider />

      <div className="flex flex-nowrap justify-between p-1 bg-slate-100">
        <p className="text-[12px]">
          {hPercent}%
        </p>
        <p className="text-[12px]">{hPrice}</p>
        <p className="text-[12px]">
          {hPriceNeeded}
        </p>
      </div>

      <Divider />

      <div className="flex flex-nowrap justify-between p-1 pt-3 pb-3">
        <p className="text-sm">-</p>
        <p className="text-xl">{currentPrice}</p>
        <p className="text-sm">-</p>
      </div>

      <Divider />

      <div className="flex flex-nowrap justify-between p-1 bg-slate-100">
        <p className="text-[12px]">
          {lPercent}%
        </p>
        <p className="text-[12px]">{lPrice}</p>
        <p className="text-[12px]">
          {lPriceNeeded}
        </p>
      </div>

      <Divider />

      <div className="flex flex-nowrap justify-between p-1 bg-slate-200">
        <p className="text-[12px]">-</p>
        <p className="text-[12px]">
          {maxLowPrice}
        </p>
        <p className="text-[12px]">
          {maxLowPriceDate?.substr(0, 10)}
        </p>
      </div>
    </Paper>   
  );
};

export default QuadroHistorico;