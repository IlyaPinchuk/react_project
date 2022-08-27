import classes from "../../Users/User/User.module.scss";
import React, {useState} from "react";


const Pagination = ({totalUsersCount, pageSize, currentPage, onClick, portionSize = 5}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    };

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={classes.pagination}>
            {portionNumber > 1 &&
                <span  onClick={() => setPortionNumber(portionNumber - 1)}>&#10096; &#10096;</span>
            }

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => <span key={p} className={currentPage === p ? classes.selectPage : undefined}
                                onClick={() => onClick(p)}>{p}</span>)
            }
            {portionCount > portionNumber &&
                <span  onClick={() => setPortionNumber(portionNumber + 1)}> &#10097; &#10097; </span>
            }
        </div>
    )
}

export default Pagination;