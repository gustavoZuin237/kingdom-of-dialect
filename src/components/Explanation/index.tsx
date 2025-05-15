import * as s from './styles'

interface ExplanationPropsI {
    level: number
}

export function Explanation({ level } : ExplanationPropsI) {
    return (
        <s.ExplanationContainer>
                    <s.ExplanationHeader>
                        { 
                            level == 1 ?
                                <>
                                    <h2>Apresentações em Inglês</h2>

                                    <p>Ao se apresentar em inglês, siga uma estrutura simples:</p>

                                    <blockquote>"Hi, my name is (seu nome). I am from (seu país). I like (hobby/interesse)."</blockquote>
                                </> 

                            : level == 2 ?
                                <></>
                            
                            : level == 3 ?
                                <></>

                            : level == 4 ?
                                <></>
                            
                            : level == 5 ?
                                <></>
                            
                            : <></>
                        }
                    </s.ExplanationHeader>

                    <s.ExplanationMain>
                        <h2>Verbos Básicos</h2>

                        <p>Os verbos básicos ajudam a descrever ações e estados. Aqui estão alguns essenciais:</p>

                        <ul>
                            <li>To be (ser/estar) → "I am a student." (Eu sou um estudante.)</li>
                            <li>To have (ter) → "She has a book." (Ela tem um livro.)</li>
                            <li>To like (gostar) → "They like music." (Eles gostam de música.)</li>
                        </ul>
                    </s.ExplanationMain>

                    <s.ExplanationFooter>
                        <p>Aprender esses verbos e como se apresentar corretamente ajudará na comunicação básica em inglês!</p>
                    </s.ExplanationFooter>
        </s.ExplanationContainer>
    )
}