import React from 'react'
import { Row, Col } from 'react-bootstrap'
//引入自己的scss
import '../../css/service/style.scss'

function ServiceHome() {
  return (
    <>
      <div className="ServiceTerms">
        <section className="banner">
          <div className="container-fluid h-100">
            <Row className="h-100">
              <Col className="text-center m-auto" md="8" lg="6" xl="4">
                <h1 className="mb-3">保姆服務條款</h1>
              </Col>
            </Row>
          </div>
        </section>
        <div className="container py-5">
          <div className="ServiceQuery">
            <h3>服務條款</h3>
            <p className="mb-5">
              HugDog
              為一提供媒合寵物主人與寵物服務提供者的線上平台。使用本服務的過程中，無論你是否註冊成為會員，我們將視為您已同意並接受以下服務條款的規範。我們的服務條款規範了您該如合使用本網站與其中的內容。如果您不同意我們的服務條款，請勿使用本網站。
            </p>
            <h3>使用規範與條款更動權</h3>
            <p className="mb-5">
              使用本網站時您同意受到本服務條款的限制。您聲明自己符合並遵守相關法律的規範。您同意我們可能在任何時候更改使用者條款，在我們修改使用者條款後詳細閱讀並了解，並且在修改公布時即具效用。在修改公布後使用本網站代表您接受修改後的使用者條款。
            </p>
            <h3>申請保姆</h3>
            <p className="mb-5">
              在會員註冊流程中網站會要求您提供相關資訊。您同意提供正確、完整的資訊，並且持續更新。您所提供的資料只在我們的隱私條款限制的範圍內使用。若由我們單方面判定您提供的資訊不完整、不正確，我們有權拒絕您的會員註冊、或立即修改或刪除您的會員帳號。任何年齡未滿
              20
              歲的來訪者禁止註冊成會員。您可以向網站提出申請成為保姆，若由我們單方面判定您的資格不符，我們有權拒絕您的申請以保障提供服務的品質。若會員因為使用寵物服務違約、不當使用網站、或有其他不利網站的行為造成網站的名譽受損,
              必須賠償網站。
            </p>
            <h3>服務檔案</h3>
            <p className="mb-5">
              您可以成為保姆並編輯服務檔案。成為保姆的過程中，網站會要求您提供，包括但不限於，您的地址、您的寵物、您的服務與價格。部份或完整的檔案資訊將被公開以供包括會員與非會員瀏覽。您了解並同意一旦家長預約了您的服務，該次價格不能再更動。為維護網站的正常運作，我們保有以任何理由在未經您同意之下，隨時修改或刪除您的檔案的權力。身為保姆，您了解並同意您提供的服務與資訊符合相關的法律規範，並為您的服務與檔案負法律責任。
              您明白本網站並非保姆的雇主、承包商或保證人。任何會員預約了保姆的服務，會員與保姆之間所同意的任何事項僅限於該雙方間有效，網站不參與也不為其負任何責任。
            </p>
            <h3>家長逾期未接回</h3>
            <p className="mb-5">
              身為家長，您了解並同意在透過網站預約住宿或安親服務期限結束後，若未於約定期間內接回，經我們單方面判定後，有權力但沒有義務將您的寵物另行安置並與相關單位聯繫。您同意將賠償我們另外安置動物所產生的所有支出，並承擔寵物遺棄相關的法律責任。
            </p>
            <h3>網站資訊正確與完整</h3>
            <p className="mb-5">
              我們盡力但不保證維護網站內所有資訊的正確性、完整性與即時性。網站可能包含字詞錯誤、不精準用語或其他缺漏。並且可能有未經我們授權第三方修改或刪除網站內的任何資訊。若您發現可能的上述情形，請聯絡我們。
            </p>
            <h3>免責聲明</h3>
            <p className="mb-5">
              本網站所提供相關連結網站之內容包含網頁或資料，均為被連結網站所提供，相關權利為該等網站或合法權利人所有。當您使用或操作非
              HugDog
              所屬網站，我們不擔保其內容之正確性、即時性或完整性。我們不擔保由非
              HugDog
              所屬網站提供之服務、資訊或其他產品的品質或是否滿足您的需求。您必須清楚任何透過非
              HugDog
              網站提供的軟體，我們不擔保其是否為惡意程式或對您的電腦造成傷害。我們不擔保因使用通訊裝置或網際網路造成的延遲、受限制、資料傳送錯誤或其他狀況等。我們不擔保保姆的品質以及網站上的個人或業務行為，您了解並願意承擔使用保姆提供服務時的風險。服務提供者於網站上所列專業證照與執照可能來自不同的管道與機構，我們不擔保這些證照與執照是否皆具有政府的公信力。雖然我們提供保姆刊登他們的寵物服務，但我們不擔保保姆、會員或第三方支付商的行為責任或疏失，除非是保障範圍內的事項。
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceHome
