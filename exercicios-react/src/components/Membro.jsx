import React, { Fragment } from 'react'

export default props => 
    <Fragment>
        {props.nome}
        <strong> {props.sobrenome}</strong>
    </Fragment>