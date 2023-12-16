import { Paper } from "@mui/material";
import moment from 'moment' 

const QuadroResumo = ({longName, symbol, dateTime}) => {

  const updateAt = moment(dateTime).format('DD/MM/YYYY  h:mm:ss a')

    return (
        <Paper elevation={0} className="w-56 h-28">
          <div className="flex flex-nowrap justify-center items-center p-1">
            <p className="text-sm">{longName}</p>
          </div>
          <div className="flex flex-nowrap justify-center p-1">
            <p className="text-4xl">{symbol}</p>
          </div>
          <div className="flex flex-nowrap justify-center p-1">
            <p className="text-[9px]">{updateAt}</p>
          </div>
        </Paper>       
    )    
}

export default QuadroResumo;