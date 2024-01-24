import React from "react";
import Link from "next/link";

const UserPage = () => {
    return (
        <main>
            <ul style={{"display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center","height":"100vh"}}>
                <li>hi Nanna</li>
                <li>Salar</li>
                <li>hi Nanna</li>
                <li>Salar</li>
                <li>hi Nanna</li>
                <Link href='/'>back</Link>
            </ul>
           
        </main>
    )
}

export default UserPage;