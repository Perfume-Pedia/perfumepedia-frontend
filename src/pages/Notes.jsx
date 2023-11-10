import "../pages/Notes.css";

export default function Notes() {
  return (
    <>
      <section className="notesection">
        {/* 시트러스 */}
        <div className="mainnotes">
          <img className="mainimg" src="img/citrus.jpg" alt="시트러스" />
          <h3>시트러스 노트</h3>
        </div>

        <div className="subnotes">
          <div className="subimg-contants">
            <img className="subimg" src="img/lemon.jpg" alt="레몬" />
            <h5>레몬</h5>
          </div>
          <div className="subimg-contants">
            <img className="subimg" src="img/bergamot.jpg" alt="베르가못" />
            <h5>베르가못</h5>
          </div>
          <div className="subimg-contants">
            <img className="subimg" src="img/orange.jpg" alt="오렌지" />
            <h5>오렌지</h5>
          </div>
        </div>
      </section>

      {/* 플로럴 */}
      <section className="notesection">
        <div className="mainnotes">
          <img className="mainimg" src="img/floral.jpg" alt="플로럴" />
          <h3>플로럴 노트</h3>
        </div>
        <div className="subnotescategory">
          <h4>로지 플로럴</h4>
          <div className="subnotes">
            <div className="subimg-contants">
              <img className="subimg" src="img/rose.jpg" alt="장미" />
              <h5>장미</h5>
            </div>
            <div className="subimg-contants">
              <img className="subimg" src="img/geranium.jpg" alt="제라늄" />
              <h5>제라늄</h5>
            </div>
            <div className="subimg-contants">
              <img className="subimg" src="img/peony (2).jpg" alt="피오니" />
              <h5>피오니</h5>
            </div>
          </div>
        </div>

        <div className="subnotescategory">
          <h4>화이트 플로럴</h4>
          <div className="subnotes">
            <div className="subimg-contants">
              <img className="subimg" src="img/jasmine.jpg" alt="자스민" />
              <h5>자스민</h5>
            </div>
            <div className="subimg-contants">
              <img className="subimg" src="img/tuberose.jpg" alt="튜베로즈" />
              <h5>튜베로즈</h5>
            </div>
            <div className="subimg-contants">
              <img className="subimg" src="img/ylangylang.jpg" alt="일랑일랑" />
              <h5>일랑일랑</h5>
            </div>
            <div className="subimg-contants">
              <img className="subimg" src="img/lily.jpg" alt="백합" />
              <h5>백합</h5>
            </div>
          </div>
        </div>

        <div className="subnotescategory">
          <h4>그린 플로럴</h4>
          <div className="subnotes">
            <div className="subimg-contants">
              <img className="subimg" src="img/narcissus.jpg" alt="수선화" />
              <h5>수선화</h5>
            </div>
          </div>
        </div>

        <div className="subnotescategory">
          <h4>스파이시 플로럴</h4>
          <div className="subnotes">
            <div className="subimg-contants">
              <img className="subimg" src="img/carnation.jpg" alt="카네이션" />
              <h5>카네이션</h5>
            </div>
            <div className="subimg-contants">
              <img className="subimg" src="img/wallflower.jpg" alt="월플라워" />
              <h5>월플라워</h5>
            </div>
            <div className="subimg-contants">
              <img className="subimg" src="img/immortelle.jpg" alt="이모르텔" />
              <h5>이모르텔</h5>
            </div>
          </div>
        </div>

        <div className="subnotescategory">
          <h4>파우더리 플로럴</h4>
          <div className="subnotes">
            <div className="subimg-contants">
              <img className="subimg" src="img/iris.jpg" alt="아이리스" />
              <h5>아이리스</h5>
            </div>
            <div className="subimg-contants">
              <img className="subimg" src="img/violet.jpg" alt="바이올렛" />
              <h5>바이올렛</h5>
            </div>
            <div className="subimg-contants">
              <img className="subimg" src="img/mimosa.jpg" alt="미모사" />
              <h5>미모사</h5>
            </div>
          </div>
        </div>
      </section>

      {/* 그린, 아로마틱 */}
      <section className="notesection">
        <div className="mainnotes">
          <img className="mainimg" src="img/green.jpg" alt="그린" />
          <h3>그린, 아로마틱 노트</h3>
        </div>

        <div className="subnotes">
          <div className="subimg-contants">
            <img className="subimg" src="img/lavender.jpg" alt="라벤더" />
            <h5>라벤더</h5>
          </div>
          <div className="subimg-contants">
            <img className="subimg" src="img/rosemary.jpg" alt="로즈마리" />
            <h5>로즈마리</h5>
          </div>
          <div className="subimg-contants">
            <img className="subimg" src="img/sage.jpg" alt="세이지" />
            <h5>세이지</h5>
          </div>
          <div className="subimg-contants">
            <img className="subimg" src="img/vetivert.jpg" alt="베티버" />
            <h5>베티버</h5>
          </div>
        </div>
      </section>
      {/* 우디 */}
      <section className="notesection">
        <div className="mainnotes">
          <img className="mainimg" src="img/woody.jpg" alt="우디" />
          <h3>우디 노트</h3>
        </div>
        <div className="subnotes">
          <div className="subimg-contants">
            <img className="subimg" src="img/sandalwood.jpg" alt="샌달우드" />
            <h5>샌달우드</h5>
          </div>
          <div className="subimg-contants">
            <img className="subimg" src="img/cedarwood.jpg" alt="시더우드" />
            <h5>시더우드</h5>
          </div>
          <div className="subimg-contants">
            <img className="subimg" src="img/patchouli.jpg" alt="파출리" />
            <h5>파출리</h5>
          </div>
        </div>
      </section>
      <section className="notesection">
        <div className="mainnotes">
          <img className="mainimg" src="img/animal.jpg" alt="애니멀" />
          <h3>애니멀 노트</h3>
        </div>
        <div className="subnotes">{/* <img className="subimg" /> */}</div>
      </section>
      {/* 오리엔탈 */}
      <section className="notesection">
        <div className="mainnotes">
          <img className="mainimg" src="img/oriental.jpg" alt="오리엔탈" />
          <h3>오리엔탈 노트</h3>
        </div>
        <div className="subnotes">
          <div className="subimg-contants">
            <img className="subimg" src="img/tonka.jpg" alt="통카빈" />
            <h5>통카빈</h5>
          </div>
          <div className="subimg-contants">
            <img className="subimg" src="img/vanila.jpg" alt="바닐라" />
            <h5>바닐라</h5>
          </div>
          <div className="subimg-contants">
            <img className="subimg" src="img/labdanum.jpg" alt="랍다넘" />
            <h5>랍다넘</h5>
          </div>
          <div className="subimg-contants">
            <img className="subimg" src="img/benzion.jpg" alt="벤조인" />
            <h5>벤조인</h5>
          </div>
        </div>
      </section>

      {/* 프루티 */}
      <section className="notesection">
        <div className="mainnotes">
          <img className="mainimg" src="img/fruity.jpg" alt="프루티" />
          <h3>프루티 노트</h3>
        </div>
        <div className="subnotes">
          <div className="subimg-contants">
            <img className="subimg" src="img/strawberry.jpg" alt="딸기" />
            <h5>딸기</h5>
          </div>
          <div className="subimg-contants">
            <img className="subimg" src="img/cherry.jpg" alt="체리" />
            <h5>체리</h5>
          </div>
          <div className="subimg-contants">
            <img className="subimg" src="img/peach.jpg" alt="복숭아" />
            <h5>복숭아</h5>
          </div>
          <div className="subimg-contants">
            <img className="subimg" src="img/coconut.png" alt="코코넛" />
            <h5>코코넛</h5>
          </div>
        </div>
      </section>

      {/* 스파이시 */}
      <section className="notesection">
        <div className="mainnotes">
          <img className="mainimg" src="img/spicy.jpg" alt="스파이시" />
          <h3>스파이시 노트</h3>
        </div>

        <div className="subnotescategory">
          <h4>웜/핫 스파이시</h4>
          <div className="subnotes">
            <div className="subimg-contants">
              <img className="subimg" src="img/nutmeg.jpg" alt="넛맥" />
              <h5>넛맥</h5>
            </div>
            <div className="subimg-contants">
              <img className="subimg" src="img/cinnamon.jpg" alt="시나몬" />
              <h5>시나몬</h5>
            </div>
            <div className="subimg-contants">
              <img className="subimg" src="img/pepper.jpg" alt="페퍼" />
              <h5>페퍼</h5>
            </div>
          </div>
        </div>

        <div className="subnotescategory">
          <h4>콜드/프레쉬 스파이시</h4>
          <div className="subnotes">
            <div className="subimg-contants">
              <img className="subimg" src="img/vanila.jpg" alt="바닐라" />
              <h5>바닐라</h5>
            </div>
            <div className="subimg-contants">
              <img className="subimg" src="img/ginger.jpg" alt="진저" />
              <h5>진저</h5>
            </div>
            <div className="subimg-contants">
              <img
                className="subimg"
                src="img/pinkpepper.jpg"
                alt="핑크 페퍼"
              />
              <h5>핑크 페퍼</h5>
            </div>
          </div>
        </div>
      </section>

      {/* 구어망드 */}
      <section className="notesection">
        <div className="mainnotes">
          <img className="mainimg" src="img/gourmand.jpg" alt="구어망드" />
          <h3>구어망드 노트</h3>
        </div>
        <div className="subnotes">
          <div className="subimg-contants">
            <img className="subimg" src="img/vanila.jpg" alt="바닐라" />
            <h5>바닐라</h5>
          </div>
          <div className="subimg-contants">
            <img className="subimg" src="img/chocolate.jpg" alt="초콜릿" />
            <h5>초콜릿</h5>
          </div>
          <div className="subimg-contants">
            <img className="subimg" src="img/tonka.jpg" alt="통카빈" />
            <h5>통카빈</h5>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="mainnotes">
          <img className="mainimg" src="img/herb.jpg" alt="허브" />
          <h3>허브 노트</h3>
        </div>
        <div className="subnotes"></div>
      </section>
      <section>
        <div className="mainnotes">
          <img className="mainimg" src="img/powder.jpg" alt="파우더" />
          <h3>파우더</h3>
        </div>
        <div className="subnotes"></div>
      </section>
      <section>
        <div className="mainnotes">
          <img className="mainimg" src="img/aldehyde.jpg" alt="알데하이드" />
          <h3>알데하이드 노트</h3>
        </div>
        <div className="subnotes"></div>
      </section> */}
    </>
  );
}