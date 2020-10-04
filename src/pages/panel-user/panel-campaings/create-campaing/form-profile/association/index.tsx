import React from 'react'
import {useForm} from 'react-hook-form'
import {Row, Col} from 'react-styled-flexboxgrid'
import {ContentProfile,
        Input, 
        WrapperBox,
        Span,
        ErrorInput,
        TextArea,
        InfoText,
        SaveProfile,
        SpanAssiaction,
        SelectInput,
        SpanAE
} from './styles' 

type FormData = {
    association_name: string
    heading: string
    ci_nit: number
    cell_phone: string
    phone: string
    email: string
    country: string
    city: string
    address: string
    neighborhood: string
    neighborhood_number: number
    photo: string
}

const Association: React.FC = ()=>{

    const {register, handleSubmit, errors} = useForm<FormData>({
        mode: 'onChange'
    })

    return(
        <>
        <ContentProfile>
            <form>
            <div>
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>       
                                <InfoText>DATOS DE </InfoText>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                    <SpanAE>* Assiciacion/Empresa: </SpanAE>
                                        <SelectInput ref={register({required: true})} name="country">
                                            <option value="">SELECIONAR</option>
                                            <option value="1">ASOCIACION</option>
                                            <option value="2">EMPRESA</option>
                                        </SelectInput>
                                    </label>
                                    <ErrorInput>{errors.country && 'este campo es requerido'}</ErrorInput>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>       
                                <InfoText>Esta será la información pública que aparecerá en tu perfil del proyecto.</InfoText>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                        <Span>* Nombre de la asociación: </Span>
                                        <Input type="text"
                                               name="association_name"
                                               ref={register({required: true})}/>
                                    </label>
                                    <ErrorInput>{errors.association_name && 'este campo es requerido'}</ErrorInput>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                        <Span>* Numero de NIT: </Span>
                                        <Input type="text"
                                               name="ci_nit"
                                               ref={register({required: true})}/>
                                    </label>
                                    <ErrorInput>{errors.ci_nit && 'este campo es requerido'}</ErrorInput>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                        <Span>* Rubro: </Span>
                                        <Input type="text"
                                               name="heading"
                                               ref={register({required: true})}/>
                                    </label>
                                    <ErrorInput>{errors.heading && 'este campo es requerido'}</ErrorInput>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                        <Span>* Numero de celular: </Span>
                                        <Input type="text"
                                               name="cell_phone"
                                               ref={register({required: true})}/>
                                    </label>
                                    <ErrorInput>{errors.cell_phone && 'este campo es requerido'}</ErrorInput>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>
                    
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                        <Span>* Numero de Telefono: </Span>
                                        <Input type="text"
                                               name="phone"
                                               ref={register({required: true})}/>
                                    </label>
                                    <ErrorInput>{errors.phone && 'este campo es requerido'}</ErrorInput>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                        <SpanAssiaction>* Direccion (calle, avenida): </SpanAssiaction>
                                        <TextArea 
                                               name="address"
                                               ref={register({required: true})}/>
                                    </label>
                                    <ErrorInput>{errors.address && 'este campo es requerido'}</ErrorInput>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                        <Span>* Barrio: </Span>
                                        <TextArea 
                                               name="neighborhood"
                                               ref={register({required: true})}/>
                                    </label>
                                    <ErrorInput>{errors.neighborhood && 'este campo es requerido'}</ErrorInput>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                        <Span>* Numero: </Span>
                                        <Input type="number"
                                               name="neighborhood_number"
                                               ref={register({required: true})}/>
                                    </label>
                                    <ErrorInput>{errors.neighborhood_number && 'este campo es requerido'}</ErrorInput>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>

                </Row>

                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                   <SaveProfile>guardar</SaveProfile>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </div>
            </form>
  
        </ContentProfile>
        </>
    ) 
} 

export default Association
