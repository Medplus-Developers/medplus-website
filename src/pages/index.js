import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <h1>Olá Visitante</h1>
    <p>Bem vindo ao novo site da MedPlus.</p>
    <Link to='/page-2/'>Vamos à página 2</Link> <br />
  </Layout>
)

export default IndexPage
