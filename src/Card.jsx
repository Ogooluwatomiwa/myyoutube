import React from "react";
import {Videos}  from "./Videos";
import Videolist from "./Videolist";

export function Card(){
    const vdisplay = Videolist.map(data => {return(< Videos {...data}/>)})
    return(
        <card>
            {vdisplay}
        </card>
    )
}