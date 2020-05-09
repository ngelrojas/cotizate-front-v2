import styled from 'styled-components'

export const Section = styled.section`
    width: 25%;
    padding: 1%;
`

export const Title = styled.h3`
    text-align: justify;
    margin-top: 16%;
    color: #3b3b3b;
    margin-bottom: 5%;
`
export const Excerpt = styled.div`
    margin: 1%;
    > p {
        text-align: justify;
    }
`

export const Foot = styled.div`
    margin: 4%;
`

export const Btn = styled.button`
    padding: 2%;
    background-color: #007bff;
    color: #ffffff;
    border: 0;
    width: 100%;
    border-radius: 2px;
    &:hover {
        cursor: pointer;
    }
`

export const Wrap = styled.div`
    width: 100%;
    margin-top: 6%;
    margin-bottom: 6%;
    position: relative;
`
export const Bar = styled.div`
    margin-right: 2%;
    margin-left: 2%;
    height: 10px;
    background-color: #f37a22;
`
export const Mpoint = styled.span`
    float: right;
    border-radius: 5%;
    background-color: #ddd;
    padding: 1px;
    color: #1e78f9;
    position: absolute;
    top: 0;
    right: 4%;
    font-size: 15px;
`

export const Picture = styled.picture`
    text-align: center;
    margin: 2%;
    > img {
        text-align: center;
    }
`

export const Place = styled.span`
    float: left;
    color: #1e78f9;
    margin: 4%;
`

export const Author = styled.span`
    float: right;
    color: #1e78f9;
    margin: 4%;
`
