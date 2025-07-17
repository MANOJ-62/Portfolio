import React, { useState } from 'react'
import styled from 'styled-components'

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`

const ModalContent = styled.div`
    position: relative;
    max-width: 90%;
    max-height: 90vh;
`

const ModalImage = styled.img`
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
`

const CloseButton = styled.button`
    position: absolute;
    top: -40px;
    right: 0;
    background: transparent;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    padding: 8px;
    
    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`

const Card = styled.div`
    width: 330px;
    border-radius: 10px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }
    border: 0.1px solid #854CE6;
`

const CertificateImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 8px;
    cursor: pointer;
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.02);
    }
`

// ... existing Modal, ModalContent, ModalImage, CloseButton, Card, CertificateImage components ...

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Organization = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

// ... your other styled components ...

const CertificateCard = ({ certificate }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <Card>
                <CertificateImage 
                    src={certificate.image} 
                    alt={certificate.title}
                    onClick={openModal}
                />
                <Title>{certificate.title}</Title>
                <Organization>{certificate.organization}</Organization>
                <Date>{certificate.date}</Date>
            </Card>

            {isModalOpen && (
                <Modal onClick={closeModal}>
                    <ModalContent onClick={e => e.stopPropagation()}>
                        <CloseButton onClick={closeModal}>×</CloseButton>
                        <ModalImage 
                            src={certificate.image} 
                            alt={certificate.title} 
                        />
                    </ModalContent>
                </Modal>
            )}
        </>
    )
}

export default CertificateCard