import React from "react";

const Pagination = ({page, pagesLength, setPage}) => {

    const pagesPerBlock = 8
    const currentBlock = Math.ceil(page / pagesPerBlock)
    const blockLength = Math.ceil(pagesLength / pagesPerBlock)

    let pages = []
    const initialPage = (currentBlock - 1) * pagesPerBlock + 1

    const limitPage = blockLength === currentBlock ? pagesLength : currentBlock * pagesPerBlock
    for(let i = initialPage; i <= limitPage; i++){
        pages.push(i)
    }

    const handelPrev = () => {
        if(page === 1){
            setPage(pagesLength)
        } else{
            setPage(page - 1)
        }
    }

    const handelNext = () => {
        if(page === pagesLength){
            setPage(1)
        } else{
            setPage(page + 1)
        }
    }

  return (
    <div className='pagination'>
        <div onClick={handelPrev} className='btnPagePrev'>&#60;</div>
        {
            pages.map((e, index) => {
                return <button onClick={() => setPage(e)} key={index}  className={e == page ? 'active' : 'inactive'}>{e}</button>
            })
        }
        <div onClick={handelNext} className='btnPageNext' >&#62;</div>
    </div>
  )
}

export default Pagination;
