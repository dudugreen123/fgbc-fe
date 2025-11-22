'use client';

import * as S from './style';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaYoutube } from 'react-icons/fa';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function HomeContainer() {
    return (
        <S.Wrapper>
            <S.HeroSection>
                <S.HeroContent initial="initial" animate="animate" variants={staggerContainer}>
                    <motion.div variants={fadeInUp}>
                        <S.Title>
                            순복음범천교회에<br />
                            오신 것을 환영합니다!
                        </S.Title>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                        <S.Subtitle>
                            행복한 교회, 행복한 성도!<br />
                            하나님의 사랑과 은혜가 넘치는 행복한 신앙 공동체입니다.
                        </S.Subtitle>
                    </motion.div>
                </S.HeroContent>
            </S.HeroSection>

            <S.FeatureSection>
                <Link href="/intro" style={{ display: 'contents' }}>
                    <S.FeatureCard
                        $bgImage="/pastor_profile.jpg"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <S.ContentWrapper>
                            <S.CardNumber>01</S.CardNumber>
                            <S.CardTitle>교회 소개</S.CardTitle>
                        </S.ContentWrapper>
                        <S.CardLink>장소 및 예배 안내 보기</S.CardLink>
                    </S.FeatureCard>
                </Link>

                <Link href="https://www.youtube.com/@%EC%88%9C%EB%B3%B5%EC%9D%8C%EB%B2%94%EC%B2%9C%EA%B5%90%ED%9A%8C" target="_blank" style={{ display: 'contents' }}>
                    <S.FeatureCard
                        $isWhite={true}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <S.ContentWrapper>
                            <S.CardNumber>02</S.CardNumber>
                            <S.CardTitle>유튜브 채널</S.CardTitle>
                        </S.ContentWrapper>
                        <S.YouTubeIconWrapper>
                            <FaYoutube />
                        </S.YouTubeIconWrapper>
                        <S.CardLink>유튜브 채널로 이동</S.CardLink>
                    </S.FeatureCard>
                </Link>

                <Link href="/bulletin" style={{ display: 'contents' }}>
                    <S.FeatureCard
                        $bgImage="/bible_background.jpg"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <S.ContentWrapper>
                            <S.CardNumber>03</S.CardNumber>
                            <S.CardTitle>온라인 주보</S.CardTitle>
                        </S.ContentWrapper>
                        <S.CardLink>주일 예배 주보 보기</S.CardLink>
                    </S.FeatureCard>
                </Link>
            </S.FeatureSection>
        </S.Wrapper>
    );
}