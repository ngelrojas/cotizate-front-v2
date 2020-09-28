import styled from 'styled-components'
import { MdSearch } from 'react-icons/md'

export const Input = styled.input`
    width: 100%;
    border: 0;
    border-radius: 5%;
`

export const ContentBox = styled.div`
    position: relative;
`
export const SearchIcon = styled(MdSearch)`
    position: absolute;
    right: 0%;
    margin: 1%;
`
