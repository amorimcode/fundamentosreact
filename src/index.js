import React from "react";
import ReactDOM from "react-dom"

import './index.css'
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'


ReactDOM.render(
    <div>
        <Card titulo='Primeiro Componente'>
            <Primeiro/>
        </Card>
        <Card titulo='Componente Com Filhos'>
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo='Componente Com Parametro'>
            <ComParametro titulo='Esse é o título'
                subtitulo='Esse é o subtitulo' />
        </Card>
        <Card titulo='Primeiro Componente'>
            <Primeiro />
        </Card>
    </div>,

    document.getElementById('root')
)