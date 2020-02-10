import React from "react"

class FavoriteBook extends React.Component {
    render() {
        let favorite = this.props.favorite.map(favor =>
            <div>
                <h1>{favor.id}</h1>
                <p>{favor.name}</p>
                <p>{favor.description}</p>
            </div>
            )
        return(
            <div>
                <h1>Favorite Book</h1>
                {favorite}
            </div>
        )
    }
}
export default FavoriteBook