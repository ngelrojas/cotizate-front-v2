import React from 'react'
import {Input, ContentBox, SearchIcon} from './styles'


const SearchingBox = () =>{
    return(
        <ContentBox>
            <form action="">
                <Input type="search" placeholder="Buscar" name="search-box" />
                <SearchIcon />
            </form>
        </ContentBox>
    )
}

export default SearchingBox
