import Head from 'next/head'


export default function Layout({title, keywords, description, children}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      {children}
    </div>
  )
}

Layout.defaultProps = {
  title: 'Adopt Uz | Find your missing pet',
  description: 'Find or adopt your pet in Uzbekistan',
  keywords: 'Pets, adoption, find missing pets in Uzbekistan, cat, dog, kindness'
}