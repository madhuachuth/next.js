import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div style={{"display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center","height":"100vh"}}>NEXT.JS project
      <Link href="/user" style={{"textAlign":"right"}}>User Details</Link>
      </div>
    </main>
  );
}
