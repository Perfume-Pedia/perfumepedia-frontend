import "../pages/Notes.css";

export default function Notes() {
  return (
    <>
      <section className="notesection">
        {/* 시트러스 */}
        <div className="mainnotes">
          <h3>시트러스 노트</h3>
          <img className="mainimg" src="img/citrus.jpg" alt="시트러스" />
        </div>
        <p>
          상큼하고 신선한 향이 특징으로 주로 레몬, 오렌지, 자몽, 라임 등의
          과일에서 추출된다. <br /> 청량한 느낌을 줄 수 있어 여름철에 많이
          사용된다.
        </p>
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
          <h3>플로럴 노트</h3>
          <img className="mainimg" src="img/floral.jpg" alt="플로럴" />
        </div>
        <p>
          꽃향기를 기반으로 한 향으로 자연스럽고 우아한 분위기를 줄 수 있다.
          <br />
          플로럴 노트에는 로지플로럴, 화이트 플로럴, 그린 플로럴, 스파이시
          플로럴, 파우더 플로럴이 있다.
        </p>
        <div className="subnotescategory">
          <h4>로지 플로럴</h4>
          <p>장미 향 혹은 그와 비슷한 향을 내는 계열을 말한다.</p>
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
              <img className="subimg" src="img/peony.jpg" alt="피오니" />
              <h5>피오니</h5>
            </div>
          </div>
        </div>

        <div className="subnotescategory">
          <h4>화이트 플로럴</h4>
          <p>
            꽃이 시들어 갈 때 나는 향으로 무게감이 느껴지고 겨울에 잘 어울리는
            향이다.
          </p>
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
          <p>
            풀냄새가 섞인 꽃의 향으로 일반 플로럴 계열보다 신선하면서도 화려한
            향이다.
          </p>
          <div className="subnotes">
            <div className="subimg-contants">
              <img className="subimg" src="img/narcissus.jpg" alt="수선화" />
              <h5>수선화</h5>
            </div>
          </div>
        </div>

        <div className="subnotescategory">
          <h4>스파이시 플로럴</h4>
          <p>상쾌한 향과 함께 플로럴 향이 난다.</p>
          <div className="subnotes">
            <div className="subimg-contants">
              <img className="subimg" src="img/carnation.jpg" alt="카네이션" />
              <h5>카네이션</h5>
            </div>
            <div className="subimg-contants">
              <img className="subimg" src="img/immortelle.jpg" alt="이모르텔" />
              <h5>이모르텔</h5>ㅡ
            </div>
          </div>
        </div>

        <div className="subnotescategory">
          <h4>파우더리 플로럴</h4>
          <p>분내가 나는 듯한 느낌의 플로럴 노트로 포근하고 부드러운 향이다.</p>
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
          <h3>그린, 아로마틱 노트</h3>
          <img className="mainimg" src="img/green.jpg" alt="그린" />
        </div>
        <p>
          주로 식물이나 나무에서 추출한 향료로 만들어져 상쾌하고 청량감이 있는
          향이다.
          <br /> 대표적으로 잎사귀, 풀, 나무 등 자연적인 요소들로 구성되어 있다.
        </p>
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
          <h3>우디 노트</h3>
          <img className="mainimg" src="img/woody.jpg" alt="우디" />
        </div>
        <p>
          주로 나무, 뿌리에서 얻어진 원료를 사용하며, 자연스러우면서도 편안한
          느낌을 준다.
          <br /> 일반인이 생각하는 우디 계열의 향은 대부분 풀 향, 잔디 향 등
          그린노트 계열의 향수에 더 가깝다.
        </p>
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

      {/* 애니멀 */}
      <section className="notesection">
        <div className="mainnotes">
          <img className="mainimg" src="img/animal.jpg" alt="애니멀" />
          <h3>애니멀릭 노트</h3>
        </div>
        <p>
          옛날에는 동물에서 직접 추출한 향을 사용했지만, 최근에는 합성향료로
          대체되고 있다.
          <br /> 포근한 향부터 꼬릿한 향까지 다양한 동물적 향이 나는 노트이다.
          <br /> 주로 머스크, 시벳, 앰버그리스를 활용한다.
        </p>
      </section>

      {/* 오리엔탈 */}
      <section className="notesection">
        <div className="mainnotes">
          <h3>오리엔탈 노트</h3>
          <img className="mainimg" src="img/oriental.jpg" alt="오리엔탈" />
        </div>
        <p>
          바닐라의 달콤함이 있는 따뜻한 향을 중심으로 동물적인 향이 가미된
          노트를 말한다.
          <br /> 동양 향료들을 포함하여 동양적 느낌을 강조하며 이는 인센스
          스틱을 피웠을 때 나는 향과 유사하다.
        </p>
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
          <h3>프루티 노트</h3>
          <img className="mainimg" src="img/fruity.jpg" alt="프루티" />
        </div>
        <p>
          과일 향과 꽃 향이 섞인 노트로 주로 은은하고 달콤한 향이다.
          <br /> 딸기, 체리, 복숭아 같은 과일은 물론 망고, 코코넛 등 열대과일도
          여기에 포함된다.
          <br />
          같은 프루티 노트라도 과일 종류에 따라 다양한 분위기가 난다.
        </p>
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
          <h3>스파이시 노트</h3>
          <img className="mainimg" src="img/spicy.jpg" alt="스파이시" />
        </div>
        <p>
          톡 쏘는 느낌으로 향긋하고 따뜻한 느낌을 더해주는 향이다. <br />
          스파이시 노트에는 웜/핫 스파이시, 콜드/프레쉬 스파이시가 있다.
        </p>
        <div className="subnotescategory">
          <h4>웜/핫 스파이시</h4>
          <p>부드럽고 따뜻하며 약간 달콤하기도 한 향신료 향이다.</p>
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
          <p>가볍고 시트러스처럼 상쾌하기도 한 향신료 향이다.</p>
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
          <h3>구어망드 노트</h3>
          <img className="mainimg" src="img/gourmand.jpg" alt="구어망드" />
        </div>
        <p>
          음식에서 유래된 향으로 보통 디저트의 달콤한 향을 말한다.
          <br /> 바닐라를 기반으로 하며 초콜릿, 시나몬, 술 종류의 노트들과
          조화를 이루기도 한다.
        </p>
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
    </>
  );
}
