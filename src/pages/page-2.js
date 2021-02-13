import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title='Page two' />
    <h1>Olá de novo!</h1>
    <p>Tem nada aqui não...</p>
    <Link to='/'>Volte pra home</Link>
  </Layout>
)

export default SecondPage
