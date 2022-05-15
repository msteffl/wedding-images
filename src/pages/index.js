import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { PickerInline } from "filestack-react"

const apikey = "APtxwk5KVRsy0bq7q4ev1z"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hochzeit Valentina und Michael</h1>
      <PickerInline
        apikey={apikey}
        onSuccess={res => console.log(res)}
        onUploadDone={res => console.log(res)}
      />
    </Layout>
  )
}

export default IndexPage
