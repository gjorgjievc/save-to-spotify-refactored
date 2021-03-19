import React, { useState } from 'react';
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa';


export const SearchBar = ({search}) => {
    const [term, setTerm] = useState('');


    return (
        <div className="SearchBar">
            <input
                placeholder="Enter a Song, Album, or Artist"  
                onFocus={(e) => e.target.placeholder= ""}
                onBlur={(e) => e.target.placeholder= "Enter a Song, Album, or Artist"}
                onChange={(e) => setTerm(e.target.value)} 
                onKeyDown={(e) => {if (e.key === 'Enter'){
                                    search(term)
                                    }}}                           
            />
            <button className="SearchButton" onClick={() => search(term)}> <FaSearch size={28} /> </button>
        </div>
    )
}

// class SearchBar extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             term: ''
//         }

//         this.search = this.search.bind(this);
//         this.handleTermChange = this.handleTermChange.bind(this);
//     }

//     search() {
//         this.props.onSearch(this.state.term);
//     }

//     handleTermChange(event) {
//         this.setState({ term: event.target.value });
//     }

//     render() {
//         return (
//             <div className="SearchBar">
//                 <input
//                 placeholder="Enter a Song, Album, or Artist"  
//                 onFocus={(e) => e.target.placeholder= ""}
//                 onBlur={(e) => e.target.placeholder= "Enter a Song, Album, or Artist"}
//                 onChange={this.handleTermChange} 
//                 onKeyDown={(e) => {if (e.key === 'Enter'){
//                                      this.search()
//                                     }}}                           
//                 />
//                 <button className="SearchButton" onClick={this.search}> <FaSearch size={32} /> </button>
//             </div>
//         )
//     }
// }
    
// export default SearchBar;