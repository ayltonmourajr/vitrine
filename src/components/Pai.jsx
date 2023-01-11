import React from "react";
import Filho from './Filho'

export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/*<Filho nome="Pedro" sobrenome={props.sobrenome} /> */}
            {/*<Filho {...props} /> {/*recebe os parâmetros do pai*/}
            {/*<Filho {...props} nome="Carla" /> {/*recebe os parâmentors do pai, porém o nome é sobrescrito, pois vem depois das ...props*/}

            {
                React.Children.map(props.children, child  => {
                    return React.cloneElement(child,{
                        ...props, ...child.props
                    })
                })
            }
        </ul>
    </div>
