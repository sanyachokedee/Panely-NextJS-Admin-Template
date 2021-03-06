import { Row, Col, Portlet, Container } from "@panely/components"
import { pageChangeHeaderTitle, breadcrumbChange } from "store/actions"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import withLayout from "components/layout/withLayout"
// import withAuth from "components/firebase/firebaseWithAuth"
import Quill from "@panely/quill"
import Head from "next/head"

class EditorBubblePage extends React.Component {
  componentDidMount() {
    // Set header title
    this.props.pageChangeHeaderTitle("Bubble Editor")
    // Set breadcrumb data
    this.props.breadcrumbChange([
      { text: "Dashboard", link: "/" },
      { text: "Editor" },
      { text: "Bubble", link: "/editor/bubble" }
    ])
  }

  state = {
    // Initial editor content
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."
  }

  // Handle editor change event
  handleChange = value => {
    this.setState({ content: value })
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Bubble Editor | Panely</title>
        </Head>
        <Container fluid>
          <Row>
            <Col xs="12">
              {/* BEGIN Portlet */}
              <Portlet>
                <Portlet.Header bordered>
                  <Portlet.Title>Bubble editor</Portlet.Title>
                </Portlet.Header>
                <Portlet.Body>
                  <Quill
                    theme="bubble"
                    value={this.state.content}
                    onChange={this.handleChange}
                    style={{ minHeight: "20rem" }}
                  />
                </Portlet.Body>
              </Portlet>
              {/* END Portlet */}
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

function mapDispathToProps(dispatch) {
  return bindActionCreators({ pageChangeHeaderTitle, breadcrumbChange }, dispatch)
}

// export default connect(null, mapDispathToProps)(withAuth(withLayout(EditorBubblePage)))
export default connect(null, mapDispathToProps)(withLayout(EditorBubblePage))
