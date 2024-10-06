import {v4 as uuid} from 'uuid'
import './App.css'



function App() {
  return (
    <>
      <script
        //diseño
        data-bold-button
        //Key
        data-api-key={import.meta.env.VITE_BOLD_API_KEY}

        //URL's
        // data-redirection-url="https://blowbarber.web.app/login"

        //Descripcion del pago
        data-description="Pago de prueba"

        //Datos del pago
        data-order-id={uuid()}
        data-currency="COP"
        // data-customer-data={JSON.stringify(user_data_payment)}
      ></script>
    </>
  )
}

export default App
