import { useState } from 'react'

function Contador() {
    const [contagem, setContagem] = useState(0)  
    function aumentaContador () {
        setContagem(contagem + 1)
    }
    return (
        <div>
            <div>
                {contagem}
            </div>
            <button onClick={aumentaContador}>Aumentar contador</button>
        </div>
    )
}

export default Contador