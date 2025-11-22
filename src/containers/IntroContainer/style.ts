import styled from '@emotion/styled';

export const Container = styled.div`
    min-height: 100vh;
    background-color: #111;
    color: white;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
`;

export const Header = styled.div`
    background: linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(17,17,17,0.95));
    padding: 100px 20px 80px;
    text-align: center;
    border-bottom: 1px solid rgba(255,255,255,0.1);
`;

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    margin: 0;
    letter-spacing: -0.02em;
    
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const TabMenu = styled.div`
    background: #1a1a1a;
    display: flex;
    justify-content: center;
    gap: 0;
    padding: 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    flex-wrap: wrap;
    position: sticky;
    top: 0;
    z-index: 100;
`;

export const Tab = styled.button<{ $active: boolean }>`
    padding: 20px 28px;
    background: transparent;
    color: ${props => props.$active ? 'white' : 'rgba(255,255,255,0.6)'};
    border: none;
    border-bottom: ${props => props.$active ? '2px solid white' : '2px solid transparent'};
    font-size: 15px;
    font-weight: ${props => props.$active ? '600' : '400'};
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        color: white;
        background: rgba(255,255,255,0.05);
    }
`;

export const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 20px;
`;

export const Section = styled.div`
    background: #1a1a1a;
    padding: 60px;
    border-radius: 8px;

    @media (max-width: 768px) {
        padding: 40px 24px;
    }
`;

export const SectionTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 60px;
    letter-spacing: -0.02em;
    
    @media (max-width: 768px) {
        font-size: 2rem;
        margin-bottom: 40px;
    }
`;

// Vision Section
export const VisionBox = styled.div`
    margin-bottom: 80px;
`;

export const VisionHeader = styled.div`
    margin-bottom: 32px;
`;

export const VisionIcon = styled.span`
    display: none;
`;

export const VisionTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    margin: 0 0 8px 0;
    letter-spacing: -0.01em;
`;

export const VisionSubtitle = styled.span`
    font-size: 1rem;
    color: rgba(255,255,255,0.6);
    display: block;
`;

export const VisionText = styled.p`
    font-size: 1rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.8);
    margin-bottom: 32px;
`;

export const VisionList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const VisionItem = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 24px;
    background: rgba(255,255,255,0.05);
    border-radius: 8px;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(255,255,255,0.08);
        transform: translateX(8px);
    }
`;

export const VisionNumber = styled.span`
    font-size: 1.25rem;
    font-weight: 700;
    color: white;
    min-width: 40px;
`;

export const VisionItemText = styled.span`
    font-size: 1rem;
    color: rgba(255,255,255,0.9);
    line-height: 1.6;
`;

// Strategy Section
export const StrategyBox = styled.div`
    margin-top: 80px;
    padding-top: 80px;
    border-top: 1px solid rgba(255,255,255,0.1);
`;

export const StrategyHeader = styled(VisionHeader)``;

export const StrategyText = styled.p`
    font-size: 1rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.8);
    margin-bottom: 24px;
`;

export const StrategyHighlight = styled.p`
    font-size: 1rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.9);
    padding: 24px;
    background: rgba(255,255,255,0.05);
    border-radius: 8px;
    border-left: 3px solid white;
`;

// Greeting Section
export const GreetingBox = styled.div``;

export const GreetingTitle = styled.h3`
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 12px;
    letter-spacing: -0.02em;
`;

export const GreetingSubtitle = styled.p`
    font-size: 1.125rem;
    color: rgba(255,255,255,0.7);
    text-align: center;
    margin-bottom: 60px;
`;

export const GreetingContent = styled.div`
    display: flex;
    gap: 60px;
    align-items: flex-start;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }
`;

export const PastorImage = styled.img`
    width: 280px;
    height: 350px;
    object-fit: cover;
    border-radius: 8px;
    
    @media (max-width: 768px) {
        width: 100%;
        max-width: 280px;
    }
`;

