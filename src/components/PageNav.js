import React from "react"
import Pagination from "react-bootstrap/Pagination"

const PageNav = ({previousPage, nextPage, page}) => {
  return (
    <Pagination>
      <Pagination.Prev onClick={previousPage} />
      <Pagination.Item>Page: {page}</Pagination.Item>
      <Pagination.Next onClick={nextPage} />
    </Pagination>
  )
}

export default PageNav
