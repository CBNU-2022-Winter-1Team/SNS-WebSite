import { useRef, useCallback, useEffect } from "react";
import "./CModal.css";
function CModal({ showModal, setShowModal }) {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const closeKey = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", closeKey);
    return () => document.removeEventListener("keydown", closeKey);
  }, [closeKey]);

  if (!showModal) return null;
  return (
    <div id="modal_box" ref={modalRef} onClick={closeModal}>
      <div className="modal_contents">
        {/* <button
          className="modal_close_btn"
          onClick={() => setShowModal((modal) => !modal)}
        >
          ❌
        </button> */}
        <div className="modal_left">
          <img
            src="https://images.velog.io/images/devgosunman/post/b603df22-e812-494d-b1b9-562d56e020da/test.jpg"
            alt=""
          />
        </div>
        <div className="modal_right">
          <div className="title">
            <div className="circleBox">
              <img src="img/advertisement1.jpg" alt=""></img>
            </div>
            <p>주서먹기~~</p>
            <i className="fas fa-list fa-lg"></i>
          </div>
          <div className="customLine"></div>
          <div className="post_contents">
            <div className="customMargin"></div>
            <div className="title">
              <div className="circleBox">
                <img src="img/advertisement1.jpg" alt=""></img>
              </div>
              <p>작성자 프로필</p>
            </div>
            <div className="customMargin"></div>
            <p>내용들어가ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ</p>
          </div>
          <div className="customLine"></div>
          <div className="contents">
            <i className="far fa-heart fa-2x"></i>
            <i className="far fa-comment fa-2x"></i>
            <i className="fab fa-telegram-plane fa-2x"></i>

            <i className="far fa-bookmark fa-2x book"></i>
            <p>
              admin 외 <b>15명</b>이 좋아합니다.
            </p>
            <p>추운 겨울 붕어빵이랑 오댕</p>
            <p>댓글 4개 보기</p>
            <p className="date">12월 24일</p>
          </div>
          <div className="comments">
            <i className="far fa-comment-dots fa-2x"></i>
            <input type="text" placeholder="댓글 달기"></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CModal;