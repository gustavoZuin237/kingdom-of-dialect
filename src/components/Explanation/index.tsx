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
                                <>
                                    <h2>Animais em Inglês</h2>
                                    <p>Os animais são uma parte essencial do vocabulário em inglês. Conhecer seus nomes e algumascaracterísticas básicas ajuda na comunicação diária.</p>
                                </>
                            
                            : level == 3 ?
                                <>

                                </>

                            : level == 4 ?
                                <>

                                </>
                            
                            : level == 5 ?
                                <>
                                
                                </>
                            
                            : <></>
                        }
                    </s.ExplanationHeader>

                    <s.ExplanationMain>
                        { 
                            level == 1 ?
                                <>
                                    <h2>Verbos Básicos</h2>

                                    <p>Os verbos básicos ajudam a descrever ações e estados. Aqui estão alguns essenciais:</p>

                                    <ul>
                                        <li>To be (ser/estar) → "I am a student." (Eu sou um estudante.)</li>
                                        <li>To have (ter) → "She has a book." (Ela tem um livro.)</li>
                                        <li>To like (gostar) → "They like music." (Eles gostam de música.)</li>
                                    </ul>
                                </> 

                            : level == 2 ?
                                <>
                                    <h2>Exemplos Comuns</h2>
                                    <ul>
                                        <li><strong>Dog</strong> (cachorro) → "The dog is very friendly." (O cachorro é muito amigável.)</li>
                                        <li><strong>Cat</strong> (gato) → "Her cat loves to sleep." (O gato dela adora dormir.)</li>
                                        <li><strong>Bird</strong> (pássaro) → "That bird sings beautifully." (Aquele pássaro canta lindamente.)</li>
                                    </ul>

                                    <h2>Ações dos Animais</h2>
                                    <p>Além disso, usamos certos verbos para descrever ações dos animais:</p>
                                    <ul>
                                        <li><strong>To fly</strong> (voar) → "Eagles <em>fly</em> high in the sky." (Águias <em>voam</em> alto no céu.)</li>
                                        <li><strong>To swim</strong> (nadar) → "Dolphins <em>swim</em> fast." (Golfinhos <em>nadam</em> rápido.)</li>
                                        <li><strong>To run</strong> (correr) → "Cheetahs <em>run</em> very fast." (Guepardos <em>correm</em> muito rápido.)</li>
                                    </ul>
                                </>
                            
                            : level == 3 ?
                                <>
                                
                                </>

                            : level == 4 ?
                                <>
                                
                                </>
                            
                            : level == 5 ?
                                <>
                                
                                </>
                            
                            : <></>
                        }
                    </s.ExplanationMain>

                    <s.ExplanationFooter>
                        { 
                            level == 1 ?
                                <>
                                    <p>Aprender esses verbos e como se apresentar corretamente ajudará na comun básica em inglês!</p>
                                </> 

                            : level == 2 ?
                                <>
                                    <p>Aprender sobre os animais e suas ações tornará seu inglês mais natural e divertido!</p>
                                </>
                            
                            : level == 3 ?
                                <>

                                </>

                            : level == 4 ?
                                <>

                                </>
                            
                            : level == 5 ?
                                <>
                                
                                </>
                            
                            : <></>
                        }
                    </s.ExplanationFooter>
        </s.ExplanationContainer>
    )
}