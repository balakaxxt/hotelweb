
function App() {
  

  return (
   
<>
<div>
 {/* logo navbar*/}

  <div>
  <div className="container mx-auto px-4 h-24 flex items-center">
    
    <div className="font-black text-bold h-5">
    Paradise Eden <span>By:Dem</span>
    </div>
  {/* Navbar- menu*/}
    <ul className="flex items-center ml-auto space-x-3">
        <li>
        <a href="" className="px-3 text-sm text-gray-600 hover:text-gray-800 hover:underline">Como reservar</a>
        </li>


        <li>
          <a href="" className="px-3 text-sm text-gray-600 hover:text-gray-800 hover:underline"  >Sobre nós</a>
        </li>


        <li>
           <a href=""  className="px-3 text-sm text-gray-600 hover:text-gray-800 hover:underline">Informações</a>
        </li>
        
       <li>
        <a href="" className="px-3 text-sm text-gray-600 hover:text-gray-800 hover:underline" >Contato</a>
       </li> 
       
    </ul>

    </div> 
  </div>
  {/* Navbar- menu*/}



  {/* banner do site */}

  <div className="banner">
      <div className="container mx-auto h-full px-4  flex items-center justify-center">
      {/* div abaixo esta dentro d d cima */}
      <div id="div-conteiner">

      <div className="text-center">
        <h1 className="text-white text-2xl mb-3">Seja bem vindo</h1>
        <h1 className="text-white text-3xl mb-3"> Onde Deseja ir ? </h1>
        <p className="text-green-100">Escolha melhores Hoteis com uma bela vista ao mar.</p>
      </div>

      <div className="mt-8">

        <form className="space-x-4">

          <select className="bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500">
            <option value="" key="">
              Escolha Estado
            </option>
            <option value="" key="">
              Pernambuco
            </option>
           
          </select>

          <select className="bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500">
            <option value="" key="">
              Escolha Cidade
            </option>
            <option value="" key="">
              Recife
            </option>
           
          </select>

          <select className="bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500">
            <option value="" key="">
              Escolha Municipio
            </option>

            <option value="" key="">
              Itamaracá
            </option>

            <option value="" key="">
            Paiva
            </option>
            <option value="" key="">
            Candeias
            </option>

            <option value="" key="">
              Porto de Galinhas
            </option>
          </select>

          <button className=" inline-flex  items-center text-yellow-900 bg-yellow-500 font-medium py-2 px-3 rounded">

          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            Pesquisa hotel</button>

        </form>

      </div>




      </div>
      
      </div>
 





      <div/>





   
  </div>

  {/* banner do site */}


  {/* Main=Conteudo , hoteis*/}
  <div>
    <div className="container mx-auto px-4 py-20">
    
      <div className="flex">

        <div className="pr-10">
          <div className="text-sm text-gray-400  font-medium">Hotel em Destaque</div>

          <div className="text-2xl text-gray-600">Porto de Galinhas</div>

          <div className="text-sm text-gray-400 font-medium mt-2" >Porto</div>

          <div className="text-sm text-gray-400 font-medium mt-4">

            <p className="mb-4">
            Porto de Galinhas é umas praia indescritivelmente linda!
            </p>

            <p>
            Um lugar inesquecivel repleto de praias exoticas.
            Quem vem sempre volta para os encantos desse lindo Município.
            </p>




          <div className="mt-4">
          <a href="" className=" inline-flex  items-center text-yellow-900 bg-yellow-500 font-medium py-2 px-3 rounded">
            Solicitar Reservar 
            
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>

            </a>
          </div>
          
          </div>

          
        </div>

        <div className="flex-shrink-0 ml-auto ">
        <img src="../public/hotelconteudo.jpq"width="364" alt=""/>
         
          
       


        </div>

      </div>



    </div>
  </div>   
  {/* conteudo hoteis*/}

  {/* conteudo abaixo com grip */}

  <div>
  <div className="containr mx-auto px-10 py-2">
    <div className="py-4">
      <h3 className="text-xl text-gray-500 text-center font-semibold">
      Conheça mais hoteis
    </h3>
      <h4 className="text-center mb-10">
        com belas vista ao mar.
      </h4>
      </div>
{/* componetes  inicio gripo */}

      <div className="grid grid-cols-4 grid-rows-2 gap-6">

            <div className="col-span-2 row-span-2 rounded-lg overflow-hidden">

            <div className="relative w-full h-full object-cover fotogrip1">.
            <img src="/src/public/img-shadow1.png" className="absolute bottom-0 left-0 right-0 h-5 z-10"></img>

              {/* nomes na frente da foto */}

              <div className="absolute bottom-0 pl-4 pb-4 text-white font-bold z-20">
              Itamaracá Hotel
                
              </div>
            </div>
              
              
              
            </div>

            <div className="col-span-2 h-30 rounded-lg overflow-hidden">
              <div className=" relative fotogrip2 w-full h-full object-cover z-10">
                 <img src="/src/public/img-shadow1.png" className="absolute bottom-0 left-0 right-0 h-5 z-10"></img>

              {/* nomes na frente da foto */}

              <div className="absolute bottom-0 pl-4 pb-4 text-white font-bold z-20">
                Porto de Galinhas Hotel
                
              </div>
              
              </div>  

              
             
            </div>

            <div className="  rounded-lg overflow-hidden">
            <div className="relative fotogrip3
            w-full h-full object-cover">
              <img src="/src/public/img-shadow1.png" className="absolute bottom-0 left-0 right-0 h-5 z-10"></img>

              {/* nomes na frente da foto */}

              <div className="absolute bottom-0 pl-4 pb-4 text-white font-bold z-20">
                
                Candeias Hotel
                
              </div>

               
            </div>



            </div>

            <div className="rounded-lg overflow-hidden">
              
            <div className="relative fotogrip4 w-full h-full object-cover">
              <img src="/src/public/img-shadow1.png" className="absolute bottom-0 left-0 right-0 h-5 z-10"></img>

              {/* nomes na frente da foto */}

              <div className="absolute bottom-0 pl-4 pb-4 text-white font-bold z-20">
              Paiva Hotel
                
              </div>


            </div>


            </div>

      </div>

  </div>
  </div>

  {/* conteudo abaixo com grip */}


  {/* Footer Seach-Buscador*/}

  <div className="py-20">
  <div className="container mx-auto px-4 flex justify-center">
  <form className="space-x-4">

          <select className="bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500">
            <option value="" key="">
              Escolha Estado
            </option>
            <option value="" key="">
              Pernambuco
            </option>
           
          </select>

          <select className="bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500">
            <option value="" key="">
              Escolha Cidade
            </option>
            <option value="" key="">
              Recife
            </option>
           
          </select>

          <select className="bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500">
            <option value="" key="">
              Escolha Municipio
            </option>

            <option value="" key="">
              Itamaracá
            </option>

            <option value="" key="">
            Paiva
            </option>
            <option value="" key="">
            Candeias
            </option>

            <option value="" key="">
              Porto de Galinhas
            </option>
          </select>

          <button className=" inline-flex  items-center text-yellow-900 bg-yellow-500 font-medium py-2 px-3 rounded">

          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            Pesquisa hotel</button>

        </form>


  </div>
  </div>


  {/* Footer Seach-Buscador */}




  {/* Footer-informaçoes finais - Fish */}

  <div className="border border-gray-200 py-10">
  <div className="container mx=auto px-5 flex items-center justify-between">


  <div className="text=gray=400 font-black">
    Paradise Eden <span>By:Dem</span>

    </div>

    {/* REDE SOCIAL - links - icones */}
    <div className="flex items-center space-x-4">
      
   
    <a href="">
      <img src="/src/public/facebook.jpg" height="20x" width="30%"></img>
    </a>

    
    <a href="">
      <img src="/src/public/instagram.jpg" height="20x" width="30%"></img>
    </a>

    <a href="">
      <img src="/src/public/whats-icone.jpg" height="20x" width="30%"></img>
    </a>

    
    </div>




  </div>




  </div>
  {/* Footer informaçoes finais - end bye */}
  
  </div>
</>

    
  )
}

export default App
