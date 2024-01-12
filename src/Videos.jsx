import React from "react";

export function Videos(props) {
  return (
    <div className="videos">
      <div key={props.id} className="vidzone">
        <iframe
          // width="560"
          // height="315"
          width="255"
          height="145"
          src={props.vidurl}
          title="YouTube video player"
          frameborder="0"
          allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="vidcaption">
          <h3>{props.description}</h3>
          <p>{props.title}</p>
          <div className="dayview">
            <p>
              {props.views}
              {props.views > 1 ? "views" : "view"}
            </p>
            <p>&#9679;</p>
            <p>
              {props.days} {props.days > 1 ? "days" : "day"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
