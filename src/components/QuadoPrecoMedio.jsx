import { Paper } from "@mui/material";

const QuadoPrecoMedio = ({ title, mainValue, percentage, valueNeeded }) => {
  return (
    <Paper elevation={3} className="w-56 h-36">
      <div className="flex flex-nowrap justify-between p-1 bg-black text-white">
        <p className="text-lg">{title}</p>
      </div>

      <div className="flex flex-nowrap justify-center p-1 pt-1 pb-1">
        <p className="text-3xl">{mainValue}</p>
      </div>

      <div className="flex flex-nowrap justify-between" data-to>
        <p className="text-sm">{percentage}%</p>
        <p className="text-sm">{valueNeeded}</p>
      </div>
    </Paper>
  );
};

export default QuadoPrecoMedio;