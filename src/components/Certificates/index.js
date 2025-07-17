import React from 'react'
import styled from 'styled-components'
import { certificates } from '../../data/constants'
import CertificateCard from '../Cards/CertificateCard'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`

const CertificatesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px; // Reduced gap from 30px
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 0 30px; // Added padding for better spacing on edges
`

const Certificates = () => {
    return (
        <Container id="certificates">
            <Wrapper>
                <Title>Certificates</Title>
                <Desc>
                    My achievements and certifications that showcase my skills and expertise.
                </Desc>
                <CertificatesContainer>
                    {certificates.map((certificate) => (
                        <CertificateCard key={certificate.id} certificate={certificate} />
                    ))}
                </CertificatesContainer>
            </Wrapper>
        </Container>
    )
}

export default Certificates