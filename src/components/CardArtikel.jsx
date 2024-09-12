import { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardArtikel() {
  const [artikelList, setArtikelList] = useState([]);
  const [filteredArtikelList, setFilteredArtikelList] = useState([]);
  const [, setActiveCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(4);

  useEffect(() => {
    fetch("https://64539f69c18adbbdfea29dd5.mockapi.io/artikel")
      .then((response) => response.json())
      .then((data) => {
        setArtikelList(data);
        setFilteredArtikelList(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleFilter = (category) => {
    setActiveCategory(category);

    if (category === null) {
      setFilteredArtikelList(artikelList);
    } else {
      const filteredList = artikelList.filter((artikel) =>
        artikel.jenisArtikel.toLowerCase().includes(category.toLowerCase())
      );
      setFilteredArtikelList(filteredList);
    }
    setCurrentPage(1);
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredArtikelList.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Row className="artikel-filter mb-3">
        <Col
          lg={12}
          md={12}
          sm={12}
          className="d-flex justify-content-center flex-wrap pt-3 gap-3"
        >
          <Button variant="outline-light" onClick={() => handleFilter(null)}>
            All
          </Button>
          <Button
            variant="outline-light"
            className="me-2"
            onClick={() => handleFilter("gizi")}
          >
            Gizi
          </Button>
          <Button
            variant="outline-light"
            className="me-2"
            onClick={() => handleFilter("pencegahan")}
          >
            Pencegahan
          </Button>
          <Button
            variant="outline-light"
            className="me-2"
            onClick={() => handleFilter("dampak")}
          >
            Dampak
          </Button>
          <Button
            variant="outline-light"
            className="me-2"
            onClick={() => handleFilter("stunting")}
          >
            Stunting
          </Button>
        </Col>
      </Row>
      {currentCards.length === 0 ? (
        <p className="text-center mt-5 fs-5 fw-medium ">
          Jenis artikel yang Anda pilih tidak ada.
        </p>
      ) : (
        currentCards.map((artikel) => (
          <Card
            key={artikel.id}
            className="col-lg-12 mb-5 mt-5 p-3 shadow-sm  "
          >
            <div className="row ">
              <div className="col-lg-5">
                <div className="card-image text-md-center">
                  <img
                    className="float-center img-fluid "
                    style={{ width: "500px", height: "250px" }}
                    src={artikel.gambar}
                    alt="Card"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="card-body">
                  <h4 className="text-warna jenis-artikel fs-6">
                    {artikel.jenisArtikel}
                  </h4>
                  <h6 className="card-title fs-4 fw-semibold">
                    {artikel.judulArtikel}
                  </h6>
                  <p className="card-text text-justify fs-6">
                    {artikel.rangkuman.substring(0, 250)}
                  </p>
                  <div className="text-end">
                    <Link
                      to={`/artikel/${artikel.id}`}
                      style={{ textDecoration: "none" }}
                      className="text-warna card-link fs-6 fw-semibold"
                    >
                      Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))
      )}

      {/* Pagination */}
      <div className="d-flex justify-content-center mt-5">
        <nav>
          <ul className="pagination">
            {Array(Math.ceil(filteredArtikelList.length / cardsPerPage))
              .fill()
              .map((_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  <Button
                    variant="link"
                    className="page-link"
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </Button>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default CardArtikel;