export const GreetingText = styled.div`
    flex: 1;
    
    p {
        font-size: 1rem;
        line-height: 1.9;
        color: rgba(255,255,255,0.8);
        margin-bottom: 20px;
    }
`;

export const PastorSignature = styled.div`
    text-align: right;
    margin-top: 40px;
`;

export const PastorName = styled.p`
    font-size: 0.9rem;
    color: rgba(255,255,255,0.6);
    margin-bottom: 8px;
`;

export const SignatureImage = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
`;

// Staff Section
export const StaffTabs = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 50px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    padding-bottom: 0;
`;

export const StaffTab = styled.button<{ $active: boolean }>`
    padding: 16px 32px;
    background: transparent;
    color: ${props => props.$active ? 'white' : 'rgba(255,255,255,0.6)'};
    border: none;
    border-bottom: ${props => props.$active ? '2px solid white' : '2px solid transparent'};
    margin-bottom: -1px;
    font-size: 1rem;
    font-weight: ${props => props.$active ? '600' : '400'};
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        color: white;
    }
`;

export const StaffGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 40px;
    margin-bottom: 80px;
`;

export const StaffCard = styled.div`
    text-align: center;
    padding: 40px;
    background: rgba(255,255,255,0.05);
    border-radius: 8px;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(255,255,255,0.08);
        transform: translateY(-4px);
    }
`;

export const StaffPhoto = styled.img`
    width: 140px;
    height: 140px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 24px;
    border: 3px solid rgba(255,255,255,0.1);
`;

export const StaffName = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 24px;
    letter-spacing: -0.01em;
`;

export const StaffInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const StaffRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 14px;
    background: rgba(255,255,255,0.03);
    border-radius: 6px;
`;

export const StaffLabel = styled.span`
    font-size: 0.875rem;
    color: rgba(255,255,255,0.5);
    font-weight: 600;
`;

export const StaffValue = styled.span`
    font-size: 0.875rem;
    color: rgba(255,255,255,0.9);
`;

// Elder Section
export const ElderSection = styled.div`
    margin-top: 80px;
    padding-top: 80px;
    border-top: 1px solid rgba(255,255,255,0.1);
`;

export const ElderTitle = styled.h3`
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 40px;
    letter-spacing: -0.01em;
`;

export const ElderGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 32px;
`;

export const ElderCard = styled.div`
    text-align: center;
    padding: 32px;
    background: rgba(255,255,255,0.05);
    border-radius: 8px;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(255,255,255,0.08);
        transform: translateY(-4px);
    }
`;

export const ElderPhoto = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
    border: 2px solid rgba(255,255,255,0.1);
`;

export const ElderName = styled.p`
    font-size: 1.125rem;
    font-weight: 600;
`;

// Registration Section
export const RegistrationBox = styled.div``;

export const RegistrationTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 50px;
    color: rgba(255,255,255,0.9);
`;

export const RegistrationSection = styled.div`
    margin-bottom: 50px;
`;

export const RegistrationSubtitle = styled.h4`
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 20px;
`;

export const RegistrationList = styled.ul`
    list-style: none;
    padding: 0;
    
    li {
        font-size: 1rem;
        line-height: 1.8;
        color: rgba(255,255,255,0.8);
        margin-bottom: 16px;
        padding-left: 24px;
        position: relative;

        &::before {
            content: '•';
            position: absolute;
            left: 0;
            color: white;
        }
    }
`;

export const RegistrationOrderedList = styled.ol`
    padding-left: 24px;
    
    li {
        font-size: 1rem;
        line-height: 1.8;
        color: rgba(255,255,255,0.8);
        margin-bottom: 14px;
    }
`;

// Ministry & History
export const MinistryContent = styled.div`
    font-size: 1rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.8);
`;

export const HistoryContent = styled.div`
    font-size: 1rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.8);
`;
