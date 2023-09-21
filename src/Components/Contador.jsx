import './contador.css'
import { useCounter } from '../hooks/useCounter'

export const ContadorApp = () => {

    // desestructuramos useCounter 
    const { contador, incrementar, resetear, decrementar } = useCounter();

    return (
        <>
            <div className="center">
                <div className='center2'>
                    <h2>Contador: {contador}</h2>
                    {/* aplicamos las funciones que traemos de useCounter */}
                    {/* el css viene de bootstrap y un poco del archivo creado */}
                    <button className="btn btn-primary" onClick={() => incrementar()}>+1</button>
                    <button className="btn btn-danger" onClick={() => resetear()}>reset</button>
                    <button className="btn btn-primary" onClick={() => decrementar(1, false)}>-1</button>
                </div>
            </div>
        </>
    )
}
