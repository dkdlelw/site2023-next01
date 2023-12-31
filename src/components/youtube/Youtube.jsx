import React from "react";
import Link from "next/link";
import Image from "next/image";

const Youtube = (props) => {
    return (
        <section id="youtubeSection" className={props.attr}>
            <div className="youtube__inner">
                <div className="youtube__text container">
                    <h3>관련 유튜브 추천</h3>
                    <p>
                        SF와 관련된 주제를 다룬 유튜브를 추천합니다.
                        <br />
                        썸네일을 누르시면 해당 유튜브로 이동합니다.
                    </p>
                    <Link href="#" className="button-red">
                        자세히 보기
                    </Link>
                    <div className="youtube__item">
                        <div>
                            <Link href="https://youtu.be/ncSc2CPf454">
                                <Image
                                    width={415}
                                    height={225}
                                    // fill={true}
                                    src="/assets/images/youtube/youtube01.jpg"
                                    alt="이미지"
                                />
                            </Link>
                        </div>
                        <div>
                            <Link href="https://youtu.be/spn7aihll0E">
                                <Image
                                    width={415}
                                    height={225}
                                    src="/assets/images/youtube/youtube02.jpg"
                                    alt="이미지"
                                />
                            </Link>
                        </div>
                        <div>
                            <Link href="https://youtu.be/FrDNhukh2IM">
                                <Image
                                    width={415}
                                    height={225}
                                    src="/assets/images/youtube/youtube03.jpg"
                                    alt="이미지"
                                />
                            </Link>
                        </div>
                        <div>
                            <Link href="https://youtu.be/Tj3k-oL53Sg">
                                <Image
                                    width={415}
                                    height={225}
                                    src="/assets/images/youtube/youtube04.jpg"
                                    alt="이미지"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Youtube;
