import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-styled-flexboxgrid'

export const Content = styled.main`
    height: auto;
    min-height: 100%;
    padding: 3em 1em 4em 1em;
    box-sizing: border-box;
`

export const RowCP = styled(Row)`
    justify-content: center;
`

export const ColCP = styled(Col)`
    text-align: center;
`

export const GoE = styled(Link)`
    text-decoration: none;
    color: #2A8EC8;
`

export const GoC = styled(Link)`
    text-decoration: none;
    color: #F4A14C;
`

export const RecEmp = styled.div`
    border: 1px solid #2A8EC8;
    border-radius: 1%;
    margin-top: 15%;
`

export const RecCausa = styled.div`
    border: 1px solid #F4A14C;
    border-radius: 1%;
    margin-top: 15%;
`

export const DivEmp = styled.div`
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 10.5%;
    text-align: left;
    line-height: 30px;
`

export const DivCausa = styled(DivEmp)`
    margin-bottom: 5%;
`
export const H2 = styled.h2`
    margin-top: 5%;
`

export const Words = styled.p`
    color: #828282;
`
