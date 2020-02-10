import React from "react"

class BookList extends React.Component {
    render() {
        let booklist  = this.props.book.map(item =>
            <div>
                <h3>{item.id}</h3>
                <p>{item.name}</p>
                <p>{item.description}</p>
            </div>
            
        )

        
        return(
            <div>Hello Booklist
            {booklist}
            </div>
        )
    }
}
export default BookList;