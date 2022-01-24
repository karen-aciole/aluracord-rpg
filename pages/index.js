function GlobalStyle() {
    return (
        <style global jsx>{`
            * {
                background: black;
            }
        `}

        </style>
    );
}

function Title(props) {
    const Tag = props.tag;
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                    ${Tag} {
                        color: red; 
                        font-size: 24px;
                        font-weight: 600;
                    }
                `}
                </style>
        </>
    );
}

// Component React
function HomePage() {
    //JSX 
    return ( 
        <div>
            <GlobalStyle>

            </GlobalStyle>
            <Title tag="h2">Roll your dices!</Title>
            <h2>Discord - Alura </h2>
        </div>
    )
  }
  
  export default HomePage