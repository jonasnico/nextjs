import Head from 'next/head'
import Layout, { siteTitle } from '/pages/components/layout'
import utilStyles from './/styles/utils.module.css'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Work in progress learning site</p>
        <p>
          (Link to{' '}
          <a href="https://github.com/jonasnico" target="_blank" rel="noreferrer">My Github</a>.)
        </p>
        
      </section>
    </Layout>
  )
}