'use client';

import React, { useState } from 'react';
import * as S from './style';

const IntroContainer = () => {
    const [activeTab, setActiveTab] = useState<'vision' | 'greeting' | 'staff' | 'ministry' | 'organization' | 'history'>('vision');

    return (
        <S.Container>
            <S.Header>
                <S.Title>교회소개</S.Title>
            </S.Header>

            <S.TabMenu>
                <S.Tab $active={activeTab === 'vision'} onClick={() => setActiveTab('vision')}>
                    교회비전
                </S.Tab>
                <S.Tab $active={activeTab === 'greeting'} onClick={() => setActiveTab('greeting')}>
                    소개의말씀
                </S.Tab>
                <S.Tab $active={activeTab === 'staff'} onClick={() => setActiveTab('staff')}>
                    섬기는 분들
                </S.Tab>
                <S.Tab $active={activeTab === 'ministry'} onClick={() => setActiveTab('ministry')}>
                    예배시간안내
                </S.Tab>
                <S.Tab $active={activeTab === 'organization'} onClick={() => setActiveTab('organization')}>
                    세가족등록
                </S.Tab>
                <S.Tab $active={activeTab === 'history'} onClick={() => setActiveTab('history')}>
                    연중행사계획
                </S.Tab>
            </S.TabMenu>

            <S.Content>
                {activeTab === 'vision' && (
                    <S.Section>
                        <S.SectionTitle>교회비전</S.SectionTitle>

                        <S.VisionBox>
                            <S.VisionHeader>
                                <S.VisionIcon>●</S.VisionIcon>
                                <S.VisionTitle>fgbc vision</S.VisionTitle>
                                <S.VisionSubtitle>교회의 비전</S.VisionSubtitle>
                            </S.VisionHeader>

                            <S.VisionText>
                                교회의 사명은 말씀과 성령으로 예수 그리스도를 확실하게 이루어 사회를 위해 봉사하여 복음을 증거하는데 있습니다.
                                우리는 교회의 사명을 위하여 다음과 같은 교회성장전략을 비전을 가집니다.
                            </S.VisionText>

                            <S.VisionList>
                                <S.VisionItem>
                                    <S.VisionNumber>01</S.VisionNumber>
                                    <S.VisionItemText>살아있는 예배로 하나님을 높이며</S.VisionItemText>
                                </S.VisionItem>
                                <S.VisionItem>
                                    <S.VisionNumber>02</S.VisionNumber>
                                    <S.VisionItemText>소그룹교제로 성도가 하나가 되며</S.VisionItemText>
                                </S.VisionItem>
                                <S.VisionItem>
                                    <S.VisionNumber>03</S.VisionNumber>
                                    <S.VisionItemText>제능에 따라 봉사하여 교회를 세우며</S.VisionItemText>
                                </S.VisionItem>
                                <S.VisionItem>
                                    <S.VisionNumber>04</S.VisionNumber>
                                    <S.VisionItemText>사도들의 사명을 이어 교육으로 확자하하며</S.VisionItemText>
                                </S.VisionItem>
                                <S.VisionItem>
                                    <S.VisionNumber>05</S.VisionNumber>
                                    <S.VisionItemText>전도로 하나님 나라를 확산시켜 가자자 합니다.</S.VisionItemText>
                                </S.VisionItem>
                            </S.VisionList>
                        </S.VisionBox>

                        <S.StrategyBox>
                            <S.StrategyHeader>
                                <S.VisionIcon>●</S.VisionIcon>
                                <S.VisionTitle>vision & strategy</S.VisionTitle>
                                <S.VisionSubtitle>비전과 전략</S.VisionSubtitle>
                            </S.StrategyHeader>

                            <S.StrategyText>
                                건강한 교회로 지역교회의 사명을 다하며 교회의 미래인 어린이교육과 청년의 사명을 불살피며 지역의 특수성을 따라 노인전도에 힘을 다하고자 합니다.
                            </S.StrategyText>

                            <S.StrategyHighlight>
                                세상과 훈련, 제자훈련, 사역자훈련을 거쳐 그리스도의 일꾼을 만들며 소그룹 훈련을 통하여 과업의 연합과 최우를 나누며 지역교회로 확대할 구제와 나누기 평화와 나이가 세계선교에 이바지하고자 합니다.
                            </S.StrategyHighlight>
                        </S.StrategyBox>
                    </S.Section>
                )}

                {activeTab === 'greeting' && (
                    <S.Section>
                        <S.SectionTitle>소개의말씀</S.SectionTitle>

                        <S.GreetingBox>
                            <S.GreetingTitle>공성하신 하나님의 은혜 가운데</S.GreetingTitle>
                            <S.GreetingSubtitle>인터넷을 통한 복음전파의 문이 열려진 것을 감사합니다.</S.GreetingSubtitle>

                            <S.GreetingContent>
                                <S.PastorImage src="/pastor_profile.jpg" alt="정성철 목사" />

                                <S.GreetingText>
                                    <p>전자 경제 시대가 열리고 사대에 하나님의 도구로 하우를 기쁘은 교회파에 감사드립니다.</p>
                                    <p>지난 4년간 동안은 전 교인이 한 팀일하여 한 소망으로 지역교회로서 사명을 다해 왔습니다.</p>
                                    <p>앞으로 한 세기는 교회가 더 사랑스럽고 건강하여 지역 갈 곳 믿습니다.</p>

                                    <p>디지털시대에 열려진 인터넷 홈페이지 전 성도가 동참가 동참하 예배 전도 선교교회 간증의 장이 되기를 바랍니다.</p>

                                    <p>교우들의 가정이 평안과 은혜로 건그로고, 교회가 성령으로 양적 질적으로 성장을 지향가서 이 시대에 쓰라 바라는 나누가 주신 사명을 표하기를 바랍니다.</p>

                                    <p>인터넷 목회를 위해 헌신하고 생기는 분들께 감사드리며 교우와 방문하는 나누가 부산시내 한국교회에 은혜와 축복을 나누가 부산시내 한국교회에 믿습니다.</p>
                                    <p>감사합니다.</p>
                                </S.GreetingText>
                            </S.GreetingContent>

                            <S.PastorSignature>
                                <S.PastorName>순복음 범천교회 목사</S.PastorName>
                                <S.SignatureImage>정성철</S.SignatureImage>
                            </S.PastorSignature>
                        </S.GreetingBox>
                    </S.Section>
                )}

                {activeTab === 'staff' && (
                    <S.Section>
                        <S.SectionTitle>섬기는 분들</S.SectionTitle>

                        <S.StaffTabs>
                            <S.StaffTab $active={true}>교역자</S.StaffTab>
                            <S.StaffTab $active={false}>장로</S.StaffTab>
                        </S.StaffTabs>

                        <S.StaffGrid>
                            <S.StaffCard>
                                <S.StaffPhoto src="/pastor_profile.jpg" alt="정성철 목사" />
                                <S.StaffName>정성철 목사</S.StaffName>
                                <S.StaffInfo>
                                    <S.StaffRow>
                                        <S.StaffLabel>담당부서</S.StaffLabel>
                                        <S.StaffValue>원로목사</S.StaffValue>
                                    </S.StaffRow>
                                    <S.StaffRow>
                                        <S.StaffLabel>E-mail</S.StaffLabel>
                                        <S.StaffValue>elimelim@hanmail.net</S.StaffValue>
                                    </S.StaffRow>
                                </S.StaffInfo>
                            </S.StaffCard>

                            <S.StaffCard>
                                <S.StaffPhoto src="/pastor_profile.jpg" alt="이효훈 목사" />
                                <S.StaffName>이효훈 목사</S.StaffName>
                                <S.StaffInfo>
                                    <S.StaffRow>
                                        <S.StaffLabel>담당부서</S.StaffLabel>
                                        <S.StaffValue>담임목사</S.StaffValue>
                                    </S.StaffRow>
                                    <S.StaffRow>
                                        <S.StaffLabel>E-mail</S.StaffLabel>
                                        <S.StaffValue>ustake0927@gmail.com</S.StaffValue>
                                    </S.StaffRow>
                                </S.StaffInfo>
                            </S.StaffCard>
                        </S.StaffGrid>

                        <S.ElderSection>
                            <S.ElderTitle>장로</S.ElderTitle>
                            <S.ElderGrid>
                                <S.ElderCard>
                                    <S.ElderPhoto src="/pastor_profile.jpg" alt="김종배 장로" />
                                    <S.ElderName>김종배 장로</S.ElderName>
                                </S.ElderCard>
                                <S.ElderCard>
                                    <S.ElderPhoto src="/pastor_profile.jpg" alt="이재현 장로" />
                                    <S.ElderName>이재현 장로</S.ElderName>
                                </S.ElderCard>
                                <S.ElderCard>
                                    <S.ElderPhoto src="/pastor_profile.jpg" alt="모정숙 장로" />
                                    <S.ElderName>모정숙 장로</S.ElderName>
                                </S.ElderCard>
                                <S.ElderCard>
                                    <S.ElderPhoto src="/pastor_profile.jpg" alt="김재덕 은퇴장로" />
                                    <S.ElderName>김재덕 은퇴장로</S.ElderName>
                                </S.ElderCard>
                                <S.ElderCard>
                                    <S.ElderPhoto src="/pastor_profile.jpg" alt="오재문 은퇴장로" />
                                    <S.ElderName>오재문 은퇴장로</S.ElderName>
                                </S.ElderCard>
                            </S.ElderGrid>
                        </S.ElderSection>
                    </S.Section>
                )}

                {activeTab === 'ministry' && (
                    <S.Section>
                        <S.SectionTitle>예배시간안내</S.SectionTitle>
                        <S.MinistryContent>
                            <p>예배시간 안내 내용이 들어갑니다.</p>
                        </S.MinistryContent>
                    </S.Section>
                )}

                {activeTab === 'organization' && (
                    <S.Section>
                        <S.SectionTitle>세가족등록</S.SectionTitle>

                        <S.RegistrationBox>
                            <S.RegistrationTitle>순복음범천교회 세가족등록 안내 입니다.</S.RegistrationTitle>

                            <S.RegistrationSection>
                                <S.RegistrationSubtitle>● 등록안내</S.RegistrationSubtitle>
                                <S.RegistrationList>
                                    <li>교회에 처음 나오시는 분이나 다른 교회에서 저희교회로 옮기시는 분들을 위한 등록카드를 제출해 주십시오. 세가족부에서 전화하기 인내하 드릴 것입니다.</li>
                                    <li>등록을 하시면 담당교역자와 연결되어 신앙생활도 교회생활을 원만히 할 수 있도록 특별히 배려를 받을 수 있습니다. 또한 교육지의 실명, 특수상담을 요청할 수 있고 교회, 세가족 안내자치를 받으실 수 있습니다.</li>
                                </S.RegistrationList>
                            </S.RegistrationSection>

                            <S.RegistrationSection>
                                <S.RegistrationSubtitle>● 등록카드는 제출한 후에는…</S.RegistrationSubtitle>
                                <S.RegistrationOrderedList>
                                    <li>교회가 준비한 환영 만찬을 들며, 간단한 교회 소개를 들습니다.</li>
                                    <li>그 주간에 심방을 하게 됩니다.</li>
                                    <li>세가족 교육을 받습니다.</li>
                                    <li>구역에 편입하여 성도의 교제와 상교가도 받습니다.</li>
                                    <li>남, 여전도회와 협력회 활동을 할 수 있습니다.</li>
                                    <li>수요전도와 중보기도사역, 교회사역 봉사 동에 하게 하실 수 있습니다.</li>
                                    <li>교사나 성가대의 등 은사를 따라 봉사할 수 있습니다.</li>
                                </S.RegistrationOrderedList>
                            </S.RegistrationSection>
                        </S.RegistrationBox>
                    </S.Section>
                )}

                {activeTab === 'history' && (
                    <S.Section>
                        <S.SectionTitle>연중행사계획</S.SectionTitle>
                        <S.HistoryContent>
                            <p>연중행사계획 내용이 들어갑니다.</p>
                        </S.HistoryContent>
                    </S.Section>
                )}
            </S.Content>
        </S.Container>
    );
};

export default IntroContainer;
