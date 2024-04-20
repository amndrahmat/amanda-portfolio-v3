import React from "react";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img className="cards__item__img" alt="Card" src={props.src} />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
            {props.source && <><br></br><h4>{props.source}</h4></>}
            {props.path && props.textPath && (
              <>
                <br></br>
                <p>
                {props.textPath}
                  <a href={props.path} target="_blank"  rel="noopener noreferrer" className="hover-1">
                    {props.path}
                  </a>
                </p>
              </>
            )}
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
