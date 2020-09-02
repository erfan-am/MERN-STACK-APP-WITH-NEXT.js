import Document,{Head,Main,NextScript, Html} from 'next/document' 

 export class MyDocument extends Document {
    render(){
        return(
            <Html>
            <Head>
                <meta name="description" content="next maximilan mern stack" />
                <meta charSet="utf-8" />
                <meta name="veiwport" content="width=device-width" />
              
            </Head>
            <body>
                <Main/>
                <NextScript/>
            <style global jsx>{`
            *{
                box-sizing:border-box;
                margin:0;
                padding:0;
            }
            body{
                font-family:'Roboto',sans-serif;
                background-color:#333;
                width:100%;
                padding:10px
            }
            h1,h2,h3,a,li{
                
            }
            .center{
                text-align:center;
            }
            `}</style>
            </body>

        </Html>
        )
    }
}

export default MyDocument