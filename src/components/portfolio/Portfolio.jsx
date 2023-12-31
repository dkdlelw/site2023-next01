import React from "react";
import Link from "next/link";
import Image from "next/image";

const Portfolio = (props) => {
    return (
        <section id="portSection" className={props.attr}>
            <h3>SF 작품 소개</h3>
            <p>각 유명작품들을 소개합니다.</p>
            <div className="port__inner container">
                <div className="port__btn">
                    <ul>
                        <li className="active">
                            <Link href="/">문학</Link>
                        </li>
                        <li>
                            <Link href="/">애니메이션</Link>
                        </li>
                        <li>
                            <Link href="/">영화/드라마</Link>
                        </li>
                        <li>
                            <Link href="/">게임</Link>
                        </li>
                    </ul>
                </div>
                <div className="port__cont">
                    <div className="port">
                        <figure className="port__header">
                            <Image
                                width={370}
                                height={270}
                                // fill={true}
                                src="/assets/images/port/port_01.png"
                                alt="이미지"
                            />
                        </figure>
                        <div className="port__body">
                            <span className="pic">
                                <Image
                                    width={50}
                                    height={50}
                                    src="/assets/images/member/member01.jpg"
                                    alt="이미지"
                                />
                            </span>
                            <div className="title">
                                <h4>아이, 로봇</h4>
                                <span>아이작 아시모프(Isaac Asimov) </span>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <Image
                                width={370}
                                height={270}
                                // fill={true}
                                src="/assets/images/port/port_02.png"
                                alt="이미지"
                            />
                        </figure>
                        <div className="port__body">
                            <span className="pic">
                                <Image
                                    width={50}
                                    height={50}
                                    src="/assets/images/member/member02.jpg"
                                    alt="이미지"
                                />
                            </span>
                            <div className="title">
                                <h4>안드로이드는 전기양을 꿈꾸는가?</h4>
                                <span>필립 K. 딕 (Philip K. Dick)</span>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <Image
                                width={370}
                                height={270}
                                // fill={true}
                                src="/assets/images/port/port_03.png"
                                alt="이미지"
                            />
                        </figure>
                        <div className="port__body">
                            <span className="pic">
                                <Image
                                    width={50}
                                    height={50}
                                    src="/assets/images/member/member04.jpg"
                                    alt="이미지"
                                />
                            </span>
                            <div className="title">
                                <h4>스페이스 오디세이 2001</h4>
                                <span>아서 C. 클라크 (Stanley Kubrick)</span>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <Image
                                width={370}
                                height={270}
                                // fill={true}
                                src="/assets/images/port/port_04.png"
                                alt="이미지"
                            />
                        </figure>
                        <div className="port__body">
                            <span className="pic">
                                <Image
                                    width={50}
                                    height={50}
                                    src="/assets/images/member/member05.jpg"
                                    alt="이미지"
                                />
                            </span>
                            <div className="title">
                                <h4>1984</h4>
                                <span>조지 오웰(George Orwell)</span>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <Image
                                width={370}
                                height={270}
                                // fill={true}
                                src="/assets/images/port/port_05.png"
                                alt="이미지"
                            />
                        </figure>
                        <div className="port__body">
                            <span className="pic">
                                <Image
                                    width={50}
                                    height={50}
                                    src="/assets/images/member/member06.jpg"
                                    alt="이미지"
                                />
                            </span>
                            <div className="title">
                                <h4>듄</h4>
                                <span>프랭크 허버트(Frank Herbert)</span>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <Image
                                width={370}
                                height={270}
                                // fill={true}
                                src="/assets/images/port/port_06.png"
                                alt="이미지"
                            />
                        </figure>
                        <div className="port__body">
                            <span className="pic">
                                <Image
                                    width={50}
                                    height={50}
                                    src="/assets/images/member/member07.jpg"
                                    alt="이미지"
                                />
                            </span>
                            <div className="title">
                                <h4>11/22/63</h4>
                                <span>스티븐 킹(Stephen King)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
