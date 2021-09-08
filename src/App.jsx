import React from 'react';
import './App.css'

import Card from './components/layout/Card'
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Repeticao from './components/Repeticao';

export default (props) => (
    <div className="App">
        <Card titulo='Primeiro Componente'>
            <Primeiro />
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
        <Card titulo='Repetição'>
            <Repeticao></Repeticao>
        </Card>
    </div>
)
