import React from "react"

class Library extends React.Component {
    render() {
        const library = this.props.library.map(miau =>
            <div>
                <h1>{miau.id}</h1>
                <p>{miau.name}</p>
                <p>{miau.description}</p>
            </div>
            )
        return(
            <div>
                <h1>Perpustakaan</h1>
                    {library}
            </div>
        )
    }
}
export default Library;