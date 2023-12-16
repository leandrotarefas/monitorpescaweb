import ClientComponent from './cliente'

export default function Page( request ) {

  const { 
   acoes,
  }  = request.searchParams;
  
  return (
    <ClientComponent acoes={acoes}/>
  )
}