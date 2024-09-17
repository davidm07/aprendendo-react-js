
function CapsLock(props) {
    const textoRecebido = props.children
    const textoAumentado = textoRecebido.toUpperCase()
    return (
        <div>
            {textoAumentado}
        </div>
    )
}

export default CapsLock