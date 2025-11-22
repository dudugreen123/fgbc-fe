'use client';

import * as S from './style';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <S.FooterWrapper>
            <S.Container>
                <S.TopSection>
                    <S.Column>
                        <S.ColumnTitle>예배 안내</S.ColumnTitle>
                    </S.Column>

                    <S.Column>
                        <S.ColumnTitle>주일 예배</S.ColumnTitle>
                        <S.ServiceList>
                            <S.ServiceItem>
                                <span className="name">1부 예배</span>
                                <span className="time">오전 07:30</span>
                                <span className="location">2층 본당</span>
                            </S.ServiceItem>
                            <S.ServiceItem>
                                <span className="name">2부 예배</span>
                                <span className="time">오전 11:00</span>
                                <span className="location">2층 본당</span>
                            </S.ServiceItem>
                        </S.ServiceList>
                    </S.Column>

                    <S.Column>
                        <S.ColumnTitle>주중 예배</S.ColumnTitle>
                        <S.ServiceList>
                            <S.ServiceItem>
                                <span className="name">수요예배</span>
                                <span className="time">수요일 저녁 07:30</span>
                                <span className="location">2층 본당</span>
                            </S.ServiceItem>
                            <S.ServiceItem>
                                <span className="name">금요철야</span>
                                <span className="time">금요일 저녁 08:30</span>
                                <span className="location">2층 본당</span>
                            </S.ServiceItem>
                            <S.ServiceItem>
                                <span className="name">새벽기도회</span>
                                <span className="time">월-금 오전 04:50</span>
                                <span className="location">어린이집</span>
                            </S.ServiceItem>
                        </S.ServiceList>
                    </S.Column>

                    <S.Column>
                        <S.ColumnTitle>교회 학교</S.ColumnTitle>
                        <S.ServiceList>
                            <S.ServiceItem>
                                <span className="name">주일학교</span>
                                <span className="time">주일 오전 11:00</span>
                                <span className="location">교육관</span>
                            </S.ServiceItem>
                            <S.ServiceItem>
                                <span className="name">중고등부</span>
                                <span className="time">주일 오전 09:50</span>
                                <span className="location">교육관</span>
                            </S.ServiceItem>
                            <S.ServiceItem>
                                <span className="name">청년회</span>
                                <span className="time">주일 오후 01:00</span>
                                <span className="location">교육관</span>
                            </S.ServiceItem>
                        </S.ServiceList>
                    </S.Column>
                </S.TopSection>

                <S.Divider />

                <S.BottomSection>
                    <S.ChurchInfo>
                        <h2>순복음범천교회</h2>
                        <p>
                            부산광역시 부산진구 엄광로 359<br />
                            Tel: 051) 634-9362
                        </p>
                        <S.Copyright>
                            © {currentYear} Full Gospel Beomcheon Church. All rights reserved.
                        </S.Copyright>
                    </S.ChurchInfo>

                    <S.Affiliation>
                        <p>
                            본 교회는 <strong>기독교대한하나님의성회(순복음)</strong>에<br />
                            소속된 복음주의를 실천하는 건강한 교회입니다.
                        </p>
                    </S.Affiliation>
                </S.BottomSection>
            </S.Container>
        </S.FooterWrapper>
    );
}
