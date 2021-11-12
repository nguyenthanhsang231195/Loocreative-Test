import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
<div className="footer">
    <div className="infor-col">
        <div className="col-left">
            <h3> What happened </h3>
            <span>
                [공지] 개인 정보 처리 방침 변경 사전 안내 <br />
                [공지] 29CM 강남 스토어 영업 종료 <br />
                [공지] 개인 정보 처리 방침 변경 사전 안내 <br />
                [공지] iOS 10 이하 버전 지원 중단 안내 <br />
                [공지] 개인 정보 처리 방침 변경 사전 안내 <br />
            </span>
        </div>

        <div className="col-right">
            <ul>
                <li>
                    <h2> about us </h2>
                    <span> 
                        회사 소개 <br />
                        인재 채용 <br />
                        상시 할인 혜택 <br />
                    </span>
                </li>

                <li>
                    <h2> my order </h2>
                    <span> 
                        내 주문 <br />
                        주문 배송 <br />
                        취소 / 교환 / 반품 내역 <br />
                        상품 리뷰 내역 <br />
                        증빙 서류 발급 <br />
                    </span>
                </li>

                <li>
                    <h2> my account </h2>
                    <span> 
                        회원 정보 수정 <br />
                        회원 등급 <br />
                        마일리지 현황 <br />
                        쿠폰
                    </span>
                </li>

                <li>
                    <h2> help </h2>
                    <span>  
                        1 : 1 상담 내역 <br />
                        상품 Q & A 내역 <br />
                        공지 사항 <br />
                        자주하는 질문 <br />
                        고객의 소리 <br />
                    </span>
                </li>
            </ul>
        </div>
    </div>

    <div className="website-infor">
        <span>
            © 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr <br />
            서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침
        </span>
    </div>
</div>
    )
}
