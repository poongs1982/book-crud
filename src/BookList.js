import { useEffect, useState } from "react";

function BookList(){
    const[bookData, bookDataChange]=useState(null);
    useEffect(()=>{
        fetch("http://localhost:8000/books")
            .then((res)=>res.json())
            .then((res)=>{
                bookDataChange(res);
                console.log(res);
            })
            .catch((err)=>console.log(err.message));
    },[]);
    return(
        <div className="container">
            <div className="card">
                <div className="card-title display-5">
                    LIST OF BOOKS
                </div>
                <div className="card-body">
                    <table className="table striped">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>BOOK ID</th>
                                <th></th>
                                <th>BOOK TITLE</th>
                                <th>BOOK AUTHOR</th>
                                <th>BOOK GENRE</th>
                                <th>BOOK COST</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            bookData &&
                                bookData.map(book=>(
                                        <tr key={book.id}>
                                            <td>{book.id}</td>
                                            <td><img src={book.bookImageUrl} width='100' height='70'></img></td>
                                            <td>{book.bookTitle}</td>
                                            <td>{book.bookAuthor}</td>
                                            <td>{book.bookGenre}</td>
                                            <td>{book.bookCost}</td>
                                            <td><button className="btn btn-primary small">Edit</button></td>
                                            <td><button className="btn btn-danger small">Remove</button></td>
                                        </tr>
                                    ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
    )
}

export default BookList;