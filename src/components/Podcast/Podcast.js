import React from 'react';

import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { Col, Row, Container } from 'react-bootstrap'
import { FaRss, FaLink, FaApple } from "react-icons/fa";

function Podcast() {

  const baseAPI = `https://podcastwebapi.herokuapp.com`;

  const [items, setItems] = useState([]);
  const [pageCount, setpageCount] = useState(0);

  let limit = 5;

  useEffect(() => {
    const getPodcasts = async () => {
      const res = await fetch(
        `${baseAPI}/podcasts?page=1&limit=${limit}`
      );

      const data = await res.json();
      const total = data.totalRecords;

      setpageCount(Math.ceil(total / limit));
      setItems(data.data);
    };

    getPodcasts();
  }, [limit]);

  const fetchPodcasts = async (currentPage) => {
    const res = await fetch(
        `${baseAPI}/podcasts?page=${currentPage}&limit=${limit}`
    );
    const data = await res.json();
    return data.data;
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);
    let currentPage = data.selected + 1;
    const postsFromServer = await fetchPodcasts(currentPage);
    setItems(postsFromServer);
  };
  
  return (
    <Container>
      <div className="row m-2">
        {items.map((item, key) => {
          return <div key={key}>

          <Col md={{ md: 2}}>
              <div className="circle">{item.order}</div>
          </Col>

          <Col className='podcast-item mt-5' md={{ offset: 2}} lg={{ offset: 2}}>
              <div>
              <Row className='no-gutters'>
                  <Col md={2} xs={2}>
                      <img src={item.thumbnail} alt={item.title} />
                  </Col>
                  <Col md={5} xs={10}>
                      <div className='podcast-details p-3'>
                          <h4 className='py-1'>{item.title}</h4>
                          <div className='py-1'>by <span className='publisher'>{item.publisher}</span></div>
                          <div>{item.total_episodes} episodes</div>
                          <hr className="mt-2 mb-1"/>
                          <Row className='podcast-links'>
                              <Col md={4} xs={4}><a href={item.itunes_id} target="_blank" rel="noopener noreferrer"><FaApple /> ITUNES</a></Col>
                              <Col md={4}  xs={4}><a href={item.website} target="_blank" rel="noopener noreferrer"><FaLink /> WEB</a></Col>
                              <Col md={4}  xs={4}><a href={item.rss} target="_blank" rel="noopener noreferrer"><FaRss /> RSS</a></Col>
                          </Row>
                      </div>
                  </Col>
                  <Col>
                  <div>
                      <div className='podcast-description py-4 px-3'>
                          {item.description}
                      </div>
                  </div>
                  </Col>
              </Row>
          </div>
          </Col>
      </div>
        })}
      </div>

<div className='mt-5 mb-5'>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
       </div>
    </Container>
  );
}

export default Podcast;