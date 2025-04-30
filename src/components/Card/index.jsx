import "./style.scss";

function Card({}){
  return(
    <>
      <div className="card">
        <img className="card-background" src="https://www.fcgroningen.nl/wp-content/uploads/sites/7/2023/09/Selectiefoto2324-1920x1280.jpg" alt="" />
        <div className="card-spacing">
          <button class="card-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
          </button>
        </div>
        <div className="card-gradient"></div>
      </div>
    </>
  )
}
export { Card }