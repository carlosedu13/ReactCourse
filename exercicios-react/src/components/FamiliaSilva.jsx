import React, { Fragment } from 'react'

import Membro from './Membro'

export default props =>
    <Fragment>
        <Membro nome="Pedro" sobrenome="Silva" />
        <Membro nome="Daniela" sobrenome="Silva" />
        <Membro nome="Ana" sobrenome="Silva" />
        <Membro nome="João" sobrenome="Silva" />
    </Fragment>