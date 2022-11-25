
// const SubPagination = () => {
//     return <div className="SubPagination"> 
//      <nav aria-label="Page navigation example">
//   <ul className="pagination">
//     <li className="page-item">
//       <a className="page-link" href="#" aria-label="Previous">
//         <span aria-hidden="true">&laquo;</span>
//       </a>
//     </li>
//     <li className="page-item"><a className="page-link" href="#">1</a></li>
//     <li className="page-item"><a className="page-link" href="#">2</a></li>
//     <li className="page-item"><a className="page-link" href="#">3</a></li>
//     <li className="page-item">
//       <a className="page-link" href="#" aria-label="Next">
//         <span aria-hidden="true">&raquo;</span>
//       </a>
//     </li>
//   </ul>
// </nav>  





//     </div>;



  



//   };
  
//   export default SubPagination;

// import React from 'react';

// const SubPagination = ({ UsersPerPage, totalUser, Subpaginate }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalUser / UsersPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <ul className='Subpagination'>
//         {pageNumbers.map(number => (
//           <li key={number} className='page-item'>
//             <a onClick={() => Subpaginate(number)} href='!#' className='page-link'>
//               {number}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default SubPagination;
