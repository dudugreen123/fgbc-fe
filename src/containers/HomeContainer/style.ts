import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #111;
    color: white;
    overflow-x: hidden;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
`;

export const HeroSection = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 600px;
    background-image: url('/bg.jpeg');
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    &::after {
        width: 100%;
        height: 100%;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.7);
    }
`;

export const HeroContent = styled(motion.div)`
    position: relative;
    z-index: 2;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding: 0 20px;
    margin-bottom: 120px;
`;

export const Title = styled.h1`
    font-size: 4rem;
    font-weight: 800;
    margin: 0;
    color: white;
    text-shadow: 0 4px 20px rgba(0,0,0,0.5);
    letter-spacing: -0.03em;
    line-height: 1.1;
    
    @media (max-width: 768px) {
        font-size: 2.2rem;
    }
`;

export const Subtitle = styled.p`
    font-size: 1.25rem;
    font-weight: 500;
    margin: 0;
    color: rgba(255, 255, 255, 0.9);
    max-width: 600px;
    line-height: 1.6;
    text-shadow: 0 2px 10px rgba(0,0,0,0.5);

    @media (max-width: 768px) {
        font-size: 1rem;
        padding: 0 20px;
    }
`;

export const FeatureSection = styled.div`
    position: relative;
    z-index: 10;
    width: 100%;
    background-color: #f8f9fa;
    padding: 100px 24px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 32px;
    justify-content: center;
    max-width: 100%;
    
    @media (min-width: 1200px) {
        padding: 100px calc((100% - 1200px) / 2);
    }

    @media (max-width: 968px) {
        grid-template-columns: 1fr;
        padding: 60px 24px;
    }
`;

export const FeatureCard = styled(motion.div) <{ $bgImage?: string; $isWhite?: boolean }>`
    position: relative;
    height: 360px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => props.$isWhite ? 'white' : '#1a1a1a'};
    background-image: ${props => props.$bgImage ? `url(${props.$bgImage})` : 'none'};
    background-size: cover;
    background-position: center;
    color: ${props => props.$isWhite ? '#111' : 'white'};
    overflow: hidden;
    cursor: pointer;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${props => props.$bgImage ? 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))' : 'none'};
        z-index: 1;
        transition: all 0.4s ease;
    }

    &:hover {
        z-index: 2;
        transform: translateY(-12px);
        box-shadow: 0 30px 60px rgba(0,0,0,0.15);
        
        &::before {
            background: ${props => props.$bgImage ? 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.5))' : 'none'};
            transform: scale(1.05);
        }
    }


    > * {
        position: relative;
        z-index: 2;
    }
`;

export const CardNumber = styled.span`
    font-size: 1rem;
    font-weight: 600;
    opacity: 0.8;
    letter-spacing: 0.05em;
`;

export const CardTitle = styled.h3`
    font-size: 2.2rem;
    font-weight: 800;
    margin: 12px 0 0;
    line-height: 1.1;
    letter-spacing: -0.02em;
`;

export const CardLink = styled.div`
    font-size: 1rem;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border-bottom: 2px solid currentColor;
    padding-bottom: 4px;
    margin-top: auto;
    align-self: flex-start;
    opacity: 0.9;
    transition: opacity 0.2s;

    &:hover {
        opacity: 1;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const YouTubeIconWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 80px;
    color: #FF0000;
    opacity: 0.9;
    z-index: 1;
`;
