import React from "react"
import BookList from "./components/BookList"
import FavoriteBook from "./components/FavoriteBook"
import Library from "./components/Library"
import Button from "./components/Button"

class App extends React.Component {
  state = {
    book : [
      {
        id : 1,
        name : "harry potter",
        description: "Harry Potter adalah seri tujuh novel fantasi yang dikarang oleh penulis Inggris J.K.Rowling.Novel ini mengisahkan tentang petualangan seorang penyihir remaja bernama Harry Potter dan sahabatnya, Ronald Bilius Weasley dan Hermione Jean Granger, yang merupakan pelajar di Sekolah Sihir Hogwarts"
      },
      {
        id: 2,
        name : "Princess Cinderella",
        description: "Cinderella adalah dongeng tradisional dengan versi yang dijumpai di banyak negara, dengan berbagai variasi. Versi paling awal dari cerita ini berawal dari Cina pada 860. Dia tercatat di The Miscellaneous Record of Yu Yang oleh Tuan Ch'ing-Shih, sebuah buku yang ada sejak Dinasti Tang."
      },
      {
        id : 3,
        name : "Sejarah Psikologi",
        description: "hghjgjgjhgjgjhgjgjgjgjhgjgjggjgjgjgjgjgjhjhvghhj" 
      }
    ],
    favorite : [
      {
        id : 1,
        name : "perkembangan anak usia dini",
        description : "kkgkhgjhgjgjhgjhbdjhsdgsdfgksjhvck hisdgfisfgjhsdfg dgfidgfusdgudyfghjdvjh "
      },
      {
        id : 2,
        name : "pesikotes",
        description : "huala hualahghghgh hhjgjhgjhgjhg"
      },
      {
        id: 3,
        name: " Dunia Dongeng",
        description : "peterpan"
      }
    ],
    library : [
      {
        id: 1,
        name: "affdfd",
        description: "sdfsdfsdf"
      }
    ],
    button : 0
  }

  addButton = () => {
    this.setState({
      button : this.state.button + 1
    })
  }

  addMinusButton = () => {
    this.setState({
      button : this.state.button - 1
    })
  }
  addMultiplication = () => {
    console.log("test")
    this.setState({
      button : this.state.button * 7
    })
  }
  addDivision = () => {
    this.setState({
      button : this.state.button / 7
    })
  }
  render() {
    return(
      <div>
        {/* <h1>Hello world</h1>
        <BookList book={this.state.book} />
        <FavoriteBook favorite={this.state.favorite} />
        <Library library={this.state.library} /> */}
        <p> {this.state.button}</p>
        <Button button={this.addButton} minus={this.addMinusButton} mu={this.addMultiplication} divi={this.addDivision} />
      </div>
    )
  }
}

export default App
