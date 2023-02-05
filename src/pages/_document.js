import Document , { Html, Head, Main, NextScript } from 'next/document'

class MyDocuments extends Document {
  render(){
    return(
    <Html lang="en">
      <Head >

       <link 
          rel="preload"
          href='/fonts/Poppins-Black.ttf'
          as="font"
          classOrigin="anonymous"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>)
  }
  
}

export default MyDocuments;
