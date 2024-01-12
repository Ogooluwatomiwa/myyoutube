import React from "react";
import { Nav } from "./Nav";
import { Sidebar } from "./Sidebar";
import { Seminav } from "./Seminav";
import { Card } from "./Card";

export function Page() {

  return (
    <div>
      <Nav />
      <Sidebar />
      <Seminav />
        <Card />
      
    </div>
  );
}
