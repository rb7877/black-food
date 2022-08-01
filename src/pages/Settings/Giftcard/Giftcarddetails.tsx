
import React, { useCallback, useState } from "react";
import style from "../../../style.module.scss";
import cx from "./Giftcard.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import Footer from "../../../components/footer/Footer";
import { Card, Button, Row, Col, Modal, Form, InputGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import ActionEdit from "../../../images/icon-edit.svg";
import ActionDelete from "../../../images/icon-delete.svg";

export default function Giftcarddetails() {

  const [addSectionShow, setAddSection] = useState(false);
  const [addCustomerShow, setAddCustomer] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  const handleClose = () => {
    setLgShow(false)
  }

  const handleClose1 = () => {
    setAddCustomer(false)
  }

  const handleClose2 = () => {
    setAddSection(false)
  }

  const handleClose3 = () => {
    setEditShow(false)
  }

  return (
    <>
      <Header />
      <Sidebar />
      <section className={`${style.pageWrapper}`}>
        <Card className="mb-4">
          <Card.Title>
            <Row className={`align-items-center ${style.rowTitle}`}>
              <Col className={`${style.rowTitleLeft}`} lg={6}>
                <h5>
                  <NavLink to="/settings/kitchenflows/" className={`${style.back}`}>Back</NavLink>
                  Gift Card</h5>

              </Col>

              <Col className={`col-12 ${style.rowTitleRight}`} lg={6}>
                <button
                  className={`btn ${style.width50}`}
                  onClick={() => setEditShow(true)}
                >
                  Edit Gift Card
                </button>
              </Col>
            </Row>
          </Card.Title>
          <Card.Body>
            <div className={`${style.bgBox}`}>
              <Row>
                <Col lg={6}>
                  <div className="table-responsive">
                    <table className={`table ${cx.table50}`}>
                      <tbody>
                        <tr>
                          <td>Name</td>
                          <td>jkbkb</td>
                        </tr>
                        <tr>
                          <td>Category</td>
                          <td>jkbkb</td>
                        </tr>

                        <tr>
                          <td>Barcode</td>
                          <td>-</td>
                        </tr>
                        <tr>
                          <td>Price</td>
                          <td>SAR 1</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="table-responsive">
                    <table className={`table ${cx.table50}`}>
                      <tbody>
                        <tr>
                          <td>Name Localized</td>
                          <td>hdcd</td>
                        </tr>
                        <tr>
                          <td>SKU</td>
                          <td>sk-0574</td>
                        </tr>

                        <tr>
                          <td>Pricing Method</td>
                          <td>fixed price</td>
                        </tr>


                      </tbody>
                    </table>
                  </div>
                </Col>
              </Row>
            </div>


          </Card.Body>
          <Card.Title>
            <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
              <Col className={`${style.rowTitleLeft}`} lg={6}

              >
                <h5>Tags</h5>
              </Col>
              <Col className={`${style.rowTitleRight}`} lg={6}>
                <button className={`btn ${style.width100}`}
                  onClick={() => setAddSection(true)}>Add Tags</button>
              </Col>
            </Row>
          </Card.Title>

        </Card>

        <Card className="mt-4">

          <Card.Body>

            <div className="table-responsive">
              <table className={`table m-0 ${cx.simpleTable}`}>
                <tbody>
                  <tr>
                    <td>Customer Cancelled</td>
                  </tr>
                  <tr>
                    <td>Product Not Available</td>
                  </tr>

                </tbody>
              </table>
            </div>

          </Card.Body>
        </Card>

        <Card className="mt-4">
          <Card.Title>
            <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
              <Col className={`${style.rowTitleLeft}`} lg={6}

              >
                <h5>Inactive In Branches</h5>
              </Col>
              <Col className={`${style.rowTitleRight}`} lg={6}>
                <button className={`btn ${style.width100}`}
                  onClick={() => setAddCustomer(true)}>Select Branches</button>
              </Col>
            </Row>
          </Card.Title>
          <Card.Body>
            <div className="table-responsive">
              <table className={`table m-0 ${cx.simpleTable}`}>
                <tbody>
                  <tr>
                    <td>Expired</td>
                  </tr>
                  <tr>
                    <td>Waste</td>
                  </tr>

                </tbody>
              </table>
            </div>

          </Card.Body>
        </Card>
        <Card className="mt-4">
          <Card.Title>
            <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
              <Col className={`${style.rowTitleLeft}`} lg={6}

              >
                <h5>Groups</h5>
              </Col>

            </Row>
          </Card.Title>
          <Card.Body>
            <div className="table-responsive">
              <table className={`table m-0 ${cx.simpleTable}`}>
                <tbody>
                  <tr>
                    <td>Cash Change</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </Card.Body>
        </Card>
      </section>
      <Footer />

      <Modal
        className={`${cx.ctsPopup}`}
        size="lg"
        show={editShow}
        onHide={() => setEditShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">Edit Gift Card</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Name</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Name Localized</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="jkbkb" />
              </Col>
            </Form.Group>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Category</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Select aria-label="Source">
                  <option>abc</option>
                  <option>123</option>
                  <option>ok</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Row lg={12}>
              <Form.Group
                className={`row align-items-center ${cx.formBox}`}
                controlId="formName"
              >

                <Col lg={4}>
                  <Form.Label>SKU</Form.Label>
                </Col>

                <Col lg={8}>
                  <InputGroup className={`${cx.pinBox}`}>
                    <Form.Control type="text" placeholder="" />
                    <button className={`btn ${cx.generateBtn}`}>Generate</button>
                  </InputGroup>
                </Col>

              </Form.Group>
            </Row>

            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Barcode</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="text" placeholder="jkbkb" />
              </Col>
            </Form.Group>

            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Pricing Method </Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Select aria-label="Source">
                  <option>Fixed Price</option>
                  <option>Open Price</option>

                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Price (SAR) </Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Control type="number" />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Col lg={12}>
              <Row className="align-items-center">
                <Col lg={6} className={`${cx.leftft}`}>
                  <button type="button" className={`${style.bgremove}`}>Delete Gift Card</button>
                </Col>

                <Col lg={6} className={`${cx.rightft}`}>
                  <button type="button" className={`btn ${cx.close}`} onClick={handleClose3}>
                    Close
                  </button>
                  <button type="button" className={`btn ${cx.apply}`}>
                    Save
                  </button>
                </Col>
              </Row>
            </Col>
          </Modal.Footer>
        </Form>
      </Modal>

      <Modal
        className={`${cx.ctsPopup}`}
        size="lg"
        show={addSectionShow}
        onHide={() => setAddSection(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg"> Add Tag</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Tag</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Select aria-label="Source">
                  <option>Any</option>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Col lg={12}>
              <Row className="align-items-center">
                <Col lg={6} className={`${cx.leftft}`}>

                </Col>
                <Col lg={6} className={`${cx.rightft}`}>
                  <button type="button" className={`btn ${cx.close}`} onClick={handleClose2}>
                    Close
                  </button>
                  <button type="button" className={`btn ${cx.apply}`}>
                    Save
                  </button>
                </Col>
              </Row>
            </Col>
          </Modal.Footer>
        </Form>
      </Modal>

      <Modal
        className={`${cx.ctsPopup}`}
        size="lg"
        show={addCustomerShow}
        onHide={() => setAddCustomer(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Select Branches
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group
              className={`row align-items-center ${cx.formBox}`}
              controlId="formName"
            >
              <Col lg={4}>
                <Form.Label>Branches</Form.Label>
              </Col>
              <Col lg={8}>
                <Form.Select aria-label="Source">
                  <option>Any</option>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Select>
              </Col>
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Col lg={12}>
              <Row className="align-items-center">
                <Col lg={6} className={`${cx.leftft}`}>

                </Col>
                <Col lg={6} className={`${cx.rightft}`}>
                  <button type="button" className={`btn ${cx.close}`} onClick={handleClose1}>
                    Close
                  </button>
                  <button type="button" className={`btn ${cx.apply}`}>
                    Save
                  </button>
                </Col>
              </Row>
            </Col>
          </Modal.Footer>
        </Form>
      </Modal>








    </>
  );

}
