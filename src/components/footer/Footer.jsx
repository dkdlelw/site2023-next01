import React from "react";
import Link from "next/link";

const siteMenu = [
    {
        id: 1,
        title: "",
        url: "/",
    },
];
const Footer = () => {
    return (
        <footer
            id="footer"
            role="contentinfo"
            className="footer__wrap SebangGothic4 section bg-blue"
        >
            <div className="footer__inner container">
                <div className="footer__text">
                    <h5>dkdlelw</h5>
                    <p>
                        궁금한 사항은 <br />
                        메일로 연락주세요!
                        <br />
                        <Link href="mailto:1346zany@gmail.com">
                            1346zany@gmail.com
                        </Link>
                    </p>
                    <ul className="sns">
                        <li>
                            <Link href="/">
                                <span className="ir">페이스북</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <span className="ir">인스타</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <span className="ir">유튜브</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <span className="ir">깃</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__menu">
                    <div>
                        <h4>사이트</h4>
                        <ul>
                            <li>
                                <Link href="/">웹표준 사이트</Link>
                            </li>
                            <li>
                                <Link href="/">반응형 사이트</Link>
                            </li>
                            <li>
                                <Link href="/">패럴럭스 사이트</Link>
                            </li>
                            <li>
                                <Link href="/">포트폴리오 사이트</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>유형</h4>
                        <ul>
                            <li>
                                <Link href="/">이미지 유형</Link>
                            </li>
                            <li>
                                <Link href="/">카드 유형</Link>
                            </li>
                            <li>
                                <Link href="/">이미지/텍스트 유형</Link>
                            </li>
                            <li>
                                <Link href="/">배너 유형</Link>
                            </li>
                            <li>
                                <Link href="/">텍스트 유형</Link>
                            </li>
                            <li>
                                <Link href="/">푸터 유형</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>스크립트</h4>
                        <ul>
                            <li>
                                <Link href="/">검색 이펙트</Link>
                            </li>
                            <li>
                                <Link href="/">퀴즈 이펙트</Link>
                            </li>
                            <li>
                                <Link href="/">마우스 이펙트</Link>
                            </li>
                            <li>
                                <Link href="/">슬라이드 이펙트</Link>
                            </li>
                            <li>
                                <Link href="/">패랠랙스 이펙트</Link>
                            </li>
                            <li>
                                <Link href="/">게임 이펙트</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>레퍼런스</h4>
                        <ul>
                            <li>
                                <Link href="/">CSS</Link>
                            </li>
                            <li>
                                <Link href="/">FONTS</Link>
                            </li>
                            <li>
                                <Link href="/">HTML</Link>
                            </li>
                            <li>
                                <Link href="/">JAVASCRIPT</Link>
                            </li>
                            <li>
                                <Link href="/">REACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__right">
                    Copyright 2023. All Rights Reserved - Designed by dkdlelw
                </div>
            </div>
        </footer>
    );
};

export default Footer;
