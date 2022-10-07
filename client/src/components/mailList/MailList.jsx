import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Uštedite vreme, uštedite novac!</h1>
      <span className="mailDesc">Prijavi se i prosledićemo vam najbolje ponude</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Tvoj Email" />
        <button>Pretplati se</button>
      </div>
    </div>
  )
}

export default MailList