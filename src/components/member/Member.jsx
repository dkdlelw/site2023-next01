import Image from "next/image";
import React from "react";
import Link from "next/link";

const member = (props) => {
    return (
        <section id="memberSection" className={props.attr}>
            <h3>SF 장르 작가 & 영화감독 소개</h3>
            <p>SF에서 유명한 작가와 감독들을 소개합니다.</p>
            <div className="member__inner container">
                <div className="member">
                    <figure className="member__header">
                        <Image
                            width={300}
                            height={400}
                            // fill={true}
                            src="/assets/images/member/member01.jpg"
                            alt="이미지"
                        />
                    </figure>
                    <div className="member_body">
                        <h4>아이작 아시모프 (Isaac Asimov)</h4>
                        <Link href="/" className="btn">
                            작품 보기
                        </Link>
                    </div>
                </div>
                <div className="member">
                    <figure className="member__header">
                        <Image
                            width={300}
                            height={400}
                            src="/assets/images/member/member02.jpg"
                            alt="이미지"
                        />
                    </figure>
                    <div className="member_body">
                        <h4>필립 K. 딕 (Philip K. Dick):</h4>
                        <Link href="/" className="btn">
                            작품 보기
                        </Link>
                    </div>
                </div>
                <div className="member">
                    <figure className="member__header">
                        <Image
                            width={300}
                            height={400}
                            src="/assets/images/member/member03.jpg"
                            alt="이미지"
                        />
                    </figure>
                    <div className="member_body">
                        <h4>스탠리 큐브릭 (Stanley Kubrick)</h4>
                        <Link href="/" className="btn">
                            작품 보기
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default member;
