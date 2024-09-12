import { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://64539f69c18adbbdfea29dd5.mockapi.io/artikel")
      .then((response) => {
        // Sort articles by ID in descending order
        const sortedArticles = response.data.sort((a, b) => b.id - a.id);
        // Take the first three articles
        const latestArticles = sortedArticles.slice(0, 3);
        setArticles(latestArticles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Row xs={1} md={2} lg={3}>
        {articles.map((article) => (
          <Col key={article.id}>
            <Card className="h-100 px-3 mx-3 shadow-sm">
              <Card.Img
                variant="top"
                src={article.gambar}
                alt={article.judul}
              />
              <Card.Body className="d-flex flex-column p-0 pt-3">
                <Card.Title
                  className="jenis-artikel fs-6"
                  style={{ color: "#54BCA4" }}
                >
                  {article.jenisArtikel}
                </Card.Title>
                <Card.Title className="fs-5 title-artikel">
                  {article.judulArtikel.substring(0, 35)}
                </Card.Title>
                <Card.Text
                  className="flex-grow-1 fs-6"
                  style={{ lineHeight: "30px" }}
                >
                  {article.rangkuman.substring(0, 150)}....
                </Card.Text>

                <div className="d-flex justify-content-center">
                  <Button
                    href={`/artikel/${article.id}`}
                    className="btnselengkapnya fs-6 rounded-pill w-100"
                    style={{ padding: "0.5rem 2rem" }}
                  >
                    Selengkapnya
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ArticleList;
