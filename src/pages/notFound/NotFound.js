import React from 'react'

function NotFound() {
    const styles = {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
        fontWeight: "700",
    }
    return (
        <div style={styles}>
            <h1>404</h1>
            <p>Page Not Found</p>
        </div>
    )
}

export default NotFound