import { Paper } from "@mui/material";

const QuadroLogo = ({logourl}) => {
    return (

        <Paper elevation={0} className="flex flex-nowrap justify-between items-start h-28">
        
            <img src={logourl} width={80} height={80} />
      
        </Paper> 
    )
    
}

 export default QuadroLogo;