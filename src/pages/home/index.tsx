import { Button } from '../../components/Button'
import * as s from './styles'

export function Home() {
    return (
        <s.PageContainer>
            <s.RegisterLink to={"/register"}>
                <Button clickFunction={() => {}}>START</Button>
            </s.RegisterLink>
        </s.PageContainer>
    )
}