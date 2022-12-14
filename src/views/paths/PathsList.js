import React from 'react';
import { Row, Col, ProgressBar, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import Clamp from 'components/clamp';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const PathsList = () => {
  const title = 'Paths';
  const description = 'Elearning Portal Paths List Page';

  const breadcrumbs = [{ to: '', text: 'Home' }];
  return (
    <>
      <HtmlHead title={title} description={description} />
      {/* Title and Top Buttons Start */}
      <div className="page-title-container">
        <Row>
          {/* Title Start */}
          <Col md="7">
            <h1 className="mb-0 pb-0 display-4">{title}</h1>
            <BreadcrumbList items={breadcrumbs} />
          </Col>
          {/* Title End */}
        </Row>
      </div>
      {/* Title and Top Buttons End */}

      {/* Your Paths Start */}
      <div className="d-flex justify-content-between">
        <h2 className="small-title">Your Paths</h2>
        <NavLink to="/quiz/result" className="btn btn-icon btn-icon-end btn-xs btn-background-alternate p-0 text-small">
          <span className="align-bottom">View All</span> <CsLineIcons icon="chevron-right" className="align-middle" size="12" />
        </NavLink>
      </div>
      <Row className="g-3 mb-5">
        <Col xl="6">
          <Card>
            <Row className="g-0 h-auto sh-sm-23">
              <Col xs="12" sm="auto" className="h-100 p-5 pb-0 pb-lg-5 text-center">
                <img src="/img/illustration/icon-launch.webp" alt="path" className="card-img w-auto theme-filter" />
              </Col>
              <Col xs="12" className="col-sm p-0 h-100">
                <Card.Body className="ps-lg-0">
                  <div className="d-flex flex-row justify-content-between mb-2">
                    <div className="heading body-link mb-0">Becoming a Jedi Master</div>
                    <div className="text-muted">60%</div>
                  </div>
                  <ProgressBar className="progress-md mb-2" now={60} />
                  <Clamp tag="span" clamp="2" className="text-muted mb-2">
                    Practice makes perfect and permanent.
                  </Clamp>
                  <NavLink to="/paths/detail" className="btn btn-link btn-icon btn-icon-end ps-0 p-1 stretched-link">
                    <span>Continue</span> <CsLineIcons icon="chevron-right" />
                  </NavLink>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xl="6">
          <Card>
            <Row className="g-0 h-auto sh-sm-23">
              <Col xs="12" sm="auto" className="h-100 p-5 pb-0 pb-lg-5 text-center">
                <img src="/img/illustration/icon-experiment.webp" alt="path" className="card-img w-auto theme-filter" />
              </Col>
              <Col xs="12" className="col-sm p-0 h-100">
                <Card.Body className="ps-lg-0">
                  <div className="d-flex flex-row justify-content-between mb-2">
                    <div className="heading body-link mb-0">Academic Program</div>
                    <div className="text-muted">25%</div>
                  </div>
                  <ProgressBar className="progress-md mb-2" now={25} />
                  <Clamp tag="span" clamp="2" className="text-muted mb-2">
                    You need to complete your paper with a fieldtrip.
                  </Clamp>
                  <NavLink to="/paths/detail" className="btn btn-link btn-icon btn-icon-end ps-0 p-1 stretched-link">
                    <span>Continue</span> <CsLineIcons icon="chevron-right" />
                  </NavLink>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      {/* Your Paths End */}

      {/* Popular Paths Start */}
      <h2 className="small-title">Popular Paths</h2>
      <Row className="g-3 row-cols-1 row-cols-lg-2 row-cols-xxl-3 mb-5">
        <Col>
          <Card className="h-100">
            <Card.Body>
              <div className="text-center">
                <img src="/img/illustration/icon-performance.webp" className="theme-filter" alt="performance" />
                <div className="d-flex flex-column sh-5">
                  <NavLink to="/paths/detail" className="heading stretched-link">
                    Becoming a Jedi Master
                  </NavLink>
                </div>
              </div>
              <div className="text-muted text-center">10000 hours' practice</div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body>
              <div className="text-center">
                <img src="/img/illustration/icon-experiment.webp" className="theme-filter" alt="performance" />
                <div className="d-flex flex-column sh-5">
                  <NavLink to="/paths/detail" className="heading stretched-link">
                    Academic Program
                  </NavLink>
                </div>
              </div>
              <div className="text-muted text-center">Learn deep and achieve more</div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body>
              <div className="text-center">
                <img src="/img/illustration/icon-storage.webp" className="theme-filter" alt="performance" />
                <div className="d-flex flex-column sh-5">
                  <NavLink to="/paths/detail" className="heading stretched-link">
                    Study Management
                  </NavLink>
                </div>
              </div>
              <div className="text-muted text-center">Achieve high efficiency at study</div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body>
              <div className="text-center">
                <img src="/img/illustration/icon-accounts.webp" className="theme-filter" alt="performance" />
                <div className="d-flex flex-column sh-5">
                  <NavLink to="/paths/detail" className="heading stretched-link">
                    Becomming a Grand Master
                  </NavLink>
                </div>
              </div>
              <div className="text-muted text-center">50000 hours of practice and unlearn what you've learned</div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Popular Paths End */}

      {/* Science Behind the Paths Start */}
      <h2 className="small-title">Science Behind the Paths</h2>
      <Row className="row-cols-1 row-cols-md-2 row-cols-xl-4 g-3">
        <Col>
          <Card>
            <NavLink to="#">
              <img src="/img/blog/blog-image-5.webp" className="card-img-top sh-30 theme-filter" alt="card image" />
            </NavLink>
            <Card.Body>
              <div className="mb-2">
                <NavLink to="#" className="heading">
                  How the Paths are Created
                </NavLink>
              </div>
              <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                Leveling up makes learning more attactive.
              </Clamp>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <div className="d-flex align-items-center">
                <div className="sw-5 d-inline-block position-relative me-3">
                  <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl" alt="thumb" />
                </div>
                <div className="d-inline-block">
                  <NavLink to="#">Bosco Lin</NavLink>
                  <div className="text-muted text-small">Knight</div>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card>
            <NavLink to="#">
              <img src="/img/blog/blog-image-6.webp" className="card-img-top sh-30 theme-filter" alt="card image" />
            </NavLink>
            <Card.Body>
              <div className="mb-2">
                <NavLink to="#" className="heading">
                  Why Should You Take a Path
                </NavLink>
              </div>
              <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                Understands the fundamentals
              </Clamp>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <div className="d-flex align-items-center">
                <div className="sw-5 d-inline-block position-relative me-3">
                  <img src="/img/profile/profile-2.webp" className="img-fluid rounded-xl" alt="thumb" />
                </div>
                <div className="d-inline-block">
                  <NavLink to="#">Flora Yao</NavLink>
                  <div className="text-muted text-small">Youngling</div>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card>
            <NavLink to="#">
              <img src="/img/blog/blog-image-7.webp" className="card-img-top sh-30 theme-filter" alt="card image" />
            </NavLink>
            <Card.Body>
              <div className="mb-2">
                <NavLink to="#" className="heading">
                  Benefits of Learning with a Path
                </NavLink>
              </div>
              <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                Be more structured
              </Clamp>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <div className="d-flex align-items-center">
                <div className="sw-5 d-inline-block position-relative me-3">
                  <img src="/img/profile/profile-3.webp" className="img-fluid rounded-xl" alt="thumb" />
                </div>
                <div className="d-inline-block">
                  <NavLink to="#">Vincent Choi</NavLink>
                  <div className="text-muted text-small">Jedi Master</div>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card>
            <NavLink to="#">
              <img src="/img/blog/blog-image-8.webp" className="card-img-top sh-30 theme-filter" alt="card image" />
            </NavLink>
            <Card.Body>
              <div className="mb-2">
                <NavLink to="#" className="heading">
                  Path Courses and Quizes
                </NavLink>
              </div>
              <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                Lay a strong foundation.
              </Clamp>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <div className="d-flex align-items-center">
                <div className="sw-5 d-inline-block position-relative me-3">
                  <img src="/img/profile/profile-4.webp" className="img-fluid rounded-xl" alt="thumb" />
                </div>
                <div className="d-inline-block">
                  <NavLink to="#">Nemo Huang</NavLink>
                  <div className="text-muted text-small">Jedi Master</div>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      {/* Science Behind the Paths End */}
    </>
  );
};

export default PathsList;
